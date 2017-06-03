$(function () {

  /*tab*/
  $('.tabPanel ul.tab-ul li').click(function () {
    $(this).addClass('current').siblings().removeClass('current')
    $('.panes>div:eq(' + $(this).index() + ')').show().siblings().hide()
  })

  /*search*/
  $('.left-select').mouseover(function () {
    $('.sub-select').show()
  })
  $('.left-select').mouseout(function () {
    $('.sub-select').hide()
  })

  $('.left-select a').click(function () {
    var selectText = $('.searchSelected').text()
    var cliclText = $(this).text()
    if (selectText != cliclText) {
      $('.searchSelected').text(cliclText)
      $(this).text(selectText)
    }
    $('.sub-select').hide()
  })

  /*nav*/
  $('.infoService-nav ul li').click(function () {
    $('.infoService-nav ul li.current-hover').removeClass('current-hover')
    $(this).addClass('current-hover')
  })

  /*帮助中心、关于我们*/
  $('.infoBox-nav ul li').click(function () {
    $('.infoBox-nav ul li.txt-hover').removeClass('txt-hover')
    $(this).addClass('txt-hover')
  })

})
