import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const apiKey = process.env.API_KEY;
const app = express();

app.use(cors());

app.get("/search/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    const data = await response.json();
    res.json(data);
    res.end();
  } catch (error) {
    res.status(500).send("Error al buscar series");
    res.end();
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
