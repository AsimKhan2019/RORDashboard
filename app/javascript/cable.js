// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//

import "action_cable"
import "require_self"
import "channels"

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);