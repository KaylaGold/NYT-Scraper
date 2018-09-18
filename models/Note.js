let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Noteschema = new Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	}
});

let Note = mongoose.model("Note", Noteschema);
module.exports = Note;