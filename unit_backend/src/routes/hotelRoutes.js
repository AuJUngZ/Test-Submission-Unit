import { Router } from "express";
import {
  CreateHotel,
  ListHotel,
  SearchHotel,
  DashboardHotel,
} from "../controllers/hotelControllers.js";

const router = Router();

router.post("/create/hotel", CreateHotel);
router.get("/listhotel/", ListHotel);
router.get("/listhotel/:id", ListHotel);
router.post("/search/hotel", SearchHotel);
router.get("/dashboard/hotel", DashboardHotel);

export default router;
