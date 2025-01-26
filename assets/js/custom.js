!function (e) { e.fn.niceSelect = function (t) { function s(t) { t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>')); var s = t.next(), n = t.find("option"), i = t.find("option:selected"); s.find(".current").html(i.data("display") || i.text()), n.each(function (t) { var n = e(this), i = n.data("display"); s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text())) }) } if ("string" == typeof t) return "update" == t ? this.each(function () { var t = e(this), n = e(this).next(".nice-select"), i = n.hasClass("open"); n.length && (n.remove(), s(t), i && t.next().trigger("click")) }) : "destroy" == t ? (this.each(function () { var t = e(this), s = e(this).next(".nice-select"); s.length && (s.remove(), t.css("display", "")) }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this; this.hide(), this.each(function () { var t = e(this); t.next().hasClass("nice-select") || s(t) }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) { var s = e(this); e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus() }), e(document).on("click.nice_select", function (t) { 0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option") }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) { var s = e(this), n = s.closest(".nice-select"); n.find(".selected").removeClass("selected"), s.addClass("selected"); var i = s.data("display") || s.text(); n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change") }), e(document).on("keydown.nice_select", ".nice-select", function (t) { var s = e(this), n = e(s.find(".focus") || s.find(".list .option.selected")); if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1; if (40 == t.keyCode) { if (s.hasClass("open")) { var i = n.nextAll(".option:not(.disabled)").first(); i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus")) } else s.trigger("click"); return !1 } if (38 == t.keyCode) { if (s.hasClass("open")) { var l = n.prevAll(".option:not(.disabled)").first(); l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus")) } else s.trigger("click"); return !1 } if (27 == t.keyCode) s.hasClass("open") && s.trigger("click"); else if (9 == t.keyCode && s.hasClass("open")) return !1 }); var n = document.createElement("a").style; return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this } }(jQuery);

$(document).ready(function () {


    /******  Nice Select  ******/
    $('select').niceSelect();
    // /********* On scroll heder Sticky *********/
    function initHeaderSticky() {
        if (jQuery(document).height() > jQuery(window).height()) {
            if (jQuery(this).scrollTop() > 250) {
                jQuery('.site-header').addClass("fixed");
            } else {
                jQuery('.site-header').removeClass("fixed");
            }
        }
    }

    $(document).ready(function () {
        initHeaderSticky()
    });
    $(window).on('resize scroll', function () {
        initHeaderSticky()
    });
    // Back to top button
    var btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    // /********* On scroll heder back *********/

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header-sticky").style.transform = "translateY(0)";
        } else {
            if (jQuery(this).scrollTop() > 250) {
                document.getElementById("header-sticky").style.transform = "translateY(-100%)";
            }
        }
        prevScrollpos = currentScrollPos;
    }

    //***** Subscribe popup Js ********// 
    if ($('.subscribe-popup').length > 0) {
        $('.subscribe-popup').addClass('active');
        $('body').addClass('no_scroll');
        $(".overlay").addClass("active");
    };
    $('body').on('click', '.overlay , .close-sub-btn', function (e) {
        e.preventDefault();
        $("body").removeClass("no_scroll");
        $(".overlay").removeClass("active");
        $(".subscribe-popup").removeClass("active");
    });

    /******  menu hover  ******/
    $(".menu-lnk.has-item").hover(function () {
        $(this).toggleClass("menu_active");
        $(this).find(".menu-dropdown").toggleClass("open_menu");
        $("body").toggleClass("no_scroll");
    });

    //*** megamenu  popup  ******/ 
    $(".demo-btn").click(function () {
        $(".megamenu-popup").toggleClass("active");
        $("body").toggleClass("no_scroll");
    });
    $(".close-btn, .megamenu-popup").click(function () {
        $(".megamenu-popup").removeClass("active");
        $("body").removeClass("no_scroll");
    });
    $(".megamenu-popup-wrapper").click(function (event) {
        event.stopPropagation();
    });

    /********* mobile stickybar ********/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".mobile-stickybar").addClass('show');
        } else {
            $(".mobile-stickybar").removeClass('show');
        }
    });

    /******* Cookie Js *******/
    if ($('.cookie-popup').length > 0) {
        $('.cookie-popup').addClass('active');
    }

    $('.cookie-accept-btn').click(function () {
        $('.cookie-popup').slideUp();
    });
    /******* quick-view-popup Js *******/
    $(".qv-btn").click(function () {
        $(".quick-view-popup").addClass("active");
        $("body").addClass("no_scroll");
        $('.overlay').addClass('active');
    });
    $(".quick-close-btn, .overlay").click(function () {
        $(".quick-view-popup").removeClass("active");
        $("body").removeClass("no_scroll");
        $('.overlay').removeClass('active');
    });

    /** product notification js **/
    if ($('.product-notification-popup').length > 0) {
        $('.product-notification-popup').addClass('active');
    }
    $(".notification-close-btn").on("click", function () {
        $('.product-notification-popup').removeClass('active');
    });

    /********* Mobile Menu ********/
    $('.mobile-menu-button').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no_scroll active_menu');
            $(".mobile-menu-wrapper").toggleClass("active_menu");
            $('.overlay').addClass('active');
        }, 50);
    });
    $('body').on('click', '.overlay, .menu-close-icon .close-menu', function (e) {
        e.preventDefault();
        $('body').removeClass('no_scroll active_menu');
        $(".mobile-menu-wrapper").removeClass("active_menu");
        $('.overlay').removeClass('active');
    });
    /*********  Header Search Popup  ********/
    $(".search-header a").click(function () {
        $(".search-popup").toggleClass("active");
        $("body").toggleClass("no_scroll");
        $('.overlay').addClass('active');
        $('body').addClass('search-overlay');
    });
    $(".close-search, .overlay").click(function () {
        $(".search-popup").removeClass("active");
        $("body").removeClass("no_scroll"); +
            $('.overlay').removeClass('active');
        $('body').removeClass('search-overlay');
    });
    /********* Cart Popup ********/
    $('.main-cart').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no_scroll cartopen');
            $('.overlay').addClass('active');
        }, 50);
    });

    $(document).on('click', '.overlay, .mini-cart-header .closecart', function (e) {
        e.preventDefault();
        $('.overlay').removeClass('active');
        $('body').removeClass('no_scroll cartopen');
        $('.coupon-popup').removeClass('active');
        $('.gift-popup').removeClass('active');
    });
    /*********coupon popup ********/
    $(".coupon-icon").click(function () {
        $(".coupon-popup").addClass("active");
    });
    $(".coupon-icon").click(function () {
        $(".gift-popup").removeClass("active");
    });
    $(".close-coupon").click(function () {
        $(".coupon-popup").removeClass("active");
    });

    /*********gift popup ********/
    $(".gift-icon").click(function () {
        $(".gift-popup").addClass("active");
    });
    $(".gift-icon").click(function () {
        $(".coupon-popup").removeClass("active");
    });
    $(".close-gift").click(function () {
        $(".gift-popup").removeClass("active");
    });

    /********* qty spinner ********/
    var quantity = 0;
    $('.quantity-increment').click(function () {
        ;
        var t = $(this).siblings('.quantity');
        var quantity = parseInt($(t).val());
        $(t).val(quantity + 1);
    });
    $('.quantity-decrement').click(function () {
        var t = $(this).siblings('.quantity');
        var quantity = parseInt($(t).val());
        if (quantity > 1) {
            $(t).val(quantity - 1);
        }
    });


    /*********  size Popup  ********/
    $(".size-btn").click(function () {
        $(".size-popup").toggleClass("active");
        $("body").toggleClass("no_scroll");
    });
    $(".close-btn, .size-popup").click(function () {
        $(".size-popup").removeClass("active");
        $("body").removeClass("no_scroll");
    });
    $(".size-table-wrapper").click(function (event) {
        event.stopPropagation();
    });
    /** footer acnav **/
    $(".footer-acnav").on("click", function () {
        if ($(window).width() < 768) {
            if ($(this).hasClass("is_open")) {
                $(this).removeClass("is_open");
                $(this).siblings(".footer-acnav-list").slideUp(200);
            } else {
                $(".footer-acnav").removeClass("is_open");
                $(this).addClass("is_open");
                $(".footer-acnav-list").slideUp(200);
                $(this).siblings(".footer-acnav-list").slideDown(200);
            }
        }
    });
    /*********  Multi-level accordion nav  ********/
    $('.acnav-label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        var list = label.siblings('.acnav-list');
        if (parent.hasClass('is_open')) {
            list.slideUp('fast');
            parent.removeClass('is_open');
        }
        else {
            list.slideDown('fast');
            parent.addClass('is_open');
        }
    });

    //** product review js **//
    $('.product-review').click(function () {
        $('.product-review-form').toggleClass("showform");
    });
    /****  TAB Js ****/
    $("ul.tabs li").click(function () {
        var $this = $(this);
        var $theTab = $(this).attr("data-tab");
        if ($this.hasClass("active")) {
        } else {
            $this
                .closest(".tabs-wrapper")
                .find("ul.tabs li, .tabs-container .tab-content")
                .removeClass("active");
            $(
                '.tabs-container .tab-content[id="' +
                $theTab +
                '"], ul.tabs li[data-tab="' +
                $theTab +
                "]"
            ).addClass("active");
        }
        $(this).addClass("active");
    });

});

/** cart-slider **/
var swiper = new Swiper(".cart-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 800,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

/** main-banner slider **/
var swiper = new Swiper(".banner-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slider__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/** product slider **/
var swiper = new Swiper(".main-product-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/** coupen slider **/
var swiper = new Swiper(".coupen-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/** category-slider **/
var swiper = new Swiper(".category-slider", {
    speed: 800,
    loop: true,
    // autoplay:true,
    spaceBetween: 20,
    slidesPerView: 7,
    speed: 800,
    navigation: {
        nextEl: ".category-arrow.swiper-button-next",
        prevEl: ".category-arrow.swiper-button-prev",
    },
    breakpoints: {
        1440: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        575: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 1,
        },
    },

});

/** Product slider **/
var swiper = new Swiper(".product-slider", {
    spaceBetween: 20,
    slidesPerView: 4,
    speed: 800,
    navigation: {
        nextEl: '.product-arrow.swiper-button-next',
        prevEl: '.product-arrow.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        390: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

// coupen code copy text js

function copy() {
    let copyText = document.getElementById("copyClipboard");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

$(function () {
    $(".copy-input").click(function () {
        let $this = $(".copy-text");
        $this.addClass("success-copy");
        setTimeout(function () {
            $this.removeClass("success-copy");
        }, 15000000);
    });
});

// collpasible sectio js start

// function closeAllTabs(clickedElement) {
//     const accordion = clickedElement.closest('.accordion-closeall');
//     const detailsElements = accordion.querySelectorAll('details');

//     detailsElements.forEach(details => {
//       if (details !== clickedElement.parentElement) {
//         details.removeAttribute('open');
//       }
//     });
//   }

document.addEventListener("DOMContentLoaded", () => {
    new Accordion("#menu");
});

class Accordion {
    el;
    items = [];

    constructor(selector) {
        this.el = document.querySelector(selector);
        this.el?.querySelectorAll("details").forEach((item, i) => {
            this.items.push(new AccordionItem(item, this));
        });
    }

    closeAll(except) {
        this.items.forEach(item => {
            if (item.el !== except) item.collapse();
        });
    }
}

class AccordionItem {
    el;
    parent;

    constructor(el, parent) {
        this.el = el;
        this.parent = parent;
        this.el.querySelector("summary")?.addEventListener("click", e => {
            e.preventDefault();
            this.toggle();
            this.el.classList.toggle("open");
        });
    }

    toggle() {
        if (!this.el.open) {
            this.parent.closeAll(this.el);
            this.expand();
        } else {
            this.collapse();
        }
    }

    expand() {
        this.el.open = true;


    }

    collapse() {
        this.el.open = false;
    }
}

