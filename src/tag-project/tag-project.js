// require("../style/style.css");

var $ = require('../../node_modules/jquery/dist/jquery.min');
var view = require('./render.view');
import { Tag } from './tag' ;

let tagList = [];

let init = function ({ initialValue: initialValue = null, options: options = null }){
    if ( initialValue ){
        objectToTag(initialValue);
    }
    view.render(tagList);
}

function objectToTag(_listTag){
    for( let tag of _listTag ){
        tagList.push(new Tag( tag.value, tag.color) );
    }
}

module.exports = {
        init: init
}

