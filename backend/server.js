import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Desafio LikeMe');
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server on 🔥 http://localhost:${PORT}`);
});
