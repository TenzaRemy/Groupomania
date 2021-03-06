import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log ( req.body ) ;


  try {

    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) { 
      return res.status(404).json({ message: "L'utilisateur n'existe pas" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);


    if (!isPasswordCorrect) return res.status(400).json({ message: "Données saisies incorrectes" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "4h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {

    res.status(500).json({ message: "erreur lors de la tentative de connexion" });

  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName , confirmPassword } = req.body;
  console.log ( req.body ) ;

  try {
    console.log ( password ) ;
    console.log ( confirmPassword ) ;


    const oldUser = await UserModal.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà" });

    }
    if ( password !== confirmPassword ) {

      return res.status(400).json({ message: "Les mots de passes ne correspondent pas" });

    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "4h" } );

    res.status(201).json({ result, token });

  } catch (error) {

    res.status(500).json({ message: "erreur lors de la tentative d'inscription" });
    console.log(error);

  }
};
