require('dotenv').config();
const express = require('express');
const connectDB = require('./api/app/config/db'); 
//const authRoutes = require('./src/api/routes/auth.routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();
//app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Manager Registration API 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});