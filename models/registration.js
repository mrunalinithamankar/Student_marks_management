const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');

const registrationSchema = new Schema({

    name : {

        type : String,
        //required : true
    },
    srn : {

        type : String,
        required : true
    },
    sem : {

        type : Number,
        //required : true
    },
    email : {

        type : String,
        //required : true
    },
    password : {

        type : String,
        required : true
    },
    sem1 : {

        type : Number
    },
    sem2 : {

        type : Number
    },
    sem3 : {

        type : Number
    },
    sem4 : {

        type : Number
    },
    sem5 : {

        type : Number
    },
    totalsgpa : {

        type : Number
    }
});

// registrationSchema.pre("save", async function(next) {

//     console.log(`the current password is ${this.password}`);
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(`the current password is ${this.password}`);
//     next();
// });

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;  
