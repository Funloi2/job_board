import  express  from "express";
import { advertisementRoutes } from "./index.js";
import { companieRoutes } from "./index.js";
import { registerRoutes } from "./index.js";
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/advertisement', advertisementRoutes)
app.use('/companie' ,companieRoutes)
app.use('/register' , registerRoutes)


export default app;