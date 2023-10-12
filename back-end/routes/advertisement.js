import express from "express";

import { getAdvertisementById, getAllAdvertissment } from "./../Controlers/Advertisement.js";

const router = express.Router();

router.get('/', getAllAdvertissment);
router.get('/advertisement/:id',getAdvertisementById);

export default router;