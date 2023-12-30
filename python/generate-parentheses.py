from typing import List

def generateParenthesis(n: int) -> list[str]:
  result = []
  stack = []
  
  def backtracking(open, closed):
    if open == closed == n:
      result.append(''.join(stack))
      
      return
    if open < n:
      stack.append("(")
      backtracking(open + 1, closed)
      stack.pop()

    if closed < open:
      stack.append(")")
      backtracking(open, closed + 1)
      stack.pop()

  backtracking(0, 0)

  return result

print(generateParenthesis(3))
    
    
    