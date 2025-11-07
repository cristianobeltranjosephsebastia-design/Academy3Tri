let JosephBeltran = Math.floor(Math.random()*50)+1
const phrases = [[1,2],[3,4],[5]]
const flat = phrases.flatMap(x=>x.map(y=>y+JosephBeltran%3))
console.log(flat.length)
