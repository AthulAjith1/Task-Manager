const express = require('express');
const Vehicle = require('../models/Vehicle');
const router = express.Router();

// Create a new vehicle
router.post('/', async (req, res) => {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
});

// Get all vehicles
router.get('/', async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
});

// Update a vehicle
router.put('/:id', async (req, res) => {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vehicle);
});

// Delete a vehicle
router.delete('/:id', async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vehicle deleted' });
});

module.exports = router;
