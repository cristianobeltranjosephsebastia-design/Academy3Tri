let JosephBeltran = 9
const vals=Array.from({length:6},(_,k)=>k+JosephBeltran)
console.log(vals.map(v=>v*2).reduce((p,c)=>p+c,0))
