let JosephBeltran = (Math.trunc(Math.cos(95)*100))
const m = new Map([[1,JosephBeltran],[2,JosephBeltran+1]])
let s = 0
for(const v of m.values()) s+=v
console.log(s)
