! function (e) {
    "use strict";

    $(document).ready(function () {

        function scrollTopFixed(htOp) {
            var windowTop = $(window).scrollTop();
            var adDcl = "fixedMenu";
            if (windowTop > 60) {
                if (!(htOp.hasClass(adDcl))) {
                    htOp.stop();
                    htOp.addClass(adDcl);
                }
            }
            else {
                if (htOp.hasClass(adDcl)) {
                    htOp.stop();
                    htOp.removeClass(adDcl);
                }
            }
        }
        
        $(window).scroll(function () {
            var htOp = $('.header');
            scrollTopFixed(htOp);
        });


        function bannerSlider() {
            if ($('.bannerSlider').length > 0) {
                $('.bannerSlider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 3000,
                    autoplaySpeed: 5000,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    pauseOnHover: false,
                    fade: true,
                    responsive: [{
                        breakpoint: 1026,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    }
                    ]
                });
            }
        }
        bannerSlider();

        function successStudensSlider() {
            if ($('.successStudensSlider').length > 0) {
                $('.successStudensSlider').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 1000,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    pauseOnHover: false,
                    responsive: [{
                        breakpoint: 1026,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                    ]
                });
            }
        }
        successStudensSlider();


        function noticeList() {
            if ($('.noticeList').length > 0) {
                $('.noticeList').slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    speed: 1000,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    // pauseOnHover: false,
                    vertical: true,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 5,
                        }
                    }
                    ]
                });
            }
        }
        noticeList();


        function datePicker() {
            $('#starttime').datetimepicker({
                datepicker: false,
                format: 'H:i',
                step: 5
            });
            $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd', });
            $("#datepicker-enddate").datepicker({ dateFormat: 'yy-mm-dd', });
        }
        datePicker();

        function selectLanguage() {
            $('.selectLanguage').on('change', function () {
                let selectLanguage = $(this).val();
                console.log(selectLanguage, 'selectLanguage')
                if (selectLanguage == 2) {
                    $('body').css({ "font-family": "kalpurushregular" });
                }
                else {
                    $('body').removeAttr("style");
                }
            });
        }
        selectLanguage();

        /*===========photo isotope js===========*/
        function photoMasonry() {
            var photo = $("#work-photo");
            if (photo.length) {
                photo.imagesLoaded(function () {
                    // images have loaded
                    // Activate isotope in container
                    photo.isotope({
                        itemSelector: ".photo_item",
                        layoutMode: 'masonry',
                        filter: "*",
                        animationOptions: {
                            duration: 1000
                        },
                        transitionDuration: '0.5s',
                        masonry: {

                        }
                    });

                    // Add isotope click function
                    $("#photo_filter li").on('click', function () {
                        $("#photo_filter li").removeClass("active");
                        $(this).addClass("active");

                        var selector = $(this).attr("data-filter");
                        photo.isotope({
                            filter: selector,
                            animationOptions: {
                                animationDuration: 750,
                                easing: 'linear',
                                queue: false
                            }
                        })
                        return false;
                    })
                })
            }
        }
        photoMasonry();

        function lightBoxImages() {
            var selectorG = '.lightbox';
            if ($(selectorG).length) {
                var instanceG = $(selectorG).imageLightbox({
                    quitOnDocClick: false,
                    button: true,
                    activity: true,
                    overlay: true,
                    arrows: true,
                    preloadNext: true,
                });
            }
        }

        lightBoxImages();

    });

}(jQuery);