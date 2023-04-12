const mongoose = require('mongoose');
const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
    console.log("Connection to the database")
}).catch((e) => {
    console.log(e);
});