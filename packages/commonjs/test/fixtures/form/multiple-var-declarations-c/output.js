import * as commonjsHelpers from "_commonjsHelpers.js";
import { __exports as input } from "\u0000fixtures/form/multiple-var-declarations-c/input.js?commonjs-exports";
import require$$0 from "\u0000CWD/fixtures/form/multiple-var-declarations-c/b.js?commonjs-proxy";

var hasRequiredInput;

function requireInput () {
	if (hasRequiredInput) return input;
	hasRequiredInput = 1;
	var a = 'a'
	  , b = require$$0
	  , c = 'c';

	console.log( a, b, c );
	return input;
}

export { requireInput as __require };
