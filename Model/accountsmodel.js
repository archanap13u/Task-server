const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    amount: {
        type: String,
    
    },
    category: {  
        type: String,
       
    },
    bill: {
        type: String,
    },
    date: {
        type: Date,
    },
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
