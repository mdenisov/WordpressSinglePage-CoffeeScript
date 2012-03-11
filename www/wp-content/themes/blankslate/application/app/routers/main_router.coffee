
###!
 @author 
 @since  
 
###

class exports.MainRouter extends Backbone.Router
  routes :
    '': 'home'

  home: ->
    $('body').html app.applicationView.render().el
