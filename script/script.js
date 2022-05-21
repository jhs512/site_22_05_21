let i = 0;
setInteval(function() {
  $('.sliber-box-1').attr('data-index', ++i % 3);
}, 3000);