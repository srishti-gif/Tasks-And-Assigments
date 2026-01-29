const express = require("express");
const bookRoutes = require("./routes");

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
