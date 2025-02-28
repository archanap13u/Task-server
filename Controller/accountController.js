const Account = require('../Model/accountsmodel'); 

// Add an account
const addAccount = async (req, res) => {
    try {
        const { amount, category, bill, date } = req.body;

        if (!amount || !category) {
            return res.status(400).json({ success: false, message: 'Amount and category are required' });
        }

        const newAccount = new Account({
            amount,
            category,
            bill,
            date,
        });

        const savedAccount = await newAccount.save();
        res.status(201).json({ success: true, message: 'Account added successfully', data: savedAccount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Get all accounts
const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json({ success: true, data: accounts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Get a single account by ID
const getAccountById = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ success: false, message: 'Account not found' });
        }
        res.status(200).json({ success: true, data: account });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Update an account by ID
const updateAccount = async (req, res) => {
    try {
        const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAccount) {
            return res.status(404).json({ success: false, message: 'Account not found' });
        }
        res.status(200).json({ success: true, message: 'Account updated successfully', data: updatedAccount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Delete an account by ID
const deleteAccount = async (req, res) => {
    try {
        const deletedAccount = await Account.findByIdAndDelete(req.params.id);
        if (!deletedAccount) {
            return res.status(404).json({ success: false, message: 'Account not found' });
        }
        res.status(200).json({ success: true, message: 'Account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = { addAccount, getAccounts, getAccountById, updateAccount, deleteAccount };
