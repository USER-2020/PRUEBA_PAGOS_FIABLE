import express from 'express'
import "dotenv/config"
import "./configDB/connectDB.js"
import productRouter from './routes/product.route.js';
import userRouter from './routes/user.route.js';
import specialPriceProductUserRouter from './routes/specialpriceproduct.route.js';

const app = express();
app.use(express.json());
app.use('/api/v1', productRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', specialPriceProductUserRouter);

// app.get('/', (req, res) => {
//     res.json({ ok: true });
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Funcionando ... ✨✨ http://localhost:" + PORT));