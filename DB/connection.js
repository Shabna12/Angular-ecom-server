const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then((res) => {
    console.log("style guru server connected with Mongodb");
}).catch((err) => {
    console.log("DB connection failed");
    console.log(err);
})