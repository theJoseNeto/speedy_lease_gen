const express = require("express");
const session = require('express-session');
const flash = require("express-flash")
const app = express();
const connection = require("./database/index.database");
const routes = require("./routes/index.routes");
const { join } = require('path');

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(routes);






connection.authenticate()
  .then(() => {

    app.listen(3333, () => console.log("Bom todo."))

  })
  .catch((e) => console.error("tudo errado:", e))

