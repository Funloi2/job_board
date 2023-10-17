import express from "express";

import { postUser } from "./../Controlers/Register.js";

const router = express.Router();

router.post("/", postUser);

export default router;
