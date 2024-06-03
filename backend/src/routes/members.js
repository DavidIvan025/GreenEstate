const {Router} = require('express');
const router = Router();
const { getMembers, getMember, updateMember, deleteMember, createMember } = require('../controllers/members.controllers');

router.route('/')
.get(getMembers)
.post(createMember)

router.route('/:id')
.get(getMember)
.put(updateMember)
.delete(deleteMember)

module.exports = router;