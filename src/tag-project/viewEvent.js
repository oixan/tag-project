var $ = require('../../node_modules/jquery/dist/jquery.min');

var addTagMenuList = function  addTagMenuList( parent, tag ){
    var dropdown = $(parent).find('.tagProjectDropdown')[0];

    if ( tag.backgroundCSS )
        tag.colorBackground = '';
    else
        tag.colorBackground = ( tag.colorBackground? tag.colorBackground : '#03A9F4' ) ;

    
    $(dropdown).first().first().children().first().after("<li style=background-color:" + tag.colorBackground +  " class='" + (tag.backgroundCSS?tag.backgroundCSS:'') + "' >"
                                                                + tag.value + "<i class='fa fa-times' aria-hidden='true'></i> </li>");
    addSingleTagListActiveEvent( parent, $(dropdown).first().first().children().get(1) );        
    closeSingleTagMenuEvent( $(dropdown).first().first().children().get(1) );                                                   
}

// single element event
var addSingleTagListActiveEvent = function addSingleTagListActiveEvent( parent, tag){
    var buttonAddTag = $( parent ).find('.tagProjectButtonAdd')[0];
    $( tag ).click(function(e) {
        var newTagActive = $(e.currentTarget).clone().first();
        $(newTagActive).insertBefore(buttonAddTag);
        deletetagFromMenuList( e.currentTarget );

        closeSingleTagListEvent( parent, newTagActive );
        $(document).trigger("click");
        e.stopPropagation();
                
    });
}

var closeSingleTagMenuEvent = function closeSingleTagMenuEvent( tag ){
    $( tag ).find('.fa').click(
        function (e){
            var tagInMenuList = e.target.parentElement;
            deletetagFromMenuList( tagInMenuList );
            e.stopPropagation();
        }
    );
}

var closeSingleTagListEvent = function closeSingleTagListEvent( parent, tag ){
    var newTagMenu = $(tag).clone().first();
    var closeButton = $(tag).find('.fa')[0];
    $( closeButton ).click(function(e) {
        // Remove tag on click 
        var tagInList = e.target.parentElement;
        deletetagFromMenuList( tagInList );

        // Add tag from active list from menu list
        var listMenuTags = $( parent ).find('.tagProjectDropdown')[0];
        $( listMenuTags ).append( newTagMenu );
        closeSingleTagMenuEvent( newTagMenu );
        addSingleTagListActiveEvent( parent, newTagMenu );
        e.stopPropagation();
    });
}


var deletetagFromMenuList = function( element ){
    $(element).remove();
}


module.exports = {
        addTagMenuList: addTagMenuList,
        addSingleTagListActiveEvent: addSingleTagListActiveEvent,
        deletetagFromMenuList: deletetagFromMenuList,
        closeSingleTagListEvent: closeSingleTagListEvent,
        closeSingleTagMenuEvent: closeSingleTagMenuEvent,
}