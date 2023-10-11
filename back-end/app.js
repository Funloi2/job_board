import  express  from "express";
import { advertisementRoutes } from "./index.js";
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/advertisement', advertisementRoutes)

export default app;