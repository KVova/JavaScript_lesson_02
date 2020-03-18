"use strict"

function operation(a, b, c){
	//c == '+', '-', '*', '/';
	//let d = " ";
	try {
		if(isNaN(a) && isNaN(b)){
			throw "Entered incorrect number or numbers";
		}else if(c !='-' & c!='+' & c!='*' & c!='/'){
			throw "Entered incorrect operator";
		}if(a+b){
			console.log(a+b);
		}if(a-b){
			console.log(a-b);
		}if(a*b){
			console.log(a*b);
		}if(b == 0){
				throw "Divide by zero";
		}else{(a/b)
			console.log(a/b);
	}
	}catch (err) {
		console.log(err);
	}
}
console.log(operation('1', '4', "-"));
console.log(operation(18, 2, "-"));
console.log(operation("h1", 0, "%"))
console.log(operation("0", 0, "/"))