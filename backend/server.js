const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes (✅ Fixed the space issue in the path)
// app.use('/api/signup', require('./routes/signup'));
// app.use('/api/login', require('./routes/login'));

app.get("/",(req, res)=>{
  res.send({status:1,msg:"Home Page Api"})
})

app.use('/api/signup', require('./routes/signup'));
app.use('/api/login', require('./routes/login'))

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
