
###!
 @author 
 @since  
 
###

{BrunchApplication} = require 'helpers'
{MainRouter} = require 'routers/main_router'
{ApplicationView} = require 'views/ApplicationView'

class exports.Application extends BrunchApplication
	
  # This callback would be executed on document ready event.
  initialize: ->
    @router = new MainRouter
    @applicationView = new ApplicationView

window.app = new exports.Application
