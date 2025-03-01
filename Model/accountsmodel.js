const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    amount: {
        type: String,
    
    },
    category: {  
        type: String,
       
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
