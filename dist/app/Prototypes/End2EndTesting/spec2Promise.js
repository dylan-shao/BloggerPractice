exports.config={
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities:{
		'browserName':'chrome'
	},

	specs: ['testCtrl2_specPromise.js'],

	jasmineNodeOpts:{
		showColors:true,
		defaultTimeoutInterval:30000
	}
};
