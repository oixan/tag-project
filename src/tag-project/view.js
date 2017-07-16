var $ = require('../../node_modules/jquery/dist/jquery.min');

var initView = function(parent, listTagsActive, listMenuTags){
    addUlList(parent);
    addTagButton(parent);
    addMenuTag(parent);
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

    for (let tag of listTags)
        $("<li " + ( tag.colorBackground? " style=background-color:'" + tag.colorBackground + "'": '' ) +  ">"  + tag.value +
                        "<i class='fa fa-times' aria-hidden='true'></i> </li>").insertBefore(ulLastElement);
}

var loadListMenuTags = function (parent, listTags){
    if ( !listTags ) return; 
    var dropdown;
    if ( dropdown = $(parent).find('.tagProjectDropdown')[0]  ){
        for (let tag of listTags)
            $(dropdown).append("<li style=background-color:" + tag.colorBackground +  ">" + tag.value +
                                    "<i class='fa fa-times' aria-hidden='true'></i> </li>");

    }
}

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
     $(liButtonAddTag).append("<ul class='tagProjectDropdown active'>");
}

module.exports = {
        initView: initView,
        loadListsTags: loadListsTags,
        loadListTagsActive: loadListTagsActive,
        loadListMenuTags: loadListMenuTags,
}

/*


var render = function (_listTag, _listMenuTag){
    // search tagProject div container and add tag
    $(document).ready(function() { 
        $("[data-tagProject='tag']").map(
                            function(i, el){
                                var ul = $(el).append($("<ul>")).find('ul');
                                for (let tag of _listTag)
                                    ul.append("<li " + ( tag.colorBackground? " style=background-color:'" + tag.colorBackground + "'": '' ) +  ">"  + tag.value +
                                                    "<i class='fa fa-times' aria-hidden='true'></i> </li>");

                                addTagButton(ul, _listTag);
                            })
    });                 
}


    // open event dropdown tag
    $( liButtonAddTag ).click(function(e) {
        var dropdown = $(liButtonAddTag).find( $('.tagProjectDropdown') )[0];
        $(dropdown).addClass("active");
        e.stopPropagation();
    });

    // close event dropdown tag
    $(document).click(function (e) {
        e.stopPropagation();
        var dropdown = $(liButtonAddTag).find( $('.tagProjectDropdown') )[0];

        //check if the clicked area is dropdown or not
        if ( $(dropdown).has(e.target).length === 0 ) {
            $(dropdown).removeClass('active');
        }
    })

*/