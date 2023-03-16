const bs = require('browser-sync');

module.exports = function serve() {
	bs.init({
		server: {
			baseDir: './',
            browser: 'google chrome'
		},
	})
}