var gulp        = require('gulp'),
    
    path        = require('./config/path.js'),
    plugins     = require('./config/plugins.js');
    
    
var runTask = function(taskName) {
    var Task = require('./config/tasks/' + taskName);
    Task(gulp, path, plugins);
}

runTask('gulp_html');
runTask('gulp_css');

gulp.task('default', function(cb) {
    plugins.runSequence('html', 'css', cb);
});