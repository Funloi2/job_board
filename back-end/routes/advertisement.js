import express from "express";

import { getAllAdvertissment } from "./../Controlers/Advertisement.js";
import { getAdvertisementById } from "./../Controlers/Advertisement.js";
const router = express.Router();

router.get('/', getAllAdvertissment);
router.get('/:id',getAdvertisementById);

export default router;