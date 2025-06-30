const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const app = require('express');


router.get("/",(req, res)=>{
  res.send({status:1,msg:"login Api"})
})
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: 'User not found' });

    // Check password (for production, hash check should be used)
    if (user.password !== password)
      return res.status(401).json({ success: false, message: 'Incorrect password' });

    return res.status(200).json({ success: true, message: 'Login successful' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});






module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcrypt');

// // Login route (sets HTTP-only session cookie)
// router.post('/', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }

//     // Check password with bcrypt
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }

//     // Set session
//     req.session.userId = user._id; // Session stored in MongoDB via connect-mongo
//     return res.status(200).json({ 
//       success: true, 
//       message: 'Login successful',
//       user: { id: user._id, email: user.email }
//     });

//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // Logout route (destroys session)
// router.post('/logout', (req, res) => {
//   try {
//     req.session.destroy();
//     res.clearCookie('connect.sid'); // Adjust based on your session cookie name
//     res.status(200).json({ success: true, message: 'Logout successful' });
//   } catch (error) {
//     console.error('Logout error:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // Session check route
// router.get('/check', (req, res) => {
//   try {
//     if (req.session.userId) {
//       res.json({ 
//         success: true, 
//         isAuthenticated: true,
//         user: { id: req.session.userId } 
//       });
//     } else {
//       res.status(401).json({ 
//         success: false, 
//         isAuthenticated: false,
//         message: 'Not authenticated' 
//       });
//     }
//   } catch (error) {
//     console.error('Session check error:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// module.exports = router;