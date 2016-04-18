(function hideDetails() {
  $('.hideItem').hide();
  $('.panel-primary').children('.hideItem').show();
}());


function showMore(id) {
  $(id).toggle();
}

function collapse() {
  var that = this;
  $( that ).siblings(".hideItem").toggle();
}

function showAll() {
  $('.panel-primary').children('.hideItem').show();

  $('#hideAll').show();
  $('#showAll').hide();
}

function hideAll() {
  $('.hideItem').hide();

  $('#hideAll').hide();
  $('#showAll').show();
}

(function hoverBold() {
  var elements = $('.panel-heading').filter("[onclick='collapse.call(this)']");
  $(elements).each(function( index ) {
    $( this ).addClass( "hoverBold" );
  });
}());
