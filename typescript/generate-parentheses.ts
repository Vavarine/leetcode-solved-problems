/**
 * @url https://leetcode.com/problems/generate-parentheses/description/
 *
 *
 */
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const stack: string[] = [];

  function backtracking(open: number, closed: number) {
    if (open === closed && closed === n) {
      result.push(stack.join(""));

      return;
    }

    if (open < n) {
      stack.push("(");
      backtracking(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(")");
      backtracking(open, closed + 1);
      stack.pop();
    }
  }

  backtracking(0, 0);

  return result;
}

console.log(generateParenthesis(3));
