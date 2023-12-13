import express from "express";

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("This is mongoose app")
})

app.listen(port, () => {
    console.log(`server listen on server ${port}`);
})
