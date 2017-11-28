// *************************************************************************
// *************************************************************************
// *************************************************************************



require('./bootstrap');
require('./icons/icons');

var log = console.log;

// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas-trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.toggle('is-open');
        overlay.classList.toggle('is-active');
    });
}




// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal-trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.toggle('is-open');
        overlay.classList.toggle('is-active');
    });
}




// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is-active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is-open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is-open');
        }
    });

}




// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is-active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is-open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is-open');
    });
}




// #ACCORDION
// =========================================================================

$('.accordion-content').hide();
$('.accordion-content').first().show();
$('.accordion-panel').first().addClass('is-open');

$('.accordion-title').click(function() {
    $('.accordion-panel').removeClass('is-open');
    $(this).parent().addClass('is-open');
    $('.accordion-content').slideUp(200);
    $(this).next('.accordion-content').slideDown(200);
});




// #TABS
// =========================================================================

$('li[data-tab], .tabs__content').first().addClass('is-active');
$('.tabs-content').first().addClass('is-active');


$('li[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs-content' + '[data-tab="' + thisTab + '"]');

    $('li[data-tab]').removeClass('is-active');
    $(this).addClass('is-active');
    $('.tabs-content').removeClass('is-active');
    tab.addClass('is-active');
});

$('button[data-tab]').click(function() {

    if ($(this).data('tab') == 'prev') {
        var currentTab = $('.tabs-content.is-active');
        var currentTabNav = $('li[data-tab].is-active');
        currentTab.prev().addClass('is-active');
        $('li[data-tab].is-active').last().removeClass('is-active');
        currentTabNav.prev().addClass('is-active');
        $('.tabs-content.is-active').last().removeClass('is-active');

        if (currentTabNav.is(':first-child')) {
            $('li[data-tab]').last().addClass('is-active');
            $('.tabs-content').last().addClass('is-active');
        }
    } else {
        var currentTab = $('.tabs-content.is-active');
        var currentTabNav = $('li[data-tab].is-active');
        currentTab.next().addClass('is-active');
        $('li[data-tab].is-active').first().removeClass('is-active');
        currentTabNav.next().addClass('is-active');
        $('.tabs-content.is-active').first().removeClass('is-active');

        if (currentTabNav.is(':last-child')) {
            $('li[data-tab]').first().addClass('is-active');
            $('.tabs-content').first().addClass('is-active');
        }
    }
});




// #FORM
// =========================================================================

var form = $('.form');

$(form).submit(function (event) {
    event.preventDefault();
    var data = new FormData();

    axios.post( $(this).attr('action'), {
        name: $('name').val(),
        email: $('email').val(),
        message: $('message').val()
    })
    .then(function (response) {
        console.log(response);

        $('<div class="alert success">Your Message Was Sent!  We\'ll be in touch.</div>').insertAfter(form);

        $('input').val('');
        $('textarea').val('');
    })
    .catch(function (error) {
        console.log(error);

        $('<div class="alert error">Oh no!  Something went wrong, try again,</div>').insertAfter(form);

        $('input').val('');
        $('textarea').val('');
    });

    return false;
});


/** LIGHTBOX **/
jQuery(document).ready(function($) {
    $('.lightbox').hide();
    
    $('.modal__trigger').click(function(e){
        e.preventDefault();
        $('body').addClass('lightbox-active');
        
        $('.lightbox').show();
        $('.active').removeClass('active');
        $(this).addClass('active');
        
        var activeimg = $('.active').attr('src');      
        //lightbox content img src of active image
        $('.lightbox_content img').attr('src', activeimg);
        
    });
    
    var trigger = $('.process-thumbnails .modal__trigger');
    var active = $('.active');
    
    $('.next').click(function(){
        var next = $('.active').parent().next().children();
        $('.active').removeClass('active');
        next.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);
    });
    
    $('.prev').click(function(){
        var previous = $('.active').parent().prev().children();
        $('.active').removeClass('active');
        previous.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);     
    });
    
    $(document).mouseup(function(e) {     
        var arrows = $("span");     
        if (!arrows.is(e.target)) {
            $('.lightbox').hide();
        }
    });   
    
});