const mongoose = require('mongoose');

const TripRecordSchema = new mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
    startLocation: String,
    endLocation: String,
    startTime: Date,
    endTime: Date,
    distanceCovered: Number
});

module.exports = mongoose.model('TripRecord', TripRecordSchema);
