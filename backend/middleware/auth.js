import jwt from "jsonwebtoken";
import dotenv from "dotenv" ;
dotenv.config() ;

const secret = process.env.TOKEN;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];  
    const decodedToken = jwt.verify(token, secret); 
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
        throw new Error('Utilisateur non autorisé');
    } else {
      next();
    }
  } catch {res.status(401).json({error: new Error('Invalid request!')});
  }
};

export default auth;