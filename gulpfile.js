//载入外挂
var gulp = require('gulp'),
		htmlmin = require('gulp-htmlmin'),
		less = require('gulp-less'),
		autoprefixer = require('gulp-autoprefixer'),
		cssmin = require('gulp-cssmin'),
		cssver = require('gulp-make-css-url-version'),
		uglify = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		cache = require('gulp-cache'),
		rename = require('gulp-rename'),
		clean = require('gulp-clean'),
		concat = require('gulp-concat'),
		notify = require('gulp-notify'),
		livereload = require('gulp-livereload');

//压缩html
gulp.task('html',function(){
	return gulp.src('source/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dest'))
		//.pipe(notify({message: 'html task ok'}));
});

//处理css
gulp.task('css',function(){
	return gulp.src('source/less/*.less')
		.pipe(less())
		.pipe(cssver())
		.pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1','ios 6','android 4'))
		.pipe(rename({suffix:'.min'}))
		.pipe(cssmin())
		.pipe(gulp.dest('dest/css'))
		//.pipe(notify({message:'css task ok'}));
});

//处理js
gulp.task('js',function(){
	return gulp.src('source/js/index.js')
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dest/js'))
		//.pipe(notify({message:'js task ok'}));
});

//处理img
gulp.task('img',function(){
	return gulp.src('source/img/**/*')
		.pipe(cache(imagemin({optimizationLevel:3,progressive:true,interlaced:true})))
		.pipe(gulp.dest('dest/img'))
		//.pipe(notify({message:'img task ok'}));
});

//清理
gulp.task('clean',function(){
	return gulp.src(['dest/**/*'],{read:false})
		.pipe(clean());
});

//预设任务
gulp.task('default',function(){
	gulp.start('html','css','js','img');
});

//监视
gulp.task('watch',function(){
	gulp.watch('source/*.html',['html']);
	gulp.watch('source/less/*.less',['css']);
	gulp.watch('source/js/*.js',['js']);
	gulp.watch('source/img/**/*',['img']);
	livereload.listen();
	gulp.watch(['source/**/*']).on('change',livereload.changed);
});