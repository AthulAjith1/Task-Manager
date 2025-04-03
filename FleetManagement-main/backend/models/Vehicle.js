const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    registrationNumber: { type: String, required: true, unique: true },
    brand: String,
    model: String,
    year: Number,
    status: { type: String, enum: ['Available', 'In Use', 'Maintenance'], default: 'Available' }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
