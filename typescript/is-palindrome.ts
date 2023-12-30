function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  const chars = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) return false;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
console.log(isPalindrome("race a car"));
