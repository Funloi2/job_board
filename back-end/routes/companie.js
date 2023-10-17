import express from "express";

import { getCompanieByAd } from "./../Controlers/Companies.js";

const router = express.Router();

router.get("/:id", getCompanieByAd);

export default router;
