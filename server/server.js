const express = require("express");
const apiRoutes = require("./routes");
const app = express();
app.use(express.json());
app.use("/api/employee", apiRoutes);
app.listen(process.env.PORT || "3600", () => {
  console.log("Serever is running on the port 3600");
  //   console.log("Serever is running on the port: ${process.env.PORT || '4000'}");
});
