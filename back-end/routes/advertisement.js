import express from "express";
import { getAllAdvertissment } from "./../Controlers/Advertisement.js";
import { getAdvertisementById } from "./../Controlers/Advertisement.js";

import {
  getAllAdvertissment,
  getAdvertisementById,
  getAdvertisementByCom,
  createAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
} from "./../Controlers/Advertisement.js";
const router = express.Router();

router.get("/", getAllAdvertissment);
router.get("/id/:id", getAdvertisementById);
router.get("/com/:idCom", getAdvertisementByCom);
router.post("/", createAdvertisement);
router.put("/id/:id", updateAdvertisement);
router.delete("/id/:id", deleteAdvertisement);

router.get('/', sessionChecker, async function(req,
                                               res, next) {
    res.redirect('/account');
});

export default router;
