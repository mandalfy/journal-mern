const mongoose = require("mongoose"),
      cors = require("cors"),
      express = require("express"),
      keys = require("./keys"),
      app = express();

const API_PORT = process.env.PORT || 5000;
const dbURI = `mongodb+srv://${keys.username}:${keys.password}@cluster0.wybrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const journalSchema = new mongoose.Schema({
    tags: Array,
    title: String,
    body: String,
    created: { type: Date, default: Date.now }
});
app.get('/test',async(req, res) =>{
        res.send({status: 200});
})

const Journal = mongoose.model("journal", journalSchema);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
