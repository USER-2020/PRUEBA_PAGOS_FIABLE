import express from 'express'
import "dotenv/config"
import "./configDB/connectDB.js"
import productRouter from './routes/product.route.js';

const app = express();

app.use('/api/v1', productRouter);

// app.get('/', (req, res) => {
//     res.json({ ok: true });
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Funcionando ... ✨✨ http://localhost:" + PORT));