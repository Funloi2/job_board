import express from "express";

import { getAdvertisementById, getAllAdvertisement } from "./../Controlers/Advertisement.js";

const router = express.Router();

router.get('/', getAllAdvertisement);
router.get('/advertisement/:id',getAdvertisementById);

export default router;