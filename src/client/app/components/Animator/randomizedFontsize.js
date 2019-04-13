"use strict";

// calculates a random fontsize



function randomizedFontsize(obj) {
	if (typeof(obj) === 'object')
		{
		console.log("randomizedFontsize");
		console.log(obj);

		var {min, max, typ} = obj;

		console.log("min ist " + min + " mx ist " + max + " type ist " + typ);

		if (min) {
			res = Math.random() * (max-min); 
			res += min;
			}
		else {
			res = Math.random() * max;
		}

		if (typ )
			{
			switch (typ)
				{
				case 'px':
					res = Math.floor(res);
					res += typ; 
				break;

				case 'em':
					res = res.toFixed(2);
					res += typ;
				break; 

				case 'vw':
					res = res.toFixed(2);
					res += typ;
				break;

				case 'int':
					res = Math.floor(res);
				breal;
				}
			}	
		
		return res;
		}
	return 'input is no object'; 
}



module.exports = exports = randomizedFontsize;
