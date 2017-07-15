import { style } from '../style/style.css';

var $ = require('../../node_modules/jquery/dist/jquery.min');
var view = require('./render.view');
import { Tag } from './tag' ;

let tagList = [];
let tagListMenu = [];

let init = function ({ initialValue: initialValue = null, listTagMenu: listTagMenu ,options: options = null }){
    if ( initialValue ){
        objectToTag(initialValue);
    }
    view.render(tagList);
}

function objectToTag(_listTag){
    for( let tag of _listTag ){
        tagList.push(new Tag( tag.value, tag.colorBackground) );
    }
}

module.exports = {
        init: init
}

