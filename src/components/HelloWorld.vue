<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="article">
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
const sanitizeHtml = require('sanitize-html');

// eslint-disable-next-line
const content = "Remember the old adage, \"When life hands you lemons, make lemonade\"?&nbsp; Today, I met a family who took that bit of wisdom to heart.&nbsp; My visit to the \u003ca href=\"http://www.burnecoscents.com/index.html\" target=\"_blank\"\u003eEcoScents\u003c/a\u003e showroom and warehouse was a breath of fresh air - and not just because of the candles.&nbsp; (Though the candles did smell wonderful.)\u003cbr /\u003e\n\u003cbr /\u003e\nThe company was founded in November of 2009 by husband and wife team Chad and Erin Kampschneider.&nbsp; They didn't have any previous experience in making candles.&nbsp; In fact, Chad was a hedge fund manager.&nbsp; But with the stock markets plunging, they knew they had to do something different.&nbsp; A candle burning on the table as they talked gave Erin an idea. \u003cbr /\u003e\n\u003cbr /\u003e\nIt took a lot of research and a thousand unsuccessful attempts before they got the recipe figured out, but all of that hard work has paid off.&nbsp; EcoScents candles are making a name for themselves, and with good reason. \u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://4.bp.blogspot.com/-wpbevL0vnt0/TtK0LdgMXxI/AAAAAAAAAeE/IhpiNXRzmuo/s1600/DSC02455.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"400\" src=\"http://4.bp.blogspot.com/-wpbevL0vnt0/TtK0LdgMXxI/AAAAAAAAAeE/IhpiNXRzmuo/s400/DSC02455.JPG\" width=\"275\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\nThe candle making process is a family affair done completely by hand.&nbsp; They start by adding hydrogen to pure soy beans and melting them down to a liquid.&nbsp; Soy burns longer and at a cooler temperature than paraffin wax without leaving soot behind in the jar - or on your walls.&nbsp; It's also good for the economy since the soy beans come from American farmers.\u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://4.bp.blogspot.com/-h-a0N4V2IO4/TtKzjDOnp-I/AAAAAAAAAdk/M9Do5YiAPFU/s1600/DSC02451.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"400\" src=\"http://4.bp.blogspot.com/-h-a0N4V2IO4/TtKzjDOnp-I/AAAAAAAAAdk/M9Do5YiAPFU/s400/DSC02451.JPG\" width=\"300\" /\u003e&nbsp;\u003c/a\u003e\u003c/div\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003cbr /\u003e\n\u003c/div\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: left;\"\u003eNext, dye and scent are mixed in.\u003c/div\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: left;\"\u003e\u003cbr /\u003e\n\u003c/div\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: left;\"\u003e\u003c/div\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://2.bp.blogspot.com/-YJvqslVMnh4/TtK0CIYMrCI/AAAAAAAAAds/paP6zfBQcKs/s1600/DSC02452.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"300\" src=\"http://2.bp.blogspot.com/-YJvqslVMnh4/TtK0CIYMrCI/AAAAAAAAAds/paP6zfBQcKs/s400/DSC02452.JPG\" width=\"400\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: left;\"\u003e\u003c/div\u003eThen the candles are poured. The recipe has to be adjusted depending on the time of year.&nbsp; A five-degree difference in temperature can impact the consistency of the candles, but after two years, they've gotten it down to a science.&nbsp; The cotton wicks are also environmentally friendly and never need to be trimmed, and the jars are recyclable.\u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://1.bp.blogspot.com/-FGLXbetWhm0/TtK0FlT9XaI/AAAAAAAAAd0/NI6MV_Cg0JU/s1600/DSC02453.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"300\" src=\"http://1.bp.blogspot.com/-FGLXbetWhm0/TtK0FlT9XaI/AAAAAAAAAd0/NI6MV_Cg0JU/s400/DSC02453.JPG\" width=\"400\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\nFinally, each jar is labeled.&nbsp; Custom labels can be ordered for businesses or special events.&nbsp; They will even make custom labels for weddings that can include an engagement photo. \u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://3.bp.blogspot.com/-Iq3Lj-RAAHY/TtK0JSsPRMI/AAAAAAAAAd8/ONTvPGBLg_4/s1600/DSC02454.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"300\" src=\"http://3.bp.blogspot.com/-Iq3Lj-RAAHY/TtK0JSsPRMI/AAAAAAAAAd8/ONTvPGBLg_4/s400/DSC02454.JPG\" width=\"400\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\nYou can stop by their warehouse/showroom on 156th and West  Center Road to see the candle making process for yourself.&nbsp;  They're hosting a holiday open house on December 10, 2011 from 10 a.m.  to 5 p.m.&nbsp; It will be a great chance to find some special gifts for the people on your list this year.\u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://2.bp.blogspot.com/-7MCN-mN5h-8/TtK0dzuMbCI/AAAAAAAAAes/Us_ZXxe-XJ8/s1600/DSC02460.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"300\" src=\"http://2.bp.blogspot.com/-7MCN-mN5h-8/TtK0dzuMbCI/AAAAAAAAAes/Us_ZXxe-XJ8/s400/DSC02460.JPG\" width=\"400\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003c/div\u003eDoing some Christmas shopping at EcoScents was definitely a win-win situation for me.&nbsp; I got to support a local business and buy a special product that is good for the environment and very affordable.&nbsp; An 8 ounce candle burns for 50 hours and costs $11.25.&nbsp; A 16 ounce candle burns for a 100 hours and costs $14.25.&nbsp; \u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://2.bp.blogspot.com/-3CKStERvu9I/TtKa9DEbWfI/AAAAAAAAAdM/Z-ZtsFV2oOo/s1600/DSC02461.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"400\" src=\"http://2.bp.blogspot.com/-3CKStERvu9I/TtKa9DEbWfI/AAAAAAAAAdM/Z-ZtsFV2oOo/s400/DSC02461.JPG\" width=\"300\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\nI wasn't planning to shop for myself, but when I saw the new aroma lamps, I couldn't help it.&nbsp; They are beautiful.&nbsp; Some are \"night light\" style in that they plug directly into the wall, which is great for kitchens and bathrooms.&nbsp; Others are more for a table top.&nbsp; All have dimmer switches to control the amount of light and fragrance given off.&nbsp; (If you notice the picture of Oprah on the lower shelf - it's because  EcoScents was voted one of Omaha's Favorite Things in conjunction with  the farewell Oprah show last May.)\u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://1.bp.blogspot.com/-U20pUz2PCn4/TtKdHRjWjUI/AAAAAAAAAdU/rtWRKfjYiHE/s1600/DSC02463.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"300\" src=\"http://1.bp.blogspot.com/-U20pUz2PCn4/TtKdHRjWjUI/AAAAAAAAAdU/rtWRKfjYiHE/s400/DSC02463.JPG\" width=\"400\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\nThe lamps burn soy squares, which are available in packages of 6 for $3.99.&nbsp; Each cube burns for about 35 hours. \u003cbr /\u003e\n\u003cbr /\u003e\n\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"http://3.bp.blogspot.com/-WE_w29zFkQY/TtKdq5zBQOI/AAAAAAAAAdc/KGstXVQOlhg/s1600/DSC02462.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" height=\"240\" src=\"http://3.bp.blogspot.com/-WE_w29zFkQY/TtKdq5zBQOI/AAAAAAAAAdc/KGstXVQOlhg/s320/DSC02462.JPG\" width=\"320\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cbr /\u003e\nAfter two years, EcoScents has really taken off.&nbsp; You can find their candles at many local HyVee stores, or you can buy them online at \u003ca href=\"http://www.burnecoscents.com/ORDER.html\"\u003ehttp://www.burnecoscents.com/ORDER.html\u003c/a\u003e as well as at the showroom at 2528 South 156th Circle; Omaha, NE 68130.\u003cbr /\u003e\n\u003cbr /\u003e\nWith all the bad news about the economy and various protests happening around the country, it was such a pleasure to meet the Kampschneider family and see their courage, creativity, and hard work in action.&nbsp; I'm glad they're a part of my hometown."

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      article: sanitizeHtml(content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        allowedAttributes: {
          a: ['href', 'name', 'target'],
          img: ['src', 'alt'],
        },
      }),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
