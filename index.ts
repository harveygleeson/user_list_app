import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { readFile } from "fs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// User data from local JSON
let user_data: Array<Object> = [];
readFile("./data/user_data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  user_data = JSON.parse(data);
});

app.get("/users", (req: Request, res: Response) => {
  res.send(user_data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
