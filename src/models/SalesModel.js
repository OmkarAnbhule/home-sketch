const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    QuoteNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^Q-\d{4}$/ 
    },
    address: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactnumber: {
        type: String,
        required: true,
        match: /^\d{3}-\d{3}-\d{4}$/ 
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['inProgress', 'completed', 'onHold', 'notStarted'] // Restrict values
    },
    displayCenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DisplayCenter', 
        required: true
    }
});


export default mongoose.models?.sales || mongoose.model('sales', salesSchema);