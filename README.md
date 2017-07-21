# Tag-project  - based on Jquery -
Tag-project is a jQuery plugin providing a unusual tag picker.

Current stable version (none) : **v0.5.0** in development.

[View Documentatio / Demo ](http://tagproject.altervista.org/) (Work in progress)

## Features
* :)

## Usage
import the library 
<pre>
npm install oixan-demo1
</pre>
Install dependencies:
<pre>
npm install
</pre>
Import in your project (from root)
<pre>
var tagProject = require('./node_modules/oixan-demo1/dist/bundle.js');
</pre>
Current Library Versions:

- jQuery: 3.2.1

## Development
Build the package
<pre>
npm run build
</pre>

## Test
Open the index.html page in dist folder.

## History
- 0.6.0 ( new features - long term )
  - infinity autoscroll on menu lists tag
  - autocomplete when insert a tag.
- 0.5.0 
  - saving id on data-Id attribute on every li element.
  - return id field when events occured.
- 0.4.1 
  - Fix 
- 0.4.0 
  - fire event on tag color change.
  - fire event on insert new tag.
  - fire event on delete tag.
  - fire event on delete active tag.
  - fire event on edit active tag name.
- 0.3.1 
  -  Close the dropdown after a color is picked.
- 0.3.0 
  -  Added Edit Name tag.
  -  Added dropdawn to change color of tag.
- 0.2.0 
  -  Is now possible Add new Tag in the Menu Tags Dropdown.
- 0.1.7
  -  #1: possibility to choose default color based on colorBackgoudnLabel.css.

## License
This project is licensed under [MIT](https://github.com/oixan/tag-project/blob/master/LICENSE "Read more about the MIT license").