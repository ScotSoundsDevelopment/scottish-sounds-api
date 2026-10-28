import express from "express";

const port = 8080
const app = express();

app.use(express.json())

app.use("/test", (req, res) => {
    res.json({status: "ok"});
});

app.listen(port, () => console.log(`API started on port ${port}`));

