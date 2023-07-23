import express from "express";
import studentController from "../controllers/studenrController.js";
const router = express.Router();

router.get("/student", studentController.getAllDoc);

export default router;
