###!
 @author 
 @since  
 
###

{ApplicationConfig} = require 'config/ApplicationConfig'
{ApplicationModel} = require 'models/ApplicationModel'

indexTemplate = require 'templates/index'

class exports.ApplicationView extends Backbone.View

	###--------------------------------------
	//+ CLASS CONSTANTS
	--------------------------------------###
	
	VIEW_CONTAINER_EL: "#view-container"

	###--------------------------------------
	//+ CONSTRUCTOR
	--------------------------------------###
	
	constructor: ->
		_.bindAll @
		
		@applicationModel = new ApplicationModel()
		
		@_addEventListeners()
		
	render: ->
		
		$( 'body' ).html( indexTemplate() )
		
	###--------------------------------------
	//+ PUBLIC METHODS
	--------------------------------------###
	
	###--------------------------------------
	//+ EVENT HANDLERS
	--------------------------------------###
	
	_onModelChange: ( e ) ->
	
	###--------------------------------------
	//+ PRIVATE & PROTECTED INSTANCE METHODS
	--------------------------------------###
		
	_addEventListeners: ->
		@applicationModel.bind( 'change', @_onModelChange )
		
	_removeEventListeners: ->
		@applicationModel.unbind( 'change', @_onModelChange )
	
	_destroy: ( view ) ->
		console.log 'destroy view'
