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
var addSingleTagListActiveEvent = function ( parent, tag){
    var buttonAddTag = $( parent ).find('.tagProjectButtonAdd')[0];
    $( tag ).click(function(e) {
        var newTagActive = $(e.currentTarget).clone().first();
        $(newTagActive).insertBefore(buttonAddTag);
        deletetagFromMenuList( e.currentTarget );

        closeSingleTagListEvent( parent, newTagActive );
        editSingleTagEditDropdownEvent( newTagActive );
        $(document).trigger("click");
        e.stopPropagation();
                
    });
}

var closeSingleTagMenuEvent = function ( tag ){
    $( tag ).find('.fa').click(
        function (e){
            var tagInMenuList = e.target.parentElement;
            deletetagFromMenuList( tagInMenuList );
            e.stopPropagation();
        }
    );
}

var closeSingleTagListEvent = function ( parent, tag ){
    
    var closeButton = $(tag).find('.fa')[0];
    $( closeButton ).click(function(e) {
        // Remove tag on click 
        var tagInList = e.target.parentElement;
        var newTagMenu = $(tagInList).clone().first();
        deletetagFromMenuList( tagInList );

        // Add tag from active list from menu list
        var listMenuTags = $( parent ).find('.tagProjectDropdown')[0];
        $( listMenuTags ).append( newTagMenu );
        closeSingleTagMenuEvent( newTagMenu );
        addSingleTagListActiveEvent( parent, newTagMenu );
        $(document).trigger( 'click' );
        e.stopPropagation();
    });
}

var editSingleTagEditDropdownEvent = function ( tag ){
    $(tag).click( 
        function(e) {
            var position = $(e.currentTarget).position();
            var menuListActive = e.currentTarget.parentElement;
            $(menuListActive).children().map(
                function (pos, el){
                    if ( pos + 1 < $( menuListActive ).children().length - 1){
                        $(el).removeClass('selected');
                    }
                }
            );
            $(menuListActive).find('.tagProjectEditInput').val( $( e.currentTarget).text() );
            $(e.currentTarget).addClass('selected');
            $(menuListActive).find('.tagProjectEditTagDropdown').first().addClass('active')
                                                                        .css({"left": position.left + 'px' , "top": position.top + 30 + "px"});
            e.stopPropagation();
        }
    );
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
        editSingleTagEditDropdownEvent: editSingleTagEditDropdownEvent,
}