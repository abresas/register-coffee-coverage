// needs coffee-script/register to be already loaded
require('coffee-coverage/register-istanbul');

// get default .coffee compiler
loader = require.extensions['.coffee'];

// make require.extensions[.coffee] a property that always returns coffee-coverage compiler
Object.defineProperty(require.extensions, '.coffee', {
        get: function(ext) {
		return loader;
        }
	// set not needed, default ignores any attempts to replace extension
});
