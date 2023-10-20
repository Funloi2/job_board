import express from "express";
import { advertisementRoutes } from "./index.js";
import { companieRoutes } from "./index.js";
import { registerRoutes } from "./index.js";
import { loginRoutes } from "./index.js";
const app = express();
import cors from 'cors';
import session from "express-session";


app.use(cors({ credentials: true, origin: 'http://localhost:3001' })); // Configuration de CORS avec prise en charge des credentials
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    name: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1h

    }
}));




app.use('/advertisement', advertisementRoutes);
app.use('/companie', companieRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

export default app;
