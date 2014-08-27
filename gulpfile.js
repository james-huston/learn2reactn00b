
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('concat', function () {
  var fileList = [
    'bower_components/react/react-with-addons.js',
    'src/**/*.js'
  ];

  gulp.src(fileList)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./tmp/'));

});

// using vinyl-source-stream:
gulp.task('browserify', function() {
  var bundleStream = browserify('./tmp/app.js').bundle();

  bundleStream
    .pipe(source())
    .pipe(gulp.dest('dist/'));
});
