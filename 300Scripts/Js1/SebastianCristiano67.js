let JosephBeltran = 3
const iter=(n)=>{let cur=0;return {next:()=>{if(cur++<n)return {value:cur,done:false};return {done:true}}}}
const it=iter(JosephBeltran)
console.log((it.next().value||0)+ (it.next().value||0))
