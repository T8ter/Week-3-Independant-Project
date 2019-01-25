// function identifySpecNum(number) {
//   var numsThatChange = ["3"]
//   for (var i = 0; i < number.length;) {
//     // if (!numsThatChange.includes(number[i])) {
//     //     i++
//     //   } else {
//     //       var newString = numsThatChange.replace(/number/, "red");
//     //   console.log(newString)
//     }
//   }
// }
function identifySpecNum(number) {
  // var number = number.ParseInt($("#numberInput").val());
  var allNums = ["0","1","2","3","4","5","6","7","8","9"]
    for (var i = 0; i < intNum.length;i++) {
  //     console.log(intNum)
  }
}




$(document).ready(function(event) {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var number = (number.parseInt$($("#numberInput").text()));
    identifySpecNum(number)
    console.log(number)
  });
});
