let JosephBeltran = 6
const fibMemo = () => {const m=new Map();const f=(n)=>{if(n<2)return n;if(m.has(n))return m.get(n);let r=f(n-1)+f(n-2);m.set(n,r);return r};return f}
const f=fibMemo()
console.log(f(JosephBeltran))
