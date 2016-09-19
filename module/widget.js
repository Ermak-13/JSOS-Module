var Mixins = OS.Mixins,
    Widget = OS.Widget;

// If you implement custom configurator
// var Configurator = require('./configurator');
var settings = require('./settings');

var _Widget = React.createClass({
  mixins: [Mixins.WidgetHelper],

  getInitialState: function () {
    return {
      size: settings.DEFAULT_SIZE,
      position: settings.DEFAULT_POSITION
    };
  },

  _getSettings: function () {
    return {
      size: _.clone(this.state.size),
      position: _.clone(this.state.position)
    };
  },

  componentWillMount: function () {
    this.init();
  },

  render: function () {
    return (
      <Widget.Widget widgetStyles={ this.getWidgetStyles() }>
        <Widget.DefaultIconsContainer
          onMouseDownPositionBtn={ this.handleStartMoving }
          onClickCloseBtn={ this.close }
          onClickConfigureBtn={ this.openConfigurator }
        />

        <Widget.Body>
          <p className="lead">TODO</p>
        </Widget.Body>
      </Widget.Widget>
    );
  }

  // If you implement custom configurator
  //_createConfigurator: function () {
  //  return (
  //    <Configurator
  //      name={ this.getName() }
  //      settings={ this.getSettings() }
  //      onClose={ this.handleCloseConfigurator }
  //      onSubmit={ this.handleConfigure }
  //    />
  //  );
  //}
});

module.exports = _Widget;
