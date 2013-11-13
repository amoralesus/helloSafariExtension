performCommand = (event) ->
  if event.command == 'helloCoffee'
    alert("Hello coffee")

validateCommand = (event) ->
  if event.command == 'helloCoffee'
    event.target.disabled = !event.target.browserWindow.activeTab.url

safari.application.addEventListener("command", performCommand, true)
safari.application.addEventListener("validate", validateCommand, true)
