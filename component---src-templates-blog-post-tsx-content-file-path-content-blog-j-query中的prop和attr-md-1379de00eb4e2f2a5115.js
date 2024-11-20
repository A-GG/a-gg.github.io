"use strict";(self.webpackChunkw1zd_lair=self.webpackChunkw1zd_lair||[]).push([[2684],{7217:function(n,a,e){e.r(a),e.d(a,{default:function(){return m}});var t=e(8453),s=e(6540);function c(n){const a=Object.assign({p:"p",span:"span",br:"br",ol:"ol",li:"li"},(0,t.RP)(),n.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"在JQuery中，对CheckBox的操作分两个阶段，一个是JQuery1.6之前的版本，一个是1.6之后的版本"),"\n",s.createElement(a.p,null,"在1.6之前，我们这么做："),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="markup"><pre class="language-markup"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>checkbox<span class="token punctuation">\'</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>checkbox<span class="token punctuation">\'</span></span><span class="token punctuation">/></span></span> \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"> \n<span class="token keyword">var</span> isChecked <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'#checkbox\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'#checkbox\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"但是细心的同学会发现，在jQuery1.6之后，如果还像上面这么做，那肯定会出问题：\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">$('#checkbox').attr('checked');</code>"}}),"获取到的值并不是",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">true</code>'}}),"和",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">false</code>'}}),"，而是",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">checked</code>'}}),"或者",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">undefined</code>'}})),"\n",s.createElement(a.p,null,"那在1.6之后如何进行操作呢?"),"\n",s.createElement(a.p,null,"jQuery在之后的版本中对属性和特性进行了比较细致的区分，什么是特性呢？",s.createElement(a.br),"\n","特性就是像 ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">checked</code>'}}),"，",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">selectedIndex</code>'}}),", ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">tagName</code>'}}),", ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">nodeName</code>'}}),", ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">nodeType</code>'}}),", ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">ownerDocument</code>'}}),", ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">defaultChecked</code>'}}),", 和",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">defaultSelected</code>'}}),"等等这些。"),"\n",s.createElement(a.p,null,"那prop()和attr()到底有什么区别呢？"),"\n",s.createElement(a.ol,null,"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"于build-in属性，attribute和property共享数据，attribute更改了会对property造成影响，反之亦然，但是两者的自定义属性是独立的数据，即使name一样，也互不影响，看起来是下面这张图，但是IE6、7没有作区分，依然共享自定义属性数据"),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"并不是所有的attribute与对应的property名字都一致，比如刚才使用的attribute 的class属性，使用property操作的时候应该是这样className",s.createElement(a.br),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">t.className='active2';</code>"}})),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"对于值是true/false的property，类似于input的checked attribute等，attribute取得值是HTML文档字面量值，property是取得计算结果，property改变并不影响attribute字面量，但attribute改变会一向property计算",s.createElement(a.br),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&lt;input id="test3" type="checkbox"/></code>'}})),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\t<span class="token keyword">var</span> t<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'test3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false;</span>\n\n    t<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">,</span><span class="token string">\'checked\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//checked</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>\n\n    t<span class="token punctuation">.</span>checked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//checked</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span></code></pre></div>'}}),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"对于一些和路径相关的属性，两者取得值也不尽相同，但是同样attribute取得是字面量，property取得是计算后的完整路径",s.createElement(a.br),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&lt;a id="test4" href="#">Click&lt;/a></code>'}})),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> t<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'test4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'href\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//#</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//file:///C:/Users/bsun/Desktop/ss/anonymous.html#</span></code></pre></div>'}}),"\n"),"\n"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\n|Attribute/Property|.attr()|.prop()|\n|--|--|--|\n|accesskey|√| |\n|align|√| |\n|async|√|√|\n|autofocus|√|√|\n|checked|√|√|\n|class|√| |\n|contenteditable|√| |\n|draggable|√| |\n|href|√| |\n|id|√| |\n|label|√| |\n|location ( i.e. window.location )|√|√|\n|multiple|√|√|\n|readOnly|√|√|\n|rel|√| |\n|selected|√|√|\n|src|√| |\n|tabindex|√| |\n|title|√| |\n|type|√| |\n|width ( if needed over .width() )|√| |</code></pre></div>'}}))}var p=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,t.RP)(),n.components);return a?s.createElement(a,n,s.createElement(c,n)):c(n)},l=e(1468),o=e(7947),u=e(1327),r=e(2171),i=e(9739);const k=n=>{let{data:a,pageContext:e,children:c}=n;const p=a.mdx,{title:k,postCopyright:m,author:d,siteUrl:g}=a.site.siteMetadata,{previous:h,next:E}=e,y=(0,l.d4)((n=>n.isDarkMode));return(0,s.useEffect)((()=>{(0,i.A)(".post-content img",{background:"#292a2d"})}),[]),s.createElement(o.A,{isFocus:!1,title:p.frontmatter.title,description:p.frontmatter.description},s.createElement("div",{className:"container"},s.createElement("article",{className:"post-wrap"},s.createElement("header",{className:"post-header"},s.createElement("h1",{className:"post-title"},p.frontmatter.title),s.createElement("div",{className:"post-meta"},a.site.siteMetadata.author.name,"  /  ",s.createElement("span",{className:"post-time"},p.frontmatter.date)," ")),s.createElement("div",{className:"post-content"},s.createElement(t.xA,null,c)),m&&s.createElement("section",{className:"post-copyright"},s.createElement("p",{className:"copyright-item"},s.createElement("span",null,"Author: "),s.createElement("span",null,d.name)),s.createElement("p",{className:"copyright-item"},s.createElement("span",null,"Permalink:"),s.createElement("span",null,s.createElement("a",{href:g+p.fields.slug}," ",g+p.fields.slug," "))),s.createElement("p",{className:"copyright-item"},s.createElement("span",null,"License: "),s.createElement("span",null,s.createElement("a",{href:"http://creativecommons.org/licenses/by-nc/4.0/"},"CC-BY-NC-4.0")))),s.createElement("section",{className:"post-tags"},s.createElement("div",null,s.createElement("span",null,"Tag(s):"),s.createElement("span",{className:"tag"},0!==p.frontmatter.tags.length&&p.frontmatter.tags.map((n=>s.createElement("a",{key:n,href:`/tag/${n}`},"#",n))))),s.createElement("div",null,s.createElement("a",{href:"#/",onClick:()=>{window.history.back()}},"back"),s.createElement("span",null," · "),s.createElement("a",{href:a.site.siteMetadata.siteUrl},"home"))),s.createElement("section",{className:"post-nav"},h?s.createElement("a",{className:"prev",rel:"prev",href:h.fields.slug},h.frontmatter.title):s.createElement("span",{className:"prev"},"No More"),E?s.createElement("a",{className:"next",rel:"next",href:E.fields.slug},E.frontmatter.title):s.createElement("span",{className:"next"},"No More")),s.createElement(r.A,{id:"comment",repo:"w1zd/w1zd.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyODg3MTA5NjA=",category:"Announcements",categoryId:"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDE1OTcy",mapping:"og:title",theme:`https://wizd.dev/giscus-themes/${y?"dark":"light"}.css`,reactionsEnabled:"1",loading:"lazy"}),p.frontmatter.toc&&s.createElement(u.A,null))))};function m(n){return s.createElement(k,n,s.createElement(p,n))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-j-query中的prop和attr-md-1379de00eb4e2f2a5115.js.map