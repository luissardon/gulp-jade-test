function Task(gulp, path, plugins) {
    var pathJadeFiles = [
            path.frontend.jade + '*.jade',
            path.frontend.jade + '**/*.jade',
            '!' + path.frontend.jade + '/_**/*.jade',
            '!' + path.frontend.jade + '/**/_**/*.jade',
            '!' + path.frontend.jade + '/**/_*.jade'
        ]
    
    gulp.task('html', function(cb) {
        return gulp.src(pathJadeFiles)
            .pipe(plugins.jade({
                pretty  : true,
                locals  : {
                    version : new Date().getTime()
                }
            }))
            .pipe(gulp.dest(path.dest.html))
    })
}

module.exports = Task;