import express from "express";
import cors from "cors";
import exerciseRoutes from "./routes/exerciseRoutes.js";

const port = 8080
const app = express();

const allowedOrigins = [process.env.LOCAL_CLIENT_URL,
        process.env.CLIENT_URL].filter((origin) : origin is string => Boolean(origin))
app.use(cors({
    origin: allowedOrigins
}))

app.use(express.json())

app.use("/api/v1/exercises", exerciseRoutes);

app.use("/test", (req, res) => {
    res.json({status: "ok"});
});

app.listen(port, () => console.log(`API started on port ${port}`));

console.log("prod in Azure")