// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');


// File paths
const files = {
    scssPath: 'app/**/*.scss',
    jsPath: 'app/**/*.js'
};

// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src( /*files.scssPath*/
        ['app/fonts.scss',
        'app/global.scss',
        'app/header/header.scss',
        'app/burger-menu/burger-menu.scss',
        'app/block-logo/block-logo.scss',
        'app/block-catalog/block-catalog.scss',
        'app/block-catalog2-drop-link/block-catalog2-drop-link.scss',
        'app/slider-main/slider-main.scss',
        'app/block-features/block-features.scss',
        'app/slider-hits/slider-hits.scss',
        'app/slider-fresh/slider-fresh.scss',
        'app/slider-specials/slider-specials.scss',
        'app/slider-brands/slider-brands.scss',
        'app/stories/stories.scss',
        'app/footer/footer.scss'
        ])
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(concat('style.css'))
        .pipe(dest('dist')
    ); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('all.js'))
        //.pipe(uglify())
        .pipe(dest('dist')
    );
}

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask),
    cacheBustTask,
    watchTask
);
