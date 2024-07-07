import { Router } from 'express';
import { getAllPosts, addPost, updatePostById, deletePostById, incrementLikesById } from '../src/controllers/posts.controllers.js';

const router = Router();

router.get('/posts', getAllPosts);
router.post('/posts', addPost);
router.put('/posts/:id', updatePostById);
router.delete('/posts/:id', deletePostById);
router.put('/posts/like/:id', incrementLikesById);

export default router;
