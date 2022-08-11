"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[6584],{1680:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-1c447180",path:"/plugin/bubble/",title:"vuepress-plugin-bubble",lang:"zh-CN",frontmatter:{tag:["bubble","plugin"],categories:["plugin"]},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]}],git:{}}},7133:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(6252);const e=(0,p._)("h1",{id:"vuepress-plugin-bubble",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#vuepress-plugin-bubble","aria-hidden":"true"},"#"),(0,p.Uk)(" vuepress-plugin-bubble")],-1),l=(0,p._)("div",{class:"custom-container tip"},[(0,p._)("p",{class:"custom-container-title"},"TIP"),(0,p._)("p",null,"这是vuepress的一个浪漫气泡特效插件")],-1),t=(0,p._)("ul",null,[(0,p._)("li",null,"使用效果")],-1),r=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211122002556797",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211122002556797.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),o=(0,p.uE)('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vuepress-plugin-bubble\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">//在这里配置插件</span>\n    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span>\n            <span class="token string">&#39;bubble&#39;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token comment">//气泡数量 推荐0(不包括)到1之前的小数，</span>\n                <span class="token literal-property property">bubbleNumber</span><span class="token operator">:</span> <span class="token number">0.14</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//气泡透明度 0到1之间的小数</span>\n                <span class="token literal-property property">bubbleAlpha</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//透明度变化速度，越接近于0越好</span>\n                <span class="token literal-property property">alphaChangeSpeed</span><span class="token operator">:</span> <span class="token number">0.00001</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//气泡大小，推荐0到1之间的值</span>\n                <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//气泡大小变化速度 越小越好</span>\n                <span class="token literal-property property">sizeChangeSpeed</span><span class="token operator">:</span> <span class="token number">0.0002</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//气泡上升速度</span>\n                <span class="token literal-property property">riseSpeed</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//气泡颜色，白色rgb(255,255,255) 请传入255,255,255</span>\n                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;255,255,255&#39;</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//该气泡盒子的z-index值，请根据你自己主题，传入适当的值，否则可能不会显示</span>\n                <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>当你在<code>config.js</code>文件中，使用该插件后，该插件会自动在便会自动显示</p>',4),c=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211122003330518",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211122003330518.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),u=(0,p._)("p",null,[(0,p.Uk)("图中红框内的dom节点，便是该插件自动添加的，如果你确实配置了该插件，但是在首页中，并没有显示的话，那么请f12看一下你网站的css样式，并且传入正确，合适的"),(0,p._)("code",null,"zIndex"),(0,p.Uk)("值")],-1),i=(0,p._)("div",{class:"custom-container tip"},[(0,p._)("p",{class:"custom-container-title"},"TIP"),(0,p._)("p",null,[(0,p.Uk)("该插件所在节点的"),(0,p._)("code",null,"z-index"),(0,p.Uk)("是通过插件配置项中的"),(0,p._)("code",null,"zIndex"),(0,p.Uk)("进行配置的")])],-1),b={},m=(0,a(3744).Z)(b,[["render",function(n,s){return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,l,t,r,o,c,u,i],64)}]])}}]);