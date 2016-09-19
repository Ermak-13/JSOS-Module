var Mixins = OS.Mixins,
    Configurator = OS.Configurator,
    PositionAndSizeForm = OS.PositionAndSizeForm;

var _Configurator = React.createClass({
  mixins: [Mixins.ConfiguratorHelper, Mixins.NavHelper],

  getInitialState: function() {
    return {
      tab: 'positionAndSize'
    };
  },

  getTabs: function () {
    var settings = this.props.settings;

    return {
      positionAndSize: {
        navText: I18n.t('position_and_size_form.nav_text'),
        content: function () {
          return (
            <PositionAndSizeForm
              onSubmit={ this.props.onSubmit }
              settings={ settings }
            />
          );
        }.bind(this) ()
      }
    };
  },

  render: function () {
    return (
      <Configurator.DefaultDialog
        ref={ this.getRefName() }
        name={ this.props.name }>

        { this.getNavHTML() }

        <div style={{ marginTop: '20px' }}>
          { this.getContentHTML() }
        </div>
      </Configurator.DefaultDialog>
    );
  }
});

module.exports = _Configurator;
