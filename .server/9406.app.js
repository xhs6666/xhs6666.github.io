"use strict";
exports.id = 9406;
exports.ids = [9406];
exports.modules = {

/***/ 94220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-53a65b51",
  "path": "/plugin/coze/component.html",
  "title": "Coze组件使用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "CozeMood",
      "slug": "cozemood",
      "children": [
        {
          "level": 3,
          "title": "钩子",
          "slug": "钩子",
          "children": []
        },
        {
          "level": 3,
          "title": "插槽",
          "slug": "插槽",
          "children": []
        },
        {
          "level": 3,
          "title": "样式变量",
          "slug": "样式变量",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CozeLogin",
      "slug": "cozelogin",
      "children": [
        {
          "level": 3,
          "title": "钩子",
          "slug": "钩子-1",
          "children": []
        },
        {
          "level": 3,
          "title": "插槽",
          "slug": "插槽-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "RegisterUser",
      "slug": "registeruser",
      "children": []
    },
    {
      "level": 2,
      "title": "样式",
      "slug": "样式",
      "children": []
    },
    {
      "level": 2,
      "title": "CozePhoto",
      "slug": "cozephoto",
      "children": []
    },
    {
      "level": 2,
      "title": "样式配置",
      "slug": "样式配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 70917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/plugin/coze/component.html.vue?vue&type=template&id=411b8451



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="coze组件使用" tabindex="-1"><a class="header-anchor" href="#coze组件使用" aria-hidden="true">#</a> Coze组件使用</h1><blockquote><p>以下所有的组件都是全局组件</p></blockquote><h2 id="cozemood" tabindex="-1"><a class="header-anchor" href="#cozemood" aria-hidden="true">#</a> CozeMood</h2><p>该组件是展示说说的组件，也就是下面这个页面</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108194504444" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108194504444.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h3 id="钩子" tabindex="-1"><a class="header-anchor" href="#钩子" aria-hidden="true">#</a> 钩子</h3><p>该组件当所有数据加载完成之后，会返回一个钩子函数<code>cozeSuccess</code>，你可以在你自己的主题中，使用该函数</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Mood.vue</span>
<span class="token operator">&lt;</span>CozeMood @coze<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">&quot;cozeSuccess&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>CozeMood<span class="token operator">&gt;</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">cozeSuccess</span><span class="token punctuation">(</span><span class="token parameter">cozeMoodData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//数据加载完成之后返回</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3><p>该组件也提供了一些插槽</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-content&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-img&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-bottom-left&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-bottom-right&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>对应位置如下</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108202006814" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108202006814.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h3 id="样式变量" tabindex="-1"><a class="header-anchor" href="#样式变量" aria-hidden="true">#</a> 样式变量</h3><p>如果你需要设置背景颜色等等，提供了css变量，请自行使用</p><h2 id="cozelogin" tabindex="-1"><a class="header-anchor" href="#cozelogin" aria-hidden="true">#</a> CozeLogin</h2><p>该组件是一个注册，登出操作组件，不提供任何的样式，就是一个空壳，提供的目的是，你如果需要让用户登录，发布说说等，可以为用户提供注册等操作，我没有提供样式，是因为什么样式也没有，更便于你们设置其css样式</p><blockquote><p>该组件展示效果</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211110234327520" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211110234327520.png?x-oss-process=style/pictureProcess1" data="aurora"></p><ul><li>结构</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--这是一个登录注册的组件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入用户名<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>输入6到20位包含数字,字母密码<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入邮箱 登录不需要此邮箱<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomCenter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-register<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>verifyIdentify<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginOut<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomBottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="钩子-1" tabindex="-1"><a class="header-anchor" href="#钩子-1" aria-hidden="true">#</a> 钩子</h3><p>提供的钩子有</p><table><thead><tr><th>名称</th><th>数据</th><th>描述</th></tr></thead><tbody><tr><td>cozeLoginOut</td><td>返回数据</td><td>点击登出按钮返回登出状态</td></tr><tr><td>cozeLogin</td><td>返回用户登录相关信息</td><td>点击登录</td></tr><tr><td>cozeRegister</td><td>返回用户注册数据</td><td>在leanCloud中，注册新用户</td></tr></tbody></table><ul><li>使用案例</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CozeLogin @coze<span class="token operator">-</span>login<span class="token operator">-</span>out<span class="token operator">=</span><span class="token string">&quot;cozeLoginOut&quot;</span> @coze<span class="token operator">-</span>login<span class="token operator">=</span><span class="token string">&quot;cozeLogin&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>CozeLogin<span class="token operator">&gt;</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">cozeLoginOut</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击登出按钮&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">cozeLogin</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击登录按钮&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">cozeRegister</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击注册按钮&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108203333154" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108203333154.png?x-oss-process=style/pictureProcess1" data="aurora"></p><blockquote><p>你可以根据返回的数据，进行额外的一些操作</p></blockquote><blockquote><ul><li><p>registerStatus</p><blockquote><p>为0，表示注册失败，反之</p></blockquote></li><li><p>status</p><blockquote><p>为1，表示成功退出登录</p></blockquote></li><li><p>administrator</p><blockquote><p>为0，表示不是管理员，反之</p></blockquote></li></ul></blockquote><h3 id="插槽-1" tabindex="-1"><a class="header-anchor" href="#插槽-1" aria-hidden="true">#</a> 插槽</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomBottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="registeruser" tabindex="-1"><a class="header-anchor" href="#registeruser" aria-hidden="true">#</a> RegisterUser</h2><p>该组件也是一个全局组件，插件提供的默认注册组件，未提供任何钩子等</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108203909235" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108203909235.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/plugin/coze/style.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`样式设置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("样式设置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h2 id="cozephoto" tabindex="-1"><a class="header-anchor" href="#cozephoto" aria-hidden="true">#</a> CozePhoto</h2><p>该组件是展示相册的一个全局组件，该组件的展示效果如下图</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111000148676" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111000148676.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>该组件会展示所有用户发布在说说上，并且设置为显示的图片</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>后续会加上，不是管理员只显示当前用户对应的图片，管理员显示所有</p></div><blockquote><p>该组件没有提供任何的插槽等</p></blockquote><h2 id="样式配置" tabindex="-1"><a class="header-anchor" href="#样式配置" aria-hidden="true">#</a> 样式配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/plugin/coze/style.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`样式配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("样式配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/plugin/coze/component.html.vue?vue&type=template&id=411b8451

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/plugin/coze/component.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const component_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=9406.app.js.map