const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
	testname: {
		type: String,
	},
	testresult: {
		type: String,
	},
	testdate: {
		type: Date,
		default: Date.now()
	},
	testlink: {
		type: String
	}
});

const UserSchema = new Schema({
	fullname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8
	},
	role: {
		type: String,
		default: 'Pengguna'
	},
	testHistory: {
		type: [resultSchema],
		sparse: true
	},
	user_photo: { 
		type: String,
		default: ''
	}
	},
{
  	timestamps: true,
});

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('UserSchema')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  module.exports = UserSchema;
}