import hotelRoutes from "./hotelRoutes.js";
import { Router } from "express";

const router = Router();

router.use("", hotelRoutes);

export default router;
