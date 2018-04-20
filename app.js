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
            }
        });

        return false;
    });
});
