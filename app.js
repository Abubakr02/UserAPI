const express = require ('express');
const bcrypt = require ('bcrypt');
const { sequelize, User } = require ('./db');

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    // console.log(username, password, hash);
    await User.create({ username, passwordHash });
    res.sendStatus(201);
});

function verifyUser(req, res, next) {
    const usernamePassword = String(Buffer.from(base64, "base64"));
}

module.exports = app;