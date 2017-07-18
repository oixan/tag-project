
// Third parts library
var $ = require('../../node_modules/jquery/dist/jquery.min');

// My library
var events = require('./events');
var core = require('./core');

function init(listTagsActive, listMenuTags, parent, eventsUser = {} ){
    core.initLists(listTagsActive,listMenuTags,parent);
    events.initEvents(parent, eventsUser);
}

module.exports = {
        init: init,
        fn: core,
}
