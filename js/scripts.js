function changeNum(number) {
  for (var i = 0; i < number.length; i++) {
  }
}







$(document).ready(function(event) {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var number = $("input#numberInput").val();
    changeNum(number)
  });
});
