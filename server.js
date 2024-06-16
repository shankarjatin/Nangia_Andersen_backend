const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/candidates', require('./routes/candidates'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// mongodb+srv://shankarjatin1005:nYdr2TsoY4NXfCnm@cluster0.subvhvu.mongodb.net/sociopedia