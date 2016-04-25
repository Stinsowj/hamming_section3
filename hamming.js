var compute;

exports.compute = function(s1, s2) {
	var distance = 0;

	if (s1.length !== s2.length){
			throw new Error("DNA strands must be of equal length.")
		}

	for(var i = 0; i < s1.length ; i += 1)
		if( s1[i] !== s2[i]){
			distance += 1;
		}

	return distance;
};
// function lengthcheck () {
// 	try{
// 		var lengthcheck=prompt("There are two strings, are they of equal length")
// 		if (s1.length !== s2.length)
// 			throw new Error("DNA must be of equal length.")
// 		alert ("The strands are the same length!")
// 	}
// 	catch(e){
// 	alert(e.name+" "+e.message)
// 	}
// };




// var compute = {
// exports.compute = function(str1, str2) {

// 	var hd = 0;

// 	for(i = 0; i < str1.length; i ++) {
// 		if(str1[i] =! str2[i]){
// 			}
// 		}
// 	return hd ++;
// 	}
// };
//  function();
// module.exports = {
// 	compute: compute
// }

