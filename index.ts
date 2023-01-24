import express, { Express, Request, Response } from "express";
import { readFile } from "fs";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());

type Company = {
  name: string;
  department: string;
};

type UserData = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: Company;
  skills: Array<string>;
};

// User data from local JSON
let user_data: Array<UserData> = [];
let usernames: Array<UserData> = [];

readFile("./data/user_data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  user_data = JSON.parse(data);
  getNames(user_data);
});

// Function that can check if fields are present
const getNames = (arr: Array<UserData>) => {
  console.log("Arr:", arr.length);
  usernames = arr.filter((user) => {
    return (
      user.hasOwnProperty("first_name") && user.hasOwnProperty("last_name")
    );
  });
  console.log("UN:", usernames.length);
};

app.get("/user_data", (req: Request, res: Response) => {
  res.send(user_data);
});

app.get("/users", (req: Request, res: Response) => {
  res.send(usernames);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
