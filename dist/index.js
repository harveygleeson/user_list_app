"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use((0, cors_1.default)());
// User data from local JSON
let user_data = [];
let usernames = [];
(0, fs_1.readFile)("./data/user_data.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    user_data = JSON.parse(data);
    getNames(user_data);
});
// Function that can check if fields are present
const getNames = (arr) => {
    console.log("Arr:", arr.length);
    usernames = arr.filter((user) => {
        return (user.hasOwnProperty("first_name") && user.hasOwnProperty("last_name"));
    });
    console.log("UN:", usernames.length);
};
app.get("/user_data", (req, res) => {
    res.send(user_data);
});
app.get("/users", (req, res) => {
    res.send(usernames);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
