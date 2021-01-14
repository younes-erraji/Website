/*global $*/
$(function () {
    'use strict';
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 50
        }, 1500);
    });
});