const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const app = express();

const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all animals
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM animal", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    }
    );
});

//Route to get animal types
app.get("/api/get/types", (req, res) => {
    db.query("SELECT DISTINCT name FROM type", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    }
    );
});

// Route to get all animals by type
app.get("/api/getType/:type", (req, res) => {
    const type = req.params.type;
    db.query("SELECT animal.name, animal.latin_name, animal.active_time, animal.length_min, animal.length_max, animal.weight_min, animal.weight_max, animal.lifespan, animal.habitat, animal.diet, animal.image_link FROM animal JOIN type ON type.id = animal.animal_type WHERE type.name = ?", type, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
})

// Route to get one animal
app.get("/api/getId/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM animal WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})