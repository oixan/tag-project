var $ = require('../../node_modules/jquery/dist/jquery.min');

var render = function (_listTag, _listMenuTag){
    $(document).ready(function() { 
        $("[data-tagProject='tag']").map(
                            function(i, el){
                                var ul = $(el).append($("<ul>")).find('ul');
                                for (let tag of _listTag)
                                    ul.append("<li style=background-color:" + tag.colorBackground +  ">" + tag.value + '</li>');

                                addTagButton(ul, _listTag);
                            })
    });
            
                         
}

function addTagButton( _parent, _listMenuTag ){
    // Add the button tag 
    $(_parent).append(
        $("<li class='tagProjectButtonAdd'>").append(
            $("<button>").append(
                    $("<span>").append(
                        $("<i class='fa fa-tag' aria-hidden='true'></i>")
                    )
            )
        )
    );

    // Add tag modal windows
    var liButtonAddTag = $(_parent).find( $('.tagProjectButtonAdd') )[0];

    // open dropdown tag
    $( liButtonAddTag ).click(function(e) {
        var dropdown = $(liButtonAddTag).find( $('.tagProjectDropdown') )[0];
        $(dropdown).addClass("active");
        e.stopPropagation();
    });

    // close dropdown tag
    $(document).click(function (e) {
        e.stopPropagation();
        var dropdown = $(liButtonAddTag).find( $('.tagProjectDropdown') )[0];

        //check if the clicked area is dropDown or not
        if ( $(dropdown).has(e.target).length === 0 ) {
            $(dropdown).removeClass('active');
        }
    })

    $("<ul class='tagProjectDropdown'>").appendTo(liButtonAddTag);

    var dropdown = $(liButtonAddTag).find( $('.tagProjectDropdown') )[0];
    for (let tag of _listMenuTag)
        $(dropdown).append("<li style=background-color:" + tag.colorBackground +  ">" + tag.value + "</li>");
}

module.exports = {
        render: render
}
