module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({
    watch: {
      sass: {
        files: ["./style/sass/*.scss"],
        tasks: ["compass"],
        options: {
          livereload: true
        }
      },
      css: {
        files: ["./style/css/*.css","./style/sass/css/*.css"],
        tasks: ["cssmin"],
        options: {
          livereload: true
        }
      },
      html: {
        files: ["./*.html", "./style/sass/css/*.css", "./style/sass/*.scss", "./style/css/*.css"],
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
            src: ["./style/css/*.css","./style/sass/css/*.css"],
            dest: "./style/build/index.min.css",
          }
        ]
      }
    },
    compass: {
			dist: {
				options: {
					sassDir: "./style/sass/",
					cssDir: "./style/sass/css/"
				}
			}
		}
  });

  grunt.registerTask("default", ["connect", "watch", "compass"]);
};
