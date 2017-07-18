var $ = require('../../node_modules/jquery/dist/jquery.min');

var viewEvent = require('./viewEvent');

// publiic function 
var initEvents = function( parent, eventsUser ){
    openCloseDropdownEvent( parent );
    closeTagsMenuListEvent( parent, eventsUser );
    closeTagsListEvent( parent, eventsUser );
    addTagsListActiveEvent( parent, eventsUser );
    editTagsDropdownEvent( parent );
    closeEditDropdownEvent( parent ); 
    updateValueTagEvent( parent, eventsUser );
    changeColorTagEvent( parent, eventsUser );
    addInputTagKeyEvent( parent, eventsUser );
}
 
// private function 
function openCloseDropdownEvent( parent ){

    // open event dropdown tag
    var liButtonAddTag = $( parent ).find('.tagProjectButtonAdd');
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

}

function closeEditDropdownEvent( parent ){

    // close event dropdown tag
    $(document).click(function (e) {
        e.stopPropagation();
        var editDropdown = $( parent ).find('.tagProjectEditTagDropdown');

        //check if the clicked area is dropdown or not
        if ( $(editDropdown).has(e.target).length === 0 ) {
            $(editDropdown).removeClass('active');
        }
    })

}

function closeTagsMenuListEvent( parent, eventsUser ){
    $( parent ).find('.tagProjectDropdown li').map(
        function (pos, el){
            viewEvent.closeSingleTagMenuEvent(el, eventsUser);
        }
    );
}   

function closeTagsListEvent( parent, eventsUser ){
    $( parent ).children().first().children().map(
        function (pos, el){
            if ( pos + 1 < $( parent ).children().first().children().length - 1){
                viewEvent.closeSingleTagListEvent(parent, el, eventsUser);
            }
        }
    );
}  

function addTagsListActiveEvent( parent, eventsUser ){
    $( parent ).find('.tagProjectDropdown li').map(
         function (pos, el){
            viewEvent.addSingleTagListActiveEvent(parent, el, eventsUser);
        }
    );
}

function editTagsDropdownEvent( parent ){
    $(parent).children().first().children().map(
        function(pos, el){
            if ( pos + 1 < $( parent ).children().first().children().length - 1){
                viewEvent.editSingleTagEditDropdownEvent( el );
            }
        }
    );
}

function updateValueTagEvent( parent, eventsUser ){
    $( parent ).find('.tagProjectEditInput').keyup(function(e){
        if(e.keyCode == 13)
        {   
            //$(parent).find('.selected').first().text( e.target.value );
            $(parent).find('.selected')[0].childNodes[0].nodeValue =  e.target.value;
            $(document).trigger( "click" );
            setTimeout( x => {
            if ( eventsUser && eventsUser.events && eventsUser.events.editTagActiveListEvent )
                eventsUser.events.editTagActiveListEvent({value: 'editTagActiveListEvent'});
            }, 200);
        }
    });
}

function changeColorTagEvent( parent, eventsUser ){
    $(parent).find('.tagProjectContent li').map(
        function(pos, el){
            $(el).click(
                function (e){
                    $(parent).find('.selected').removeAttr( 'style' ).attr('class', $(e.currentTarget).attr("class") + ' selected' );
                    $(document).trigger("click");
                    setTimeout( x => {
                    if ( eventsUser && eventsUser.events && eventsUser.events.editTagActiveListEvent )
                        eventsUser.events.editTagActiveListEvent({value: 'editTagActiveListEvent'});
                    }, 200);
                }
            );
        }
    );
}

function addInputTagKeyEvent ( parent, eventsUser ){
    $(parent).find(".tagProjectDropdown" ).children().first().keyup(function (e){
                                                                                    if (e.keyCode === 13) {
                                                                                        viewEvent.addTagMenuList(parent, {value: e.target.value }, eventsUser);
                                                                                        e.target.value = '';
                                                                                    }
                                                                                });;
}

module.exports = {
            initEvents: initEvents,
}