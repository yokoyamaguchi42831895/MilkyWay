//floating
jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 500) {
        jQuery('.floating').show();
    } else {
        jQuery('.floating').hide();
    }
    });

jQuery('.floating').click(function () {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//overlay
$(function(){
    var setAnim = $('.animate');
    $(window).on('scroll resize',function(){
        var setHeight = 300;
        setAnim.each(function(){
        var setThis = $(this),
            setElm = $(this).find('.animate-elm');
        elmTop = setThis.offset().top,
        scrTop = $(window).scrollTop(),
        winHeight = $(window).height();
        if (scrTop > elmTop - winHeight + setHeight){
            setElm.addClass('show');
        }
        });
    });
});

//ScrollMagic
class ScrollFade {
    constructor() {
        this.ANIMATION_CLASS = 'is-animation';

        let $section = document.querySelectorAll('.js-scroll-fade:not(.is-animation)');
        if($section.length === null) {
            return;
        }
        let controller = new ScrollMagic.Controller();
        for(let i = 0; i < $section.length; i++) {
            let scene = new ScrollMagic.Scene({
                triggerElement: $section[i],
                triggerHook: 'onEnter',
                reverse: false,
                offset: 100
            })
                .addTo(controller);
            scene.on('enter', ()=>{
                $section[i].classList.add(this.ANIMATION_CLASS);
            });
            scene.on('end', ()=>{
                scene.destroy(true);
            });
        }
    }
}

new ScrollFade();