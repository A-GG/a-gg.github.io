"use strict";(self.webpackChunkw1zd_lair=self.webpackChunkw1zd_lair||[]).push([[4805],{5415:function(n,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=s(8453),t=s(6540);function p(n){const a=Object.assign({h2:"h2",a:"a",span:"span",p:"p",img:"img",h3:"h3",strong:"strong",ul:"ul",li:"li",ol:"ol"},(0,e.RP)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.h2,{id:"适用场景",style:{position:"relative"}},t.createElement(a.a,{href:"#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF","aria-label":"适用场景 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"适用场景"),"\n",t.createElement(a.p,null,"全局事件总线（Global Event Bus）一般用于远距离（非父子）组件之间的数据通信，是 Vue 中全局状态管理方案的一种。"),"\n",t.createElement(a.p,null,"下图中的组件 B 和 组件 D 之间进行通信，则可以通过 Global Event Bus 来实现。"),"\n",t.createElement(a.img,{src:"https://raw.githubusercontent.com/w1zd/image-hosting/main/img/2022/05/10/11-48-09-dac00e9525d0a78be5f994cf7254e432-comps-0a2b45.png",alt:""}),"\n",t.createElement(a.h2,{id:"基本原理",style:{position:"relative"}},t.createElement(a.a,{href:"#%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86","aria-label":"基本原理 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"基本原理"),"\n",t.createElement(a.p,null,"全局事件总线（Global Event Bus）本质上是通过在全局创建一个空的 Vue 实例，当前项目内所有的组件皆可向该实例上注册事件，相应的，在项目内任意组件内触发该事件，即可实现组件之间的通讯。"),"\n",t.createElement(a.h2,{id:"使用方法",style:{position:"relative"}},t.createElement(a.a,{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95","aria-label":"使用方法 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"使用方法"),"\n",t.createElement(a.h3,{id:"第一步创建实例",style:{position:"relative"}},t.createElement(a.a,{href:"#%E7%AC%AC%E4%B8%80%E6%AD%A5%E5%88%9B%E5%BB%BA%E5%AE%9E%E4%BE%8B","aria-label":"第一步创建实例 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第一步：创建实例"),"\n",t.createElement(a.p,null,"创建一个空的 Vue 实例"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> EventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"第二步注册事件",style:{position:"relative"}},t.createElement(a.a,{href:"#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E6%B3%A8%E5%86%8C%E4%BA%8B%E4%BB%B6","aria-label":"第二步注册事件 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第二步：注册事件"),"\n",t.createElement(a.p,null,"在组件 A 中使用 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$on</code>'}})," 方法向 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">EventBus</code>'}})," 注册事件"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../eventbus"</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">increaseCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">"increase-count"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>increaseCount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"第三步-触发事件",style:{position:"relative"}},t.createElement(a.a,{href:"#%E7%AC%AC%E4%B8%89%E6%AD%A5-%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6","aria-label":"第三步 触发事件 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第三步： 触发事件"),"\n",t.createElement(a.p,null,"在组件 D 中使用 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$emit</code>'}})," 方法触发注册在 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">EventBus</code>'}})," 上的事件"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickHandler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../eventbus"</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"increase-count"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"第四步解绑事件",style:{position:"relative"}},t.createElement(a.a,{href:"#%E7%AC%AC%E5%9B%9B%E6%AD%A5%E8%A7%A3%E7%BB%91%E4%BA%8B%E4%BB%B6","aria-label":"第四步解绑事件 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第四步：解绑事件"),"\n",t.createElement(a.p,null,"经过上面三步之后，我们已经可以实现组件 A 和组件 D 之间的通信啦！但是要注意，我们注册给 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">EventBus</code>'}})," 的事件，需要在组件 A 销毁的时候取消注册"),"\n",t.createElement(a.p,null,"在组件 A 的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">beforeDestory</code>'}})," 钩子函数中使用 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$off</code>'}})," 方法取消已注册的事件"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../eventbus"</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">increaseCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">"increase-count"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>increaseCount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">beforeDestory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    EventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">\'increase-count\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>increaseCount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"核心-api",style:{position:"relative"}},t.createElement(a.a,{href:"#%E6%A0%B8%E5%BF%83-api","aria-label":"核心 api permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"核心 API"),"\n",t.createElement(a.h3,{id:"on",style:{position:"relative"}},t.createElement(a.a,{href:"#on","aria-label":"on permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$on</code>'}})),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"参数"),"：\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">{string} event</code>'}}),"  命名需要使用 Kebab Case\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">{Function} callback</code>'}})),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"用法"),"：\n监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。"),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"示例"),"："),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">vm<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">\'test\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nvm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">\'test\'</span><span class="token punctuation">,</span> <span class="token string">\'hi\'</span><span class="token punctuation">)</span>\n<span class="token comment">// => "hi"</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"emit",style:{position:"relative"}},t.createElement(a.a,{href:"#emit","aria-label":"emit permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$emit</code>'}})),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"参数"),"："),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">{string} eventName</code>'}}),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[...args]</code>'}}),"\n触发当前实例上的事件。附加参数都会传给监听器回调。"),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"示例"),"："),"\n",t.createElement(a.p,null,"只配合一个事件名使用 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$emit</code>'}}),"："),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">vm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">\'事件名\'</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"传递额外的参数使用 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$emit</code>'}}),":"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>\nvm<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">\'trigger-foo\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span>\nvm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">\'trigger-foo\'</span><span class="token punctuation">,</span> <span class="token string">\'Hello world\'</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"off",style:{position:"relative"}},t.createElement(a.a,{href:"#off","aria-label":"off permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$off</code>'}})),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"参数"),"："),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">{string | Array&lt;string>} event</code>'}})," (只在 2.2.2+ 支持数组)\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">{Function} [callback]</code>'}})),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"用法"),"："),"\n",t.createElement(a.p,null,"移除自定义事件监听器。"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"如果没有提供参数，则移除所有的事件监听器 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$emit()</code>'}})),"\n",t.createElement(a.li,null,"如果只提供了事件，则移除该事件所有的监听器 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">$emit('事件名称')</code>"}})),"\n",t.createElement(a.li,null,"如果同时提供了事件与回调，则只移除这个回调的监听器 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">$emit('事件名称', 事件处理函数)</code>"}})),"\n"),"\n",t.createElement(a.h2,{id:"总结",style:{position:"relative"}},t.createElement(a.a,{href:"#%E6%80%BB%E7%BB%93","aria-label":"总结 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"总结"),"\n",t.createElement(a.p,null,"借助 Vue 提供的相关 API，使用全局事件总线可以非常方便的实现非父子组件之间的通信。"),"\n",t.createElement(a.p,null,"全局事件总线这种方案实际开发中使用的较少，几乎用不到，Vue3 中已经将其弃用，因为其存在如下问题："),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"破坏了项目数据流，会让项目后续维护困难"),"\n",t.createElement(a.li,null,"所有的事件都注册在同一对象上，无法做模块划分，且事件命名易产生冲突"),"\n",t.createElement(a.li,null,"使用",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$off</code>'}}),"取消注册事件需要和",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$on</code>'}}),"成对出现，但是经常会被忘记"),"\n"),"\n",t.createElement(a.p,null,"VueX 以及 Pinia 等工具提供了更为清晰完善的全局状态管理方案，若项目中遇到较为复杂的组件通信场景，首先考虑这些工具，而不是使用 Global Event Bus。"))}var c=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.RP)(),n.components);return a?t.createElement(a,n,t.createElement(p,n)):p(n)},l=s(1468),o=s(7947),u=s(1327),r=s(2171),i=s(9739);const k=n=>{let{data:a,pageContext:s,children:p}=n;const c=a.mdx,{title:k,postCopyright:m,author:g,siteUrl:d}=a.site.siteMetadata,{previous:h,next:E}=s,v=(0,l.d4)((n=>n.isDarkMode));return(0,t.useEffect)((()=>{(0,i.A)(".post-content img",{background:"#292a2d"})}),[]),t.createElement(o.A,{isFocus:!1,title:c.frontmatter.title,description:c.frontmatter.description},t.createElement("div",{className:"container"},t.createElement("article",{className:"post-wrap"},t.createElement("header",{className:"post-header"},t.createElement("h1",{className:"post-title"},c.frontmatter.title),t.createElement("div",{className:"post-meta"},a.site.siteMetadata.author.name,"  /  ",t.createElement("span",{className:"post-time"},c.frontmatter.date)," ")),t.createElement("div",{className:"post-content"},t.createElement(e.xA,null,p)),m&&t.createElement("section",{className:"post-copyright"},t.createElement("p",{className:"copyright-item"},t.createElement("span",null,"Author: "),t.createElement("span",null,g.name)),t.createElement("p",{className:"copyright-item"},t.createElement("span",null,"Permalink:"),t.createElement("span",null,t.createElement("a",{href:d+c.fields.slug}," ",d+c.fields.slug," "))),t.createElement("p",{className:"copyright-item"},t.createElement("span",null,"License: "),t.createElement("span",null,t.createElement("a",{href:"http://creativecommons.org/licenses/by-nc/4.0/"},"CC-BY-NC-4.0")))),t.createElement("section",{className:"post-tags"},t.createElement("div",null,t.createElement("span",null,"Tag(s):"),t.createElement("span",{className:"tag"},0!==c.frontmatter.tags.length&&c.frontmatter.tags.map((n=>t.createElement("a",{key:n,href:`/tag/${n}`},"#",n))))),t.createElement("div",null,t.createElement("a",{href:"#/",onClick:()=>{window.history.back()}},"back"),t.createElement("span",null," · "),t.createElement("a",{href:a.site.siteMetadata.siteUrl},"home"))),t.createElement("section",{className:"post-nav"},h?t.createElement("a",{className:"prev",rel:"prev",href:h.fields.slug},h.frontmatter.title):t.createElement("span",{className:"prev"},"No More"),E?t.createElement("a",{className:"next",rel:"next",href:E.fields.slug},E.frontmatter.title):t.createElement("span",{className:"next"},"No More")),t.createElement(r.A,{id:"comment",repo:"w1zd/w1zd.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyODg3MTA5NjA=",category:"Announcements",categoryId:"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDE1OTcy",mapping:"og:title",theme:`https://wizd.dev/giscus-themes/${v?"dark":"light"}.css`,reactionsEnabled:"1",loading:"lazy"}),c.frontmatter.toc&&t.createElement(u.A,null))))};function m(n){return t.createElement(k,n,t.createElement(c,n))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-vue中的-global-event-bus-mdx-1f1023ea3b6636cb4e44.js.map