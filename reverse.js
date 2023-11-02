// const reverse = (function () {
//     return function reverse(str) {
//         return str.split('').reverse().join('');
//     }
// }());


(function () {
    function reverse(str) {
        return str.split('').reverse().join('');
    }

    window.reverse = reverse;
})();
