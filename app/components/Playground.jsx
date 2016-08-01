var React = require('react');

require('node_modules/foundation-sites/dist/plugins/foundation.core.js');
require('node_modules/foundation-sites/dist/plugins/foundation.util.mediaQuery.js');
require('node_modules/foundation-sites/dist/plugins/foundation.util.keyboard.js');
require('node_modules/foundation-sites/dist/plugins/foundation.util.motion.js');
require('node_modules/foundation-sites/dist/plugins/foundation.util.nest.js');

var Playground = React.createClass({
  render: function() {

    $(document).foundation();

    return (
      <div>
        <ul className="vertical menu" data-accordion-menu>
          <li>
            <a href="#">Item 1</a>
            <ul className="menu vertical nested">
              <li><a href="#">Item 1A</a></li>
              <li><a href="#">Item 1B</a></li>
            </ul>
          </li>
          <li><a href="#">Item 2</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Playground;
