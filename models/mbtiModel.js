const mongoose = require('mongoose');

const mbtiQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    indicator: {
        type: String,
        required: true
    },
    flip: {
        type: Boolean,
    }
},
{
    timestamps: true,
});

function modelAreadyDeclared() {
    try {
        const MBTIQuestion = mongoose.model('MBTIQuestion')
        module.exports = MBTIQuestion// it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const MBTIQuestion = mongoose.model('MBTIQuestion', mbtiQuestionSchema);
    module.exports = MBTIQuestion;
}