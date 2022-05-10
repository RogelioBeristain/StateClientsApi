const express = require("express");

const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

//app.use("/api/v1", v1Router);
const v1ClientRouter = require("./v1/routes/clientRoutes");
app.use("/api/v1/clients", v1ClientRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});