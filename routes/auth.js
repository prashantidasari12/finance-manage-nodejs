const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Registration
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('the hashed password is: ', hashedPassword);
        const user = new User({username, password: hashedPassword});
        console.log('the user is: ', user);
        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Registration failed'});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        if (!user) {
            return res.status(401).json({error: 'Authentication failed'});
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed'});
        }
        const token = jwt.sign({userId: user._id}, 'finance-app', {
            expiresIn: '1h'
        });
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ error: 'Login Failed'});
    }
});

module.exports = router;