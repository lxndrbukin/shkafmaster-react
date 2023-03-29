const express = require('express');

const app = express();

require('./routes/catalog')(app);

const PORT = 5000;
app.listen(PORT, () => console.log('Server is running on port', PORT));
