import{_ as c,r as l,o as i,c as p,b as a,w as e,F as u,a as n,d as s}from"./app.5266a031.js";const r={},d=n("blockquote",null,[n("p",null,"\u5728 vuepress \u4E2D\u4F7F\u7528 tab \u680F")],-1),k=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` -D vuepress@next

`),n("span",{class:"token comment"},"# create a markdown file"),s(`
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},"'# Hello VuePress'"),s(),n("span",{class:"token operator"},">"),s(` README.md

`),n("span",{class:"token comment"},"# start writing"),s(`
`),n("span",{class:"token function"},"yarn"),s(` vuepress dev

`),n("span",{class:"token comment"},"# build to static files"),s(`
`),n("span",{class:"token function"},"yarn"),s(` vuepress build
`)])])],-1),m=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` -D vuepress@next

`),n("span",{class:"token comment"},"# create a markdown file"),s(`
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},"'# Hello VuePress'"),s(),n("span",{class:"token operator"},">"),s(` README.md

`),n("span",{class:"token comment"},"# start writing"),s(`
npx vuepress dev

`),n("span",{class:"token comment"},"# build to static files"),s(`
npx vuepress build
`)])])],-1),g=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello world"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br")])],-1),h=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("\u8FD9\u91CC\u662F\u6D4B\u8BD5 tab "),n("span",{class:"token number"},"2"),s(` \u7684\u5185\u5BB9
`)])])],-1);function _(f,b){const t=l("CodeGroupItem"),o=l("CodeGroup");return i(),p(u,null,[d,a(o,null,{default:e(()=>[a(t,{title:"YARN",active:""},{default:e(()=>[k]),_:1}),a(t,{title:"NPM"},{default:e(()=>[m]),_:1})]),_:1}),a(o,null,{default:e(()=>[a(t,{title:"tab 1",active:""},{default:e(()=>[g]),_:1}),a(t,{title:"tab 2"},{default:e(()=>[h]),_:1})]),_:1})],64)}var x=c(r,[["render",_],["__file","index.html.vue"]]);export{x as default};
