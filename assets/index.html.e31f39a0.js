import{_ as s,e as n}from"./app.5266a031.js";const a={},t=n(`<blockquote><p>\u63D0\u4EA4\u66F4\u65B0\u5230 Git \u670D\u52A1\u5668\u3002</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">cd</span> /home/echoxu/Programe/vuepress
<span class="token builtin class-name">echo</span> <span class="token string">&quot;------------------------- \u6B63\u5728\u63D0\u4EA4 vuepress \u6E90\u7801\u5230 Git ------------------------------------&quot;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;commit at: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token function">git</span> push -u src master
<span class="token builtin class-name">echo</span> <span class="token string">&quot;------------------------- \u5DF2\u5C06 vuepress \u6E90\u7801\u63D0\u4EA4\u5230 Git ------------------------------------&quot;</span>

<span class="token function">yarn</span> docs:build
<span class="token builtin class-name">cd</span> /home/echoxu/Programe/vuepress/docs/.vuepress/dist
<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin git@192.168.1.20:/home/git/blogdata/blog.git
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;commit at: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token function">git</span> push -f origin master

<span class="token builtin class-name">echo</span> <span class="token string">&quot;------------------------- \u5DF2\u5C06 vuepress \u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u63D0\u4EA4\u5230 Git ------------------------------------&quot;</span>

</code></pre></div>`,2);function e(o,c){return t}var i=s(a,[["render",e],["__file","index.html.vue"]]);export{i as default};
