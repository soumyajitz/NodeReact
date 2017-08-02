const express = require('express');
const authRoutes = require('./routes/authRoutes');

require('./services/passport');

const app = express();
authRoutes(app); //require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running at PORT: 5000");
});

