(function hideDetails() {
  $('.hideItem').hide();
}());
function showDetails() {
  //$(id).toggle();
  //$(this).parent().siblings()[0].toggle();
  var that = this;
   $(function(){
       $( that ).parent().siblings(".hideItem").toggle();
   });
}
