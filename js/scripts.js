var codeMessage = function(string) {
  var str = string.toLowerCase().replace(/[^\w]+/g, '');
  var columns = Math.ceil(Math.sqrt(str.length));
  var rows = Math.floor(Math.sqrt(str.length));
  var arr = str.split('');
  var newarr = []
  for(var i = 0; i < columns; i++) {
    for(var j = 0; j < columns; j++){
      newarr.push(arr[i + j*columns]);
    }
  }
  return newarr.join('').replace(/(.{5})/g, '$1 ');
};

var decodeMessage = function(string) {
  var str = string.replace(/[^\w]+/g, '');
  var columns = Math.ceil(Math.sqrt(str.length));
  var rows = Math.floor(Math.sqrt(str.length));
  var arr = str.split('');
  var newarr = []
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < rows; j++){
      newarr.push(arr[i + j*rows]);
    }
  }
  return newarr.join('');
};

$(document).ready(function(){
  $('form#message').submit(function(event) {
    var string = $("input#text").val();
    var result = codeMessage(string);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
