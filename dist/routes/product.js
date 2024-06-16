import express from 'express';
import { newProduct } from '../controllers/product.js';
import { singleUpload } from '../middlewares/multer.js';
import { adminOnly } from '../middlewares/auth.js';
const app = express.Router();
// route - api/v1/product/new
app.post('/new', adminOnly, singleUpload, newProduct);
app.get('/lates');
export default app;
