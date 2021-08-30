const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, { useNewUrlParser: true,
                      useUnifiedTopology: true
                    })
                    .then(() => {
                      console.log("Connected to db");
                    })
                    .catch(err => {
                      console.log("Couldnt connect", err);
                      process.exit();
                    })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to register application." });
});

require("./app/routers/user.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});