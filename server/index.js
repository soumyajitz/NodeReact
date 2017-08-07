const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes');
mongoose.connect(keys.mongoURI);

require('./models/User');
require('./services/passport');

const app = express();
authRoutes(app); //require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running at PORT: 5000");
});

