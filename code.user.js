// ==UserScript==
// @name         Github Enchancer
// @namespace    https://github.com/ZendyLim/GithubEnhancer
// @version      1.0.1
// @description  Enhance Github experience
// @author       Zendy Lim
// @match        https://github.com/givery-technology/codecheck-backend/pull/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

function addTargetBlankAttributeToLinks(jNode) {
  jNode.attr('target', '_blank');
}

waitForKeyElements('.status-actions', addTargetBlankAttributeToLinks);

