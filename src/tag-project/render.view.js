var $ = require('../../node_modules/jquery/dist/jquery.min');

var render = function (_listTag){
    $(document).ready(function() { 
        $("[data-tagProject='tag']").map(
                            function(i, el){
                                var ul = $(el).append($("<ul>")).find('ul');
                                for (let tag of _listTag)
                                    ul.append('<li>' + tag.value + '</li>');
                            })
    });
            
                         
}

module.exports = {
        render: render
}
