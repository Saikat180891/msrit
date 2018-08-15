var gulp = require("gulp"),
  gulpWatch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssVars = require("postcss-simple-vars"),
  nestcss = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  browserSync = require("browser-sync").create();

/* 
=======================================================================================================
define the task required
=======================================================================================================
*/

gulp.task("HTML", function() {
  console.log("The .html file is modified");
});

gulp.task("CSS", function() {
  console.log("The main css file is modified");
});

gulp.task("styles", function() {
  console.log("Modifying the main css file...");
  return gulp
    .src("temp/css/main/styles.css") //--------------------------------------->attach the src file
    .pipe(postcss([cssImport, mixins, cssVars, nestcss, autoprefixer])) //---->add the postcss features
    .on("error", function(eInfo) {
      console.log(eInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("css")); //----------------------------------------------->output the file in the dest
});

gulp.task("default", function() {
  console.log("the default task is called");
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("css/styles.css").pipe(browserSync.stream());
});

/*
==========================================================================================================
define the watch task todo list
==========================================================================================================
*/

gulp.task("watch", function() {
  //------------------------------------------------------------->reload the page automatically after saving
  browserSync.init({
    server: {
      baseDir: "./",
      index: "table.html"
    },
    port: 3000,
    open: true,
    notify: false,
    tunnel: "test"
  });
  gulpWatch("table.html", function() {
    browserSync.reload();
  });
  //--------------------------------------------------------------------------->attach the file to watch
  gulpWatch("temp/css/**/*.css", function() {
    gulp.start("cssInject"); //--------------------------------------------------->call the styles task
  });
});
