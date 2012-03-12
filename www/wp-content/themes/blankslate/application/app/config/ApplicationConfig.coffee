###!
 @author 
 @since  
 
###

class exports.ApplicationConfig

	###--------------------------------------
	//+ CLASS CONSTANTS
	--------------------------------------###
	
	@BASE_URL: "http://localhost:8888/CN/WPSinglePage/www/"
	
	@WP_TEMPLATE_URL: @BASE_URL + "wp-content/themes/blankslate/"
	
	@API: @BASE_URL + "api/"
	
	@API_METHODS:
		byCategory: @API + "get_category_posts/?slug="
		byPost: @API + "get_post/?slug="
		byPage: @API + "get_page/?slug="
		bySearch: @API + "get_search_results/?search="