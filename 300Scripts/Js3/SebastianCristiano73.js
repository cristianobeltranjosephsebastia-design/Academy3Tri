let JosephBeltran = (Math.pow(5,5)%200)
function wait(ms){return new Promise(r=>setTimeout(()=>r(ms),0))}
wait(JosephBeltran%5).then(v=>console.log(v))
