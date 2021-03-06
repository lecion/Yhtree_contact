/**
 * Created by andycall on 15/4/9.
 */

var mongoose = require('mongoose');
var config = require('../config');


mongoose.connect(config.db, function(err) {
    if(err) {
        console.error('connect to %s error', config.db, err.message);
        process.exit(1);
    }
});

require('./phone');
require('./relative');
require('./place');

exports.Relative = mongoose.model('Relative');
exports.Phone = mongoose.model('Phone');
exports.Place = mongoose.model('Place');