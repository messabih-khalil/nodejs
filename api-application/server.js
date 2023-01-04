const app = require("./app");
const env = require("dotenv");
console.log(app.get("env"));

env.config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log("Listen on port 8000");
});
