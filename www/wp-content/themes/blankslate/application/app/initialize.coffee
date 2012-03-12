
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

$ ->
	
	ApplicationConfig.BROWSER = {
		name: navigator.appName
		version: jQuery.browser.version
	}
	
	if jQuery.browser.msie is true
		if jQuery.browser.version <= 8.0
			
			CFInstall.check({
				mode: "overlay" 
				destination: "http://www.yoursiteurl.com"
			})
	
	window.app = new exports.Application
