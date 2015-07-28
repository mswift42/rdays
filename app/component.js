'use strict';
module.exports = function() {
    var element = document.createElement('h1');
    var element2 = document.createElement('h3');
    element2.innerHTML = "more text";
    element.innerHTML = 'Hello world';
    element.appendChild(element2);
    return element;
};
