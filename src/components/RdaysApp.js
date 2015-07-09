'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');


var RdaysApp = React.createClass({
  render: function() {
    return (
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">Title</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
    </nav>
            </div>
    </div>
    );
  }
});

module.exports = RdaysApp;
