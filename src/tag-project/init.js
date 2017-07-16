
// Third parts library
var $ = require('../../node_modules/jquery/dist/jquery.min');

// My library
var events = require('./events');
var core = require('./core');

function init(listTagsActive, listMenuTags, parent){
    core.initLists(listTagsActive,listMenuTags,parent);
    events.init(parent);
}

module.exports = {
        init: init,
        fn: core,
}
