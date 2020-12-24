const mongoose = require('mongoose');

const UjianSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    seotitle: {
        type: String,
        required: true
    },
    emojicon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
    },
    categories: {
        type: Array,
        required: true
    }
},
{
    timestamps: true,
});

function modelAreadyDeclared() {
    try {
        const Ujian = mongoose.model('Ujian')
        module.exports = Ujian
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const Ujian = mongoose.model('Ujian', UjianSchema);
    module.exports = Ujian;
}