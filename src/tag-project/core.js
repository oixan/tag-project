
// Third parts library
var $ = require('../../node_modules/jquery/dist/jquery.min');

// My library
var view = require('./view');

// public methods
let initLists = function (listTagsActive, listMenuTags, parent ){
    view.initView(parent);
    initListTagsActive(listTagsActive,parent);
    initListMenuTags(listMenuTags,parent);
}

let initListTagsActive = function (listTagsActive, parent){
    if ( listTagsActive ){
        view.loadListTagsActive(parent, listTagsActive['listTagsActive']);
    }
}

let initListMenuTags = function (listTagMenu, parent){
    if ( listTagMenu ){
        view.loadListMenuTags(parent, listTagMenu['listTagMenu']);
    }
    
}

module.exports = {
        initLists: initLists,
        initListMenuTags: initListMenuTags,
        initListTagsActive: initListTagsActive,
}