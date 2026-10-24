// Helpers compartilhados das demonstrações GrupoGest (sem dependências externas)
const GG={
  $:id=>document.getElementById(id),
  brl:n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}),
  int:n=>Math.round(n).toLocaleString('pt-BR'),
  pct:n=>n.toFixed(1).replace('.',',')+'%',
  csv(name,rows){const esc=v=>'"'+String(v).replace(/"/g,'""')+'"';const t='﻿'+rows.map(r=>r.map(esc).join(';')).join('\r\n');
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'text/csv;charset=utf-8'}));a.download=name;document.body.appendChild(a);a.click();a.remove();},
  tween(el,to,fmt,ms=420){const from=el._v||0;const t0=performance.now();el._v=to;(function f(t){const p=Math.min(1,(t-t0)/ms);const e=1-Math.pow(1-p,3);el.textContent=fmt(from+(to-from)*e);if(p<1)requestAnimationFrame(f)})(t0)},
  modal(){const m=document.getElementById('mod');if(m)m.classList.toggle('on')},
  rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=document.getElementById('mod');if(m)m.classList.remove('on')}});
