"use strict";
exports.id = 5025;
exports.ids = [5025];
exports.modules = {

/***/ 98976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4496a702",
  "path": "/homeconfig.html",
  "title": "首页配置",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "首页配置",
      "一言",
      "头像",
      "社交",
      "页脚"
    ],
    "categories": [
      "首页配置"
    ],
    "date": "2021/10/19 21:18"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "导航栏",
      "slug": "导航栏",
      "children": []
    },
    {
      "level": 2,
      "title": "logo",
      "slug": "logo",
      "children": [
        {
          "level": 3,
          "title": "logo文字",
          "slug": "logo文字",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "中间头像",
      "slug": "中间头像",
      "children": []
    },
    {
      "level": 2,
      "title": "随机一言",
      "slug": "随机一言",
      "children": []
    },
    {
      "level": 2,
      "title": "博客创建时间",
      "slug": "博客创建时间",
      "children": []
    },
    {
      "level": 2,
      "title": "替换文章列表图片地址",
      "slug": "替换文章列表图片地址",
      "children": []
    },
    {
      "level": 2,
      "title": "最后更新时间",
      "slug": "最后更新时间",
      "children": [
        {
          "level": 3,
          "title": "1.git-commit",
          "slug": "_1-git-commit",
          "children": []
        },
        {
          "level": 3,
          "title": "2. frontmatter",
          "slug": "_2-frontmatter",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "修改首页文章列表懒加载图片",
      "slug": "修改首页文章列表懒加载图片",
      "children": []
    },
    {
      "level": 2,
      "title": "关于页面配置",
      "slug": "关于页面配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 92183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homeconfig_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/homeconfig.html.vue?vue&type=template&id=213573ec



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>vuepress框架，会自动将<code>docs</code>目录下的所有<code>.md</code>(<code>不包括docs/.vuepress目录下的md</code>)文件自动解析成<code>.html</code>文件，如果你建立站点之后，发现首页没有文章，那么你需要在<code>docs</code>目录下，创建几个<code>.md</code>文件</p><p>在阅读本章节之前，请确保你已经对 Markdown 有所了解。</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/markdown.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Markdown使用`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Markdown使用")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>如果你还不了解 Markdown ，请先学习一下<a href="https://www.runoob.com/markdown/md-tutorial.html" target="_blank" rel="noopener noreferrer">Markdown 教程`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><ul><li>必读</li></ul><blockquote><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/issue/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`主题问题解决`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("主题问题解决")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/home/deploy.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`部署`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("部署")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><ul><li>推荐阅读</li></ul><blockquote><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/feature/registercom.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`主题增加新组件，新页面`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("主题增加新组件，新页面")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/style.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`修改主题默认样式`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("修改主题默认样式")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/home/directory-structure.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`主题目录结构`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("主题目录结构")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/markdown.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`主题写作技巧`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("主题写作技巧")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/issue/bug.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`主题bug`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("主题bug")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/issue/CHANGELOG.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`更新日志`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("更新日志")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><ul><li>环境安装</li></ul><blockquote><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/node.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`node安装教程`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("node安装教程")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote></div><h2 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h2><p>导航栏配置可以查看vuepress官方配置<a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar">入口</a>，可以借鉴一下我的配置</p><details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//docs/.vuepress.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>

        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;快速开始&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/readme/&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-si-glyph-dial-number-1&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;所有配置&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/home/config.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-blaze-line&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;问题及必读&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/issue/&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-si-glyph-billiard-ball&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;问题和bug&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-shoulijindu-xuanzhong&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;node安装教程&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token comment">//&#39;/readme/introduce.md&#39;,</span>
                        <span class="token string">&#39;/node.md&#39;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;bug&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&#39;/issue/bug.md&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;更新日志&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&#39;/issue/CHANGELOG.md&#39;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;其他配置&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-weather&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/home/deploy.md&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/comment/README.md&quot;</span><span class="token punctuation">,</span>

                        <span class="token string">&quot;/page/README.md&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;其他配置&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;插件&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-si-glyph-egg&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/plugin/archive&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;时间轴&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/plugin/bubble&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;浪漫气泡&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/plugin/coze&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;说说&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/plugin/player&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;音乐播放器&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;life&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-hua2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                           <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Me&#39;</span><span class="token punctuation">,</span>
                           <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span> 
                        <span class="token punctuation">}</span>
                        
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;我?&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;说说&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;chat&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/mood&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;相册&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;photo&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/photo&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-a-ziyuan107&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;标签&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/tag&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;时间轴&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;archive&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/archive&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;友情链接&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/link&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-guide&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;案例&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/use.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-si-glyph-load&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Aurora&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuepress-aurora/vuepress-theme-aurora&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">&#39;aurora-navbar-github1&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br></div></div></details><p>其中<code>/about,/link,/tag,/mood,/archive/</code>是主题新增的路由，对应关于页面，友情链接，标签，说说页面,文章归档，所以请在navbar上，添加</p><ul><li><p><strong>text</strong></p><blockquote><p>此链接的文字描述</p></blockquote></li><li><p>link</p><blockquote><p>url地址</p></blockquote></li><li><p>iconClass</p><blockquote><p>你自己在阿里云图标库中选中某个图标，添加到项目后的某个图标得类名，`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/style/icon.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`如何配置导航栏图标`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("如何配置导航栏图标")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote></li></ul><h2 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831141849241" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831141849241.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>导航栏logo可以在<code>config.js</code>文件中，进行设置，你可以将图片放在<code>docs/.vuepress/public</code>目录下，然后使用<code>/图片文件名</code>，也可以使用一个url</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Public 文件路径</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/hero.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// URL</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果没有在此<code>config.js</code>文件中进行设置，默认使用<a href="https://ooszy.cco.vin/img/ico/yuan.png" target="_blank" rel="noopener noreferrer">default logo`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如何在站点中使用<a href="https://v2.vuepress.vuejs.org/zh/guide/assets.html" target="_blank" rel="noopener noreferrer">本地图片?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p></div><h3 id="logo文字" tabindex="-1"><a class="header-anchor" href="#logo文字" aria-hidden="true">#</a> logo文字</h3><p>对于logo旁边文字，需要在<code>docs/readme.md</code>的<code>logoTitle</code>进行设置，默认值为<code>aurora</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">logoTitle</span><span class="token operator">:</span> <span class="token string">&#39;qsyyke&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831142236064" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831142236064.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>并且支持设置字体颜色，配置项为<code>logoColor</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">logoColor</span><span class="token operator">:</span> <span class="token string">&#39;#2c3e50&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><a href="https://aurora.xcye.xyz/homeconfig.html#logo%E6%96%87%E5%AD%97" target="_blank" rel="noopener noreferrer">配置说明`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><h2 id="中间头像" tabindex="-1"><a class="header-anchor" href="#中间头像" aria-hidden="true">#</a> 中间头像</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831142850834" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831142850834.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>此头像通过<code>heroImg</code>进行修改，并不是使用logo图片地址，默认图片使用<a href="https://ooszy.cco.vin/img/blog-public/avatar.jpg">default</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">heroImg</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-public/avatar.jpg&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="随机一言" tabindex="-1"><a class="header-anchor" href="#随机一言" aria-hidden="true">#</a> 随机一言</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831143353819" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831143353819.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>该随机一言打印效果使用<a href="https://github.com/pengqiangsheng/easy-typer-js">easy-typer-js</a></p><p>在后续版本中，会对随机一言进行优化，当前版本更改随机一言地址，不太容易</p><h2 id="博客创建时间" tabindex="-1"><a class="header-anchor" href="#博客创建时间" aria-hidden="true">#</a> 博客创建时间</h2><img src="https://ooszy.cco.vin/img/blog-note/image-20211019211924609.png?x-oss-process=style/pictureProcess1" alt="image-20211019211924609" style="${(0,server_renderer.ssrRenderStyle)({"zoom":"50%"})}"><p>此篇文章的发布时间，你可以在`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/frontmatter.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`frontmatter`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("frontmatter")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<code>date</code></p><blockquote><p>首页会根据你通过<code>git commit</code>提交的时间戳或者是否在文章的<code>frontmatter</code>中设置是否置顶</p></blockquote><h2 id="替换文章列表图片地址" tabindex="-1"><a class="header-anchor" href="#替换文章列表图片地址" aria-hidden="true">#</a> 替换文章列表图片地址</h2><p>图片地址的修改，可以有两个选择</p><ol><li><p>通过在每篇文章的顶部，设置<code>coverUrl</code>属性，此属性值需要传入一个图片url地址，语法为<code>yaml</code></p><details class="custom-container details"><summary>view</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">stick</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">coverUrl</span><span class="token punctuation">:</span> <span class="token string">&#39;https://img2.baidu.com/it/u=2192265457,2884791613&amp;fm=26&amp;fmt=auto&#39;</span>
<span class="token key atrule">time</span><span class="token punctuation">:</span> 2021/10/14
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details></li><li><p>如果你没有在每篇文章中，设置<code>coverUrl</code>值，那么将使用你设置的随机图片接口，如果没设置，那么将使用主题默认提供的接口，</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//首页文章列表封面图api接口</span>
<span class="token literal-property property">homePageImgApi</span><span class="token operator">:</span> <span class="token string">&quot;https://api.ixiaowai.cn/api/api.php&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><h2 id="最后更新时间" tabindex="-1"><a class="header-anchor" href="#最后更新时间" aria-hidden="true">#</a> 最后更新时间</h2><h3 id="_1-git-commit" tabindex="-1"><a class="header-anchor" href="#_1-git-commit" aria-hidden="true">#</a> 1.git-commit</h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211020235623101" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211020235623101.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>当你使用<code>git init</code>初始化之后，你需要使用下面命令进行提交</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;最后更新时间&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后重启服务<code>npm run dev</code></p><h3 id="_2-frontmatter" tabindex="-1"><a class="header-anchor" href="#_2-frontmatter" aria-hidden="true">#</a> 2. frontmatter</h3><p>同时，还有另外一种选择，你可以在每一个md文件中，在每篇文章的顶部，添加<code>date</code>字段，自己设置日期</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token string">&quot;2021/10/20 23:59&quot;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>请注意，<code>---</code>内的是<code>yaml</code>语法，详细请查看官方说明https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html</p><blockquote><p><code>date字段值，请使用双引号引起来，你可以只写2021/10/20，不需要写后面的时候，如果你在frontmatter中，添加此字段，那么将以此字段的时间，作为首页文章列表的最后更新时间</code></p></blockquote><h2 id="修改首页文章列表懒加载图片" tabindex="-1"><a class="header-anchor" href="#修改首页文章列表懒加载图片" aria-hidden="true">#</a> 修改首页文章列表懒加载图片</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//config.js</span>
<span class="token literal-property property">homePageLazyLoadingImg</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/aurora-loading.gif?name=chuchen&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021000532423" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021000532423.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="关于页面配置" tabindex="-1"><a class="header-anchor" href="#关于页面配置" aria-hidden="true">#</a> 关于页面配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/page/about.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`关于页面配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("关于页面配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/homeconfig.html.vue?vue&type=template&id=213573ec

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/homeconfig.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const homeconfig_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=5025.app.js.map