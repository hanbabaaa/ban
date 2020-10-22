const gulp=require('gulp');
const cssmin=require('gulp-cssmin');
const autoprefixer=require('gulp-autoprefixer');
const babel=require('gulp-babel');
const uglify=require('gulp-uglify');
const htmlmin=require('gulp-htmlmin');
const del=require('del');
const webserver = require('gulp-webserver');
// 书写一个打包css的方法
const cssHandler=()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// 书写一个移动images文件的方法
const imgHandler=()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
// 书写一个压缩js文件的方法
const jsHandler=()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
// 书写一个移动lib文件夹的方法
const libHandler=()=>{
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
// 书写一个移动php文件的方法
const phpHandler=()=>{
    return gulp.src('./src/php/*.php')
    .pipe(gulp.dest('./dist/php'))
}
// 书写一个移动font文件的方法
const fontHandler=()=>{
    return gulp.src('./src/font/**')
    .pipe(gulp.dest('./dist/font'))
}
// 书写一个移动json文件的方法
const jsonHandler=()=>{
    return gulp.src('./src/json/*.json')
    .pipe(gulp.dest('./dist/json'))
}
// 书写一个移动interface的方法
const interfaceHandler=()=>{
    return gulp.src('./src/interface/**.')
    .pipe(gulp.dest('./dist/interface'))
}
// 书写一个压缩html的方法
const htmlHandler=()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes:true, //移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把页面里的script标签里面的js代码给去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}


// 书写一个任务,自动删除dist目录
const delHandler=()=>{
    return del(['./dist'])
}
// 书写一个自动监控文件的任务
const watchHandler=()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('.src/lib/*.js',libHandler);
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/php/*.php',phpHandler)
    gulp.watch('./src/json/*.json',jsonHandler)
    gulp.watch('./src/interface/**',interfaceHandler)
    gulp.watch('./src/font/**',fontHandler)
}
const serverHandler=()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:8080,
        open:'./pages/yhindex.html',
        livereload:true
    }))
}
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,
        imgHandler,
        jsHandler,
        libHandler,
        htmlHandler,
        phpHandler,
        jsonHandler,
        interfaceHandler,
        fontHandler
    ),
    serverHandler,
    watchHandler    
)