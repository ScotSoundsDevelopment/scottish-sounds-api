import express from "express";
import cors from "cors";

const port = 8080
const app = express();

app.use(cors({origin: process.env.LOCAL_CLIENT_URL}))

app.use(express.json())

app.use("/test", (req, res) => {
    res.json({status: "ok"});
});

app.listen(port, () => console.log(`API started on port ${port}`));

