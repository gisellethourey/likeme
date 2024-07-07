import pool from '../../database/config.js';

export const getPosts = async () => {
    const SQLquery = { text: 'SELECT * FROM posts' };
    const result = await pool.query(SQLquery);
    return result.rows;
};

export const createPost = async (titulo, img, descripcion) => {
    const SQLquery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)',
        values: [titulo, img, descripcion],
    };
    await pool.query(SQLquery);
};

export const updatePost = (id, titulo, img, descripcion) => {
    const SQLquery = {
      text: 'UPDATE posts SET titulo = $1, img = $2, descripcion = $3 WHERE id = $4',
      values: [titulo, img, descripcion, id],
    };
    return pool.query(SQLquery);
  };
  
  export const deletePost = (id) => {
    const SQLquery = {
      text: 'DELETE FROM posts WHERE id = $1',
      values: [id],
    };
    return pool.query(SQLquery);
  };
  
  export const incrementLikes = (id) => {
    const SQLquery = {
      text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1',
      values: [id],
    };
    return pool.query(SQLquery);
  };