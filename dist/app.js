import express from 'express';
connectDB();
// routes 
// user routes 
import userRoute from './routes/user.js';
import productRoute from './routes/product.js';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
const PORT = 4000;
const app = express();
app.use(express.json());
//using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use('/uploads', express.static("uploads"));
app.use(errorMiddleware);
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
