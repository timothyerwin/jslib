// simple hashing function adapted from: 
// https://stackoverflow.com/questions/26057572/string-to-unique-hash-in-javascript-jquery
//
// usage is hash(string, [optional] limiter)
// example: hash('hello world', 100); // returns 52
// limiter is useful for hashing to a hash table with size of l
// 

const hash = (s, l = 0) => { 
	let hash = 0; 

	if(!s.length) {
    return s;
  }

	for(let i = 0; i < s.length; i++) {
		let char = s[i].charCodeAt(0);
		hash = ((hash << 5)-hash) + char; 
		hash &= hash;
	}

	return l && Math.abs(hash % l) || hash;
};
