$(function () {
    $('[data-id="scrollspy"]').each(function () {
        var li = '<li><a href="#' + $(this).attr('id') + '">' + $(this).find('.nav_anchor').first().text() + '</a></li>';
        $('.nav__list').append(li);
    });
});