from typing import List

"""
  The trick is to create an list with each item being the cars position and speed ordering by position,
  then iterating through the itens calculate the time needed to finish the course, 
  putting the first time in a stack, if the subsequent time is slower then the top car on the stack,
  we are garante to have another car fleet, this means we have to put it in the stack too.
  The return becomes the size of the stack.
"""
def carFleet(target: int, position: List[int], speed: List[int]) -> int:
  # this is a List Comprehension in Python3, a shorter way to create a list with pre existent lists
  cars = [[p, s] for p, s in zip(position, speed)]
  stack = [] # [position, speed]
  
  for p, s in sorted(cars)[::-1]: # [::-1] reverses the array without modifying
    time = (target - p) / s

    if len(stack) == 0 or time > stack[-1]:
      stack.append(time)
    
  return len(stack)

# First Solution
# def carFleet(target: int, position: List[int], speed: List[int]) -> int:
#   cars: List[List[int]] = [] # [position, speed]
#   stack: List[int] = [] # [position, speed]

#   for i, p in enumerate(position):
#     cars.append([p, speed[i]])
    
#   cars.sort(key=lambda e: e[0], reverse=True)
  
#   for i, car in enumerate(cars):
#     time = (target - car[0]) / car[1]
    
#     if i == 0:
#       stack.append(time)

#     if stack[-1] < time:
#       stack.append(time)
    
#   return len(stack)

print(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]))
    
    