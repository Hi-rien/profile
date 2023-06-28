// pdf 모달창

$('.pdf_icon').click(function() {
  $('#pdf_modal').stop().show()
  $('body').css({
    overflow: 'hidden'
  })
})

$('#pdf_modal .close').click(function() {
  $('#pdf_modal').stop().hide()
  $('body').css({
    overflow: 'auto'
  })
})

