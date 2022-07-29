import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv" ;
import helmet from 'helmet';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config() ;
app.use(express.json());
app.use(helmet());
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
