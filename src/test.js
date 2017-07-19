var $ = require('../node_modules/jquery/dist/jquery.min');


/*  
 *  1. Basic Example 
 */
const tagProject = require('./index.js');


$("#tag1").map( function ( pos, el ){
    tagProject.init( {tagContainer: el} );
});


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

$("#tag2").map( function ( pos, el ){
    tagProject.init( {listTagsActive:listTag, listMenuTags:listTagMenu, tagContainer: el} );
});


/* Remove the content to see the events fired in action


var test = function ( dataItem ){
    alert('Value: ' + dataItem['value'] + ' - colorBackgour: ' + dataItem['colorBackground'] + ' - backgroundCSS: ' + dataItem['backgroundCSS'] );
}

var tagProjectEvent = {
    addTagActiveListEvent: test, 
    deleteTagActiveListEvent: test,
    editTagActiveListEvent: test,
    addTagMenuListEvent: test,
    deleteTagMenuListEvent: test,
}
*/
