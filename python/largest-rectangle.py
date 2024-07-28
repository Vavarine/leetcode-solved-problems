# def largestRectangleArea(heightStack: list[int]) -> int:
#   max_area = 0

#   for i, height in enumerate(heightStack):
#     sub_heghtsStack = heightStack[i:]

#     for j, sub_height in enumerate(sub_heghtsStack):
#       sub_arr = sub_heghtsStack[:j+1]
#       area = min(sub_arr) * len(sub_arr)
    
#       if(area > max_area):
#         max_area = area

#   return max_area

def largestRectangleArea(heights: list[int]) -> int:
  max_area = 0
  indexStack = []
  heightStack = []

  for i, h in enumerate(heights):
    if(i == 0):
      indexStack.append(i)
      heightStack.append(h)
      continue

    if(h > heightStack[-1]):
      indexStack.append(i)
      heightStack.append(h)
      continue

    if(h == heightStack[-1]):
      continue

    while heightStack and h < heightStack[-1]:
      if(len(indexStack) > len(heightStack)):
        indexStack.pop()

      area = heightStack[-1] * (i - indexStack[-1]) 
      max_area = max(max_area, area)
      heightStack.pop()

    heightStack.append(h)

  while indexStack:
    area = heightStack[-1] * (len(heights) - indexStack[-1]) 
    max_area = max(max_area, area)
    heightStack.pop()
    indexStack.pop()

  return max_area


# def largestRectangleArea(heightStack: list[int]) -> int:
#   max_area = 0
#   stack = [] # [index, height]

#   for i, h in enumerate(heightStack):
#     start = i
#     stack.append([i, h]) 

#     while stack and stack[-1][1] > h:
#       index, height = stack.pop()
#       maxArea = max(maxArea, height * (i - index))
#       start = index

#     stack.append([start, h])
    


    # while height 

  # return max_area

# print(largestRectangleArea([2,1,5,6,2,3]))
# print(largestRectangleArea([2,4]))
# print(largestRectangleArea([0,0]))
print(largestRectangleArea([1,2,2]))