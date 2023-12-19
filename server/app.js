require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);



//database connection
mongoose.connect('mongodb://127.0.0.1/DailyPlanner');

//schema 

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserModel = new mongoose.model("User", UserSchema);

var corsOption = {
    origin: "http://localhost:3000",
    credentials: true,
}


app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

app.use(bodyParser.json())

app.use(cors(corsOption))

app.post('/register', (req, res) => {

    const { username, password } = req.body;

    var passwordHash = bcrypt.hashSync(password, salt);

    const user = new UserModel({
        username: username,
        password: passwordHash
    });
    
    (async function () {
        try {
            const user = await user.save();
            if (user.username = username) {
                res.status(200).json({ loginState: true, username: user.username })
            }
        } catch (error) {
            console.log("This is the error: ", error.message);
            res.status(200).json({ loginState: false });
        }
    })();
})
app.listen('4000', () => {
    console.log("App running on server 4k");
})