var React = require('react');
var ReactDOM = require('react-dom');

var Playground = require('Playground');

// this syntax is basically doing this
// create a variable called X where { X } will be set to requre('react-router').X
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Playground />,
  document.getElementById('app')
);
