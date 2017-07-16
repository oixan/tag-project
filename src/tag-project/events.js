var $ = require('../../node_modules/jquery/dist/jquery.min');
var view = require('./view');

// publiic function 
var initEvents = function( parent ){
    openCloseDropdownEvent( parent );
    closeTagMenuListEvent( parent );
    closeTagListEvent( parent );
    addTagListActiveEvent( parent );
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

function closeTagMenuListEvent( parent ){
    $( parent ).find('.tagProjectDropdown .fa').map(
        function (pos, el){
            $( el ).click(function(e) {
                var tagInMenuList = e.target.parentElement;
                view.deletetagFromMenuList( tagInMenuList );
                e.stopPropagation();
            });
        }
    );
}   

function closeTagListEvent( parent ){
    $( parent ).children().first().children().map(
        function (pos, el){
            if ( pos + 1 != $( parent ).children().first().children().length){
                var newTagMenu = $(el).clone().first();
                var closeButton = $(el).find('.fa')[0];
                $( closeButton ).click(function(e) {
                    // Remove tag on click 
                    var tagInList = e.target.parentElement;
                    view.deletetagFromMenuList( tagInList );

                    // Add tag from active list from menu list
                    var listMenuTags = $( parent ).find('.tagProjectDropdown')[0];
                    $( listMenuTags ).append( newTagMenu );
                    closeTagMenuListEvent( parent );
                    addTagListActiveEvent( parent );
                    e.stopPropagation();
                });
                
            }
        }
    );
}  

function addTagListActiveEvent( parent ){
    var buttonAddTag = $( parent ).find('.tagProjectButtonAdd')[0];
    $( parent ).find('.tagProjectDropdown li').map(
         function (pos, el){
            $( el ).click(function(e) {
                var newTagActive = $(el).clone().first();
                $(newTagActive).insertBefore(buttonAddTag);
                view.deletetagFromMenuList( el );

                closeTagListEvent( parent );
                e.stopPropagation();
            });
        }
    );
}

module.exports = {
            initEvents: initEvents
}