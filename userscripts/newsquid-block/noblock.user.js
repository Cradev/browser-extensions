
// ==UserScript==
// @name        Newsquid Blocker
// @namespace   http://github.com/phildk
// @description Remove the annoying adblock-blocker block from Newsquid.
// @version     0.4
// @match       *
// @grant       none
// ==/UserScript==

window.setInterval(function removeBlock() {
  // Remove the offensive box, asking for payment.
  var dNested = document.getElementById("nsqbox");
  var throwawayNode = dNested.parentNode.removeChild(dNested);

  // Let's remove the annoying blur
  var x = document.body.getElementsByTagName("style");
  for (var i = x.length - 1; i >= 0; i--)
   x[i].parentElement.removeChild(x[i]);
   
  // Let's remove the cookie notification box too.
  var cookieBox = document.getElementById("cookieInformerBooklet");
  var removeCookieBox = cookieBox.parentNode.removeChild(cookieBox);
},10000);
