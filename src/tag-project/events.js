var $ = require('../../node_modules/jquery/dist/jquery.min');

var viewEvent = require('./viewEvent');

// publiic function 
var initEvents = function( parent ){
    openCloseDropdownEvent( parent );
    closeTagsMenuListEvent( parent );
    closeTagsListEvent( parent );
    addTagsListActiveEvent( parent );
    editTagsDropdownEvent( parent );
    closeEditDropdownEvent( parent );
    updateValueTagEvent( parent );
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

function closeTagsMenuListEvent( parent ){
    $( parent ).find('.tagProjectDropdown li').map(
        function (pos, el){
            viewEvent.closeSingleTagMenuEvent(el);
        }
    );
}   

function closeTagsListEvent( parent ){
    $( parent ).children().first().children().map(
        function (pos, el){
            if ( pos + 1 < $( parent ).children().first().children().length - 1){
                viewEvent.closeSingleTagListEvent(parent, el);
            }
        }
    );
}  

function addTagsListActiveEvent( parent ){
    $( parent ).find('.tagProjectDropdown li').map(
         function (pos, el){
            viewEvent.addSingleTagListActiveEvent(parent, el);
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

function updateValueTagEvent( parent ){
    $( parent ).find('.tagProjectEditInput').keyup(function(e){
        if(e.keyCode == 13)
        {   
            //$(parent).find('.selected').first().text( e.target.value );
            $(parent).find('.selected')[0].childNodes[0].nodeValue =  e.target.value;
            $(document).trigger( "click" );
        }
    });
}

module.exports = {
            initEvents: initEvents,
}