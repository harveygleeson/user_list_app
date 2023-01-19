"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = require("fs");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// User data from local JSON
let user_data = [];
(0, fs_1.readFile)("./data/user_data.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    user_data = JSON.parse(data);
});
app.get("/users", (req, res) => {
    res.send(user_data);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
