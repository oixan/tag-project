var $ = require('../../node_modules/jquery/dist/jquery.min');

var viewEvent = require('./viewEvent');

// publiic function 
var initEvents = function( parent ){
    openCloseDropdownEvent( parent );
    closeTagsMenuListEvent( parent );
    closeTagsListEvent( parent );
    addTagsListActiveEvent( parent );
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
            if ( pos + 1 != $( parent ).children().first().children().length){
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


module.exports = {
            initEvents: initEvents,
}