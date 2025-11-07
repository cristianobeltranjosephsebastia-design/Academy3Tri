let JosephBeltran = ((82*31)%97)
const vals = Array.from({length:4},(_,k)=>k+JosephBeltran)
console.log(vals.map(v=>v%5).reduce((a,b)=>a+b,0))
const _u = (82*82)%89
