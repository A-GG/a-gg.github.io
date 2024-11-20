"use strict";(self.webpackChunkw1zd_lair=self.webpackChunkw1zd_lair||[]).push([[4536],{6643:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(8453),l=a(6540);function r(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span",ol:"ol",li:"li"},(0,n.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"从去年9月份，不少Ubuntu 13.10用户遇到了屏幕亮度设置异常问题，无法调节亮度级别，尤其使用英特尔的平台。同样该系统BUG在最新开发的Ubuntu 14.04 (Trusty Tahr)中也继续存在，官方也没有及时修复该问题。"),"\n",l.createElement(t.p,null,"如果你现有的平台基于英特尔，使用了英特尔芯片组，在Ubuntu 13.10/Ubuntu 14.04系统下，无法更改屏幕亮度级别。"),"\n",l.createElement(t.p,null,"具体问题如下，打开系统设置，进入“亮度&锁屏”选项，调节亮度级别都无法正常生效。"),"\n",l.createElement(t.p,null,"除了影响英特尔平台外，不少使用英伟达显卡设备的用户也会遇到该系统问题，目前爱好者已经发布临时的解决方案。"),"\n",l.createElement(t.h2,{id:"解决步骤仅限英特尔平台",style:{position:"relative"}},l.createElement(t.a,{href:"#%E8%A7%A3%E5%86%B3%E6%AD%A5%E9%AA%A4%E4%BB%85%E9%99%90%E8%8B%B1%E7%89%B9%E5%B0%94%E5%B9%B3%E5%8F%B0","aria-label":"解决步骤仅限英特尔平台 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解决步骤（仅限英特尔平台）"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"打开终端，输入Sudo安装命令："),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> gedit /usr/share/X11/xorg.conf.d/20-intel.conf</code></pre></div>'}}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"打开一个参数文件，输入密码，获取root授权"),"\n",l.createElement(t.li,null,"在该文本中输入如下设置参数，重新保存该参数文件，重启当前系统。"),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">Section “Device”\nIdentifier “card0”\nDriver “intel”\nOption “Backlight” “intel_backlight”\nBusID “PCI:0:2:0”\nEndSection</code></pre></div>'}}),"\n",l.createElement(t.p,null,"重启，系统设置功能下的“亮度&锁屏”选项可以对屏幕亮度进行控制。"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=a(1468),i=a(7947),m=a(1327),o=a(2171),p=a(9739);const u=e=>{let{data:t,pageContext:a,children:r}=e;const s=t.mdx,{title:u,postCopyright:E,author:d,siteUrl:h}=t.site.siteMetadata,{previous:g,next:f}=a,v=(0,c.d4)((e=>e.isDarkMode));return(0,l.useEffect)((()=>{(0,p.A)(".post-content img",{background:"#292a2d"})}),[]),l.createElement(i.A,{isFocus:!1,title:s.frontmatter.title,description:s.frontmatter.description},l.createElement("div",{className:"container"},l.createElement("article",{className:"post-wrap"},l.createElement("header",{className:"post-header"},l.createElement("h1",{className:"post-title"},s.frontmatter.title),l.createElement("div",{className:"post-meta"},t.site.siteMetadata.author.name,"  /  ",l.createElement("span",{className:"post-time"},s.frontmatter.date)," ")),l.createElement("div",{className:"post-content"},l.createElement(n.xA,null,r)),E&&l.createElement("section",{className:"post-copyright"},l.createElement("p",{className:"copyright-item"},l.createElement("span",null,"Author: "),l.createElement("span",null,d.name)),l.createElement("p",{className:"copyright-item"},l.createElement("span",null,"Permalink:"),l.createElement("span",null,l.createElement("a",{href:h+s.fields.slug}," ",h+s.fields.slug," "))),l.createElement("p",{className:"copyright-item"},l.createElement("span",null,"License: "),l.createElement("span",null,l.createElement("a",{href:"http://creativecommons.org/licenses/by-nc/4.0/"},"CC-BY-NC-4.0")))),l.createElement("section",{className:"post-tags"},l.createElement("div",null,l.createElement("span",null,"Tag(s):"),l.createElement("span",{className:"tag"},0!==s.frontmatter.tags.length&&s.frontmatter.tags.map((e=>l.createElement("a",{key:e,href:`/tag/${e}`},"#",e))))),l.createElement("div",null,l.createElement("a",{href:"#/",onClick:()=>{window.history.back()}},"back"),l.createElement("span",null," · "),l.createElement("a",{href:t.site.siteMetadata.siteUrl},"home"))),l.createElement("section",{className:"post-nav"},g?l.createElement("a",{className:"prev",rel:"prev",href:g.fields.slug},g.frontmatter.title):l.createElement("span",{className:"prev"},"No More"),f?l.createElement("a",{className:"next",rel:"next",href:f.fields.slug},f.frontmatter.title):l.createElement("span",{className:"next"},"No More")),l.createElement(o.A,{id:"comment",repo:"w1zd/w1zd.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyODg3MTA5NjA=",category:"Announcements",categoryId:"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDE1OTcy",mapping:"og:title",theme:`https://wizd.dev/giscus-themes/${v?"dark":"light"}.css`,reactionsEnabled:"1",loading:"lazy"}),s.frontmatter.toc&&l.createElement(m.A,null))))};function E(e){return l.createElement(u,e,l.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-ubuntu-14-04-亮度bug解决方案-md-ca47c75d2f60da7f8169.js.map