import{_ as s,e as n}from"./app.5266a031.js";var a="/vstyles/assets/vuepressrighttocplugin.e06bd340.png";const p={},t=n(`<blockquote><p>\u5728 vuepress2 \u4E2D\u6DFB\u52A0 vuepress-plugin-right-anchor \u63D2\u4EF6\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u63D2\u4EF6\u8FD8\u6CA1\u53D1\u5E03\u5230 npm \u4E2D\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u7F16\u8BD1\u5B89\u88C5\u3002</p></blockquote><h2 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h2><ul><li>\u53BB <a href="https://github.com/xuekai-china/vuepress-plugin-right-anchor" target="_blank" rel="noopener noreferrer">vuepress-plugin-right-anchor</a> \u4E0B\u8F7D\u63D2\u4EF6</li><li>\u5C06\u4F60\u539F\u6765\u7684 vuepress \u76EE\u5F55\u590D\u5236\u5982\u4E0B\u5185\u5BB9\uFF1A <ul><li>docs \u76EE\u5F55\uFF0C\u4F46\u4E0D\u8981\u5305\u542B <code>.vuepress/{.cache,.temp}</code> \u8FD9\u4E24\u4E2A\u6587\u4EF6</li><li>deploy.sh \u6587\u4EF6</li><li>.gitignore \u6587\u4EF6</li><li>\u5982\u679C\u6709\u989D\u5916\u7684 config \u914D\u7F6E\u76EE\u5F55\u4E5F\u8981\u5305\u542B\u8FDB\u53BB</li><li>package.json \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</li><li><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress&quot;</span>,
    <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>,
    <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;index.js&quot;</span>,
    <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;MIT&quot;</span>,
    <span class="token string">&quot;devDependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;@vue/component-compiler-utils&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^3.3.0&quot;</span>,
        <span class="token string">&quot;@vuepress/plugin-search&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^1.9.7&quot;</span>,
        <span class="token string">&quot;@vuepress/shared-utils&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^1.9.7&quot;</span>,
        <span class="token string">&quot;lru-cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^7.8.1&quot;</span>,
        <span class="token string">&quot;vuepress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^2.0.0-beta.39&quot;</span>,
        <span class="token string">&quot;vuepress-plugin-right-anchor&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;file:right-anchor&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,
        <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>,
        <span class="token string">&quot;deploy&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>vuepress \u914D\u7F6E\u6587\u4EF6 config.js \u5185\u5BB9\u5982\u4E0B\uFF1A</li><li><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> navConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../config/navConf.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const pluginConf = require(&#39;../../config/pluginConf.js&#39;);</span>
<span class="token keyword">const</span> sidebarConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../config/sidebarConf.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> headConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../config/headConf.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const secretKeyConf = require(&#39;../../config/secretKeyConf&#39;);</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;EchoXu Note&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;ENote \u662F\u4E00\u4E2A\u8BB0\u5F55 IT \u77E5\u8BC6\u70B9\u7684\u6587\u6863\u751F\u6210\u5668\u3002IT \u77E5\u8BC6\uFF0C\u6587\u6863\u7BA1\u7406\uFF0C\u6587\u6863\u8BB0\u5F55\uFF0C\u6587\u6863\u751F\u6210\u5668&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// base: &#39;/v2/&#39;,  // \u90E8\u7F72\u65F6\u5982\u679C\u5730\u5740\u662F\uFF1Ahttps://192.168.1.20/v2  \u8FD9\u91CC\u7684\u8DEF\u5F84\u5C31\u8981\u5199\u4E3A /v2/ \u5982\u679C\u662F / \u5C31\u9700\u8981\u6CE8\u91CA\u6B64\u9879\u3002</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> headConf<span class="token punctuation">,</span>
    <span class="token comment">// plugins: pluginConf,</span>

    <span class="token comment">// theme: &#39;@vuepress/theme-default&#39;,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/favicon.svg&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">navbar</span><span class="token operator">:</span> navConf<span class="token punctuation">,</span>

        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebarConf<span class="token punctuation">,</span>
        <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

        <span class="token literal-property property">lastUpdatedText</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u6B21\u66F4\u65B0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">contributorsText</span><span class="token operator">:</span> <span class="token string">&#39;\u8D21\u732E\u8005&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">tip</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">&#39;\u6CE8\u610F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token string">&#39;\u8B66\u544A&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// 404 page</span>
        <span class="token literal-property property">notFound</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backToHome</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD4\u56DE\u9996\u9875&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">toggleDarkMode</span><span class="token operator">:</span> <span class="token string">&#39;\u5207\u6362\u591C\u95F4\u6A21\u5F0F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toggleSidebar</span><span class="token operator">:</span> <span class="token string">&#39;\u5207\u6362\u4FA7\u8FB9\u680F&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">externalLinkIcon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;@vuepress/plugin-search&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;vuepress-plugin-right-anchor&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">customClass</span><span class="token operator">:</span> <span class="token string">&#39;customClass&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showDepth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">clickModeDefaultOpen</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// extractHeaders: {</span>
        <span class="token comment">//     level: [2],</span>
        <span class="token comment">// },</span>
        <span class="token literal-property property">toc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 

<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></li><li>\u5C06\u4E0A\u9762\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230\u4E00\u4E2A\u540D\u4E3A vuepress \u6587\u4EF6\u5939\u4E2D\u3002</li></ul></li></ul><h2 id="\u51C6\u5907\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u51C6\u5907\u7F16\u8BD1\u5B89\u88C5</h2><ul><li>\u89E3\u538B\u7F29\uFF1Aunzip -o vuepress-plugin-right-anchor-master.zip</li><li>cd vuepress-plugin-right-anchor-master</li><li><code>cp -r vuepress\uFF08\u4E0A\u9762\u51C6\u5907\u597D\u7684\u539F vuepress \u6587\u4EF6\uFF09vuepress-plugin-right-anchor-master/</code></li><li>\u5728 vuepress-plugin-right-anchor-master \u4E0B\u6267\u884C\uFF1A<code>yarn install</code></li><li>\u5C06 <code>vuepress-plugin-right-anchor-master/package.json</code> \u4E2D <code>example</code> \u5168\u90E8\u66FF\u6362\u4E3A <code>vuepress</code></li><li>\u6267\u884C\uFF1A<code>yarn build:vuepress</code></li><li>\u8FDB\u5165\u5230 vuepress \u76EE\u5F55\u4E0B\u6267\u884C: cd vuepress\uFF0C\u6267\u884C\uFF1A<code>yarn install</code></li></ul><h2 id="\u67E5\u770B\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6548\u679C" aria-hidden="true">#</a> \u67E5\u770B\u6548\u679C</h2><ul><li>yarn docs:dev \u53EF\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u67E5\u770B\u6548\u679C\u3002</li></ul><blockquote><p>\u56E0\u4E3A\u6211\u7684 package.json \u4E2D\u6709\u6DFB\u52A0 <code>@vuepress/shared-utils lru-cache @vue/component-compiler-utils</code> \u8FD9\u4E09\u4E2A\u5305\uFF0C\u6240\u4EE5\u6211\u5C31\u4E0D\u624B\u52A8\u5B89\u88C5\u5B83\u4EEC\u4E86\u3002</p></blockquote><p>\u6548\u679C\u56FE\uFF1A</p><p><img src="`+a+'" alt="vuepress-plugin-right-anchor \u6548\u679C\u56FE"></p>',10);function e(o,r){return t}var c=s(p,[["render",e],["__file","index.html.vue"]]);export{c as default};
