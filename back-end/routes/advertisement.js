import express from "express";

import { getAllAdvertissment } from "./../Controlers/Advertisement.js";

const router = express.Router();

router.get('/', getAllAdvertissment);

export default router;