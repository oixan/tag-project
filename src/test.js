var $ = require('../node_modules/jquery/dist/jquery.min');

const tagProject = require('./index.js');

var listTag = {
    'listTagsActive': [
                        { value: "first tag", colorBackground: "#64b6b6" },
                        { value: "second tag", backgroundCSS: "label-green" },
                        { value: "third tag" }
                    ]
}

var listTagMenu = {
    'listMenuTags': [
                        { value: "four tag", colorBackground: "#337ab7" },
                        { value: "five tag" },
                        { value: "six tag" }
                    ]
}

var test = function ( dataItem ){
    alert('Test: ' + dataItem['value']);
}

var tagProjectEvent = {
    // addTagActiveListEvent: test, // FATTO
    deleteTagActiveListEvent: test,
    editTagActiveListEvent: test,
    addTagMenuListEvent: test,
    deleteTagMenuListEvent: test,
}

$("#tag1").map( function ( pos, el ){
    tagProject.init( listTag, listTagMenu, el, { events : tagProjectEvent } );
});



// tagProject.fn.deleteTagFromMenu( $(".tagProjectDropdown li").first() );