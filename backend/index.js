import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv" ;

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config() ;
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL ;

mongoose.connect ( CONNECTION_URL  , {
  useNewUrlParser : true ,
  useUnifiedTopology : true
}).then( () => {
  console.log( "Connexion réussi ! Vous êtes à présent en relation avec la base de données" ) ;
}).catch( ( err ) => console.log ( err.message ) ) ;

app.use(cors());

app.use ( "/posts" ,  postRoutes ) ;
app.use("/user", userRouter);

app.listen ( PORT , ( req , res ) => {
  console.log ( "Le server est sur le port " , PORT ) ;
}) ;
