(function hideDetails() {
  $('.hideItem').hide();
}());
function showDetails() {
  var that = this;
   $(function(){
       $( that ).parent().siblings(".hideItem").toggle();
   });
}

function showMore(id) {
  $(id).toggle();
}

function collapse() {
  var that = this;
   $(function(){
       $( that ).siblings(".hideItem").toggle();
   });
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
