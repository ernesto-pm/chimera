const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const VisitSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    from: {
        type: String
    },
    urlVisited: {
        type: String
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Visit',VisitSchema);