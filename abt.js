$(document).ready(function() {
 if (window.innerWidth > 500) {
  $('.def-cur, .lis-cur, .quo-cur')
    .mousemove(function(e) {
      $div = $('#' + $(this).data('image-id'))
      $div.stop(1, 1).show()
      $div.offset({
        top: e.pageY + 25,
        left: e.pageX + 25
      })
    })
     .mouseout(function() {
    $div = $('#' + $(this).data('image-id'))
      $div.hide()
    })

  }
  else {
    null
  } 
})