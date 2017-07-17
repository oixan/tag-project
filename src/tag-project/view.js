var $ = require('../../node_modules/jquery/dist/jquery.min');

var viewEvent = require('./viewEvent');
var colors = require('./color');

// public function
var initView = function(parent, listTagsActive, listMenuTags){
    addUlList(parent);
    addTagButton(parent);
    addMenuTag(parent);
    addTagInputMenuTag(parent);
    addTagEditDropdown(parent);
    loadListsTags(parent, listTagsActive, listMenuTags)
}

var loadListsTags = function (parent, listTagsActive, listMenuTags){
    loadListTagsActive(parent, listTagsActive);
    loadListMenuTags(parent, listMenuTags);
}

var loadListTagsActive = function (parent, listTags){
    if ( !listTags ) return; 
    var ulLastElement;
    if ( !( ulLastElement = $(parent).find('ul .tagProjectButtonAdd')[0] ) )
            ulLastElement = addUlList();

    for (let tag of listTags){
        if ( tag.backgroundCSS )
            tag.colorBackground = '';
        else
            tag.colorBackground = ( tag.colorBackground? tag.colorBackground : '#03A9F4' ) ;

        $("<li style=background-color:" + tag.colorBackground +  " class='" + (tag.backgroundCSS?tag.backgroundCSS:'') + "' >"   + tag.value +
                        "<i class='fa fa-times' aria-hidden='true'></i> </li>").insertBefore(ulLastElement);
    }
}

var loadListMenuTags = function (parent, listTags){
    if ( !listTags ) return; 
    var dropdown;
    if ( dropdown = $(parent).find('.tagProjectDropdown')[0]  ){
        for (let tag of listTags){
            if ( tag.backgroundCSS )
                tag.colorBackground = '';
            else
                tag.colorBackground = ( tag.colorBackground? tag.colorBackground : '#03A9F4' ) ;

            $(dropdown).append("<li style=background-color:" + tag.colorBackground +  " class='" + (tag.backgroundCSS?tag.backgroundCSS:'') + "' >"
                                    + tag.value + "<i class='fa fa-times' aria-hidden='true'></i> </li>");
        }
    }
}

// internal function
function addUlList( parent ){
    $(parent).append($("<ul>"));
    var ul =$(parent).find('ul')[0]
    return ul;
}

function addTagButton( parent ){
    // Add the button tag 
    var ul = $(parent).find("ul")[0];
    $(ul).append(
        $("<li class='tagProjectButtonAdd'>").append(
            $("<button class='tagProjectButton'>").append(
                    $("<span>").append(
                        $("<i class='fa fa-tag' aria-hidden='true'></i>")
                    )
            )
        )
    );
}

function addMenuTag( parent ){
     var liButtonAddTag = $(parent).find('.tagProjectButtonAdd')[0];
     $(liButtonAddTag).append("<ul class='tagProjectDropdown'>");
}

function addTagInputMenuTag( parent ){
    var listMenuTag = $(parent).find('.tagProjectDropdown')[0];
    $(listMenuTag).prepend('<input>').children().first().prop("placeholder",'Add Tag').keyup(function (e) {
                                                                                                if (e.keyCode === 13) {
                                                                                                    viewEvent.addTagMenuList(parent, {value: e.target.value });
                                                                                                    e.target.value = '';
                                                                                                }
                                                                                            });;
}

function addTagEditDropdown( parent ){
    $(parent).children().first().append("<div class='tagProjectEditTagDropdown'>").find(".tagProjectEditTagDropdown")
                                .append("<div class='tagProjectTitle'>")
                                .append("<div class='tagProjectContent'>");
    addContentTagEditDropdown( parent );
}

function addContentTagEditDropdown( parent ){   
    $(parent).find('.tagProjectContent').append("<input class='tagProjectEditInput' placeholder='Edit Tag'>")
                                        .append("<ul>");
    var ul = $(parent).find('.tagProjectContent ul');    
    for( var color of colors.listColors){
        $(ul).append("<li class='" + color + "'>")
    }                          
}

module.exports = {
        initView: initView,
        loadListsTags: loadListsTags,
        loadListTagsActive: loadListTagsActive,
        loadListMenuTags: loadListMenuTags,
}
