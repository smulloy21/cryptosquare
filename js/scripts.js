var codeMessage = function(string) {
  var str = string.toLowerCase().replace(/[^\w]+/g, '');
  var columns = Math.ceil(Math.sqrt(str.length));
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
  var leftOvers = 0;
  var newRows = rows;
  if (columns !== rows) {
    newRows -= 1
    leftOvers = str.length - (newRows * newRows);
    if (leftOvers > columns) {
      columns += 1;
      leftOvers -= columns;
    }
    debugger
  }
  var arr = str.split('');
  var newarr = [];
  var row = [];
  for(var i = 0; i < columns; i++) {
    row = [];
    for(var j = 0; j < newRows; j++) {
      row.push(arr.shift());
    }
    if (leftOvers > 0) {
      row.push(arr.shift());
      leftOvers--;
    }
    newarr.push(row.join(''));
  }

  for(var x = 0; x < rows; x++) {
    for(var y = 0; y < columns; y++) {
      arr.push(newarr[y].charAt(x));
    }
  }
  return arr.join('');
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
