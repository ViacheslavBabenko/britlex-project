const gulp = require('gulp');

const requireDir = require('require-dir');
const style = require('./tasks/style');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.dev_js = tasks.dev_js;
exports.build_js = tasks.build_js;
exports.bs = tasks.bs;
exports.rastr = tasks.rastr;
exports.watch = tasks.watch;

exports.default= gulp.parallel(
    exports.style,
    exports.dev_js,
    exports.build_js,
    exports.bs,
    exports.rastr,
    exports.watch
);

const dev = gulp.parallel( exports.watch, exports.bs,);
exports.dev = dev;

const build = gulp.parallel(exports.style, exports.dev_js, exports.build_js, exports.rastr,);
exports.build = build;