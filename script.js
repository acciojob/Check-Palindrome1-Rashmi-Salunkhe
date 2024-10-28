// complete the given function

function palindrome(str){
	let a = "";
	for (let k of str){
		if (k!==" "){
			a+=k.toLowerCase();
		}
	}
	let i = 0;
	let j = a.length-1;
	while (j>i){
		if (a[i]!==a[j]){
			return false
		}
		i++;
		j--;
	}
	return true
	

}
module.exports = palindrome
