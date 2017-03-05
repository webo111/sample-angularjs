var gulp = require('gulp'),
	runSequence = require('run-sequence'),//运行时先后顺序,可以相互独立，解除任务间的依赖，增强task复用
	
	jshint = require('gulp-jshint'),//js代码校验
	stylish = require('jshint-stylish'),//外部的报告器
	
	uglify = require('gulp-uglify'),//压缩javascript文件
	rev = require('gulp-rev'), //对文件名加MD5后缀
	revCollector = require('gulp-rev-collector'), //用于rev生产版本号后，替换页面中的路径
	
	gulpif = require('gulp-if'),//if判断，用来区别生产环境还是开发环境
	minifyCss = require('gulp-minify-css'),//压缩CSS
    changed = require('gulp-changed'),//有变化的才操作，没变化的就跳过
    autoprefixer = require('gulp-autoprefixer'),//自动添加css前缀
    
	del = require('del');
var concat = require('gulp-concat');//多个文件合并为一个
var amdOptimize = require("amd-optimize");//require优化
var eventStream = require("event-stream");//用于简化streams调用的api
var order = require("gulp-order");//对src中的文件按照指定顺序进行排序

var jsDest = 'dist/js',
	htmlDest = 'dist/html',
	cssDest = 'dist/css',
    jsSrc = ['appjs/**/*.js'],
    cssSrc = ['css/**/*.css'],
    htmlSrc = ['appjs/**/*.html'],
	manifestDir = 'dist/manifest',
	condition = true;
//校验js代码
gulp.task('jsHint', function(){
	return gulp.src(jsSrc)
    //.pipe(jscs())   //检测JS风格
    .pipe(jshint({
        "undef": false,// 所有的非全局变量，在使用前必须都被声明
        "unused": false// 所有的变量必须都被使用
    }))
    .pipe(jshint.reporter('default'))  //错误默认提示
    //.pipe(jshint.reporter(stylish))   //高亮提示
    //.pipe(jshint.reporter('fail'))
    //.pipe(gulp.dest('dist/jsReporter/'));
});

//压缩JS/生成版本号
gulp.task('miniJs', function () {
    //require合并
	return eventStream.merge(
	        gulp.src("appjs/main.js"),
	        gulp.src(jsSrc)
			   .pipe(amdOptimize("boot", {
				   baseUrl: 'appjs/',
				   name: 'main',
	               configFile: 'appjs/main.js',
				   paths: {
				        'domReady': '../plugins/require2.1.15/domReady',
				        'boot': './boot',
				        'angular': '../plugins/angular/angular.min',
				        'angular-route': '../plugins/angular/angular-route/angular-route.min',
				        'angular-resource': '../plugins/angular/angular-resource/angular-resource.min',
				        'jquery': '../plugins/jquery/jquery.min',
				        'bootstrap': '../plugins/bootstrap-3.3.7/js/bootstrap.min',
				        'app':'./app'
				    },
				    shim: {
				    	'angular': {
				            exports: 'angular'
				        },
				        'angular-route': {
				            deps: ['angular']
				        },
				        'angular-resource': {
				            deps: ['angular']
				        },
				        'jquery': {
				            exports: '$'
				        },
				        'bootstrap': {
				            deps: ['jquery']
				        }
				    },
				    include: false,
				    exclude: ['domReady', 'jquery', 'angular', 'angular-route', 'angular-resource','bootstrap'],
				    findNestedDependencies: false
			   }))
			   .pipe(concat("main.js"))
		).pipe(order(["main.js", "appjs/main.js"]))
	    .pipe(concat("main.js"))
	    .pipe(uglify())
	    .pipe(gulp.dest(jsDest));
});
//CSS里更新引入文件版本号
gulp.task('revCollectorCss', function () {
    return gulp.src(cssSrc)
        .pipe(revCollector())
        .pipe(gulp.dest(cssDest));
});
//压缩/合并CSS/生成版本号
gulp.task('miniCss', function () {
    return gulp.src(cssRevSrc + '/*.css')
        .pipe(gulpif(
            condition, minifyCss({
                advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
                compatibility: '*',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
                keepBreaks: false//类型：Boolean 默认：false [是否保留换行]
            })
        ))
        .pipe(rev())
        .pipe(gulpif(
            condition, changed(cssDest)
        ))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: false
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(rev.manifest())
        .pipe(gulp.dest(cssDest));
});
gulp.task('delDir', function (cb) {
    del(['dist/','rev/']);
  //速度快了会报错
    setTimeout(function () {
    	cb();
    }, 1000);
});
gulp.task('default',['delDir'], function(done){
    runSequence(
		['jsHint'],
		['miniJs'],
		['revCollectorCss'],
		done
	);
});