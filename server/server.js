const express = require("express");

const app = express();

const port = process.env.DEFAULT_PORT || 3006;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
