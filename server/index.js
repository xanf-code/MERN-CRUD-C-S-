const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const data = require('./models/CRUD');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://darshanaswath:darshan123@cluster0.ctb0u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.post("/post", async (req, res) => {

    const studentName = req.body.studentName;
    const studentAddress = req.body.studentAddress;
    const studentCollege = req.body.studentCollege;
    const studentUSN = req.body.studentUSN;
    const date = req.body.date;

    const studData = new data({
        Name: studentName,
        Address: studentAddress,
        College: studentCollege,
        USN: studentUSN,
        date: date,
    });
    try {
        await studData.save();
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/read", async (req, res) => {
    data.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("server running :)")
});