const mongoose = require("mongoose"),
        cors = require("cors"),
        express = require("express"),
        keys = require("./keys"),
        app = express();


const API_PORT = process.env.PORT || 5000;
const dbURI = 'mongodb+srv:${keys.username}:${keys.password}@cluster0.wybrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
