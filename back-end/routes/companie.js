import express from "express";

import { getCompanieByAd } from "./../Controlers/Companies.js";
import {sessionChecker} from "../sessionChecker.js";

const router = express.Router();

router.get("/:id", getCompanieByAd);

router.get('/', sessionChecker, async function(req,
                                               res, next) {
    res.redirect('/account');
});

export default router;
