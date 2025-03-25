import express from "express";
import { apiRoutes } from "./routers/index.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api/v1", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
