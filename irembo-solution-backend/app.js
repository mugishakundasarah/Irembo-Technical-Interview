const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const businessRoutes = require("./routes/business")
const errorHandler = require('./middlewares/ErrorHandler'); 
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3200; // Specify the port you want to use, or use a default like 3000


mongoose.connect(process?.env?.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(bodyParser.json());


app.use(businessRoutes)

// Error handling middleware (must be defined after routes)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
