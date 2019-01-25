$(document).ready(function(event) {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var number = $("input#numberInput").val();
    console.log(number)
  });
});
