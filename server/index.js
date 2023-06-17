import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./routes/main.js";

/* config */
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* routes */
app.use("/", mainRoutes);

app.get("/");

app.post("/yt/mp3", async (req, res) => {});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
