const memberCtrl = {};

const Member = require('../models/Member');

memberCtrl.getMembers = async (req, res) => {
    const members = await Member.find();
    res.json(members);
}
memberCtrl.createMember = async (req, res) => {
    const { fullName, email, password } = req.body;
    const newMember = new Member({
        fullName: fullName,
        email: email,
        password: password
    });
    await newMember.save();
    res.json('Member created')
}

memberCtrl.getMember = (req, res) => res.json({ message: 'Members available:' })

memberCtrl.updateMember = (req, res) => res.json({ message: 'Member Updated' })

memberCtrl.deleteMember = async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)
    res.json('Member deleted')
}

module.exports = memberCtrl;