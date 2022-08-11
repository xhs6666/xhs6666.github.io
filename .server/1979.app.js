"use strict";
exports.id = 1979;
exports.ids = [1979];
exports.modules = {

/***/ 86120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4ac6281e",
  "path": "/style/code-style.html",
  "title": "自定义代码块样式及解决C#高亮问题",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/12/17 16:14",
    "title": "自定义代码块样式及解决C#高亮问题"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "下载css",
      "slug": "下载css",
      "children": []
    },
    {
      "level": 2,
      "title": "导入css",
      "slug": "导入css",
      "children": []
    },
    {
      "level": 2,
      "title": "修改config.js",
      "slug": "修改config-js",
      "children": []
    },
    {
      "level": 2,
      "title": "使用样式",
      "slug": "使用样式",
      "children": []
    },
    {
      "level": 2,
      "title": "关于C#代码块不能高亮问题",
      "slug": "关于c-代码块不能高亮问题",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 21449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ code_style_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/style/code-style.html.vue?vue&type=template&id=e90bc4d6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><p>在本主题中，支持自定义代码块高亮样式，使用的是<a href="https://highlightjs.org/" target="_blank" rel="noopener noreferrer">highlightjs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217161621978" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217161621978.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="下载css" tabindex="-1"><a class="header-anchor" href="#下载css" aria-hidden="true">#</a> 下载css</h2><p>在使用之前，你需要先下载<code>highlightjs</code>的css文件，我们是通过导入高亮css样式，来切换代码块高亮样式的，请在当前博客中，运行下面命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> highlight.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="导入css" tabindex="-1"><a class="header-anchor" href="#导入css" aria-hidden="true">#</a> 导入css</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217162242259" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217162242259.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>当运行<code>npm install highlight.js</code>命令之后，会将highlight.js的所有文件放置在<code>node_modules</code>目录中，你需要在此目录中，找到一个文件夹为<code>highlight.js</code>的目录，点击进去</p><blockquote><p>如果你实在没有找到这个<code>highlight.js</code>文件夹，那么就是你没有运行<code>npm install highlight.js</code>这个命令，或者是没有在正确的地方运行</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217162321915" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217162321915.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217162422523" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217162422523.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217162813364" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217162813364.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="修改config-js" tabindex="-1"><a class="header-anchor" href="#修改config-js" aria-hidden="true">#</a> 修改config.js</h2><p>进入<code>docs/.vuepress/config.js</code>文件内，将下面的代码加入到此文件中</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    md<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">highlight</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">&amp;&amp;</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;highlight.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">//if (lang === &quot;c&quot;) {</span>
                    <span class="token comment">//    lang = &quot;csharp&quot;</span>
                    <span class="token comment">//}</span>
                    <span class="token keyword">return</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;highlight.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">language</span><span class="token operator">:</span> lang <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>__<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><details class="custom-container details"><summary>必看</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217163636994" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217163636994.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><h2 id="使用样式" tabindex="-1"><a class="header-anchor" href="#使用样式" aria-hidden="true">#</a> 使用样式</h2><p>待你上面步骤完成之后，你现在只需要在<code>docs/.vuepress/styles/index.css</code>文件内，使用你刚才复制的那些样式就行了</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;css样式路径&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>这里的css样式文件，就是你刚才在<a href="#%E5%AF%BC%E5%85%A5css">第二步</a>中，从<code>\\node_modules\\highlight.js\\styles</code>内复制出来的文件，如果你的路径正确的话，那么你现在刷新网页，就会看到代码块样式发生改变了</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211217164321437" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211217164321437.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>因为highlightjs的样式非常多，有200多款，你具体喜欢哪种，请自己尝试，上图中的,styles目录下的css样式，每一个css文件，就是一个代码块样式，我这里也没有能够直接展示这200多款样式的工具，需要你自己修改<code>@import &quot;css样式路径&quot;;</code>的样式文件路径，才能看到效果</p></div><h2 id="关于c-代码块不能高亮问题" tabindex="-1"><a class="header-anchor" href="#关于c-代码块不能高亮问题" aria-hidden="true">#</a> 关于C#代码块不能高亮问题</h2><p>如果C#代码块不能高亮，请修改一下下面的判断条件，如果你使用其他语言，也是代码块高亮不正确的话，也是一样的，修改一下判断条件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    md<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">highlight</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">&amp;&amp;</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;highlight.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">/*
                    修改一下下面，如果同时存在多个语言，代码块不能正常显示，也是增加多个判断就行
                    这是是写c，但是我修改成csharp的原因是因为，C#代码块，默认显示的时候，是c，但是其真正的名字需要为csharp，才能正常显示，否则C#代码
                    块，最终就是以C的高亮显示
                    */</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">===</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        lang <span class="token operator">=</span> <span class="token string">&quot;csharp&quot;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;highlight.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">language</span><span class="token operator">:</span> lang <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>__<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/style/code-style.html.vue?vue&type=template&id=e90bc4d6

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/style/code-style.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const code_style_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=1979.app.js.map