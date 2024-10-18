const express = require('express');
const router = express.Router();
const Slide = require('../models/Slide');
const { authenticateToken } = require('../middleware/auth');

// Create Slide
router.post('/', authenticateToken, async (req, res) => {
  const slide = new Slide({
    title: req.body.title,
    subtitle: req.body.subtitle,
    image: req.body.image,
    notes: req.body.notes,
    user: req.user.userId
  });
  try {
    await slide.save();
    res.status(201).send('Slide created');
  } catch {
    res.status(500).send('Error creating slide');
  }
});

// Read Slides
router.get('/', authenticateToken, async (req, res) => {
  try {
    const slides = await Slide.find({ user: req.user.userId });
    res.status(200).json(slides);
  } catch {
    res.status(500).send('Error fetching slides');
  }
});

module.exports = router;
