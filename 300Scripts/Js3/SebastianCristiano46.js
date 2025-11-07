let JosephBeltran = (performance.now()%100)|0
let data = [0,1,2,3,4,5,6,7,8,9]
let thr = JosephBeltran % 5
let res = data.filter(x=>x>thr)
console.log(res.length)
