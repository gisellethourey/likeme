import { getPosts, createPost, updatePost, deletePost, incrementLikes} from '../models/posts.models.js';

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


export const updatePostById = async (req, res) => {
    const { id } = req.params;
    const { titulo, img, descripcion } = req.body;
  
    if (!titulo || !descripcion) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
  
    try {
      await updatePost(id, titulo, img, descripcion);
      res.status(200).json({ message: 'Post updated' });
    } catch (error) {
      console.error(`Error updating post with ID ${id}:`, error);
      res.status(500).json({ error: `Error updating post with ID ${id}` });
    }
  };
  
  export const deletePostById = async (req, res) => {
    const { id } = req.params;
  
    try {
      await deletePost(id);
      res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
      res.status(500).json({ error: `Error deleting post with ID ${id}` });
    }
  };
  
  export const incrementLikesById = async (req, res) => {
    const { id } = req.params;
  
    try {
      await incrementLikes(id);
      res.status(200).json({ message: 'Likes incremented' });
    } catch (error) {
      console.error(`Error incrementing likes for post with ID ${id}:`, error);
      res.status(500).json({ error: `Error incrementing likes for post with ID ${id}` });
    }
  };