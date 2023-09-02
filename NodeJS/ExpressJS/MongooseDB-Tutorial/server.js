import express from "express";
import bodyParser from "body-parser";
import Routes from "./routes";

const app = express();
const port = 3000;

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true})); //for parsing application/x-www-form-urlencoded

Routes(app);

app.listen(port, () => {
    console.log("The server is running on Port: " + port)
});

