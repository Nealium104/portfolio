#DSA #DSA-Solutions 
https://leetcode.com/problems/contains-duplicate/description/
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**
**Input:** nums = [1,2,3,1]
**Output:** true
**Explanation:**
The element 1 occurs at the indices 0 and 3.

**Example 2:**
**Input:** nums = [1,2,3,4]
**Output:** false
**Explanation:**
All elements are distinct.

**Example 3:**
**Input:** nums = [1,1,1,3,3,4,3,2,4,2]
**Output:** true
**Constraints:**
- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`
# General Thoughts
Overall, this is a really easy one. In languages with a set feature, it's as simple as comparing lengths. This gives you a linear time complexity, but for large datasets, you might want to store num values in a hash table, looking them up as you go, and doing an early return for the first duplicated value. Since Go doesn't have the equivalent of a set, I've implemented this second type of solution in that language.
# Solution (Python)
```python
class Solution:
	def containsDuplicate(self, nums: List[int]) -> bool:
		if len(nums) == len(set(nums)):
			return False
		return True
```
Very self explanatory. Len returns the length of an iterable, and in python we can just wrap the nums list to filter out any duplicate values.
# Solution (TypeScript)
```typescript
function containsDuplicate(nums: number[]): boolean {
    let newSet = new Set(nums)
    if(nums.length === newSet.size) {
        return false
    }
    return true
};
```
Again, super simple. We make a set from the nums array and compare lengths.
# Solution CSharp
```C#
public class Solution {
    public bool ContainsDuplicate(int[] nums) 
    {
        if(nums.Length == new HashSet<int>(nums).Count)
        {
            return false;
        }
        return true;
    }
}
```
Very easy again. We make a HashSet from the values in nums and then compare numbers.
# Solution Go
```go
func containsDuplicate(nums []int) bool {
    seen := make(map[int]struct{})

    for _, num := range nums {
        if _, exists := seen[num]; exists {
            return true
        }
        seen[num] = struct{}{}
    }
    return false
}
```
First we initialize a map of empty structs (we don't use int or bool because those would take up extra memory), then we loop through the `nums` array, looking for it in the `seen` map of structs. If it finds a value, we return true, if it doesn't, we add it to the seen map. If we get through the whole `nums` array, we know it doesn't have duplicates, and we return false.