
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registerUser = async (req, res) => {
    const { firstName, lastName, username, email, mobileNumber, password, address, postalCode, role } = req.body;
    try {
        const userExists = await User.findOne({ email }, {username});
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = await User.create({ firstName, lastName, username, email, mobileNumber, password, address, postalCode, role: 'user'  });
        res.status(201).json({ id: user.id, firstName: user.firstName, username: user.username, email: user.email, role: user.role, token: generateToken(user.id, user.role) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne ({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({ id: user.id, firstName: user.firstName, lastName: user.lastName, username: user.username, email: user.email, role: user.role, token: generateToken(user.id, user.role) });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        address: user.address,
        postalCode: user.postalCode,
        role: user.role,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const { firstName, lastName, username, email, mobileNumber, address, postalCode } = req.body;
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.username = username || user.username;
        user.email = email || user.email;
        user.mobileNumber = mobileNumber || user.mobileNumber;
        user.address = address || user.address;
        user.postalCode = postalCode || user.postalCode;

        const updatedUser = await user.save();
        res.json({ id: updatedUser.id, firstName: updatedUser.firstName, lastName: updatedUser.lastName, username: updatedUser.username, email: updatedUser.email, mobileNumber: updatedUser.mobileNumber, address: updatedUser.address, postalCode: updatedUser.postalCode, role: updatedUser.role, token: generateToken(updatedUser.id, updatedUser.role) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser, updateUserProfile, getProfile };
