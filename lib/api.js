; (function () {
    Mock.mock('http://api.com/count', 'get', function () {
        return Mock.mock({ count: 100 });
    });
})()