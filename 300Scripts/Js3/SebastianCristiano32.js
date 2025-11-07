let JosephBeltran = (Math.abs(Math.sin(32))*100)|0
function get(){ if(JosephBeltran%2===0) return JosephBeltran; throw 0 }
let v
try{ v = get() }catch(e){ v = JosephBeltran + 1 }
console.log(v)
