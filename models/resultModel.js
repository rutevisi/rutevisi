const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    result: {type: String},
    testname: {type: String}
},
{
    timestamps: true,
});

function modelAreadyDeclared() {
    try {
        const UserResult = mongoose.model('UserResult')
        module.exports = UserResult
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const UserResult = mongoose.model('UserResult', resultSchema);
    module.exports = UserResult;
}
