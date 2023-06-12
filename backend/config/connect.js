// 1
const mongoose = require('mongoose');
// 2
mongoose.connect( 'mongodb+srv://admin:admin@cluster0.9gcsd.mongodb.net/?retryWrites=true&w=majority/hero' )
    .then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        ()=>{
            console.log('error in connection');
        }
    )

// 3
module.exports = mongoose;