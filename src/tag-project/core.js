
// Third parts library
var $ = require('../../node_modules/jquery/dist/jquery.min');

// My library
var view = require('./view');

// public methods
let initLists = function (listTagsActive, listMenuTags, parent ){
    initListTagsActive(listTagsActive,parent);
    initListMenuTags(listMenuTags,parent);
}

let initListTagsActive = function (listTagsActive, parent){
    if ( listTagsActive ){
        view.render(listTagsActive['listTagsActive']);
    }
}

let initListMenuTags = function (listTagMenu, parent){
    if ( listTagMenu ){
        view.render(listTagMenu['listTagMenu']);
    }
    
}

module.exports = {
        initLists: initLists,
        initListMenuTags: initListMenuTags,
        initListTagsActive: initListTagsActive,
}