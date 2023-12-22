// with Map
function isAnagram(s: string, t: string): boolean {
  const letterQuantityMap = new Map<string, number>();
  const sArr = s.split("");
  const tArr = t.split("");

  for (const curLetter of sArr) {
    const currentLetterQuantity = letterQuantityMap.get(curLetter) ?? 0;

    letterQuantityMap.set(curLetter, currentLetterQuantity + 1);
  }

  for (const curLetter of tArr) {
    const currentLetterQuantity = letterQuantityMap.get(curLetter) ?? 0;

    letterQuantityMap.set(curLetter, currentLetterQuantity - 1);
  }

  return Array.from(letterQuantityMap).every(([key, value]) => value === 0);
}

// First solution
// function isAnagram(s: string, t: string): boolean {
//   const sArr = s.split("");
//   let tArr = t.split("");

//   sArr.forEach((letter) => {
//     if (tArr.includes(letter)) {
//       const indexToRemove = tArr.indexOf(letter);

//       tArr.splice(indexToRemove, 1);
//     }
//   });

//   if (tArr.length === 0) return true;

//   return false;
// }

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
