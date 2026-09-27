/* Modelos deterministas didácticos. Sin dependencias externas. */
(function(root){
 'use strict';
 function capital(c,i,n){return i===0?c*n:c*Math.expm1(n*Math.log1p(i))/i;}
 function epidemic(model,p){
  const latent=model.includes('E'),death=model.includes('D'),duration=p.duration, beta=p.r0/duration,mu=death?p.mortality/100/duration:0,gamma=1/duration-mu,sigma=1/p.latency;
  let y=[p.population-p.initial,p.initial*0,p.initial,0,0];const data=[];let peak={day:0,value:p.initial},maxError=0;
  const f=z=>{const incidence=beta*z[0]*z[2]/p.population;return [-incidence,latent?incidence-sigma*z[1]:0,(latent?sigma*z[1]:incidence)-(gamma+mu)*z[2],gamma*z[2],mu*z[2]];};
  const dt=.1, steps=Math.round(p.days/dt);
  for(let k=0;k<=steps;k++){
   const day=k*dt;if(y[2]>peak.value)peak={day,value:y[2]};
   if(k%10===0)data.push({x:day,S:y[0],E:y[1],I:y[2],R:y[3],D:y[4],incidence:beta*y[0]*y[2]/p.population,cumulative:p.population-y[0]});
   if(k===steps)break;
   const a=f(y),b=f(y.map((v,j)=>v+dt*a[j]/2)),c=f(y.map((v,j)=>v+dt*b[j]/2)),d=f(y.map((v,j)=>v+dt*c[j]));
   y=y.map((v,j)=>v+dt*(a[j]+2*b[j]+2*c[j]+d[j])/6);
   maxError=Math.max(maxError,Math.abs(y.reduce((a,b)=>a+b,0)-p.population));
  }
  return {data,peak,beta,gamma,mu,maxError,final:data.at(-1)};
 }
 const api={capital,epidemic};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Models=api;
})(typeof window!=='undefined'?window:globalThis);
