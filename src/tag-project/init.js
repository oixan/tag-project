
// Third parts library
var $ = require('../../node_modules/jquery/dist/jquery.min');

// My library
var events = require('./events');
var core = require('./core');

function init({ listTagsActive = {}, listMenuTags = {}, tagContainer = {}, eventsUser = {} } ){
    core.initLists(listTagsActive,listMenuTags,tagContainer);
    events.initEvents(tagContainer, eventsUser);
}

module.exports = {
        init: init,
        fn: core,
}
