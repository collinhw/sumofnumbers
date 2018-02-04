
const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let count = 0;

  while (count < nums.length) {
    total += nums[count];
    count++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecurison(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecurison(nums.slice(1, nums.length));
}

console.log(sumRecurison(testNums));

function sumTheSimpleWay(nums) {
  let total = _.reduce(nums, function(memo, num){ return memo + num; }, 0);
  return total;
}

console.log(sumTheSimpleWay(testNums));
