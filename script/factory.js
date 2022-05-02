(function($){

    var factory = {
        init: function(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header: function(){
            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focusin: function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
            });
            $('#nav').on({
                mouseleave: function(){
                    $('.sub-bg').stop().slideUp(300);
                    $('.sub').stop().slideUp(300);
                    $('.main-btn').removeClass('on');
                }
            });
        },
        section1: function(){
            
            let cnt = 0; 
            //메인슬라이드함수
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},600, function(){
                    cnt>2 ? cnt=0 : cnt;
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
                });
            }
            //다음카운트함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //자동타이머함수
            function autoTimer(){
                setInterval(nextCount,3000);
            }
            autoTimer();
        },
        
        section2: function(){
            $('.link-btn').on({
                click: function(){
                    $('#modal').stop().fadeIn(500);
                }
            });
            $('.close-btn').on({
                click: function(){
                    $('#modal').stop().fadeOut(300);
                }
            });
        },
        footer: function(){

        }
    }
    factory.init();
})(jQuery);