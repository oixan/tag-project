var $ = require('../../node_modules/jquery/dist/jquery.min');

var render = function (_listTag){
    $(document).ready(function() { 
        $("[data-tagProject='tag']").map(
                            function(i, el){
                                var ul = $(el).append($("<ul>")).find('ul');
                                for (let tag of _listTag)
                                    ul.append("<li style=background-color:" + tag.colorBackground +  ">" + tag.value + '</li>');

                                addTagButton(ul);
                            })
    });
            
                         
}

function addTagButton( _parent ){
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
}

module.exports = {
        render: render
}
