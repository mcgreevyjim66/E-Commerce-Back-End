const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
console.log("calling app =express")
const app = express();
console.log("after app =express")
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


console.log("calling app.use(routes)")
app.use(routes);

// sync sequelize models to the database, then turn on the server
// turn on connection to db and server

console.log("calling sequelize.sync")
sequelize.sync({ force: false }).then(() => {
  console.log("calling app.listen")
  app.listen(PORT, () => console.log('Now listening'));
});


