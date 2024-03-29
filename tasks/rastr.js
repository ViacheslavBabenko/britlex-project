const {src,dest} = require('gulp');
const changed = require('gulp-changed');
const bs = require('browser-sync');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');

module.exports = function rastr() {
	return src('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(plumber())
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
		},
		[
			recompress({
				loops: 6,
				min: 50,
				max: 90,
				quality: 'high',
				use: [pngquant({
					quality: [0.8, 1],
					strip: true,
					speed: 1
				})],
			}),
			imagemin.gifsicle(),
			imagemin.optipng(),
			imagemin.svgo()
		], ), )
		.pipe(changed('dist/img'))
		.pipe(dest('dist/img'))
		.pipe(bs.stream())
}