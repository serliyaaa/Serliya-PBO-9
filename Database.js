import express from "expressmy";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config(); import dotenv from 'dotenv';
dotenv.config(); // Memuat konfigurasi dari .env


const app = express();

app.use(session({
  secret : process.env.SESS_SECRE,
  resave : false,
  saveUninitialized: true,
  cookie:{
    secure: "auto"
  }
  
}));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

