const { src, dest, watch } = require("gulp");
var sass = require('gulp-sass')(require('sass'));

const compileSass = () =>
  src("src/sass/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(dest("functions/public/css"));

const watchSassFiles = () => watch("src/sass/**/*.scss", compileSass);

exports.default = watchSassFiles;
