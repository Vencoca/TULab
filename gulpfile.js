//Base gulpfile for Front-End Development
//"gulp" basic command
var gulp = require('gulp'),
		path = require('path'),
		del = require('del'),
		browsersync = require('browser-sync').create(),
		sass = require('gulp-sass')(require('sass')),
		sassGlob = require('gulp-sass-glob'),
		autoprefixer = require('autoprefixer'),
		pxtorem = require('postcss-pxtorem'),
		cssnano = require('cssnano'),
		postcss = require("gulp-postcss"),
		emMediaQuery = require("postcss-em-media-query"),
		replace = require('gulp-string-replace'),
		nunjucksRender = require('gulp-nunjucks-render'),
		newer = require('gulp-newer'),
		tinypng = require("gulp-tinypng-compress"),
		svgo = require("gulp-svgo"),
		uglify = require('gulp-uglify'),
		include = require('gulp-include'),
		sourcemaps = require("gulp-sourcemaps"),
		webp = require("gulp-webp"),
		inject = require('gulp-inject'),
    purgecss = require('@fullhuman/postcss-purgecss'),
    htmlbeautify = require("gulp-html-beautify"),
    mqpacker = require("css-mqpacker"),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio');

// Datestamp for cache busting
var getStamp = function() {
  var myDate = new Date();
  var myYear = myDate.getFullYear().toString();
  var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
  var myDay = ('0' + myDate.getDate()).slice(-2);
  var mySeconds = myDate.getSeconds().toString();
	var myRandom = Math.floor(Math.random()*100);
  var myFullDate = myYear + myMonth + myDay + mySeconds + myRandom;
  return myFullDate;
};
var cacheBursting = getStamp();

//Theme name
var themeName = "custom";
var themePath = '../wp-content/themes/' + themeName + '/';

//BrowserSync
function browserSync(done) {
  browsersync.init({
		server: {
			baseDir: './build'
		},
		notify: {
			styles: {
				top: 'auto',
				right: 'auto',
				bottom: '0',
				left: '0',
				margin: '0px',
				padding: '10px',
				position: 'fixed',
				fontSize: '16px',
				zIndex: '9999',
				borderRadius: '0px',
				color: 'white',
				textAlign: 'center',
				display: 'block',
				backgroundColor: 'rgba(60, 197, 31, 0.5)'
			}
		}
  });
  done();
};
//BrowserSyncReload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}
//CSS
function css() {
	return gulp
		.src('./src/scss/style.scss')
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(
			postcss([
				emMediaQuery({
					precision: 3
				}),
				autoprefixer({
          overrideBrowserslist: [
            "> 1%",
            "last 2 versions",
            "IE 11"
          ]
        }),
				cssnano(),
				purgecss({
          content: ['build/*.html', 'build/js/*.js']
        }),
				pxtorem({
					rootValue: 16,
					propList: ['*'],
					selectorBlackList: [/^body$/]
        }),
        mqpacker({
          sort: true
        })
			])
		)
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest('./build'))
		.pipe(gulp.dest(themePath))
		.pipe(browsersync.stream());
};
//CSS print
function cssPrint() {
	return gulp
		.src('./src/scss/print.scss',)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(
			postcss([
				cssnano()
			])
		)
		.pipe(gulp.dest('./build'))
		.pipe(gulp.dest(themePath))
		.pipe(browsersync.stream());
};
//Scripts
function scripts() {
	return gulp
		.src('src/js/scripts.js',).on('error', console.log)
		.pipe(sourcemaps.init())
		.pipe(include())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest('build/js'))
		// .on('end', gulp.series(scriptsUglify, scriptsJQuery))
		.on('end', gulp.series(scriptsUglify))
		.pipe(browsersync.stream());
};
function scriptsUglify() {
	return gulp
		.src("build/js/scripts.js")
		.pipe(uglify())
		.pipe(gulp.dest(themePath + 'js/'));
};
//Nunjuck includes
function njkIncludes() {
  return gulp
		.src('./src/templates/*.njk')
  	.pipe(nunjucksRender({
			path: ["src/blocks", "build/images"]
		}))
  	.pipe(gulp.dest('./build'));
};

//CSS versions
function cssVersions() {
	cacheBursting = getStamp();
	return gulp
		.src(["./src/blocks/header/header.njk"])
    .pipe(replace(/style.css\?([0-9]*)/g, 'style.css?' + cacheBursting))
    .pipe(gulp.dest('./src/blocks/header/'));
};
//JS versions
function jsVersions() {
	cacheBursting = getStamp();
	return gulp
		.src(["./src/blocks/footer/footer.njk"])
    .pipe(replace(/scripts.js\?([0-9]*)/g, 'scripts.js?' + cacheBursting))
    .pipe(gulp.dest('./src/blocks/footer/'));
};
//tinyPNG
function tinyPngBg() {
	return gulp
		.src("src/images/bg/*.{png,jpg}")
		.pipe(newer("build/images/bg"))
		.pipe(tinypng("gkf0LVGnNtnTFxSLfxLz0Kq29vKFQMwK"))
		.pipe(gulp.dest("build/images/bg"))
		.pipe(gulp.dest(themePath + 'images/bg'));
};
function tinyPngFavicon() {
	return gulp
		.src("src/images/favicon/*.{png,jpg}")
		.pipe(newer("build/images/favicon"))
		.pipe(tinypng("gkf0LVGnNtnTFxSLfxLz0Kq29vKFQMwK"))
		.pipe(gulp.dest("build/images/favicon"))
		.pipe(gulp.dest(themePath + 'images/favicon'));
};
function tinyPngContent() {
	return gulp
		.src(["./src/images/content/*.{png,jpg}"])
		.pipe(newer("build/images/content"))
		.pipe(tinypng("gkf0LVGnNtnTFxSLfxLz0Kq29vKFQMwK"))
		.pipe(gulp.dest("build/images/content"));
};
// Webp images
function webpImages() {
	return gulp
		.src(['./src/images/bg/*.{png,jpg}'])
		.pipe(webp())
		.pipe(gulp.dest("build/images/bg"))
		.pipe(gulp.dest(themePath + 'images/bg'));
};
//video
function copyImages(){
	return gulp
		.src('./src/images/**')
		.pipe(gulp.dest('build/images/'))
		.pipe(gulp.dest(themePath + 'images/'));
}

//SVG
function svgMin() {
	return gulp
		.src(["./src/images/**/*.svg", "!./src/images/ico/*.svg"])
		.pipe(newer("build/images"))
		.pipe(
			svgo({
				plugins: [{
						removeViewBox: false
					},
					{
						cleanupNumericValues: {
							floatPrecision: 2
						}
					}
				]
			})
		)
		.pipe(gulp.dest("build/images/"))
		.pipe(gulp.dest(themePath + 'images/'));
};
function svgStore() {
	
  return gulp
      .src('./src/images/ico/*.svg')
      .pipe(svgmin(function (file) {
          var prefix = path.basename(file.relative, path.extname(file.relative));
          return {
              plugins: [{
                cleanupIDs: {
                  prefix: prefix + '-',
                  minify: true
                }
              },
              {
                removeViewBox: false
              }
            ]
          }
      }))
      .pipe(cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(gulp.dest('build/images'))
      .pipe(gulp.dest(themePath + 'images'));
};
//Favicons other files
function faviconsFiles() {
	return gulp
		.src(["./src/images/favicon/*", "!src/images/favicon/*.{png,jpg,svg}"])
		.pipe(gulp.dest('build/images/favicon/'))
		.pipe(gulp.dest(themePath + 'images/favicon/'));
};
//Copy fonts
function copyFonts() {
	return gulp
		.src('./src/fonts/**')
		.pipe(gulp.dest('build/fonts/'))
		.pipe(gulp.dest(themePath + 'fonts/'));
};
//HTML beauty
function htmlBeauty() {
	var options = {
		max_preserve_newlines: 1,
		indentSize: 2,
		indent_with_tabs: true,
	};
	return gulp.src('build/' + '*.html')
		.pipe(htmlbeautify(options))
		.pipe(gulp.dest('build/'))
		.pipe(browsersync.stream());
}


//Watch files
function watchFiles() {
  gulp.watch(['src/scss/**/*.scss', 'src/blocks/**/*.scss'], gulp.series(css, cssVersions));
  gulp.watch('src/scss/print.scss', gulp.series(cssPrint));
	gulp.watch(['src/js/**/*.js', 'src/blocks/**/*.js'], gulp.series(scripts, jsVersions));
	gulp.watch(['src/templates/*.njk', 'src/blocks/**/*.njk'], gulp.series(njkIncludes, htmlBeauty));
	gulp.watch(
    ['build/*.css', 'build/*.html', 'build/js/*.js'],
    gulp.series(browserSyncReload)
  );

  gulp.watch('src/fonts/**', copyFonts).on('unlink', function (filepath) {
    var filePathFromSrc = path.relative(path.resolve('src/fonts'), filepath);
    var destFilePath = path.resolve('build/fonts', filePathFromSrc);
		var destFilePathTheme = path.resolve(themePath + 'fonts/', filePathFromSrc);
		del.sync(destFilePath);
		del.sync(destFilePathTheme, {force: true});
  });

  gulp.watch('src/images/content/*.{png,jpg}', tinyPngContent).on('unlink', function (filepath) {
    var filePathFromSrc = path.relative(path.resolve('src/images/content'), filepath);
    var destFilePath = path.resolve('build/images/content/', filePathFromSrc);
		del.sync(destFilePath);
  });
  gulp.watch('src/images/favicon/*.{png,jpg}', tinyPngFavicon).on('unlink', function (filepath) {
    var filePathFromSrc = path.relative(path.resolve('src/images/favicon'), filepath);
    var destFilePath = path.resolve('build/images/favicon', filePathFromSrc);
		var destFilePathTheme = path.resolve(themePath + 'images/favicon/', filePathFromSrc);
		del.sync(destFilePath);
		del.sync(destFilePathTheme, {force: true});
  });
  gulp.watch('src/images/bg/*.{png,jpg}', tinyPngBg);
  gulp.watch('src/images/bg/*.{png,jpg}', webpImages).on('unlink', function (filepath) {
    var filePathFromSrc = path.relative(path.resolve('src/images/bg'), filepath);
    var destFilePath = path.resolve('build/images/bg', filePathFromSrc);
		var destFilePathTheme = path.resolve(themePath + 'images/bg/', filePathFromSrc);
		del.sync(destFilePath);
		del.sync(destFilePathTheme, {force: true});
    var destFilePathWebp = destFilePath.replace('.png', '.webp').replace('.jpg', '.webp');
    var destFilePathThemeWebp = destFilePathTheme.replace('.png', '.webp').replace('.jpg', '.webp');
    del.sync(destFilePathWebp);
    del.sync(destFilePathThemeWebp, {force: true});
  });
	gulp.watch(['src/images/**/*.svg', "!src/images/ico/*.svg"], svgMin).on('unlink', function (filepath) {
    var filePathFromSrc = path.relative(path.resolve('src/images'), filepath);
    var destFilePath = path.resolve('build/images', filePathFromSrc);
		var destFilePathTheme = path.resolve(themePath + 'images/', filePathFromSrc);
		del.sync(destFilePath);
		del.sync(destFilePathTheme, {force: true});
  });
  gulp.watch('src/images/ico/*.svg', svgStore);
	gulp.watch(["src/images/favicon/*", "!src/images/favicon/*.{png,jpg,svg}"], faviconsFiles).on('unlink', function (filepath) {
    var filePathFromSrc = path.relative(path.resolve('src/images/favicon'), filepath);
    var destFilePath = path.resolve('build/images/favicon', filePathFromSrc);
		var destFilePathTheme = path.resolve(themePath + 'images/favicon', filePathFromSrc);
		del.sync(destFilePath);
		del.sync(destFilePathTheme, {force: true});
  });
};


//Tasks
gulp.task(
  'default',
  gulp.series(
    gulp.parallel(
      gulp.series(
        // css, cssPrint, cssVersions
		css, cssVersions
      ),
      gulp.series(
        scripts, jsVersions
      ),
      gulp.series(
        njkIncludes, htmlBeauty
      ),
	  gulp.series(
		copyFonts,copyImages
	  )
    ),
    gulp.parallel(
      watchFiles, browserSync
    )
  )
);
