$(function () {
    $('a').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: $(this).attr('href'),
            cache: false,
            success: function (response) {
                // console.log('### response=' + JSON.stringify(response));
                $('#api-result-body').text(JSON.stringify(response.body));
                $('#api-result-cookie').text(JSON.stringify(response.cookie.filter(val => val.includes('csrf'))));
                addCsrfInQuery(response.cookie.filter(val => val.includes('csrf'))[0]);
            }
        });

        return false;
    });

    function addCsrfInQuery(str) {
        var csrf = getCsrfKey(str);
        $('a').each(function() {
            const current = $(this).attr('href');
            $(this).attr('href', (current + '&csrfKey=' + csrf));
            console.log('##1=' + $(this).attr('href'));
        });
    };
    function getCsrfKey(str) {
        let params = {};
        str.split('; ').forEach(function(val) {
            const pair = val.split('=');
            params[pair[0]] = pair[1];
        });
        return params['x-wap-ec-csrf'];
    }

});
