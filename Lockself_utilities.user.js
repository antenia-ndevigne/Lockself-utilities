// ==UserScript==
// @name         Lockself
// @namespace    https://antenia.lockself-cloud.com/
// @version      2026-10-02
// @description  Tweek d'UI pour lockself
// @author       ndevigne
// @downloadURL  https://github.com/antenia-ndevigne/Lockself-utilities/raw/refs/heads/main/Lockself_utilities.user.js
// @updateURL    https://github.com/antenia-ndevigne/Lockself-utilities/raw/refs/heads/main/Lockself_utilities.user.js
// @match        https://antenia.lockself-cloud.com/application/index.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lockself-cloud.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');

    style.textContent = `
    #mLayout div#layoutSlide:has(> .slideHelper){ display: none; }
    `;

    document.head.append(style);
})();
