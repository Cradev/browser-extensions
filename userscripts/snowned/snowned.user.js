// ==UserScript==
// @name        Snowned
// @namespace   evilzone.org
// @description Remove freaky snow 
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function snowned() {
  snowStorm.stop();
  snowStorm = null; 
}, false);