/**
 * @url https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * This approach uses a stack to store the number until a operator appears,
 * then the operation is done with the popped 2 items of the stack
 * being replaced by the result
 */
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  const operatorMap = new Map([
    ["+", (a: number, b: number) => a + b],
    ["-", (a: number, b: number) => a - b],
    ["*", (a: number, b: number) => a * b],
    ["/", (a: number, b: number) => Math.trunc(a / b)],
  ]);

  for (const token of tokens) {
    if (operatorMap.has(token)) {
      const a = stack.pop();
      const b = stack.pop();

      /**
       * In a real case scenario if `a` or `b` is undefined the input would not be a valid RPN
       */

      // @ts-ignore this line assumes that the input is a valid RPN
      stack.push(operatorMap.get(token)(b, a));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
