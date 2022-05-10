// Imports
const express = require("express");
var cors = require('cors')

//
const v1ClientRouter = require("./v1/routes/clientRoutes");
// End Imports
const app = express();

// Propierties
const PORT = process.env.PORT || 3000;



var corsOptions = { // use if is requiered in the project
  origin: "http://localhost:8081" // host allow origin specific
};

 // end Propierties

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/v1/clients", v1ClientRouter);




app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});