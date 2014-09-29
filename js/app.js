$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square',
    radioClass: 'iradio_square',
    increaseArea: '20%' // optional
  }).on('ifChecked', function(event){
  alert(event.type + ' callback');
  });
});