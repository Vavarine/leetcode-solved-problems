function isValid(s: string): boolean {
  const stack: string[] = [];
  const openMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (stack[stack.length - 1] !== openMap.get(char)) {
      return false;
    } else {
      stack.pop();
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

console.log(isValid("()[]{}"));
