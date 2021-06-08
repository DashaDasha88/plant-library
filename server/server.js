require("dotenv").config();
const express = require("express");

const app = express();

//GET all plants
app.get("/plants", (req, res) => {
  console.log("all plants");

  res.status(200).json({

  })
})

//GET a specific plant
app.get("/plants/:id", (req, res) => {

  res.status(200).json({

  })
})

//POST a plant
app.post("/plants", (req, res) => {

  res.status(201).json({

  })
})

//UPDATE a plant
app.put("/plants/:id", (req, res) => {

  res.status(200).json({

  })
})

//DELETE a plant
app.delete("/plants/:id", (req, res) => {

  res.status(204).json({

  })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai - server is listening on ${port}`)
});