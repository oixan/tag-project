var $ = require('../../node_modules/jquery/dist/jquery.min');
var view = require('./view');

// publiic function 
var initEvents = function( parent ){
    openCloseDropdownEvent( parent );
    closeTagMenuListEvent( parent );
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

module.exports = {
            initEvents: initEvents
}