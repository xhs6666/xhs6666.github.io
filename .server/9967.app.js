"use strict";
exports.id = 9967;
exports.ids = [9967];
exports.modules = {

/***/ 93017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-72a9241b",
  "path": "/home/deploy.html",
  "title": "部署",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "部署",
      "deploy",
      "Github Page",
      "自定义域名"
    ],
    "date": "2021/12/10 20:50"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "部署到自己的服务器",
      "slug": "部署到自己的服务器",
      "children": []
    },
    {
      "level": 2,
      "title": "GitHub Pages",
      "slug": "github-pages",
      "children": [
        {
          "level": 3,
          "title": "deploy.sh",
          "slug": "deploy-sh",
          "children": []
        },
        {
          "level": 3,
          "title": "部署到自定义域名",
          "slug": "部署到自定义域名",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Github Actions完成自动部署",
      "slug": "github-actions完成自动部署",
      "children": [
        {
          "level": 3,
          "title": "获取token",
          "slug": "获取token",
          "children": []
        },
        {
          "level": 3,
          "title": "上传到github",
          "slug": "上传到github",
          "children": []
        },
        {
          "level": 3,
          "title": "设置Actions secrets",
          "slug": "设置actions-secrets",
          "children": []
        }
      ]
    }
  ],
  "git": {}
}


/***/ }),

/***/ 66908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ deploy_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/home/deploy.html.vue?vue&type=template&id=3ea3490b



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><p>在部署之前，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>...</p><p>在你部署到任意平台之前，请确保你已经运行<code>npm run build</code>命令了，此命令会自动将你博客编译成静态文件(<code>html,css,js,静态图片等</code>)，然后这些静态文件，会自动存放在<code>docs/.vuepress/dist</code>目录下，此目录是运行<code>npm run build</code>命令自动生成的，不需要你自己创建</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210204953034" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210204953034.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="部署到自己的服务器" tabindex="-1"><a class="header-anchor" href="#部署到自己的服务器" aria-hidden="true">#</a> 部署到自己的服务器</h2><p>如果你需要部署到自己的服务器，我已经安装了宝塔，如果你没安装宝塔，那么请先安装好宝塔面板,链接<a href="https://www.bt.cn/download/linux.html" target="_blank" rel="noopener noreferrer">宝塔linux面板，一键安装LAMP/LNMP/SSL/Tomcat (bt.cn)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116091011851" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116091011851.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116091139240" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116091139240.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116091358145" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116091358145.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116091544820" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116091544820.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116091648397" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116091648397.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116091821466" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116091821466.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116092045376" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116092045376.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116092136984" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116092136984.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116092213963" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116092213963.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116092350381" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116092350381.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container tip"><p class="custom-container-title">问题</p><ol><li><p>我使用域名或者ip建立站点之后，那个文件夹名并不是<code>aurora.xcye.xyz</code></p><blockquote><p>这个文件夹名是根据你ip或者域名命名的</p></blockquote></li></ol><p>不推荐使用这种方式进行部署，麻烦</p></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Github pages就是会自动将你的静态文件托管在github，然后可以直接使用github提供的一个域名<code>&lt;your github username&gt;.github.io</code>或者使用你的自定义域名就行访问</p><p>在使用之前，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，请先看一下<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress官方介绍`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>...</p></div><p>在 <code>docs/.vuepress/config.js</code> 中设置正确的 <code>base</code>。</p><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/</code>，则可以省略这一步，因为 <code>base</code> 默认即是 <code>&quot;/&quot;</code>。</p><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p><ol><li><p>进入github，新建一个仓库，用于托管<code>npm run build</code>打包之后的HTML文件</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831133913906" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831133913906.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>将<code>docs/.vuepress/dist</code>下的所有文件使用git命令push到该仓库中</p><blockquote><p>如何push？？</p><p>请点击<a href="https://cn.bing.com/search?q=git+push%E5%88%B0github%E4%BB%93%E5%BA%93&amp;cvid=b51557dbd8cc44b190988babb925d3ee&amp;aqs=edge..69i57j69i64.10400j0j1&amp;pglt=163&amp;FORM=ANNTA1&amp;PC=U531" target="_blank" rel="noopener noreferrer">这里`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p></blockquote></li><li><p>进入settings--&gt;pages</p><p>进行第二步之前，表示你已经将dist目录中的文件，已push到此仓库中</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831134813016" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831134813016.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831134956617" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831134956617.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>然后你就可以点击上面的那个连接，进行访问了，现在就已经将打包后的静态文件部署到github page</p><details class="custom-container details"><summary>哪个链接??</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116103319349" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116103319349.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>第一次使用github pages，不推荐直接使用自定义域名，不推荐直接使用自定义域名，不推荐直接使用自定义域名，请先使用github提供的域名，能正确的访问到博客页面之后，再改成自定义域名</p></div><h3 id="deploy-sh" tabindex="-1"><a class="header-anchor" href="#deploy-sh" aria-hidden="true">#</a> deploy.sh</h3><blockquote><p><code>下面的内容，请确保你已经能使用github提供的地址或者自定义域名访问到博客页面之后，在使用下面这种比较快速的方式</code></p></blockquote><p>在你的项目中，创建一个如下的 <code>deploy.sh</code> 文件（请自行判断去掉高亮行的注释）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>下面这个是使用自定义域名进行部署的<code>deploy.sh</code>文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> -e

<span class="token builtin class-name">cd</span> docs/.vuepress/dist
<span class="token builtin class-name">echo</span> <span class="token string">&#39;blog.cco.vin&#39;</span> <span class="token operator">&gt;</span> CNAME

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token function">git</span> push -f https://github.com/qsyyke/blog.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>请自己看一下自己的github仓库地址，更改上面对应的值，比如<code>git push -f https://github.com/qsyyke/blog.git master:gh-pages</code>的地址，还有分支等</p></div><p>然后进入到<code>package.json</code>文件中，输入以下内容到<code>scripts</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>请注意看一下这个.sh文件名是不是deploy.sh，如果不是，请改一下&quot;deploy&quot;: &quot;bash deploy.sh&quot;，将后面的deploy.sh改成自己的.sh文件名就可以</code></p></blockquote><details class="custom-container details"><summary>改变package.json文件之前?</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116104440846" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116104440846.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><details class="custom-container details"><summary>改变package.json文件之后</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116104605535" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116104605535.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><blockquote><p><code>为何你的package.json和我的不一样，package内容不需要和我的一模一样...</code></p></blockquote><p>然后你现在就可以运行<code>npm run deploy</code>命令，然后就会依次执行<code>npm run build</code>,进入dist内<code>git add . &amp;&amp; git commit -m &quot;...&quot; &amp;&amp; git push ... </code>，之后如果一切正常的话，你就可以在你github对应分支处看到dist目录下的所有内容</p><p>不能直接在比如vscode的终端处运行<code>npm run deploy</code>，否则会出现下面错误，执行此命令，你需要在cmd或者git的<code>Git Bash Here</code></p><details class="custom-container details"><summary>错误信息</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116105934737" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116105934737.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><h3 id="部署到自定义域名" tabindex="-1"><a class="header-anchor" href="#部署到自定义域名" aria-hidden="true">#</a> 部署到自定义域名</h3><p>部署到自定义域名也是一样的方法，只是需要在github的settings--&gt;pages中，添加自定义域名就可以</p><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4><ol><li><p>到阿里云，腾讯云，或其他服务商处，申请一个域名，如果使用国内服务器，域名需备案</p><blockquote><p>如何申请?<a href="https://cn.bing.com/search?q=%E5%A6%82%E4%BD%95%E7%94%B3%E8%AF%B7%E5%9F%9F%E5%90%8D&amp;cvid=c0c1efa1ddc84c3dacba8acc079f915c&amp;aqs=edge..69i57j0l4.5982j0j3&amp;FORM=ANAB01&amp;PC=U531" target="_blank" rel="noopener noreferrer">点这里`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p></blockquote></li><li><p>进入到仓库中的<code>Setting ---&gt; Pages</code></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831135358064" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210831135358064.png?x-oss-process=style/pictureProcess1" data="aurora"></p></li><li><p>如果出现下面这个，那就证明你没有为这个自定义域名，添加一个<code>CNAME</code>解析</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116110931450" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116110931450.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>就表示，该<code>newblog.cco.vin</code>域名并没有添加一个CNAME解析，进入到域名解析处</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831135743656" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831135743656.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>对newblog添加<code>CNAME</code>记录，指向<code>&lt;user&gt;.github.io.</code>就可以了</p><blockquote><p><code>我上面的这个域名解析面板在哪?</code></p><p>我使用的是腾讯云，所以你进入腾讯云，点击对应域名后面解析，就会出现这个，如果你使用的是其他域名服务商，请点击下面链接，改一下服务商</p><p><a href="https://cn.bing.com/search?q=%E9%98%BF%E9%87%8C%E4%BA%91%E5%A6%82%E4%BD%95%E4%B8%BA%E5%9F%9F%E5%90%8D%E6%B7%BB%E5%8A%A0CNAME%E8%A7%A3%E6%9E%90&amp;cvid=29db0c50b2574863ab82e0b0a603bfd9&amp;aqs=edge..69i57.604425j0j4&amp;FORM=ANAB01&amp;PC=U531" target="_blank" rel="noopener noreferrer">点击这里，记得在搜索框中改一下内容`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p></blockquote></li></ol><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211116111632322" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211116111632322.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="github-actions完成自动部署" tabindex="-1"><a class="header-anchor" href="#github-actions完成自动部署" aria-hidden="true">#</a> Github Actions完成自动部署</h2><p>如何使用Github Actions进行自动部署，请查看我自己写的<a href="https://aurora.xcye.xyz/home/deploy.html#Github%20Actions%E5%AE%8C%E6%88%90%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">文章`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>，如果你觉得不够详细的话，可以再在搜索引擎中，搜索<code>vuepress github actions</code>关键字</p><p>推荐使用Github Actions完成自动部署，你只需要将站点中，除<code>node_modules,docs/.vuepress/.cache,docs/.vuepress/.temp,docs/.vuepress/dist</code>外的内容，push到你的仓库，然后简单设置下，就可以自动在github中，下载依赖，已经运行<code>npm run build</code>，从而完成自动部署，步骤为</p><h3 id="获取token" tabindex="-1"><a class="header-anchor" href="#获取token" aria-hidden="true">#</a> 获取token</h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026232416988" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026232416988.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026232442304" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026232442304.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026232532647" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026232532647.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026232831517" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026232831517.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026232853598" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026232853598.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026232948093" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026232948093.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h3 id="上传到github" tabindex="-1"><a class="header-anchor" href="#上传到github" aria-hidden="true">#</a> 上传到github</h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026233551543" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026233551543.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这里你只需要上传<code>package.json</code>和<code>docs</code>就可以了，你也可以排除<code>docs/.vuepress/.cache,docs/.vuepress/.temp,docs/.vuepress/dist</code>文件</p></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026233853901" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026233853901.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>然后将下面的内容，复制替换下图中的内容</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026234059132" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026234059132.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>deploy
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main <span class="token comment">#push到哪个分支时触发自动部署，推荐main</span>
    <span class="token key atrule">paths-ignore</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .gitignore
      <span class="token punctuation">-</span> .mergify.yml
      <span class="token punctuation">-</span> LICENSE
      <span class="token punctuation">-</span> README.md
      <span class="token punctuation">-</span> renovate.json
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">node</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;lts/*&#39;</span>
        <span class="token key atrule">platform</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{matrix.platform}} / Node.js \${{ matrix.node }}&#39;</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> \$<span class="token punctuation">{</span><span class="token punctuation">{</span>matrix.platform<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@main
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@main
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> \$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token comment">#运行安装依赖和主题</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress
      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Pages
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        cd docs/.vuepress/dist
        git config --global init.defaultBranch master
        git init
        git config user.name \$GITHUB_ACTOR
        git config user.email \${{ secrets.GIT_EMAIL }}
        git add .
        git commit -q -m &quot;Deploying to gh-pages from @ \$GITHUB_SHA in \$(date +&quot;%a %b %d %T %Z %Y&quot;)&quot;
        git push -f -q https://\$GITHUB_ACTOR:\${{ github.token }}@github.com/\$GITHUB_REPOSITORY.git master --tags</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="设置actions-secrets" tabindex="-1"><a class="header-anchor" href="#设置actions-secrets" aria-hidden="true">#</a> 设置Actions secrets</h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026234643018" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026234643018.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026234710492" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026234710492.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026234805318" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026234805318.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>然后你在本地或者github中，随便在<code>main</code>分支下，修改一个文件的内容，然后<code>git commit...</code>，<code>git push ...</code>后，你便可以看到已经开始运行了</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026235130337" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026235130337.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026235518279" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026235518279.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>只有这个状态变成绿色之后，才便是部署成功，如果红色，你可以看一下报错信息</p><p>你可以在<code>master</code>分支看一下，build之后的文件</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211026235929559" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211026235929559.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211027000105500" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211027000105500.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211027000121171" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211027000121171.png?x-oss-process=style/pictureProcess1" data="aurora"></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/home/deploy.html.vue?vue&type=template&id=3ea3490b

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/home/deploy.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const deploy_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=9967.app.js.map