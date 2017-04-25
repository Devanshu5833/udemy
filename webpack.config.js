var path = require("path");

	var config = {
		entry : "./index.js",
		output : {
				path : path.resolve(__dirname,"build"),
				filename : "bundle.js"
			}
	}

module.exports = config;
