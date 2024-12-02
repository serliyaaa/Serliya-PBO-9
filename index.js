import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from 'dotenv';

dotenv.config(); // Memuat konfigurasi dari .env jika ada

const app = express(); // Inisialisasi aplikasi Express
const PORT = process.env.APP_PORT || 3000; // Gunakan port dari .env atau default 3000

// Middleware
app.use(express.json()); // Parsing JSON
app.use(cors()); // Aktifkan CORS
app.use(session({ 
    secret: "your_secret_key", 
    resave: false, 
    saveUninitialized: true 
})); // Konfigurasi session

// Rute Dasar
app.get("/", (req, res) => {
    res.send("Server berjalan dengan baik");
});

// Rute Tambahan
app.delete('/users/me', (req, res) => {
    res.status(200).json({ message: "User deleted successfully." });
});

app.post('/Login', (req, res) => {
    const { email, password } = req.body;

    // Logika autentikasi sederhana
    if (email === "serliya2701@gmail.com" && password === "12345") {
        res.status(200).json({ 
            message: "Login successful", 
            email 
        });
    } else {
        res.status(401).json({ 
            message: "Invalid email or password" 
        });
    }
});

app.delete('/logout', (req, res) => {
    res.status(200).json({ message: "Logged out successfully" });
});

// Jalankan Server
app.listen(PORT, () => {
    console.log("Server up and running....");
});
