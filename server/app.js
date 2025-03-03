// app.js
const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const roleRoutes = require('./routes/roleRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const auditlogRoutes = require('./routes/auditlogRoutes');
const userRoutes = require('./routes/userRoutes'); // User routes ekledik

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/roles', roleRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auditlogs', auditlogRoutes);
app.use('/api/users', userRoutes); // User routes ekledik

// Veritabanı bağlantısını test et
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

// Sunucu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
