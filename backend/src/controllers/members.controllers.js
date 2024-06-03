const memberCtrl = {};

const Member = require('../models/Member');

memberCtrl.getMembers = async (req, res) => {
    const members = await Member.find();
    res.json(members);
}
memberCtrl.createMember = async (req, res) => {
    const {fullName} = req.body;
    const newMember = new Member({fullName});
    await newMember.save();
    res.json('Member created')
}

memberCtrl.getMember = (req, res) => res.json({message: ''})

memberCtrl.updateMember = (req, res) => res.json({message: 'Member Updated'})

memberCtrl.deleteMember = async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)
    res.json('Member deleted')
}

module.exports = userCtrl;