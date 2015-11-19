exports.config={
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities:{
		'browserName':'chrome'
	},

	specs: ['testCtrl_spec.js','testCtrl2_specPromise.js','testCtrl2_spec.js','testLogin_spec.js'],

	jasmineNodeOpts:{
		showColors:true,
		defaultTimeoutInterval:30000
	}
};