const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// db connection settings
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('db connected');
});

// Models routes
require('./Category');
require('./Recipe');