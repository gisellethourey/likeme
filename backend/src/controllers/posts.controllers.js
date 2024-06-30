import { getPosts, createPost } from '../models/posts.models.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

export const addPost = async (req, res) => {
    try {
        const post = {
            titulo: req.body.titulo,
            img: req.body.img, 
            descripcion: req.body.descripcion
        };
        await createPost(post.titulo, post.img, post.descripcion);
        res.status(201).json({ message: 'Post created' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};