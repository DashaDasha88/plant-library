require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json()); //middleware

//GET all plants
app.get("/plants", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM plants");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        plants: results.rows,
      }
    })

  } catch (err) {
    console.log(err);
  }

});

//GET a specific plant
app.get("/plants/:id", async (req, res) => {

  try {

    const results = await db.query("SELECT * FROM plants where id=$1",
      [req.params.id]
    )

    res.status(200).json({
      status: "success",
      data: {
        plants: results.rows[0],
      }

    });

  } catch (err) {
    console.log(err);
  }

});

//POST a plant
app.post("/plants", async (req, res) => {

  try {
    const results = await db.query(
      "INSERT INTO plants (name, genus_species, description) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.genus_species, req.body.description]
    );

    res.status(201).json({
      status: "success",
      data: {
        plants: results.rows[0],
      }
    });

  } catch (err) {
    console.log(err);
  }

});

//UPDATE a plant
app.put("/plants/:id", async (req, res) => {

  try {
    const results = await db.query(
      "UPDATE plants SET name=$1, genus_species=$2, description=$3, WHERE id=$5 returning *",
      [req.body.name, req.body.genus_species, req.body.description, req.params.id],
    );

    res.status(200).json({
      status: "success",
      data: {
        plants: results.rows[0],
      }
    });

  } catch (err) {
    console.log(err);
  }

});

//DELETE a plant
app.delete("/plants/:id", async (req, res) => {

  try {
    const results = await db.query("DELETE FROM plants WHERE id=$1",
    [req.params.id],
    )

    res.status(204).json({
      status: "success",
    })

  } catch (err) {
    console.log(err);
  }

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai - server is listening on ${port}`)
});