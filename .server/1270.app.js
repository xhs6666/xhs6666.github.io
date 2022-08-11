"use strict";
exports.id = 1270;
exports.ids = [1270];
exports.modules = {

/***/ 1793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3350613a",
  "path": "/page/friendlink.html",
  "title": "友情链接页面",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "friendLinks",
      "slug": "friendlinks",
      "children": []
    },
    {
      "level": 2,
      "title": "配置单个模块",
      "slug": "配置单个模块",
      "children": []
    },
    {
      "level": 2,
      "title": "配置友联申请描述信息",
      "slug": "配置友联申请描述信息",
      "children": []
    },
    {
      "level": 2,
      "title": "说说页面配置",
      "slug": "说说页面配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 97666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ friendlink_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/page/friendlink.html.vue?vue&type=template&id=4175a78c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="友情链接页面" tabindex="-1"><a class="header-anchor" href="#友情链接页面" aria-hidden="true">#</a> 友情链接页面</h1><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127201823860" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127201823860.png?x-oss-process=style/pictureProcess1" data="aurora"></p><details class="custom-container details"><summary>点击查看所有配置代码</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">friendLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;我的朋友&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">//网站标题</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;XI溪&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点链接</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://www.xiaoxuya.top&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点logo</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://www.xiaoxuya.top/img/logo.png&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点描述</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;人生若只是初见,何事秋风悲画扇&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;左眼会陪右眼哭の博客&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://qkongtao.cn/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;干嘛这么想不开，要在脸上贴个输字！&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;[ Blog We]&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://blogwe.com/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://blogwe.com/favicon.ico&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;博客大全-做最好的博客导航！&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-note/image-20211106100344348.png?x-oss-process=style/pictureProcess1&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;I Am I&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://5ime.cn&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;永远相信美好的事情即将发生&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100424035.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Davinci的红茶馆&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://davincievans.top/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;You are all stardust.&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100502873.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;皮皮凛の小窝&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://owomoe.net/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;永远相信美好的事情即将发生~&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;月月月子喵&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://haozi.moe&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://haozi.moe/css/images/logo_christmas.png&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;可爱的月子酱&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100009647.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;疫情在线捐款系统&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://yq.vipblogs.cn/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/avatar.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;基于echarts的疫情捐款系统&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;疫情在线捐款系统后台登录&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://admin.vipblogs.cn/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/avatar.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;该捐款系统后台登录&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;大佬&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">//网站标题</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;XI溪&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点链接</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://www.xiaoxuya.top&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点logo</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://www.xiaoxuya.top/img/logo.png&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点描述</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;人生若只是初见,何事秋风悲画扇&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;左眼会陪右眼哭の博客&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://qkongtao.cn/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;干嘛这么想不开，要在脸上贴个输字！&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;皮皮凛の小窝&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://owomoe.net/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;永远相信美好的事情即将发生~&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;月月月子喵&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://haozi.moe&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://haozi.moe/css/images/logo_christmas.png&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;可爱的月子酱&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100009647.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;小伙伴&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">//网站标题</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;XI溪&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点链接</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://www.xiaoxuya.top&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点logo</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://www.xiaoxuya.top/img/logo.png&quot;</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点描述</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;人生若只是初见,何事秋风悲画扇&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;[ Blog We]&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://blogwe.com/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://blogwe.com/favicon.ico&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;博客大全-做最好的博客导航！&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-note/image-20211106100344348.png?x-oss-process=style/pictureProcess1&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Davinci的红茶馆&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://davincievans.top/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;You are all stardust.&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100502873.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;皮皮凛の小窝&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://owomoe.net/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;永远相信美好的事情即将发生~&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;疫情在线捐款系统&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://yq.vipblogs.cn/&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/avatar.jpg&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;基于echarts的疫情捐款系统&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//自己的站点信息 我自己的站点描述 会显示在友情链接的底部</span>
        <span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//站点标题</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Aurora-theme&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点链接</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://aurora.cco.vin&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点logo</span>
            <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/ico/yuan.png&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点描述</span>
            <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己的头像</span>
            <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">&quot;email: cqycco@gmail.com, qq:2291308094&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">otherDescribe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;申请友链请按照下面格式，在此页面留言，我看到就会进行添加&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;博客名称    博客地址      博客描述      博客logo&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;友链申请要求&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;拒绝涉政/涉黄/太多广告/盈利性站点&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;站点能正常访问&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;这是一个html的测试&lt;a href=&quot;https://blog.cco.vin&quot; target=&quot;_blank&quot;&gt;这是一个a标签&lt;/a&gt;&#39;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br></div></div></details><h2 id="friendlinks" tabindex="-1"><a class="header-anchor" href="#friendlinks" aria-hidden="true">#</a> friendLinks</h2><p>这是一个数组对象，里面的每一个对象，都是一个模块，</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127202321519" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127202321519.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="配置单个模块" tabindex="-1"><a class="header-anchor" href="#配置单个模块" aria-hidden="true">#</a> 配置单个模块</h2><p>加入我们现在需要配置上图中的大佬这个模块，那么你可以像下面这样进行配置</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127202706567" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127202706567.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    themeConfig: {
        friendLinks: [
        {
                title: &#39;大佬&#39;,
                links: [
                    {
                        //网站标题
                        title: &quot;XI溪&quot;,

                        //站点链接
                        url: &quot;http://www.xiaoxuya.top&quot;,

                        //站点logo
                        logo: &quot;https://www.xiaoxuya.top/img/logo.png&quot;,

                        //站点描述
                        describe: &quot;人生若只是初见,何事秋风悲画扇&quot;,
                        cover: &#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;
                    },
                    {
                        title: &quot;左眼会陪右眼哭の博客&quot;,
                        url: &quot;http://qkongtao.cn/&quot;,
                        logo: &quot;http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png&quot;,
                        describe: &quot;干嘛这么想不开，要在脸上贴个输字！&quot;,
                        cover: &#39;https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1&#39;
                    },
                ]
            },
        ]
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="配置友联申请描述信息" tabindex="-1"><a class="header-anchor" href="#配置友联申请描述信息" aria-hidden="true">#</a> 配置友联申请描述信息</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127202740908" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127202740908.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>方框中的代码块，是主题自动加上的，你需要在<code>siteInformation</code>中进行简单的配置，便可以了</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//站点标题</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Aurora-theme&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点链接</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://aurora.cco.vin&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点logo</span>
            <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/ico/yuan.png&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点描述</span>
            <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己的头像</span>
            <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">&quot;email: cqycco@gmail.com, qq:2291308094&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">otherDescribe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;申请友链请按照下面格式，在此页面留言，我看到就会进行添加&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;博客名称    博客地址      博客描述      博客logo&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;友链申请要求&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;拒绝涉政/涉黄/太多广告/盈利性站点&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;站点能正常访问&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;这是一个html的测试&lt;a href=&quot;https://blog.cco.vin&quot; target=&quot;_blank&quot;&gt;这是一个a标签&lt;/a&gt;&#39;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>你配置之后效果会像下图这样</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127203125111" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127203125111.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>并不像我上图中的那样，这是因为，上图那个是我自定义的样式，你们如果也需要这样的效果的话，可以看下面代码</p><details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//站点标题</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Aurora-theme&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点链接</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://aurora.xcye.xyz&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点logo</span>
            <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/ico/yuan.png&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点描述</span>
            <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">//自己的头像</span>
            <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">&quot;如果你已经添加我站点，我很长时间还未添加，请联系我QQ: 2291308094,或者在说说处告诉我(先注册用户http://localhost:8080/aurora-register/，在发布说说/mood)，别评论&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">otherDescribe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;申请友链请按照下面格式，在此页面评论或者先&lt;a href=&quot;/register&quot;&gt;注册&lt;/a&gt;，再到&lt;a href=&quot;/mood&quot;&gt;说说&lt;/a&gt;处留下你站点，我看到就会进行添加&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;&lt;label class=&quot;about-version friend-tag&quot;&gt;博客名称&lt;/label&gt;&lt;label class=&quot;about-version friend-tag&quot;&gt;博客地址&lt;/label&gt;&lt;label class=&quot;about-version friend-tag&quot;&gt;博客描述&lt;/label&gt;&lt;label class=&quot;about-version friend-tag&quot;&gt;博客logo&lt;/label&gt;&lt;label class=&quot;about-version friend-tag&quot;&gt;博客封面&lt;/label&gt;&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;友链申请要求&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;&lt;label class=&quot;about-version about-goal about-fail&quot;&gt;拒绝涉政/涉黄/太多广告/盈利性站点&lt;/label&gt;&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;&lt;label class=&quot;about-version&quot;&gt;站点能正常访问&lt;/label&gt;&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*docs/.vuepress/styles/index.css */</span>

<span class="token selector">.about-version</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #00cfc8<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.friend-tag</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.about-fail</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ef233c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p><code>如果没有docs/.vuepress/styles/index.css这个文件的话，自己创建</code></p><p><code>docs/.vuepress/styles/index.css</code>内的样式会完全覆盖主题默认的样式，如果你需要高度自定义的话，请看`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/page/friendlink.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`这里`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("这里")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote></details><h2 id="说说页面配置" tabindex="-1"><a class="header-anchor" href="#说说页面配置" aria-hidden="true">#</a> 说说页面配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/page/tag.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`标签页面配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("标签页面配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/page/friendlink.html.vue?vue&type=template&id=4175a78c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/page/friendlink.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const friendlink_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=1270.app.js.map