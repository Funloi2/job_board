import express from "express";

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
router.post("/", createCompanie);
router.get("/company/:id", getCompanieById);
router.put("/company/:id", updateCompanie);
router.delete("/company/:id", deleteCompanie);
export default router;
