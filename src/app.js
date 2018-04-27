var app = (function () {
    var init = function ($container) {

        $container.find('a').each(function(idx, el) {
            $(el).click(function (event) {
                event.preventDefault();
                var url = $(el).attr('href');
                var method = getMethod(url);
                var body = method === 'POST' ? {"name": "Hook test!!!"} : null;

                $.ajax({
                    url: url,
                    method: method,
                    cache: false,
                    data: body,
                    success: function (response) {
                        $('#api-result-body').text(JSON.stringify(response.body));
                    }
                });
                return false;
            });
        });
    };

    return {
        init: init
    }
})();

