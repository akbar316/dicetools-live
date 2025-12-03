import{c as l,J as n,K as i,N as r,O as c,Q as m}from"./index-Dgykt2cV.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],h=l("check",g);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],w=l("star",x),u=["ai-image-gen","logo-generator","ai-image-editor","ai-hairstyle","ai-summarizer","ai-grammar","ai-translator","code-formatter","json-validator","meta-tag-gen","citation-gen","flashcard-maker","math-solver","seo-content-analyzer","backlink-checker","keyword-research","article-idea-gen"],o=5,k=t=>u.includes(t),d=()=>{const t=localStorage.getItem("ai_usage");return t?JSON.parse(t):{count:0,date:new Date().toISOString().split("T")[0]}},p=()=>{const t=new Date().toISOString().split("T")[0];let e=d();e.date===t?e.count+=1:e={count:1,date:t},localStorage.setItem("ai_usage",JSON.stringify(e))},f=async t=>{const e=new Date().toISOString().split("T")[0],a=n(c,"userUsage",`${t}_${e}`),s=await i(a);return s.exists()?s.data().count:(await r(a,{userId:t,date:e,count:0}),0)},b=async t=>{const e=new Date().toISOString().split("T")[0],a=n(c,"userUsage",`${t}_${e}`),s=await i(a);s.exists()?await m(a,{count:s.data().count+1}):await r(a,{userId:t,date:e,count:1})},v=async t=>{if(t)return await f(t)>=o;{const e=d(),a=new Date().toISOString().split("T")[0];return e.date===a&&e.count>=o}},S=async t=>{t?await b(t):p()},U=t=>{var a,s;const e=document.createElement("div");e.className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4",e.innerHTML=`
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-lg w-full transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-in">
    <div class="p-8 text-center">
      <h2 class="text-3xl font-extrabold mb-4 text-slate-900 dark:text-white">Free Limit Reached</h2>
      <p class="text-slate-600 dark:text-slate-400 mb-6 mx-auto max-w-sm">You've used your ${o} daily free credits. Upgrade for more access.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left my-8">
        
        <div class="border dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-700/50">
          <h3 class="font-bold text-lg text-slate-800 dark:text-white">Free</h3>
          <p class="text-2xl font-bold text-slate-900 dark:text-white">$0<span class="text-sm font-medium text-slate-500">/day</span></p>
          <ul class="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
            <li>- ${o} AI Uses</li>
            <li>- Basic Tools</li>
          </ul>
        </div>

        <div class="border-2 border-primary-500 rounded-lg p-4 bg-white dark:bg-slate-800 relative">
            <div class="absolute top-0 -mt-3.5 w-full text-center"><span class="px-3 py-1 text-xs font-bold text-white bg-primary-500 rounded-full">POPULAR</span></div>
            <h3 class="font-bold text-lg text-primary-500">Standard</h3>
            <p class="text-2xl font-bold text-slate-900 dark:text-white">$9<span class="text-sm font-medium text-slate-500">/mo</span></p>
            <ul class="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                <li>- 500 AI Uses</li>
                <li>- Advanced Tools</li>
            </ul>
        </div>

        <div class="border dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-700/50">
            <h3 class="font-bold text-lg text-slate-800 dark:text-white">Premium</h3>
            <p class="text-2xl font-bold text-slate-900 dark:text-white">$29<span class="text-sm font-medium text-slate-500">/mo</span></p>
            <ul class="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                <li>- Unlimited AI Uses</li>
                <li>- All Tools</li>
            </ul>
        </div>

      </div>

      <button id="upgradeBtn" class="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-full">View Pricing & Upgrade</button>
      <button id="closeBtn" class="mt-4 text-sm text-slate-500 dark:text-slate-400 hover:underline">Maybe later</button>
    </div>
  </div>

  <style>
    @keyframes modal-in {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    .animate-modal-in { animation: modal-in 0.3s forwards; }
  </style>
    `,document.body.appendChild(e),(a=document.getElementById("upgradeBtn"))==null||a.addEventListener("click",()=>{t(),e.remove()}),(s=document.getElementById("closeBtn"))==null||s.addEventListener("click",()=>{e.remove()})};export{h as C,w as S,S as a,d as b,v as c,f as g,k as i,U as s};
