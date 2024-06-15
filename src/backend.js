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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmEyMDNlYjUxODQ1NmI2N2UwNGNkNjNlZmVmYjc3YyIsInN1YiI6IjY2NmRmYWU0MzhkYTBjNGI3NDBmOGUzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o8RfxPhJ2o_4gjUJgU1nq-6uentTvSV1wZnbxfpzc34",
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
