"use strict";(self.webpackChunkw1zd_lair=self.webpackChunkw1zd_lair||[]).push([[4916],{6734:function(n,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=e(8453),t=e(6540);function l(n){const a=Object.assign({p:"p",img:"img",ul:"ul",li:"li",strong:"strong",em:"em",h2:"h2",a:"a",span:"span",h3:"h3"},(0,s.RP)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,t.createElement(a.img,{src:"https://raw.githubusercontent.com/w1zd/image-hosting/main/img/2022/05/10/11-39-52-56f9d07a30d9bfc238f9ab56db7fd345-mongodb-3e2fab.jpeg",alt:""}),"\n作者：MongoDB 首席技术支持工程师 William Zola"),"\n",t.createElement(a.p,null,"这是我们[[设计-MongoDB-Schema-的-6-条经验准则-Part-1]]的第二站。在上一部分中，我们介绍了三种基本的 Schema 设计：嵌入、子引用、父引用。我们还介绍了选择这三种模式的两种因素："),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.strong,null,t.createElement(a.em,null,"一对多")),"关系中，",t.createElement(a.strong,null,t.createElement(a.em,null,"多")),"的那一部分需要需要作为独立的实体存在？"),"\n",t.createElement(a.li,null,t.createElement(a.strong,null,t.createElement(a.em,null,"一对多")),"关系的基数（cardinality）是什么？是一对几？还是一对很多？还是一对超级多？"),"\n"),"\n",t.createElement(a.p,null,"有了这些基础的支撑，接下来我就可以跟大家介绍更加复杂的 Schema 设计方式，其中包括双向引用和非规范化存储。"),"\n",t.createElement(a.h2,{id:"中级双向引用",style:{position:"relative"}},t.createElement(a.a,{href:"#%E4%B8%AD%E7%BA%A7%E5%8F%8C%E5%90%91%E5%BC%95%E7%94%A8","aria-label":"中级双向引用 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"中级：双向引用"),"\n",t.createElement(a.p,null,"如果你想更花哨一些，你可以将两种技术结合起来，在你的 Schema 中同是包含两种风格的引用，既有一对多的引用（子引用），也有多对一的引用（父引用）。"),"\n",t.createElement(a.p,null,"我们还是回到之前那个任务追踪系统的例子。我们有一个 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">people</code>'}})," 集合来存储 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 文档，有一个 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">task</code>'}})," 集合来存储 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}}),"，并且 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 和 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">task</code>'}})," 是一对多的关系。任务追踪系统需要追踪每一个人的所有任务，所以我们需要在 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 中做一个 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}})," 的子引用。"),"\n",t.createElement(a.p,null,"在添加了一个对于 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}})," 文档的引用数组之后，单个的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 文档可能长这样："),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">db.person.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    _id: ObjectID<span class="token punctuation">(</span><span class="token string">"AAF1"</span><span class="token punctuation">)</span>,\n    name: <span class="token string">"Kate Monster"</span>,\n    tasks <span class="token punctuation">[</span>     // array of references to Task documents\n        ObjectID<span class="token punctuation">(</span><span class="token string">"ADF9"</span><span class="token punctuation">)</span>,\n        ObjectID<span class="token punctuation">(</span><span class="token string">"AE02"</span><span class="token punctuation">)</span>,\n        ObjectID<span class="token punctuation">(</span><span class="token string">"AE73"</span><span class="token punctuation">)</span>\n        // etc\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"另一方面，在程序里某些上下文中，我们需要展示一个任务列表（举个例子，一个多人项目中的所有任务）并且需要快速的找出每项任务的负责人。其实我们可以通过在 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}})," 文档中额外添加对 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 的引用来优化这个查询效率。"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">db.tasks.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    _id: ObjectID<span class="token punctuation">(</span><span class="token string">"ADF9"</span><span class="token punctuation">)</span>,\n    description: <span class="token string">"Write lesson plan"</span>,\n    due_date: ISODate<span class="token punctuation">(</span><span class="token string">"2020-04-01),\n    owner: ObjectID("</span>AAF1"<span class="token punctuation">)</span> //Reference to Person document\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"这种设计具有",t.createElement(a.strong,null,t.createElement(a.em,null,"一对多")),"的所有的有点和缺点，但是多了一些功能。在 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}})," 文档中添加一个额外的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">owner</code>'}})," 引用，意味着可以更加快捷和方便的找到任务的负责人，但是同时也意味着当你在重新分配任务给其他人的时候，你需要执行",t.createElement(a.strong,null,"两次"),"更新，而不是一次。\n具体来讲，你将需要更新两个引用，一个是 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 对 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}})," 的引用，另一个是 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Task</code>'}})," 对 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Person</code>'}})," 的引用。（对于正在阅读本文的关系专家来说——您是对的，使用这种模式设置意味着不再可能通过一次原子更新。这对于我们的任务跟踪系统来说是可以的：您需要考虑这是否适用于您的特定用例。）"),"\n",t.createElement(a.h2,{id:"中级一对多关系中的的非规范化存储",style:{position:"relative"}},t.createElement(a.a,{href:"#%E4%B8%AD%E7%BA%A7%E4%B8%80%E5%AF%B9%E5%A4%9A%E5%85%B3%E7%B3%BB%E4%B8%AD%E7%9A%84%E7%9A%84%E9%9D%9E%E8%A7%84%E8%8C%83%E5%8C%96%E5%AD%98%E5%82%A8","aria-label":"中级一对多关系中的的非规范化存储 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"中级：“一对多”关系中的的非规范化存储"),"\n",t.createElement(a.p,null,"除了对各种关系进行建模之外，你还可以在你的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Schema</code>'}})," 中添加非规范化存储。在某些情况下，这个可以避免进行应用程序级别的链接查询，但是这样做的代价就是会在执行更新的时候增加复杂度。下面的例子能够很好的说明这个问题。"),"\n",t.createElement(a.h3,{id:"多到一中的非规范化存储",style:{position:"relative"}},t.createElement(a.a,{href:"#%E5%A4%9A%E5%88%B0%E4%B8%80%E4%B8%AD%E7%9A%84%E9%9D%9E%E8%A7%84%E8%8C%83%E5%8C%96%E5%AD%98%E5%82%A8","aria-label":"多到一中的非规范化存储 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"“多到一”中的非规范化存储"),"\n",t.createElement(a.p,null,"在我们之前提到的商品部件的例子中，你可以将可替换部件的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">name</code>'}})," 进行非规范化存储，放到 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">parts[]</code>'}})," 数组中。 下面是之前没有进行非规范化存储的代码，给大家参考。"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token operator">></span> db.products.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    name <span class="token builtin class-name">:</span> <span class="token string">\'left-handed smoke shifter\'</span>,\n    manufacturer <span class="token builtin class-name">:</span> <span class="token string">\'Acme Corp\'</span>,\n    catalog_number: <span class="token number">1234</span>,\n    parts <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>     // array of references to Part documents\n        ObjectID<span class="token punctuation">(</span><span class="token string">\'AAAA\'</span><span class="token punctuation">)</span>,    // reference to the <span class="token comment">#4 grommet above</span>\n        ObjectID<span class="token punctuation">(</span><span class="token string">\'F17C\'</span><span class="token punctuation">)</span>,    // reference to a different Part\n        ObjectID<span class="token punctuation">(</span><span class="token string">\'D2AA\'</span><span class="token punctuation">)</span>,\n        // etc\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"非规范化存储意味着在需要显示商品所有部件名字的时候，不需要进行应用程序级别的连接查询，但是在你需要可替换部件的其他信息的时候，你仍然需要进行链接查询。"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token operator">></span> db.products.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    name <span class="token builtin class-name">:</span> <span class="token string">\'left-handed smoke shifter\'</span>,\n    manufacturer <span class="token builtin class-name">:</span> <span class="token string">\'Acme Corp\'</span>,\n    catalog_number: <span class="token number">1234</span>,\n    parts <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> <span class="token function">id</span> <span class="token builtin class-name">:</span> ObjectID<span class="token punctuation">(</span><span class="token string">\'AAAA\'</span><span class="token punctuation">)</span>, name <span class="token builtin class-name">:</span> <span class="token string">\'#4 grommet\'</span> <span class="token punctuation">}</span>,         // Part name is denormalized\n        <span class="token punctuation">{</span> id: ObjectID<span class="token punctuation">(</span><span class="token string">\'F17C\'</span><span class="token punctuation">)</span>, name <span class="token builtin class-name">:</span> <span class="token string">\'fan blade assembly\'</span> <span class="token punctuation">}</span>,\n        <span class="token punctuation">{</span> id: ObjectID<span class="token punctuation">(</span><span class="token string">\'D2AA\'</span><span class="token punctuation">)</span>, name <span class="token builtin class-name">:</span> <span class="token string">\'power switch\'</span> <span class="token punctuation">}</span>,\n        // etc\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"虽然这样使得我们获取部件名称更加容易，但是这会给应用程序级别的连接查询增加一些工作："),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">// Fetch the product document\n<span class="token operator">></span> product <span class="token operator">=</span> db.products.findOne<span class="token punctuation">(</span><span class="token punctuation">{</span>catalog_number: <span class="token number">1234</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  // Create an array of ObjectID<span class="token punctuation">(</span><span class="token punctuation">)</span>s containing *just* the part numbers\n<span class="token operator">></span> part_ids <span class="token operator">=</span> product.parts.map<span class="token punctuation">(</span> function<span class="token punctuation">(</span>doc<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">return</span> doc.id <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  // Fetch all the Parts that are linked to this Product\n<span class="token operator">></span> product_parts <span class="token operator">=</span> db.parts.find<span class="token punctuation">(</span><span class="token punctuation">{</span>_id: <span class="token punctuation">{</span> <span class="token variable">$in</span> <span class="token builtin class-name">:</span> part_ids <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"非规范化存储可以提升对非规范化数据的查询效率，但是同样也增加了在更新数据是开销：如果你把 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Part</code>'}})," 的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">name</code>'}})," 非规范化存储到了 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Production</code>'}})," 文档中，那么当你进行部件 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">name</code>'}})," 更新的时候，你就必须更新 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Product</code>'}})," 文档中 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">parts</code>'}})," 数组中每一个出现当前 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">name</code>'}})," 的位置。"),"\n",t.createElement(a.p,null,"只有在读取操作的比例远大于更新操作时，非规范存储才会有意义。如果非常频繁的读取数据，但是更新的频率却很低，那么这个时候为了让查询更加高效，导致更新操作变慢和复杂是值得的。但是随着更新操作相对读取操作的频率逐渐提升，非规范化存储带来的受益也会逐渐减少。"),"\n",t.createElement(a.p,null,"举个例子：假设部件的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">name</code>'}})," 很少会发生变更，但是部件的数量更新却很频繁，那这就意味着，将部件名称进行非规范化存储是有意义的，但是将数量进行非规范化存储就没啥意义了。"),"\n",t.createElement(a.p,null,"同样你也需要注意一点，当你拥有一个非规范化存储的字段的同时，你也失去了对这个字段进行原子更新和独立更新的能力。就想我们上面讲的",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">双向引用</code>'}}),"的例子一样，如果你更新了 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Part</code>'}})," 文档中的部件名称，然后又更新了 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Product</code>'}})," 文档中的部件名称，那么在两次更新之间就有一定的时间差，而在这段时间差内，",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Product</code>'}})," 文档中的部件名称和 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Part</code>'}})," 文档中的部件名称就会有差异（Part中是新值，而Product中是旧值）。"),"\n",t.createElement(a.h3,{id:"一到多中的非规范化存储",style:{position:"relative"}},t.createElement(a.a,{href:"#%E4%B8%80%E5%88%B0%E5%A4%9A%E4%B8%AD%E7%9A%84%E9%9D%9E%E8%A7%84%E8%8C%83%E5%8C%96%E5%AD%98%E5%82%A8","aria-label":"一到多中的非规范化存储 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"“一到多”中的非规范化存储"),"\n",t.createElement(a.p,null,"你也可以将",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">一</code>'}}),"的内容非规范化存储到",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">多</code>'}}),"的字段中："),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token operator">></span> db.parts.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    _id <span class="token builtin class-name">:</span> ObjectID<span class="token punctuation">(</span><span class="token string">\'AAAA\'</span><span class="token punctuation">)</span>,\n    partno <span class="token builtin class-name">:</span> <span class="token string">\'123-aff-456\'</span>,\n    name <span class="token builtin class-name">:</span> <span class="token string">\'#4 grommet\'</span>,\n    product_name <span class="token builtin class-name">:</span> <span class="token string">\'left-handed smoke shifter\'</span>,   // Denormalized from the ‘Product’ document\n    product_catalog_number: <span class="token number">1234</span>,                     // Ditto\n    qty: <span class="token number">94</span>,\n    cost: <span class="token number">0.94</span>,\n    price: <span class="token number">3.99</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"但是如果你将产品名称非规范化存储到了 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Part</code>'}})," 文档中，那么在你更新产品名称时，你同样必须更新当前产品所有相关部件中对应的产品名称。这个更新就比较耗性能了，因为你更新的是多个部件，而不是单个产品。因此，以这种方式进行非规范化存储的时候，你可一定得考虑清楚读写操作的频率比。"),"\n",t.createElement(a.h2,{id:"中级一对超级多中的非规范化存储",style:{position:"relative"}},t.createElement(a.a,{href:"#%E4%B8%AD%E7%BA%A7%E4%B8%80%E5%AF%B9%E8%B6%85%E7%BA%A7%E5%A4%9A%E4%B8%AD%E7%9A%84%E9%9D%9E%E8%A7%84%E8%8C%83%E5%8C%96%E5%AD%98%E5%82%A8","aria-label":"中级一对超级多中的非规范化存储 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"中级：“一对超级多”中的非规范化存储"),"\n",t.createElement(a.p,null,"你也可以非规范化存储”一对超级多的“例子，这适用于两种方式之一：你既可以把”一“那一侧的信息非规范化存储到”超级多“那一侧里面，也可以把”超级多“一侧的概括信息放到”一“那一侧。"),"\n",t.createElement(a.p,null,"这里有一个将数据非规范化存储到”超级多“那一侧的例子。我将会把主机的 ip 地址（从”一“那一侧）添加到单独的日志信息中："),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token operator">></span> db.logmsg.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token function">time</span> <span class="token builtin class-name">:</span> ISODate<span class="token punctuation">(</span><span class="token string">""</span><span class="token number">2014</span>-03-28T09:42:41.284Z<span class="token string">".382Z"</span><span class="token punctuation">)</span>,\n    message <span class="token builtin class-name">:</span> <span class="token string">\'cpu is on fire!\'</span>,\n    ipaddr <span class="token builtin class-name">:</span> <span class="token string">\'127.66.66.66\'</span>,\n    host: ObjectID<span class="token punctuation">(</span><span class="token string">\'AAAB\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"当你查询特定的 ip 地址最近的日志消息的时候，将会变得更加容易：查询从两条变成了一条"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token operator">></span> last_5k_msg <span class="token operator">=</span> db.logmsg.find<span class="token punctuation">(</span><span class="token punctuation">{</span>ipaddr <span class="token builtin class-name">:</span> <span class="token string">\'127.66.66.66\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.sort<span class="token punctuation">(</span><span class="token punctuation">{</span>time <span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"事实上，如果你存储到“一”那一边的信息非常少，你完全可以将",t.createElement(a.strong,null,"所有"),"的信息全部费正规化存储到“超级多”那一边，然后将另外一个集合完全省掉。"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token operator">></span> db.logmsg.<span class="token function-name function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token function">time</span> <span class="token builtin class-name">:</span> ISODate<span class="token punctuation">(</span><span class="token string">""</span><span class="token number">2014</span>-03-28T09:42:41.284Z<span class="token string">".382Z"</span><span class="token punctuation">)</span>,\n    message <span class="token builtin class-name">:</span> <span class="token string">\'cpu is on fire!\'</span>,\n    ipaddr <span class="token builtin class-name">:</span> <span class="token string">\'127.66.66.66\'</span>,\n    <span class="token function">hostname</span> <span class="token builtin class-name">:</span> <span class="token string">\'goofy.example.com\'</span>,\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"另一方面，你也可以将数据非规范化存储到“一”那一侧。假设你想将来自主机的最后 1000 条日志消息保留在 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">hosts</code>'}})," 文档中。 你可以使用 MondoDB 2.4 中引入的 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$each</code>'}})," ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">$slice</code>'}})," 功能保留最后 1000 条消息，并且使其顺序不变。"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">//  Get log message from monitoring system logmsg = get_log_msg();</span>\nlog_message_here <span class="token operator">=</span> logmsg<span class="token punctuation">.</span>msg<span class="token punctuation">;</span>\nlog_ip <span class="token operator">=</span> logmsg<span class="token punctuation">.</span>ipaddr<span class="token punctuation">;</span>\n<span class="token comment">// Get current timestamp</span>\nnow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// Find the _id for the host I’m updating</span>\nhost_doc <span class="token operator">=</span> db<span class="token punctuation">.</span>hosts<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">ipaddr</span> <span class="token operator">:</span> log_ip <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Don’t return the whole document</span>\nhost_id <span class="token operator">=</span> host_doc<span class="token punctuation">.</span>_id<span class="token punctuation">;</span>\n<span class="token comment">// Insert the log message, the parent reference, and the denormalized data into the ‘many’ side</span>\ndb<span class="token punctuation">.</span>logmsg<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">time</span> <span class="token operator">:</span> now<span class="token punctuation">,</span> <span class="token literal-property property">message</span> <span class="token operator">:</span> log_message_here<span class="token punctuation">,</span> <span class="token literal-property property">ipaddr</span> <span class="token operator">:</span> log_ip<span class="token punctuation">,</span> <span class="token literal-property property">host</span> <span class="token operator">:</span> host_id <span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Push the denormalized log message onto the ‘one’ side</span>\ndb<span class="token punctuation">.</span>hosts<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span> host_id <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">$push</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">logmsgs</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">$each</span><span class="token operator">:</span>  <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token literal-property property">time</span> <span class="token operator">:</span> now<span class="token punctuation">,</span> <span class="token literal-property property">message</span> <span class="token operator">:</span> log_message_here <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">$sort</span><span class="token operator">:</span>  <span class="token punctuation">{</span> <span class="token literal-property property">time</span> <span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// Only keep the latest ones</span>\n            <span class="token literal-property property">$slice</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1000</span> <span class="token punctuation">}</span>        <span class="token comment">// Only keep the latest 1000</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"注意，这里使用了投影规范（{_id: 1}), 可以防止 MongoDB 通过网络发送整个 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">hosts</code>'}})," 文档。通过告诉 MongoDB 只返回 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">_id</code>'}})," 字段，我们将网络开销减少到存储这个字段所需要的几个字节（当然，要加上传输协议的开销）。"),"\n",t.createElement(a.p,null,"就像在“一对很多”的情况下进行非规范化存储一样，你需要考虑读取和更新的频率比例。只有当更新日志消息的次数相对于应用程序需要查看单个主机的所有消息的次数很少时，才有意义。如果你希望查看数据的频率低于更新数据的频率，那么这种特殊的费正规化存储就不是一个好主意。"),"\n",t.createElement(a.h2,{id:"回顾",style:{position:"relative"}},t.createElement(a.a,{href:"#%E5%9B%9E%E9%A1%BE","aria-label":"回顾 permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"回顾"),"\n",t.createElement(a.p,null,"在这篇文章里，除了最进本的嵌入、子引用、父引用之外，我们还介绍了其他的选择："),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"如果双向引用能够用来提升你 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Schema</code>'}})," 的性能，并且你不在乎失去了进行原子查询的能力，那么你可以使用它"),"\n",t.createElement(a.li,null,"如果你正在使用引用（无论父引用、子引用)，你可以把数据从“一”非规范化存储到“多”，也可以将数据从“多”非规范化存储到“一”"),"\n"),"\n",t.createElement(a.p,null,"当我们考虑是否使用非规范化存储的时候，需要考虑两个因素："),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"你无法对非规范化的数据进行原子更新"),"\n",t.createElement(a.li,null,"只有当读写比例较高的时候，非规范化才有意义"),"\n"),"\n",t.createElement(a.p,null,"下一篇文章里，我将会在这些方式的选择上，给大家提供一些一些指导建议。"))}var p=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.RP)(),n.components);return a?t.createElement(a,n,t.createElement(l,n)):l(n)},c=e(1468),o=e(7947),r=e(1327),u=e(2171),i=e(9739);const m=n=>{let{data:a,pageContext:e,children:l}=n;const p=a.mdx,{title:m,postCopyright:g,author:d,siteUrl:k}=a.site.siteMetadata,{previous:h,next:E}=e,_=(0,c.d4)((n=>n.isDarkMode));return(0,t.useEffect)((()=>{(0,i.A)(".post-content img",{background:"#292a2d"})}),[]),t.createElement(o.A,{isFocus:!1,title:p.frontmatter.title,description:p.frontmatter.description},t.createElement("div",{className:"container"},t.createElement("article",{className:"post-wrap"},t.createElement("header",{className:"post-header"},t.createElement("h1",{className:"post-title"},p.frontmatter.title),t.createElement("div",{className:"post-meta"},t.createElement("span",{className:"post-time"},p.frontmatter.date)," ")),t.createElement("div",{className:"post-content"},t.createElement(s.xA,null,l)),g&&t.createElement("section",{className:"post-copyright"},t.createElement("p",{className:"copyright-item"},t.createElement("span",null,"Author: "),t.createElement("span",null,d.name)),t.createElement("p",{className:"copyright-item"},t.createElement("span",null,"Permalink:"),t.createElement("span",null,t.createElement("a",{href:k+p.fields.slug}," ",k+p.fields.slug," "))),t.createElement("p",{className:"copyright-item"},t.createElement("span",null,"License: "),t.createElement("span",null,t.createElement("a",{href:"http://creativecommons.org/licenses/by-nc/4.0/"},"CC-BY-NC-4.0")))),t.createElement("section",{className:"post-tags"},t.createElement("div",null,t.createElement("span",null,"Tag(s):"),t.createElement("span",{className:"tag"},0!==p.frontmatter.tags.length&&p.frontmatter.tags.map((n=>t.createElement("a",{key:n,href:`/tag/${n}`},"#",n))))),t.createElement("div",null,t.createElement("a",{href:"#/",onClick:()=>{window.history.back()}},"back"),t.createElement("span",null," · "),t.createElement("a",{href:a.site.siteMetadata.siteUrl},"home"))),t.createElement("section",{className:"post-nav"},h?t.createElement("a",{className:"prev",rel:"prev",href:h.fields.slug},h.frontmatter.title):t.createElement("span",{className:"prev"},"No More"),E?t.createElement("a",{className:"next",rel:"next",href:E.fields.slug},E.frontmatter.title):t.createElement("span",{className:"next"},"No More")),t.createElement(u.A,{id:"comment",repo:"w1zd/w1zd.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyODg3MTA5NjA=",category:"Announcements",categoryId:"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDE1OTcy",mapping:"og:title",theme:`https://wizd.dev/giscus-themes/${_?"dark":"light"}.css`,reactionsEnabled:"1",loading:"lazy"}),p.frontmatter.toc&&t.createElement(r.A,null))))};function g(n){return t.createElement(m,n,t.createElement(p,n))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-设计-mongo-db-schema-的-6-条经验准则-part-2-md-bd9f6e4f5c65cd7fcdb3.js.map