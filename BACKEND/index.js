import express from 'express'
import "dotenv/config"
import "./configDB/connectDB.js"
import productRouter from './routes/product.route.js';
import userRouter from './routes/user.route.js';
import specialPriceProductUserRouter from './routes/specialpriceproduct.route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza localhost:5173 con el dominio de tu frontend
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/api/v1', productRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', specialPriceProductUserRouter);

// app.get('/', (req, res) => {
//     res.json({ ok: true });
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Funcionando ... ✨✨ http://localhost:" + PORT));