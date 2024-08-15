const mongoose = require("mongoose");

const sclassSchema = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true,
    },
    sclassFee: {
        type: Number,
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
}, { timestamps: true });

module.exports = mongoose.model("sclass", sclassSchema);

