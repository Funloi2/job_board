import express from "express";


import {sessionChecker} from "../sessionChecker.js";

import {
    getCompanieByAd,
    getAllCompanie,
    createCompanie,
    getCompanieById,
    updateCompanie,
    deleteCompanie
  } from "./../Controlers/Companies.js";


const router = express.Router();

router.get("/", getAllCompanie);
router.get("/:id", getCompanieByAd);


router.get('/', sessionChecker, async function(req,
                                               res, next) {
    res.redirect('/account');
});

router.post("/", createCompanie);
router.get("/company/:id", getCompanieById);
router.put("/company/:id", updateCompanie);
router.delete("/company/:id", deleteCompanie);

export default router;
