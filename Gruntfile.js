module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.initConfig({
    watch: {
      sass: {
        files: "./css/*.scss",
        tasks: ["compass"]
      },
      css: {
        files: "./css/*.css",
        tasks: ["cssmin"],
        options: {
          livereload: true
        }
      },
      html: {
        files: ["./index.html", "./css/*.css"],
        options: {
          livereload: true
        }
      },
      js: {
        files: ["./js/*.js"],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: "./"
        }
      }
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "./css",
            src: ["*.css"],
            dest: "./css",
            ext: ".min.css"
          }
        ]
      }
    }
  });

  grunt.registerTask("default", ["connect", "watch"]);
};
