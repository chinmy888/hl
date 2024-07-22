!function (e) {
    function t(t) {
        for (var a, o, s = t[0], l = t[1], c = t[2], u = 0, d = []; u < s.length; u++) o = s[u], Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]), i[o] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (p && p(t); d.length;) d.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== i[l] && (a = !1)
            }
            a && (r.splice(t--, 1), e = o(o.s = n[0]))
        }
        return e
    }

    var a = {}, i = {7: 0}, r = [];

    function o(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }

    o.m = e, o.c = a, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) o.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/";
    var s = window.webpackJsonp = window.webpackJsonp || [], l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var c = 0; c < s.length; c++) t(s[c]);
    var p = l;
    r.push([213, 1, 0]), n()
}({
    213: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0), i = n.n(a), r = (n(9), n(7), n(8), n(98), n(214), n(2)), o = n(1), s = n(53), l = n(24),
            c = n.n(l), p = n(3), u = "", d = "", g = "";
        $((function () {
            h(), o.a.init(), r.a.init(), Object(s.a)(), w(), f()
        }));
        var f = function () {
            $.ajax({
                type: "get",
                url: "",
                dataType: "jsonp",
                success: function (e) {
                    if (e.success && e.items.length > 0) {
                        for (var t = "", n = 0; n < 4; n++) t += '<p><a href="' + e.items[n].url + '" target="_blank" data-tj-value="' + e.items[n].title + '">&gt;' + e.items[n].pubDate + e.items[n].title.replace(/webmail/i, "Webmail") + "</a></p>";
                        t += '<a href="/help/l-29.html" target="_blank">更多信息&nbsp;&gt;</a>', $(".g-help-center .right").append(t)
                    }
                }
            })
        }, w = function () {
            window.DATracker.track_links(".g-use-mail .btn-look-more", "open_story_page", {target: "品牌Logo"}), $(".g-banner .swiper-slide a").click((function () {
                $(this).attr("data-tj-value") && window.DATracker.track("click_banner", {target: $(this).attr("data-tj-value")})
            })), $(".g-help-center .left p a").click((function () {
                window.DATracker.track("open_help_detail", {name: $(this).html().replace(/&gt;(.*)？/, "$1")})
            })), $(".g-help-center .left>a").click((function () {
                window.DATracker.track("open_help_page", {target: "首页-热门问题"})
            })), $(".g-help-center .right p a").click((function () {
                window.DATracker.track("open_update_detail", {name: $(this).attr("data-tj-value")})
            })), $(".g-help-center .right>a").click((function () {
                window.DATracker.track("open_update_page", {target: "首页-更新日志"})
            })), $(".g-animate-nav>div").click((function () {
                var e = $(this);
                if (!e.hasClass("active")) {
                    switch (e.index()) {
                        case 0:
                            u.slideTo(1);
                            break;
                        case 1:
                            u.slideTo(4);
                            break;
                        case 2:
                            u.slideTo(8);
                            break;
                        case 3:
                            u.slideTo(11);
                            break;
                        case 4:
                            u.slideTo(13)
                    }
                    e.addClass("active").siblings().removeClass("active")
                }
            })), $(".g-industry-solutions .g-industry-solutions-contanier-header").on("click", "li", (function () {
                var e = $(this);
                if (!e.hasClass("active")) {
                    e.addClass("active").siblings().removeClass("active");
                    var t = e.index();
                    g.slideToLoop(t)
                }
            })), $(".g-industry-solutions .g-industry-solutions-contanier .swiper-slide .swiper-slide-content .content-footer").on("click", ".js-know-more", (function () {
                var e = g.realIndex;
                window.DATracker.track("click_industry", {
                    target: "首页",
                    category: $(".g-industry-solutions-contanier-header li").eq(e).html()
                }), window.location.href = "/entry/user-story.htm?id=" + e
            })), $(".g-swiper .swiper-pagination div").hover((function () {
                d.slideTo($(this).index() + 1), d.autoplay.stop()
            }), (function () {
                d.autoplay.start()
            })), $(".g-swiper .swiper-slide .g-wrapper").hover((function () {
                d.autoplay.stop()
            }), (function () {
                d.autoplay.start()
            }))
        }, h = function () {
            new c.a(".g-banner .swiper-container", {
                autoplay: {disableOnInteraction: !1, delay: 5500},
                loop: !0,
                pagination: {
                    el: ".g-banner .swiper-pagination", clickable: !0, renderBullet: function (e, t) {
                        return '<div class="' + t + '"><span></span></div>'
                    }
                },
                navigation: {nextEl: ".g-banner .swiper-button-next", prevEl: ".g-banner .swiper-button-prev"}
            });
            $(".g-banner .swiper-container").css("opacity", 1), d = new c.a(".g-why-select-us .swiper-container", {
                autoplay: {disableOnInteraction: !1},
                loop: !0,
                pagination: {
                    // el: ".g-why-select-us .swiper-pagination", clickable: !0, renderBullet: function (e, t) {
                    //     var n = "";
                    //     switch (e) {
                    //         case 0:
                    //             n = "加密保护<br>极致安全";
                    //             break;
                    //         case 1:
                    //             n = "稳定服务<br>响应迅速";
                    //             break;
                    //         case 2:
                    //             n = "优质IP资源<br>全球收发无阻";
                    //             break;
                    //         case 3:
                    //             n = "翻译通讯<br>专业技术沉淀"
                    //     }
                    //     return '<div class="' + t + " icon-" + (e + 1) + '">' + n + "</div>"
                    // }
                }
            }), u = new c.a(".g-animate .swiper-container", {
                noSwiping: !0, on: {
                    slideChangeTransitionEnd: function () {
                        var e, t, n, a = this.activeIndex;
                        i()(e = $(".g-animate .swiper-slide")).call(e, "div").removeClass("fadeIn"), i()(t = $(".g-animate .swiper-slide").eq(a)).call(t, "div").addClass("fadeIn");
                        var r = 0, o = 0;
                        this.realIndex < 3 ? (r = 0, o = 3) : this.realIndex < 7 ? (r = 1, o = 4) : this.realIndex < 10 ? (r = 2, o = 3) : this.realIndex < 12 ? (r = 3, o = 2) : (r = 4, o = 3), i()(n = $(".g-animate-nav>div").removeClass("active").eq(r).addClass("active")).call(n, "span").css("animation-duration", 3 * o + .5 + "s")
                    }
                }, autoplay: {disableOnInteraction: !1}, loop: !0
            }), g = new c.a(".g-industry-solutions-contanier", {

            })
        }
    }, 214: function (e, t, n) {
    }
});