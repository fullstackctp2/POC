require("dotenv").config();

const express = require("express");
const mongoose=require('mongoose');
const cors=require('cors');
const connectDB=require('./config/dbConn')
const app = express();

const port = process.env.PORT || 8002;

// Connect to MongoDB
connectDB();

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//cors middleware
app.use(
  cors({
    origin: "*",
  })
);

// Request Logger Middleware
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

const crudRouter=require('./routes/products/products')
const fetchApiRouter=require('./routes/fetchApi')
const filterDataRouter=require('./routes/filter-data')

app.use("/thirdParty", fetchApiRouter);
app.use("/product", crudRouter);
app.use('/filter',filterDataRouter)

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => console.log(`Server running on port, ${port}`));
});
