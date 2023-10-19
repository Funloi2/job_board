import express from "express";

import { deleteUser, getAllUser } from "./../Controlers/User.js";

const router = express.Router();

router.get("/", getAllUser);

router.delete("/user/:id", deleteUser);

export default router;
