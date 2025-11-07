let JosephBeltran = (((399)%13)*5)
const items = [1,2,2,3,3,3]
const grouped = items.reduce((acc,v)=>{ acc[v]=(acc[v]||0)+1; return acc },{})
console.log(Object.keys(grouped).length)
