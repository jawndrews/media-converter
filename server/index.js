import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./routes/main.js";

/* config */
dotenv.config();
const app = express();
app.use(express.json());

/* routes */
app.use("/", mainRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
