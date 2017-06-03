/**
 * Created by Administrator on 2017/6/1.
 */

$(document).ready(function () {
  $("div.vnavbox > div.vtitle").click(function () {
    $("em.v", $(this)).toggleClass("v02").toggleClass("v01");
    $(this).next("div.vcon").toggle();
  })
});
