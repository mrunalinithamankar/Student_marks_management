const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sgpaSchema = new Schema({

    srn : {

        type = String,
        required = true
    },
    sem1 : {

        type = Number
    },
    sem2 : {

        type = Number
    },
    sem3 : {

        type = Number
    },
    sem4 : {

        type = Number
    },
    sem5 : {

        type = Number
    },
    sem6 : {

        type = Number
    }
})

const sgpa = mongoose.model('sgpa', sgpaSchema);
module.exports = sgpa;
