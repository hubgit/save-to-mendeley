/* when the toolbar button is clicked, insert a script to extract data from the current tab */
chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, { file: "extract.js" }, function(result) {
		window.open("http://www.mendeley.com/import/?" + build_params(result[0]), "Mendeley", "width=980,height=670");
	});
});

/* helper script to encode URL parameters */
var build_params = function(params) {
	var items = [];

	for (var param in params) {
		if (params.hasOwnProperty(param) ) {
			items.push(encodeURIComponent(param) + "=" + encodeURIComponent(params[param]));
		}
	}

	return items.join("&");
}
