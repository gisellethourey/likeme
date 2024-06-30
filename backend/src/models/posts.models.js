import pool from '../../database/config.js';

export const getPosts = async () => {
    const SQLquery= {text: 'SELECT * FROM posts'};
    const result= await pool.query(SQLquery);
    return result.rows;
}
export const createPost = async (titulo, img, descripcion) => {
    const SQLquery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)',
        values: [titulo, img, descripcion],
    };
    await pool.query(SQLquery);
};