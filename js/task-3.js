'use strict';
function getElementWidth(content, padding, border) {
    // return ((content * 10 + ((padding * 20 + border * 20) / 10)) / 10);
    // const sum = (content + (padding * 2) + (border * 2));
    return (content + (padding * 2) + (border * 2));
};
console.log(Number.parseFloat(getElementWidth("50px", "8px", "4px"))); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
