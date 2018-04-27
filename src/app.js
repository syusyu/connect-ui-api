var app = (function () {
    var init = function ($container) {

        $container.find('a').click(function (event) {
            event.preventDefault();
            let url = $(this).attr('href');
            let method = getMethod(url);

            $.ajax({
                url: url,
                method: method,
                cache: false,
                success: function (response) {
                    $('#api-result-body').text(JSON.stringify(response.body));
                }
            });
            return false;
        });
    };

    return {
        init: init
    }
})();

