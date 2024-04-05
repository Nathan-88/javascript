#!/usr/bin/python3
# def mutation(arr):
#     arr[0].upper()
#     arr[1].upper()
#     for i in arr[1]:
#         if i not in arr[0]:
#             return False
#     return True

# print(mutation(["hello", "hello"]))

# def getIndexToIns(nums: list, digit: int):
#     nums.sort()
#     nums.append(digit)
#     nums.sort()
#     return nums.index(digit)


# print(getIndexToIns([40, 60], 50))
# print(getIndexToIns([20,3,5], 19))

# obj1 = {
#     "name": "John",
#     "age": 30,
#     "cars": ["bens", "ferrari", "Honda"]
# }
# keys = list(obj1.keys())
# print(keys[0])


obj = {
    "name": "john",
    "age": 30
}
obj1 = obj

obj1["name"] = "peter"
print(obj["name"])
print(id(obj1))
print(id(obj))
print(obj1 == obj)


# def print_num(num):
#     print(num)

# num = print_num
# num(12)
