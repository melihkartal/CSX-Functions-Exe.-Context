// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = "";

function jerry(str) {
	const result = "Jerry" + kramer(str);
  return calls = result;
}

function george(str) {
	const result = "George" + elaine(str);
  return result;
}

function elaine(str) {
const result = "Elaine"
return result;
}

function kramer(str) {
const result = "Kramer" + george(str)
return result;
}



calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'