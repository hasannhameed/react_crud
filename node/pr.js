const str = "hey js you are amazing";
const vowels = ["a", "e", "i", "o", "u"];

function countVowel(data) {
  let count = 0;
  data
    .toLowerCase()
    .split("")
    .forEach((element) => {
      vowels.includes(element) && count++;
    });
  return count;
}

let countvowel = countVowel(str);
console.log(countvowel);
