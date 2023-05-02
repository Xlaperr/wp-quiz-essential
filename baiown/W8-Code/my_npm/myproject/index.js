const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.ip);
  console.log(req.method);
  console.log(req.body);
  res.send("อยากกินไอติมชีสเค้กมะม่วง");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
