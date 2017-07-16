var $ = require('../node_modules/jquery/dist/jquery.min');

const tagProject = require('./index.js');

var listTag = {
    'listTagsActive': [
                        { value: "primo tag" },
                        { value: "secondo tag" },
                        { value: "pingu tag" }
                    ]
}

var listTagMenu = {
    'listMenuTags': [
                        { value: "primo tag" },
                        { value: "secondo tag" },
                        { value: "pingu tag" }
                    ]
}

$("#tag1").map( function ( pos, el){
    tagProject.init( listTag, listTagMenu ,el);
});

