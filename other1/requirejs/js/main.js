require.config({
	baseUrl : "lib",	
	path : {
		comm : "lib/comm",
		jquery : "lib/jq/jquery",
		"jquery-ui" : "lib/jq/jquery-ui"
	},

})
require(["comm","jquery","jquery-ui"],function(){
	console.log("load finished");
})
