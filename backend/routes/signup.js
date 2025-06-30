const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const app = require('express');

router.get("/",(req, res)=>{
  res.send({status:1,msg:"Signup Api"})
})

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, course, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Email already registered' });

    const newUser = new User({ firstName, lastName, email, phone, course, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
