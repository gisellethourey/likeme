import express from 'express';
import cors from 'cors';
import { getAllPosts, addPost } from './src/controllers/posts.controllers.js';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Desafio LikeMe');
});

app.get('/posts', getAllPosts);
app.post('/posts', addPost);

app.listen(PORT,() =>{
    console.log(`Server on 🔥 http://localhost:${PORT}`)
})