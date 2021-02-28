

/*
Given http://httpbin.org/ip as an API endpoint that returns your current IP,
write a JavaScript function that makes a call to the endpoint, gets the value
returned and displays it on an HTML page.

How will you test this? */

// (function() {
//   var result;
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET","https://httpbin.org/ip?format=json", false);
//   xhr.overrideMimeType("application/json");
//   xhr.send();
//   if(xhr.status === 200){
//     result = JSON.parse(xhr.responseText);
//   }
  
//   console.log("Log result");
//   console.log(result);
//   var inner = document.getElementById("inner");
//   inner.innerHTML = result.origin;
// })();

$(function() {
  var result;
  $.getJSON("https://httpbin.org/ip?format=json").done( function(data) {
    console.log("Log Result")
    result = JSON.stringify(data);
  }).then(function(result) {
    $('#inner > p').text("IP: " + result.origin);
    $('#inner > span').text("CIDR: " + result.origin + "/32");
  })
  const browser = bowser.parse(window.navigator.userAgent);
  var os = browser.os.name.concat(" ", browser.os.version);
  $("#ua").text(navigator.userAgent);
  $("#os").text(os);
})