$('nav a').hover(function(){
    $('nav.desktop li').removeClass('selected');
    $(this).parent().addClass('selected');
})

$('nav.mobile h3').click(function(){
    $('ul.nav_mobile').slideToggle();
})

$(function(){
    $('span a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $(html , body).animate({'scrollTop':offSetTop});

        return false;
    })
})