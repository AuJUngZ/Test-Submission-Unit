import express from "express";
import hotelRoutes from "./routes/hotelRoutes.js";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api", hotelRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
