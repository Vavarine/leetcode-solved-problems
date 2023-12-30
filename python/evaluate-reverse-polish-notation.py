class Solution:
  def evalRPN(self, tokens: list[str]) -> int:
    stack = []
    
    for char in tokens:
      if char == "+":
        a, b = stack.pop(), stack.pop()
        stack.append(b + a)
      elif char == "-":
        a, b = stack.pop(), stack.pop()
        stack.append(b - a)
      elif char == "*":
        a, b = stack.pop(), stack.pop()
        stack.append(b * a)
      elif char == "/":
        a, b = stack.pop(), stack.pop()
        stack.append(int(b / a))
      else:
        stack.append(int(char))
        
        
    return stack[0]


solution = Solution()

print(solution.evalRPN(["2","1","+","3","*"]))