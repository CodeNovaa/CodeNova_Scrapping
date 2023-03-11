const express = require("express");
const cors=require('cors')

const codeforces = require("./routes/codeforces_router.js");
const leetcode = require("./routes/leetcode_router.js");
const gitrouter = require("./routes/github_router.js");
const codechef = require("./routes/codechef_router.js");

const app = express();
app.use(cors())
///routers

//middlewares
app.use(express.json());

//Routes

app.use("/api/v1/codeforces", codeforces);
app.use("/api/v1/codechef", codechef);
app.use("/api/v1/leetcode", leetcode);
app.use("/api/v1/github", gitrouter);

app.listen(8080, () => {
  console.log("server started on 8080");
});
