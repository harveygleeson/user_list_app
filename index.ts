import express, { Express, Request, Response } from "express";
import { readFile } from "fs";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());

type UserData = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: {
    name: string;
    department: string;
  };
  skills: Array<string>;
};

type Username = {
  id: number;
  first_name: string;
  last_name: string;
};

// User data from local JSON
let user_data: Array<UserData> = [];
let usernames: Array<Username> = [];

// Function that isolates usernames from user data array
const getNames = (arr: Array<UserData>) => {
  const usernameArray = arr.map(
    ({ avatar, email, emailVerified, dob, company, skills, ...keepAttrs }) =>
      keepAttrs
  );
  return usernameArray;
};

// Function that isolates user data for one user from user data array
const getData = (arr: Array<UserData>, id: string) => {
  const singleUserData = arr.find((x) => x.id === +id);
  return singleUserData;
};

// Read local data, all data stored in user_data
readFile("./data/user_data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  user_data = JSON.parse(data);
});

// URL for usernames and ids
app.get("/usernames", (req: Request, res: Response) => {
  usernames = getNames(user_data);
  res.send(usernames);
});

// URL for single user data by id
app.get("/user/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData = getData(user_data, userId);
  res.send(userData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
