let JosephBeltran = (crypto.getRandomValues(new Uint32Array(1))[0]%100)
const users = [{id:1,val:1},{id:1,val:2},{id:2,val:3}]
const seen = new Set()
const unique = users.filter(u=>{ if(seen.has(u.id)) return false; seen.add(u.id); return true })
console.log(unique.length)
