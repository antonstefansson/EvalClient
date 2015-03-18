module.exports = function ( grunt ) {
 var taskConfig = {
   pkg: grunt.file.readJSON('package.json'),
   jshint: {
     src: ['js/*.js', 'Controllers/*.js', 'Factory/*.js', '!js/angular-ui-bootstrap-modal.js'],
     gruntfile: ['Gruntfile.js'],
     options: {
	  curly:  true,
	  immed:  true,
	  newcap: true,
	  noarg:  true,
	  sub:    true,
	  boss:   true,
	  eqnull: true,
	  node:   true,
	  undef:  true,
	  globals: {
	  	ChatClient: true,
	    _:       false,
	    jQuery:  false,
	    angular: false,
	    moment:  false,
	    console: false,
	    $:       false,
	    io:      false
	  }
	 }
   }
 };
 grunt.initConfig(taskConfig);
 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.registerTask('default', ['jshint']);
};
