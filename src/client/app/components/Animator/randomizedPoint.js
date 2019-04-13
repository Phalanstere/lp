"use strict";

// a library that allows to set randomized points on the screen
// 



function randomizedPoint(obj) {
	if (typeof(obj) === 'object')
		{
        let res;    
		var {min, max, type} = obj;
		if (min) {
			res = Math.random() * (max-min); 
			res += min;
			}
		else {
			res = Math.random() * max;
		}

        switch (type)   {
            case '%':
                res = res.toFixed(2) + type;
            break;

            case "px":
                res = Math.floor(res) + type;
            break;

            default:
                res = Math.floor(res);
            break;
        }

		return res;
    }
    


	return 'input is no object'; 
}


module.exports = exports = randomizedPoint;