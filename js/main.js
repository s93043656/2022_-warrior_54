$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});


// *****tabbox******
$(function(){
    var _showTab = 0;
    $('.page03').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        $('ul.tab-title li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        })
    });
});

$(function(){
    var attached = false;//track it's current state
    manageFullPage();

    $(window).resize( function() {
        manageFullPage();
    } )

    function manageFullPage(){
        if( $(this).width() > 1200 ) {
            if(! attached){
                $('#fullpage').fullpage({
                    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
                    menu: '#menu',
                    normalScrollElements:'.p3-pop-pre, .tabeventbox',
                    onLeave: function(index, next, direction) {
                        if (next.index != 0) {
                            $('.topbar').addClass('fixed');
                        } else {
                            $('.topbar').removeClass('fixed');
                        }
                    }
                });
            }
            }else{
            if(attached){
                attached = false;
                $.fn.fullpage.destroy('all');
            }
        }
    }
});

// $(function(){ 
//     $('.menu-02').click(function(){ 
//     $('html,body').animate({scrollTop:$('#page02').offset().top}, 500);});  
//     $('.menu-page03 , .rwd-page03').click(function(){ 
//     $('html,body').animate({scrollTop:$('.page03').offset().top}, 500);});  
//     $('.menu-page04 , .rwd-page04').click(function(){ 
//     $('html,body').animate({scrollTop:$('.page04').offset().top}, 500);});
//     $('.menu-page06 , .rwd-page05').click(function(){ 
//     $('html,body').animate({scrollTop:$('.page06').offset().top}, 500);});
//     $('.updown').click(function(){ 
//     $('html,body').animate({scrollTop:$('#page01').offset().top}, 500);});
// });

// $(document).scroll(function() {
//     var topy = $(this).scrollTop();
//     if (topy > 500) {
//         $('.topbar').addClass('dark');

//     } else {
//         $('.topbar').removeClass('dark');

// });

// $(document).scroll(function() {
//     var topy = $(this).scrollTop();
//     if (topy > 951) {
//         $('.topbar').addClass('appear');
//         $('.menu-top').addClass('appear');
//     } else {
//         $('.topbar').removeClass('appear');
//         $('.menu-top').removeClass('appear');
//     }
// });


