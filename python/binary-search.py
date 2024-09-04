def search(nums: list[int], target: int) -> int:
    leftIndex, rightIndex = 0, len(nums) - 1

    while leftIndex <= rightIndex:
        midIndex = (rightIndex + leftIndex) // 2

        print(leftIndex, rightIndex, midIndex, nums[midIndex])

        if nums[midIndex] == target:
            return midIndex
        if nums[midIndex] > target:
            rightIndex = midIndex - 1
        else:
            leftIndex = midIndex + 1
    
    return - 1

print(search([-1,0,3,5,9,12], 9))

# first solution
# def search(nums: list[int], target: int) -> int:
#     def recursive(windowFirst: int, windowLast: int):
#         windowLength = windowLast - windowFirst
        
#         if(windowLength <= 1):
#             if(nums[windowFirst] == target): return windowFirst
#             if(nums[windowLast] == target): return windowLast

#             return -1

#         midpointIndex = windowFirst + round((windowLast - windowFirst) / 2)        
#         midpointValue = nums[midpointIndex] 
        
#         if(midpointValue == target):
#             return midpointIndex

#         if(midpointValue < target):
#             return recursive(midpointIndex, windowLast)

#         if(midpointValue > target):
#             return recursive(windowFirst, midpointIndex)

#     return recursive(0, len(nums) - 1)
