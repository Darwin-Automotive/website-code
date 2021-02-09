const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

// app.use(app.router);
app.use(cors({ origin: true }));
app.use(express.json({ extended: false }));

app.use("/events/payments", require("./routes/payments"));

app.listen(port, () => console.log(`Server started on PORT ${port}`));

// module.exports = app.router;
