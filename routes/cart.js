const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// Get user cart
router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.product');
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add to cart
router.post('/', protect, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.user._id);

    const existingItemIndex = user.cart.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingItemIndex > -1) {
      user.cart[existingItemIndex].quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    const populatedUser = await User.findById(req.user._id).populate('cart.product');
    res.json(populatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update cart item quantity
router.put('/:productId', protect, async (req, res) => {
  try {
    const { quantity } = req.body;
    const user = await User.findById(req.user._id);

    const itemIndex = user.cart.findIndex(
      (item) => item.product.toString() === req.params.productId
    );

    if (itemIndex > -1) {
      user.cart[itemIndex].quantity = quantity;
      await user.save();
      const populatedUser = await User.findById(req.user._id).populate('cart.product');
      res.json(populatedUser.cart);
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove from cart
router.delete('/:productId', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.cart = user.cart.filter(
      (item) => item.product.toString() !== req.params.productId
    );
    await user.save();
    const populatedUser = await User.findById(req.user._id).populate('cart.product');
    res.json(populatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;