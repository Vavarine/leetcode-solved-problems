from typing import List
'''
  This code uses a decreasing stack to keep track of temperatures that are waiting for a warmer day.
  The stack stores temperatures in decreasing order along with their indices (Monotonic Decreasing).
  When a warmer temperature is found, it resolves as many temperatures as it can 
  (i.e., as long as the stack is not empty and the top of the stack is less than the current temperature).
'''
def dailyTemperature(temperatures: List[int]) -> List[int]:
  res = [0] * len(temperatures)
  stack: List[List[int]] = []

  for i, t in enumerate(temperatures):
    # index -1 gets the last item of list, empty list is false when empty and true otherwise
    while stack and t > stack[-1][0]:
      stackT, stackI = stack.pop()
      res[stackI] = i - stackI
    
    stack.append([t, i])  
  return res
      
print(dailyTemperature([55,38,53,81,61,93,97,32,43,78]))