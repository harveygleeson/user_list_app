"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
// Function that isolates usernames from user data array
const getNames = (arr) => {
    const usernameArray = arr.map((_a) => {
        var { avatar, email, emailVerified, dob, company, skills } = _a, keepAttrs = __rest(_a, ["avatar", "email", "emailVerified", "dob", "company", "skills"]);
        return keepAttrs;
    });
    return usernameArray;
};
// Function that isolates user data for one user from user data array
const getData = (arr, id) => {
    const singleUserData = arr.find((x) => x.id === +id);
    return singleUserData;
};
// Read local data, all data stored in user_data
(0, fs_1.readFile)("./data/user_data.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    user_data = JSON.parse(data);
});
// URL for usernames and ids
app.get("/usernames", (req, res) => {
    usernames = getNames(user_data);
    res.send(usernames);
});
// URL for single user data by id
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    const userData = getData(user_data, userId);
    res.send(userData);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
