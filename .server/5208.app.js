"use strict";
exports.id = 5208;
exports.ids = [5208];
exports.modules = {

/***/ 30402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-02171d7d",
  "path": "/home/directory-structure.html",
  "title": "主题目录结构",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "目录结构",
      "主题结构"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "结构",
      "slug": "结构",
      "children": []
    },
    {
      "level": 2,
      "title": "路由",
      "slug": "路由",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 52416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ directory_structure_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/home/directory-structure.html.vue?vue&type=template&id=067e9307


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="主题目录结构" tabindex="-1"><a class="header-anchor" href="#主题目录结构" aria-hidden="true">#</a> 主题目录结构</h1><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├─CHANGELOG.md #更新日志
├─deploy-dist.sh
├─deploy.sh
├─package-lock.json
├─package.json
├─postcss.config.js
├─README.md
├─docs
|  |- #Markdown文件
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─themeConfig.js #主题配置
|  |     ├─theme
|  |     |   ├─package.json
|  |     |   ├─lib
|  |     |   |  ├─shared
|  |     |   |  ├─node
|  |     |   |  |  ├─auroraTheme.js #主题入口文件
|  |     |   |  |  ├─auroraTheme.ts
|  |     |   |  |  ├─utils
|  |     |   |  ├─client client配置
|  |     |   |  |   ├─clientAppEnhance.d.ts
|  |     |   |  |   ├─clientAppEnhance.js
|  |     |   |  |   ├─utils
|  |     |   |  |   ├─styles
|  |     |   |  |   |   ├─theme.style.css #主题默认样式配置
|  |     |   |  |   ├─public
|  |     |   |  |   |   ├─js
|  |     |   |  |   |   | ├─network.js #axios封装
|  |     |   |  |   |   | ├─tag.js #获取文章所有tag标签工具
|  |     |   |  |   |   | ├─store #vuex
|  |     |   |  |   |   ├─fonts #主题默认使用的字体
|  |     |   |  |   ├─layouts
|  |     |   |  |   |    ├─404.vue
|  |     |   |  |   |    └Layout.vue
|  |     |   |  |   ├─composables
|  |     |   |  |   ├─components #主题组件
|  |     |   |  |   |     ├─global #被注册为全局的组件
|  |     |   |  |   |     ├─child #子组件
|  |     ├─styles #覆盖主题默认样式文件 
|  |     |   ├─palette.css #定义Css变量
|  |     |   ├─index.css #样式文件用于覆盖默认样式或添加额外样式，因此它一般会在你主题样式的末尾引入
|  |     ├─public #静态文件
|  |     |   ├─avatar.png
|  |     |   ├─navbar.js
|  |     |   └themeConfig.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>主题除了vuepress提供的路由之外，还加入了<code>/tag,/about,/link,/mood</code>四个路由</p><table><thead><tr><th>路由</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"></th></tr></thead><tbody><tr><td>/tag</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">分类和标签页面</td></tr><tr><td>/link</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">友情链接页面</td></tr><tr><td>/about</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">关于页面</td></tr><tr><td>/mood</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">心情页面</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/home/directory-structure.html.vue?vue&type=template&id=067e9307

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/home/directory-structure.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const directory_structure_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=5208.app.js.map