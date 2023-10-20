import express from "express";

import {verifyLogin} from "../Controlers/Login.js";

const router = express.Router();

router.post("/", verifyLogin);

export default router;
