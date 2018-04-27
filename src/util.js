
var getMethod = function (url) {
    var result = 'GET';
    var re = /\?|&/;
    var methodParam = url.split(re).filter(function (el, idx) {
        return el.indexOf('method') > -1;
    })[0] || null;

    if (!methodParam) {
        return result;
    }

    result = methodParam.split('=')[1]
    var re2 = /GET|POST|PUT|DELETE/;
    return result.match(re2) ? result : 'GET';
};


