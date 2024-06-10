$(document).ready(function(){
    $('.filter-button').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'out-of-home'){
            $('.service-img').show('1000');
        }
        else{
            $('.service-img').not('.'+value).hide('1000');
            $('.service-img').filter('.'+value).show('1000');
        }
    })
    //add active class on selected item
    $('.filter-button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})