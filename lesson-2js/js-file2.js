"use strict"

var employeeSelery = {
		"Pulup" : 200,
		"Sergiy" : 300,
		"Ira" : 400,
};

var sum = 0;

for(var key in employeeSelery){
	sum += employeeSelery[key];
}
console.log(sum);