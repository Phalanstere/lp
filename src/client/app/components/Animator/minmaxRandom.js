"use strict";

// calculates a random value



function minmaxRandom(obj) {
	if (typeof(obj) === 'object')
		{
        let res;    
		var {min, max} = obj;

		if (min) {
			res = Math.random() * (max-min); 
			res += min;
			}
		else res = Math.random() * max;
		return res;
		}
	return 'input is no object'; 
}



module.exports = exports = minmaxRandom;