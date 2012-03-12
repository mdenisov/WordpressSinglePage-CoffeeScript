
###!
 @author 
 @since  
 
###

{BrunchApplication} = require 'helpers'
{MainRouter} = require 'routers/main_router'
{ApplicationConfig} = require 'config/ApplicationConfig'
{ApplicationView} = require 'views/ApplicationView'

class exports.Application extends BrunchApplication
	
  # This callback would be executed on jQuery document.ready event.
  initialize: ->
    @router = new MainRouter
    @applicationView = new ApplicationView

# On jQuery init build site
$ ->
	
	ApplicationConfig.BROWSER = {
		name: navigator.appName
		version: jQuery.browser.version
	}
	
	if ApplicationConfig.GOOGLE_CHROMEFRAME_ENABLED is true
		if jQuery.browser.msie is true
			if jQuery.browser.version <= 8.0
				
				CFInstall.check({
					mode: "overlay" 
					destination: "http://www.yoursiteurl.com"
				})
	
	window.app = new exports.Application
