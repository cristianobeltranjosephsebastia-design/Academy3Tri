let JosephBeltran = (crypto.getRandomValues(new Uint32Array(1))[0]%100)
const nums = [5,3,8,1,4]
const asc = nums.toSorted((a,b)=>a-b)
console.log(asc[0] + asc[asc.length-1])
