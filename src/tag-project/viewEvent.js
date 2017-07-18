var $ = require('../../node_modules/jquery/dist/jquery.min');

var addTagMenuList = function  addTagMenuList( parent, tag, eventsUser ){
    var dropdown = $(parent).find('.tagProjectDropdown')[0];

    if ( tag.backgroundCSS )
        tag.colorBackground = '';
    else
        tag.colorBackground = ( tag.colorBackground? tag.colorBackground : '#03A9F4' ) ;

    
    $(dropdown).first().first().children().first().after("<li style=background-color:" + tag.colorBackground +  " class='" + (tag.backgroundCSS?tag.backgroundCSS:'') + "' >"
                                                                + tag.value + "<i class='fa fa-times' aria-hidden='true'></i> </li>");
    var newTagActive = $(dropdown).first().first().children().get(1);
    addSingleTagListActiveEvent( parent, newTagActive, eventsUser );        
    closeSingleTagMenuEvent( newTagActive, eventsUser );   
    setTimeout( x => {
        if ( eventsUser && eventsUser.events && eventsUser.events.addTagMenuListEvent )
            eventsUser.events.addTagMenuListEvent( tagToObject(newTagActive) );
    }, 200);                                      
}

// single element event
var addSingleTagListActiveEvent = function ( parent, tag, eventsUser){
    var buttonAddTag = $( parent ).find('.tagProjectButtonAdd')[0];
    $( tag ).click(function(e) {
        var newTagActive = $(e.currentTarget).clone().first();
        $(newTagActive).insertBefore(buttonAddTag);
        deletetagFromMenuList( e.currentTarget );

        closeSingleTagListEvent( parent, newTagActive, eventsUser );
        editSingleTagEditDropdownEvent( newTagActive );
        $(document).trigger("click");
        setTimeout( x => {
            if ( eventsUser && eventsUser.events && eventsUser.events.addTagActiveListEvent )
                eventsUser.events.addTagActiveListEvent( tagToObject(newTagActive) );
        }, 200);
        e.stopPropagation();
                
    });
}

var closeSingleTagMenuEvent = function ( tag, eventsUser ){
    $( tag ).find('.fa').click(
        function (e){
            var tagInMenuList = e.target.parentElement;
            deletetagFromMenuList( tagInMenuList );
            setTimeout( x => {
                if ( eventsUser && eventsUser.events && eventsUser.events.deleteTagMenuListEvent )
                    eventsUser.events.deleteTagMenuListEvent( tagToObject(tag) );
            }, 200);            
            e.stopPropagation();
        }
    );
}

var closeSingleTagListEvent = function ( parent, tag, eventsUser ){
    
    var closeButton = $(tag).find('.fa')[0];
    $( closeButton ).click(function(e) {
        // Remove tag on click 
        var tagInList = e.target.parentElement;
        var newTagMenu = $(tagInList).clone().first();
        deletetagFromMenuList( tagInList );

        // Add tag from active list from menu list
        var listMenuTags = $( parent ).find('.tagProjectDropdown')[0];
        $( listMenuTags ).append( newTagMenu );
        closeSingleTagMenuEvent( newTagMenu, eventsUser );
        addSingleTagListActiveEvent( parent, newTagMenu, eventsUser );
        $(document).trigger( 'click' );
        setTimeout( x => {
            if ( eventsUser && eventsUser.events && eventsUser.events.deleteTagActiveListEvent )
                eventsUser.events.deleteTagActiveListEvent( tagToObject(newTagMenu) );
        }, 200);
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

function tagToObject( tag ){
    var value
    if ( tag[0] )
        value = tag[0].childNodes[0].nodeValue;
    else   
        value = tag.childNodes[0].nodeValue;
    var colorBackground = ( $(tag).attr('style')?rgb2hex($(tag).attr('style')): '' );
    colorBackground = colorBackground.replace('background-color:','');
    var backgroundCSS = $(tag).attr('class');
    backgroundCSS = backgroundCSS.replace('selected','');

    return { value: value, colorBackground: colorBackground, backgroundCSS: backgroundCSS };
}

function rgb2hex(orig){
    var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
}

module.exports = {
        addTagMenuList: addTagMenuList,
        addSingleTagListActiveEvent: addSingleTagListActiveEvent,
        deletetagFromMenuList: deletetagFromMenuList,
        closeSingleTagListEvent: closeSingleTagListEvent,
        closeSingleTagMenuEvent: closeSingleTagMenuEvent,
        editSingleTagEditDropdownEvent: editSingleTagEditDropdownEvent,
        tagToObject: tagToObject,
}