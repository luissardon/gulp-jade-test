function Task(gulp, path, plugins) {
    var pathSassFiles = [
            path.frontend.sass + '*.scss',
            path.frontend.sass + '**/*.scss',
            '!' + path.frontend.sass + '/_**/*.scss',
            '!' + path.frontend.sass + '/**/_**/*.scss',
            '!' + path.frontend.sass + '/**/_*.scss'
        ]
        
    gulp.task('css', function(cb) {
        return gulp.src(pathSassFiles)
            .pipe(plugins.sass({
                outputStyle  : 'expanded' // nested, compact, compressed, 
            }))
            .pipe(gulp.dest(path.dest.css))
    })
}

module.exports = Task;