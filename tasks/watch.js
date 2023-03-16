const {watch,parallel} = require('gulp');
const bs = require('browser-sync');

module.exports = function watching() {
	watch('./index.html').on("change", bs.reload);
	watch('src/**/*.scss', parallel('style'));
	watch('src/**/*.js', parallel('dev_js'));
	watch('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('rastr'));
}