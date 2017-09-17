const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const VisitSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    visitedURL: {
        type: String,
        required: true
    },
    wasFrontend: {
        type: Boolean,
        required: true,
        default: false
    },
    geoip : {
        type: Object,
        required: false,
        default: {}
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Visit',VisitSchema);