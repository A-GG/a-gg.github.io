"use strict";(self.webpackChunkw1zd_lair=self.webpackChunkw1zd_lair||[]).push([[3474],{1428:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var t=n(8453),s=n(6540);function l(e){const a=Object.assign({h2:"h2",a:"a",span:"span",p:"p",ul:"ul",li:"li"},(0,t.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.h2,{id:"第一种方式",style:{position:"relative"}},s.createElement(a.a,{href:"#%E7%AC%AC%E4%B8%80%E7%A7%8D%E6%96%B9%E5%BC%8F","aria-label":"第一种方式 permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第一种方式"),"\n",s.createElement(a.p,null,"yum自带源中没有Node.js,所以首先要获取Node.js资源："),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token comment"># 4.x</span>\n<span class="token function">curl</span> --silent --location https://rpm.nodesource.com/setup_4.x <span class="token operator">|</span> <span class="token function">bash</span> -\n<span class="token comment"># 5.x</span>\n<span class="token function">curl</span> --silent --location https://rpm.nodesource.com/setup_5.x <span class="token operator">|</span> <span class="token function">bash</span> -\n<span class="token comment"># 0.10</span>\n<span class="token function">curl</span> --silent --location https://rpm.nodesource.com/setup <span class="token operator">|</span> <span class="token function">bash</span> -</code></pre></div>'}}),"\n",s.createElement(a.p,null,"获取完成后，执行如下代码"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">yum <span class="token function">install</span> -y nodejs</code></pre></div>'}}),"\n",s.createElement(a.p,null,"安装完成之后使用如下指令测试安装是否成功"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">node</span> -v</code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"第二种方式",style:{position:"relative"}},s.createElement(a.a,{href:"#%E7%AC%AC%E4%BA%8C%E7%A7%8D%E6%96%B9%E5%BC%8F","aria-label":"第二种方式 permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第二种方式"),"\n",s.createElement(a.p,null,"使用已经编译好的源码"),"\n",s.createElement(a.p,null,"去Node.js官方网站直接下载即可"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">wget</span> https://nodejs.org/dist/v6.9.1/node-v6.9.1-linux-x64.tar.xz</code></pre></div>'}}),"\n",s.createElement(a.p,null,"由于是.xz格式的文件，需要用如下命令将其转换为tar可以处理的格式"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">xz -d node-v6.9.1-linux-x64.tar.xz</code></pre></div>'}}),"\n",s.createElement(a.p,null,"再使用",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">tar</code>'}}),"对其进行解压"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">tar</span> -xvf node-v6.9.1-linux-x64.tar</code></pre></div>'}}),"\n",s.createElement(a.p,null,"紧接着，可以修改一下文件夹名称，或者不修改也行，然后将文件夹放在合适的位置（随意）"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">mv</span> node-v6.9.1-linux-x64 <span class="token function">node</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"然后去修改",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/etc/profile</code>'}}),",新增如下内容"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>你的文件路径/node\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$NODE_HOME</span>/bin:<span class="token environment constant">$PATH</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"然后重新登录就可以测试了"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">node</span> -v</code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"第三种方式",style:{position:"relative"}},s.createElement(a.a,{href:"#%E7%AC%AC%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F","aria-label":"第三种方式 permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"第三种方式"),"\n",s.createElement(a.p,null,"使用源码进行编译安装，首先要去官网下载源码"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">wget</span> https://nodejs.org/dist/v6.9.1/node-v6.9.1.tar.gz</code></pre></div>'}}),"\n",s.createElement(a.p,null,"然后解压"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">tar</span> -zxvf node-v6.9.1.tar.gz</code></pre></div>'}}),"\n",s.createElement(a.p,null,"紧接着，安装必要的编译软件："),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,"gcc"),"\n",s.createElement(a.li,null,"gcc-c++"),"\n",s.createElement(a.li,null,"python"),"\n"),"\n",s.createElement(a.p,null,"这里要注意 gcc 好像要求是4.8以上的，如果不是可能报错"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> yum <span class="token function">install</span> gcc gcc-c++</code></pre></div>'}}),"\n",s.createElement(a.p,null,"然后直接编译安装就好了"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">./configure\n<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></code></pre></div>'}}))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.RP)(),e.components);return a?s.createElement(a,e,s.createElement(l,e)):l(e)},r=n(1468),o=n(7947),p=n(1327),i=n(2171),g=n(9739);const m=e=>{let{data:a,pageContext:n,children:l}=e;const c=a.mdx,{title:m,postCopyright:h,author:u,siteUrl:d}=a.site.siteMetadata,{previous:E,next:v}=n,b=(0,r.d4)((e=>e.isDarkMode));return(0,s.useEffect)((()=>{(0,g.A)(".post-content img",{background:"#292a2d"})}),[]),s.createElement(o.A,{isFocus:!1,title:c.frontmatter.title,description:c.frontmatter.description},s.createElement("div",{className:"container"},s.createElement("article",{className:"post-wrap"},s.createElement("header",{className:"post-header"},s.createElement("h1",{className:"post-title"},c.frontmatter.title),s.createElement("div",{className:"post-meta"},a.site.siteMetadata.author.name,"  /  ",s.createElement("span",{className:"post-time"},c.frontmatter.date)," ")),s.createElement("div",{className:"post-content"},s.createElement(t.xA,null,l)),h&&s.createElement("section",{className:"post-copyright"},s.createElement("p",{className:"copyright-item"},s.createElement("span",null,"Author: "),s.createElement("span",null,u.name)),s.createElement("p",{className:"copyright-item"},s.createElement("span",null,"Permalink:"),s.createElement("span",null,s.createElement("a",{href:d+c.fields.slug}," ",d+c.fields.slug," "))),s.createElement("p",{className:"copyright-item"},s.createElement("span",null,"License: "),s.createElement("span",null,s.createElement("a",{href:"http://creativecommons.org/licenses/by-nc/4.0/"},"CC-BY-NC-4.0")))),s.createElement("section",{className:"post-tags"},s.createElement("div",null,s.createElement("span",null,"Tag(s):"),s.createElement("span",{className:"tag"},0!==c.frontmatter.tags.length&&c.frontmatter.tags.map((e=>s.createElement("a",{key:e,href:`/tag/${e}`},"#",e))))),s.createElement("div",null,s.createElement("a",{href:"#/",onClick:()=>{window.history.back()}},"back"),s.createElement("span",null," · "),s.createElement("a",{href:a.site.siteMetadata.siteUrl},"home"))),s.createElement("section",{className:"post-nav"},E?s.createElement("a",{className:"prev",rel:"prev",href:E.fields.slug},E.frontmatter.title):s.createElement("span",{className:"prev"},"No More"),v?s.createElement("a",{className:"next",rel:"next",href:v.fields.slug},v.frontmatter.title):s.createElement("span",{className:"next"},"No More")),s.createElement(i.A,{id:"comment",repo:"w1zd/w1zd.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyODg3MTA5NjA=",category:"Announcements",categoryId:"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDE1OTcy",mapping:"og:title",theme:`https://wizd.dev/giscus-themes/${b?"dark":"light"}.css`,reactionsEnabled:"1",loading:"lazy"}),c.frontmatter.toc&&s.createElement(p.A,null))))};function h(e){return s.createElement(m,e,s.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-cent-os安装-node-js-md-d1ff94c24ee0a69498e4.js.map