const { Router } = require('express');
const router = Router();
const { registerUser, loginUser, getCurrentUser, updateUser } = require('../controllers/members.controllers');
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/current', protect, getCurrentUser)
router.put('/current', protect, updateUser)

module.exports = router;