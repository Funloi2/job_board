import  express  from "express";
import { advertisementRoutes } from "./index.js";
import { companieRoutes } from "./index.js";
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/advertisement', advertisementRoutes)
app.use('/companie' ,companieRoutes)


export default app;