// Generated by CoffeeScript 1.6.3
(function() {
  var performCommand, validateCommand;

  performCommand = function(event) {
    if (event.command === 'helloCoffee') {
      return alert("Hello coffee");
    }
  };

  validateCommand = function(event) {
    if (event.command === 'helloCoffee') {
      return event.target.disabled = !event.target.browserWindow.activeTab.url;
    }
  };

  safari.application.addEventListener("command", performCommand, true);

  safari.application.addEventListener("validate", validateCommand, true);

}).call(this);
