import express from "express";
import {sessionChecker} from "./../sessionChecker.js";
import { getAllAdvertissment } from "./../Controlers/Advertisement.js";
import { getAdvertisementById } from "./../Controlers/Advertisement.js";
const router = express.Router();

router.get("/", getAllAdvertissment);
router.get("/:id", getAdvertisementById);

router.get('/', sessionChecker, async function(req,
                                               res, next) {
    res.redirect('/account');
});

export default router;
