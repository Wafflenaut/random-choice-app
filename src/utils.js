console.log('utils');
/*
export const square = (x) => x*x;

export const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

export default subtract;

*/

//export { square, add, subtract as default };

export const isAdult = (age) => {
	if(age >= 18){
		return true;
	}
	else{
		return false;
	}
}

export const canDrink = (age) => {
	if(age >= 21){
		return true;
	}
	else{
		return false;
	}
}

const isSenior = (age) => age >= 65;

export default isSenior;

/*
export {
	square,
	add
};
*/