$(function(){
    //스크롤파이 제이쿼리
    $.scrollify({
        section:".page",
        scrollbars:false,
        interstitialSection:"footer",
        scrollSpeed: 500,
    })

    //스크롤값에 따라 header 높이 변경
    $(window).scroll(() => {
        let sct = $(window).scrollTop();
        if(sct >= 757 ) {
            $('header, .nav-center').addClass('on');
            $('.sitemap').css('top','100%');
        }else {
            $('header, .nav-center').removeClass('on');
            $('.sitemap').css('top','100%');
        }
    })

    //------------sitemap
    let chimg = true;
    $('.siteMbtn').on('click',(e) => {
        e.preventDefault();
        $('.sitemap').css('top','100%');
        $('header').toggleClass('siteMon');
        $('.join').toggle();
        $('.sitemap').slideToggle(500);

        let imgSrc = ( chimg )
        ? 'imgs/pop_close.png'
        : 'imgs/gnb_menu_ico.png';

        $('.siteMbtn').attr('src', imgSrc);

        let himgSrc = ( chimg )
        ? 'imgs/logo_on.png'
        : 'imgs/logo.png';

        $('h1 img').attr('src', himgSrc);
        chimg = !chimg;
    })

    //클릭시 한페이지 아래로 이동
    $('.scroll').on('click',(e) => {
        e.preventDefault();
        let winh = $(window).height();
        $('body,html').stop()
        .animate({scrollTop:winh},500);
    })

    //------------onclick on,off
    //popup off
    $('.pop-close').on('click',() => {
        $('aside').addClass('off');
    })
    //notice off
    $('.notice-close').on('click',() => {
        $('.notice').addClass('off');
    })
    //notice on
    $('.noticeBtn').on('click',()=> {
        $('.notice').removeClass('off');
    })
});