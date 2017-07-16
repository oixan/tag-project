var $ = require('../../node_modules/jquery/dist/jquery.min');

var render = function (_listTag, _listMenuTag){
    // search tagProject div container and add tag
    $(document).ready(function() { 
        $("[data-tagProject='tag']").map(
                            function(i, el){
                                var ul = $(el).append($("<ul>")).find('ul');
                                for (let tag of _listTag)
                                    ul.append("<li style=background-color:" + tag.colorBackground +  ">" + tag.value + 
                                                    "<i class='fa fa-times' aria-hidden='true'></i> </li>");

                                addTagButton(ul, _listTag);
                            })
    });                 
}

function addTagButton( _parent, _listMenuTag ){
    // Add the button tag 
    $(_parent).append(
        $("<li class='tagProjectButtonAdd'>").append(
            $("<button class='tagProjectButton'>").append(
                    $("<span>").append(
                        $("<i class='fa fa-tag' aria-hidden='true'></i>")
                    )
            )
        )
    );

    // Add tag modal windows
    var liButtonAddTag = $(_parent).find( $('.tagProjectButtonAdd') )[0];

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

    // Add tags to Menu Tags
    $("<ul class='tagProjectDropdown'>").appendTo(liButtonAddTag);

    var dropdown = $(liButtonAddTag).find( $('.tagProjectDropdown') )[0];
    for (let tag of _listMenuTag)
        $(dropdown).append("<li style=background-color:" + tag.colorBackground +  ">" + tag.value +
                                "<i class='fa fa-times' aria-hidden='true'></i> </li>");
}

module.exports = {
        render: render
}
