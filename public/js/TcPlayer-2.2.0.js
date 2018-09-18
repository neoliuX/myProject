"use strict";
function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
function(e) {
    return typeof e
}: function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
}; !
function(e, t) {
    if ("object" === ("undefined" == typeof exports ? "undefined": _typeof(exports)) && "object" === ("undefined" == typeof module ? "undefined": _typeof(module))) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var i in n)("object" === ("undefined" == typeof exports ? "undefined": _typeof(exports)) ? exports: e)[i] = n[i]
    }
} (window,
function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "//imgcache.qq.com/open/qcloud/video/vcplayer/",
        t(0)
    } ([function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o(e) {
            var t = {
                urls: {
                    m3u8: {
                        od: e.m3u8 || "",
                        hd: e.m3u8_hd || "",
                        sd: e.m3u8_sd || ""
                    },
                    flv: {
                        od: e.flv || "",
                        hd: e.flv_hd || "",
                        sd: e.flv_sd || ""
                    },
                    mp4: {
                        od: e.mp4 || "",
                        hd: e.mp4_hd || "",
                        sd: e.mp4_sd || ""
                    },
                    rtmp: {
                        od: e.rtmp || "",
                        hd: e.rtmp_hd || "",
                        sd: e.rtmp_sd || ""
                    }
                },
                isClarity: function(e) {
                    var n = t.urls;
                    return !! (n.m3u8[e] || n.flv[e] || n.mp4[e] || n.rtmp[e])
                },
                isFormat: function(e) {
                    var n = t.urls;
                    return !! n[e].od || !!n[e].hd || !!n[e].sd
                },
                hasUrl: function() {
                    return this.isFormat("rtmp") || this.isFormat("flv") || this.isFormat("m3u8") || this.isFormat("mp4")
                }
            };
            t.definitions = [];
            for (var n = 0; n < d.length; n++) t.isClarity(d[n]) && t.definitions.push(d[n]); !
            function(e, t) {
                a.IS_MOBILE ? (e.flash = !1, a.IS_X5TBS && e.x5_player ? h.mobile = ["flv", "m3u8", "mp4"] : a.IS_ENABLED_MSE && e.h5_flv && (h.mobile = ["flv", "m3u8", "mp4"])) : (e.flash = !(void 0 != e.flash && !t.isFormat("rtmp")) || e.flash, e.flash ? (e.isLive || (a.IS_ENABLED_FLASH = !1), (!a.IS_ENABLED_FLASH || a.IS_MAC && a.IS_SAFARI) && (e.flash = !1, a.IS_ENABLED_MSE ? e.h5_flv && (a.IS_SAFARI && l.compareVersion(a.SAFARI_VERSION, "10.1") > -1 || !a.IS_SAFARI) ? h.pc = ["flv", "m3u8", "mp4"] : h.pc = ["m3u8", "mp4"] : h.pc = ["mp4"])) : a.IS_ENABLED_MSE ? e.h5_flv && (a.IS_SAFARI && l.compareVersion(a.SAFARI_VERSION, "10.1") > -1 || !a.IS_SAFARI) ? h.pc = ["flv", "m3u8", "mp4"] : h.pc = ["m3u8", "mp4"] : !a.IS_ENABLED_FLASH || a.IS_MAC && a.IS_SAFARI ? h.pc = ["mp4"] : e.flash = !0)
            } (e, t);
            var i = function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h, n = void 0, i = "", o = e.urls, r = a.IS_MOBILE ? t.mobile: t.pc, l = 0; l < r.length; l++) if (i = r[l], e.isFormat(i)) { (n = s(o, i)).format = i;
                    break
                }
                return n
            } (t);
            return i && (t.curUrl = i.url, t.curDef = i.definition, t.curFormat = i.format),
            t
        }
        function r(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h,
            o = "",
            r = void 0;
            n = n || (a.IS_MOBILE ? i.mobile: i.pc);
            for (var s = 0; s < n.length; s++) if (o = n[s], e[o][t]) {
                r = {
                    definition: t,
                    url: e[o][t],
                    format: o
                };
                break
            }
            return r
        }
        function s(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d, i = "", o = 0; o < n.length; o++) if (i = n[o], e[t][i]) return {
                definition: i,
                url: e[t][i]
            }
        }
        t.__esModule = !0,
        t.TcPlayer = void 0;
        var a = i(n(1)),
        l = (i(n(2)), i(n(3))),
        c = i(n(4)),
        u = n(5),
        p = c.MSG,
        h = {
            mobile: ["m3u8", "mp4"],
            pc: ["rtmp", "flv", "m3u8", "mp4"]
        },
        d = ["od", "hd", "sd"];
        t.TcPlayer = function(e) {
            function t(n, i) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var r = o(i),
                s = {
                    owner: n,
                    videoSource: r,
                    src: r.curUrl,
                    autoplay: i.autoplay,
                    live: i.live,
                    flash: i.flash,
                    poster: i.coverpic,
                    isLive: i.isLive,
                    width: i.width,
                    height: i.height,
                    volume: i.volume,
                    listener: i.listener,
                    wording: i.wording,
                    controls: i.controls,
                    onPanelShow: i.onPanelShow,
                    onPanelHide: i.onPanelHide,
                    disablePanel: i.disablePanel,
                    coverpic_pause: null === i.coverpic_pause || i.coverpic_pause,
                    h5_flv: i.h5_flv,
                    x5_player: i.x5_player,
                    x5_type: i.x5_type,
                    x5_fullscreen: i.x5_fullscreen,
                    x5_orientation: i.x5_orientation
                };
                return function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, s))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.switchClarity = function(e) {
                e = e || "od";
                var t = this.currentTime(),
                n = this.options.videoSource,
                i = r(n.urls, e),
                o = this.playing();
                this.load(i.url),
                n.curUrl = i.url,
                n.curDef = i.definition,
                n.curFormat = i.format;
                var s = l.bind(this,
                function() {
                    parseInt(this.duration() - t) > 0 && !this.options.live && this.currentTime(t),
                    o && this.play(),
                    c.unsub(p.MetaLoaded, "*", s, this)
                });
                c.sub(p.MetaLoaded, "*", s, this)
            },
            t.prototype.handleMsg = function(t) {
                e.prototype.handleMsg.call(this, t)
            },
            t
        } (u.Player)
    },
    function(e, t) {
        t.__esModule = !0;
        var n = window.navigator.userAgent,
        i = /AppleWebKit\/([\d.]+)/i.exec(n),
        o = i ? parseFloat(i.pop()) : null,
        r = t.IS_IPAD = /iPad/i.test(n),
        s = t.IS_IPHONE = /iPhone/i.test(n) && !r,
        a = t.IS_IPOD = /iPod/i.test(n),
        l = t.IS_IOS = s || r || a,
        c = (t.IOS_VERSION = function() {
            var e = n.match(/OS (\d+)_/i);
            if (e && e[1]) return e[1]
        } (), t.IS_MAC = /Mac/i.test(n), t.IS_ANDROID = /Android/i.test(n)),
        u = t.ANDROID_VERSION = function() {
            var e, t, i = n.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            return i ? (e = i[1] && parseFloat(i[1]), t = i[2] && parseFloat(i[2]), e && t ? parseFloat(i[1] + "." + i[2]) : e || null) : null
        } (),
        p = (t.IS_OLD_ANDROID = c && /webkit/i.test(n) && u < 2.3, t.IS_NATIVE_ANDROID = c && u < 5 && o < 537, t.IS_FIREFOX = /Firefox/i.test(n), t.IS_EDGE = /Edge/i.test(n)),
        h = t.IS_CHROME = !p && /Chrome/i.test(n),
        d = t.IS_SAFARI = !h && /Safari/i.test(n),
        f = (t.SAFARI_VERSION = function() {
            if (!d) return null;
            var e = n.match(/version\/([\d.]+)/i);
            return e ? e[1] : void 0
        } (), t.IS_IE8 = /MSIE\s8\.0/.test(n), t.IS_IE9 = /MSIE\s9\.0/.test(n), t.IS_IE = /(msie\s|trident.*rv:)([\w.]+)/i.test(n)),
        y = (t.IE_VERSION = function() {
            var e = n.match(/(msie\s|trident.*rv:)([\w.]+)/i);
            return e ? e[2] : null
        } (), t.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), t.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in document.createElement("video").style, t.HASVIDEO = !!document.createElement("video").canPlayType, t.IS_X5TBS = /TBS\/\d+/i.test(n)),
        v = (t.TBS_VERSION = function() {
            var e = n.match(/TBS\/(\d+)/i);
            if (e && e[1]) return e[1]
        } (), t.IS_MQQB = !y && /MQQBrowser\/\d+/i.test(n), t.IS_MOBILE = c || l, t.IS_FILE_PROTOCOL = /file:/.test(location.protocol), t.FLASH_VERSION = null);
        t.IS_ENABLED_FLASH = function() {
            var e;
            if (document.all || f) try {
                if (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return t.FLASH_VERSION = v = e.GetVariable("$version").split(" ")[1].replace(/,/g, "."),
                window.console && console.log("FLASH_VERSION", v),
                !0
            } catch(e) {
                return ! 1
            } else try {
                if (navigator.plugins && navigator.plugins.length > 0 && (e = navigator.plugins["Shockwave Flash"])) {
                    for (var n = e.description.split(" "), i = 0; i < n.length; ++i) isNaN(parseInt(n[i])) || (t.FLASH_VERSION = v = n[i], window.console && console.log("FLASH_VERSION", parseInt(n[i])));
                    return ! 0
                }
            } catch(e) {
                return ! 1
            }
            return ! 1
        } (),
        t.IS_ENABLED_MSE = (window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'))
    },
    function(e, t) {
        function n(e, t) {
            e.classList ? e.classList.add(t) : o(e, t) || (e.className = e.className + " " + t)
        }
        function i(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.replace(r(t), " ")
        }
        function o(e, t) {
            return e.classList ? e.classList.contains(t) : r(t).test(e.className)
        }
        function r(e) {
            return new RegExp("(^|\\s)" + e + "($|\\s)")
        }
        function s(e) {
            var t = void 0;
            if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {
                left: 0,
                top: 0
            };
            var n = document.documentElement,
            i = document.body,
            o = n.clientLeft || i.clientLeft || 0,
            r = window.pageXOffset || i.scrollLeft,
            s = t.left + r - o,
            a = n.clientTop || i.clientTop || 0,
            l = window.pageYOffset || i.scrollTop,
            c = t.top + l - a;
            return {
                left: Math.round(s),
                top: Math.round(c)
            }
        }
        t.__esModule = !0,
        t.on = function(e, t, n) {
            return e ? (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n), n) : console.warn("element not exists")
        },
        t.off = function(e, t, n) {
            if (!e) return console.warn("element not exists");
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
        },
        t.createEl = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = document.createElement(e);
            for (var o in t) if (t.hasOwnProperty(o)) {
                var r = t[o];
                null === r ? i.removeAttribute(r) : i.setAttribute(o, r)
            }
            for (var s in n) n.hasOwnProperty(s) && (i[s] = n[s]);
            return i
        },
        t.get = function(e) {
            return document.getElementById(e)
        },
        t.addClass = n,
        t.removeClass = i,
        t.toggleClass = function(e, t, o) {
            o ? n(e, t) : i(e, t)
        },
        t.hasClass = o,
        t.findElPosition = s,
        t.getPointerPosition = function(e, t, n) {
            var i = {},
            o = n || s(e),
            r = e.offsetWidth,
            a = e.offsetHeight,
            l = o.top,
            c = o.left,
            u = t.pageY || t.clientY,
            p = t.pageX || t.clientX;
            return t.changedTouches && (p = t.changedTouches[0].pageX, u = t.changedTouches[0].pageY),
            i.y = Math.max(0, Math.min(1, (l - u + a) / a)),
            i.x = Math.max(0, Math.min(1, (p - c) / r)),
            i
        },
        t.loadScript = function(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = document.createElement("script");
            if (o.onload = o.onreadystatechange = function() {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || ("function" == typeof t && t(), o.onload = o.onreadystatechange = null, o.parentNode && !i && o.parentNode.removeChild(o))
            },
            n) for (var r in n) if (n.hasOwnProperty(r)) {
                var s = n[r];
                null === s ? o.removeAttribute(s) : o.setAttribute(r, s)
            }
            o.src = e,
            document.getElementsByTagName("head")[0].appendChild(o)
        },
        t.getViewportSize = function() {
            var e = document,
            t = e.documentElement,
            n = e.body;
            return {
                width: t && t.clientWidth || n && n.offsetWidth || window.innerWidth || 0,
                height: t && t.clientHeight || n && n.offsetHeight || window.innerHeight || 0
            }
        }
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o() {
            return p++
        }
        function r(e) { (a.__isFullscreen = !!document[h.fullscreenElement]) || l.off(document, h.fullscreenchange, r),
            u.pub({
                type: c.MSG.FullScreen,
                src: "util",
                ts: e.timestamp,
                detail: {
                    isFullscreen: a.__isFullscreen
                }
            },
            a.player)
        }
        function s(e) {
            27 === e.keyCode && a(a.player, !1)
        }
        function a(e, t, n) {
            if (void 0 === t) return a.__isFullscreen || !1;
            a.player = e,
            h.requestFullscreen ? t ? (l.on(document, h.fullscreenchange, r), n && n[h.requestFullscreen]()) : document[h.exitFullscreen]() : ((a.__isFullscreen = t) ? (a.__origOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", l.on(document, "keydown", s)) : (document.documentElement.style.overflow = a.__origOverflow, l.off(document, "keydown", s)), l.toggleClass(document.body, "vcp-full-window", t), u.pub({
                type: c.MSG.FullScreen,
                src: "util",
                detail: {
                    isFullscreen: a.__isFullscreen
                }
            },
            a.player))
        }
        t.__esModule = !0,
        t.supportStyle = t.console = t.VideoType = t.CDNPath = t.FullscreenApi = void 0,
        t.guid = o,
        t.bind = function(e, t, n) {
            t.guid || (t.guid = o());
            var i = function() {
                t.apply(e, arguments)
            };
            return i.guid = n ? n + "_" + t.guid: t.guid,
            i
        },
        t.isEmpty = function(e) {
            if (e instanceof Array) return 0 === e.length;
            for (var t in e) if (e.hasOwnProperty(t)) return ! 1;
            return ! 0
        },
        t.convertTime = function(e) {
            var t = 3600,
            n = (e |= 0) / t | 0,
            i = (e - n * t) / 60 | 0,
            o = e - n * t - 60 * i;
            return n = n > 0 ? n + ":": "",
            i = i > 0 ? i + ":": "00:",
            o = o > 0 ? o + "": n.length > 0 || i.length > 0 ? "00": "00:00",
            n = 2 == n.length ? "0" + n: n,
            i = 2 == i.length ? "0" + i: i,
            o = 1 == o.length ? "0" + o: o,
            n + i + o
        },
        t.doFullscreen = a,
        t.extend = function(e) {
            for (var t = arguments.length,
            n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            for (var o = 0; o < n.length; o++) {
                var r = n[o];
                for (var s in r) r.hasOwnProperty(s) && (e[s] = e[s] || r[s])
            }
            return e
        },
        t.store = function(e, t) {
            if (void 0 === t) return JSON.parse(localStorage[e] || "null");
            localStorage[e] = JSON.stringify(t)
        },
        t.compareVersion = function(e, t) {
            if (e = e || "0.0.0", t = t || "0.0.0", e == t) return 0;
            for (var n = e.split("."), i = t.split("."), o = Math.max(n.length, i.length), r = 0; r < o; r++) {
                var s = ~~i[r],
                a = ~~n[r];
                if (s < a) return 1;
                if (s > a) return - 1
            }
            return - 1
        },
        t.escapeHTML = function(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;").replace(/\//g, "&#x2F;")
        };
        for (var l = i(n(2)), c = n(4), u = i(c), p = (i(n(1)), 1), h = t.FullscreenApi = {
            requestFullscreen: null,
            exitFullscreen: null,
            fullscreenElement: null,
            fullscreenEnabled: null,
            fullscreenchange: null,
            fullscreenerror: null
        },
        d = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], f = d[0], y = void 0, v = 0; v < d.length; v++) d[v][1] in document && (y = d[v]);
        if (y) for (var m = 0; m < y.length; m++) h[f[m]] = y[m];
        t.CDNPath = "//imgcache.qq.com/open/qcloud/video/vcplayer/",
        t.VideoType = {
            RTMP: "rtmp",
            FLV: "flv",
            M3U8: "m3u8"
        },
        t.console = {
            log: function() {
                window.console && window.console.log.apply(window.console, arguments)
            },
            warn: function() {
                window.console && window.console.warn.apply(window.console, arguments)
            },
            error: function() {
                window.console && window.console.error.apply(window.console, arguments)
            }
        },
        t.supportStyle = function() {
            var e = document.createElement("div"),
            t = "Khtml O Moz Webkit".split(" "),
            n = t.length;
            return function(i) {
                if (i in e.style) return ! 0;
                if ("-ms-" + i in e.style) return ! 0;
                for (i = i.replace(/^[a-z]/,
                function(e) {
                    return e.toUpperCase()
                }); n--;) if (t[n] + i in e.style) return ! 0;
                return ! 1
            }
        } ()
    },
    function(e, t, n) {
        function i(e) {
            var t = e.guid;
            return t ? (a[t] = a[t] || {},
            a[t]) : (console.error(e, " has no guid."), {})
        }
        function o(e) {
            var t = e.guid;
            return t ? (l[t] = l[t] || {},
            l[t]) : (console.error(e, " has no guid."), {})
        }
        function r(e, t, n) {
            try {
                var r = i(n),
                s = o(n);
                if (!r[e]) return;
                var a = r[e];
                for (var l in a) if (a.hasOwnProperty(l)) {
                    var c = a[l],
                    u = s[l];
                    if ("function" != typeof u) return ! 1;
                    for (var p = 0; p < c.length; p++) {
                        var h = c[p];
                        "*" !== h && h !== t.src || u(t)
                    }
                }
            } catch(e) {
                window.console && console.error && console.error(e.stack || e)
            }
        }
        t.__esModule = !0,
        t.MSG = void 0,
        t.pub = function(e, t) {
            r(e.type, e, t),
            r("*", e, t)
        },
        t.sub = function(e, t, n, r) {
            var s = i(r),
            a = o(r);
            return n.guid ? (a[n.guid] = n, s[e] = s[e] || {},
            s[e][n.guid] = s[e][n.guid] || [], s[e][n.guid].push(t), n) : console.error("callback function need guid")
        },
        t.unsub = function(e, t, n, r) {
            var a = i(r),
            l = o(r);
            if (("*" == e || a[e]) && ("*" == e || a[e][n.guid])) for (var c in a) if (("*" === e || c == e) && a.hasOwnProperty(c)) if ("*" !== n) {
                var u = a[c][n.guid];
                "*" === t && (u = []);
                for (var p = 0; p < u.length;) u[p] === t ? u.splice(p, 1) : p++;
                0 == u.length && delete a[c][n.guid],
                s.isEmpty(a[c]) && delete a[c]
            } else {
                for (var h in a[c]) delete l[h];
                delete a[c]
            }
        };
        var s = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (n(3)),
        a = (t.MSG = {
            Error: "error",
            TimeUpdate: "timeupdate",
            Load: "load",
            MetaLoaded: "loadedmetadata",
            Loaded: "loadeddata",
            Progress: "progress",
            FullScreen: "fullscreen",
            Play: "play",
            Playing: "playing",
            Pause: "pause",
            Ended: "ended",
            Seeking: "seeking",
            Seeked: "seeked",
            Resize: "resize",
            VolumeChange: "volumechange"
        },
        {}),
        l = {}
    },
    function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0,
        t.Player = t.dom = t.util = t.browser = t.MSG = void 0,
        n(6);
        var r = o(n(1)),
        s = o(n(2)),
        a = o(n(3)),
        l = o(n(4)),
        c = i(n(10)),
        u = i(n(13)),
        p = i(n(14)),
        h = i(n(22)),
        d = i(n(23)),
        f = i(n(24)),
        y = i(n(25));
        window.console || (window.console = {
            log: function() {},
            error: function() {},
            debug: function() {},
            info: function() {}
        });
        var v = t.MSG = l.MSG,
        m = t.browser = r,
        g = t.util = a,
        b = t.dom = s;
        t.Player = function() {
            function e(t) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, e),
                this.options = t,
                this.ready = !1;
                var n = t.owner;
                if (!n) return console.error("Player need a container");
                this.guid = g.guid(),
                this.listener = this.options.listener,
                l.sub("*", "*", g.bind(this, this.handleMsg), this),
                n = b.get(n),
                this.render(n)
            }
            return e.prototype.reRender = function() {
                var e = document.getElementById(this.options.owner);
                e.innerHTML = "",
                this.render(e)
            },
            e.prototype.render = function(e) {
                var t = "vcp-player";
                if (this.options.isLive && (t += " live-player"), m.TOUCH_ENABLED && (t += " touchable"), this.el = b.createEl("div", {
                    class: t
                }), e.appendChild(this.el), this.errortips = new y.
            default(this), this.errortips.render(this.el), this.loading = new f.
            default(this), this.loading.render(this.el), this.options.width = this.options.width || e.offsetWidth, this.options.height = this.options.height || e.offsetHeight, this.size(this.options.width, this.options.height), !this.verifyOptions()) return g.console.error("create failed");
                if (!this.options.flash && m.HASVIDEO) {
                    var n = new c.
                default(this);
                    n.render(this.el),
                    this.video = n
                } else {
                    var i = new u.
                default(this);
                    i.render(this.el),
                    this.video = i
                }
                if (!this.video) return g.console.error("create video failed");
                this.poster = new d.
            default(this),
                this.poster.render(this.el),
                this.bigplay = new h.
            default(this),
                this.bigplay.render(this.el); ! (this.options.controls && "default" != this.options.controls && (!this.options.flash || "system" != this.options.controls)) && (this.panel = new p.
            default(this), this.panel.render(this.el)),
                this.setup()
            },
            e.prototype.verifyOptions = function() {
                return m.IE_VERSION && -1 == g.compareVersion(m.IE_VERSION, "8.0") ? (this.errortips.show({
                    code: 5
                }), !1) : m.IS_FILE_PROTOCOL ? (this.errortips.show({
                    code: 10
                }), !1) : !!this.options.src || (this.options.videoSource.hasUrl() ? (m.IS_IE || m.IS_ENABLED_FLASH, this.errortips.show({
                    code: 5
                })) : this.errortips.show({
                    code: 12
                }), !1)
            },
            e.prototype.size = function(e, t, n) {
                n = n || "cover";
                var i = /^\d+\.?\d{0,2}%$/,
                o = void 0,
                r = void 0;
                if (i.test(e) || i.test(t)) o = e,
                r = t;
                else {
                    var s = this.video ? this.video.videoWidth() : this.options.width,
                    a = this.video ? this.video.videoHeight() : this.options.height;
                    if (o = e, r = t, s && a) {
                        "fit" == n && (r = (o = e) / (s / a)) > t && (o *= t / r, r = t)
                    }
                    var l = b.getViewportSize();
                    l.width > 0 && o > l.width && (o = l.width)
                }
                o += i.test(o) ? "": "px",
                r += i.test(r) ? "": "px",
                this.el.style.width = o,
                this.el.style.height = r,
                this.video && (this.video.width(o), this.video.height(r)),
                this.width = o,
                this.height = r
            },
            e.prototype.setup = function() {
                if (this.__handleEvent = g.bind(this, this.handleEvent), m.IS_MOBILE) {
                    if (this.options.autoplay) {
                        var e = this;
                        document.addEventListener("WeixinJSBridgeReady",
                        function() {
                            e.play()
                        })
                    }
                } else this.loading.show();
                b.loadScript("//pingjs.qq.com/h5/stats.js?v2.0.4", null, {
                    name: "MTAH5",
                    sid: "500376528",
                    cid: "500383222"
                },
                !0)
            },
            e.prototype.destroy = function() {
                this.video && this.video.destroy(),
                this.panel && this.panel.destroy(),
                this.bigplay && this.bigplay.destroy(),
                this.loading && this.loading.destroy(),
                l.unsub("*", "*", this.handleMsg, this),
                this.video = this.panel = this.bigplay = this.loading = null,
                document.getElementById(this.options.owner).innerHTML = ""
            },
            e.prototype.setListener = function(e) {
                this.listener = e
            },
            e.prototype.handleEvent = function(e) {
                var t = this;
                switch (e.type) {
                case "mouseleave":
                    this.panel.volume.volume.isMoving ? setTimeout(function() {
                        t.handleEvent({
                            type: "mouseleave"
                        })
                    },
                    50) : this.playing() && this.panel.hide();
                    break;
                case "mousedown":
                    this.__movecnt = 5;
                case "mousemove":
                    if (this.__lastmove && new Date - this.__lastmove < 100) break;
                    var n = this;
                    if (this.__movecnt = this.__movecnt || 0, this.__movecnt++, this.__movecnt < 5) {
                        setTimeout(function() {
                            n.__movecnt = 0
                        },
                        500);
                        break
                    }
                    this.__movecnt = 0,
                    this.__lastmove = +new Date,
                    clearTimeout(this.__moveid),
                    n.panel && n.panel.show(),
                    this.__moveid = setTimeout(function() {
                        n.playing() && n.panel && n.panel.hide()
                    },
                    3e3)
                }
            },
            e.prototype.handleMsg = function(e) {
                switch (e.type) {
                case v.Play:
                    if (!this.playing()) break;
                    b.addClass(this.el, "vcp-playing"),
                    this.video.type() == g.VideoType.RTMP && (this.__wait = !0, this.loading.show()),
                    b.on(this.el, "mousemove", this.__handleEvent),
                    b.on(this.el, "mousedown", this.__handleEvent),
                    b.on(this.el, "mouseleave", this.__handleEvent);
                    break;
                case v.TimeUpdate:
                    this.__wait && (this.__wait = !1, this.loading.hide());
                    break;
                case v.Pause:
                    b.off(this.el, "mousemove", this.__handleEvent),
                    b.off(this.el, "mousedown", this.__handleEvent),
                    b.removeClass(this.el, "vcp-playing");
                    break;
                case v.Ended:
                    b.off(this.el, "mousemove", this.__handleEvent),
                    b.off(this.el, "mousedown", this.__handleEvent),
                    this.panel && this.panel.show(),
                    b.removeClass(this.el, "vcp-playing");
                    break;
                case v.MetaLoaded:
                    this.loading.hide(),
                    this.size(this.options.width, this.options.height);
                    break;
                case v.Seeking:
                    this.loading.show();
                    break;
                case v.Seeked:
                    this.loading.hide();
                    break;
                case v.FullScreen:
                    var t = this;
                    setTimeout(function() {
                        b.toggleClass(t.el, "vcp-fullscreen", e.detail.isFullscreen)
                    },
                    0);
                    break;
                case v.Error:
                    this.loading.hide(),
                    this.errortips.show(e.detail),
                    this.panel && this.panel.show();
                    try {
                        MtaH5.clickStat("error", {
                            error: "true"
                        })
                    } catch(e) {}
                } ! e.private && this.listener && this.listener(e)
            },
            e.prototype.currentTime = function(e) {
                return this.video.currentTime(e)
            },
            e.prototype.duration = function() {
                return this.video.duration()
            },
            e.prototype.percent = function(e) {
                return this.video.duration() ? void 0 === e ? this.video.currentTime() / this.video.duration() : void this.video.currentTime(this.video.duration() * e) : 0
            },
            e.prototype.buffered = function() {
                return this.video.duration() ? this.video.buffered() / this.video.duration() : 0
            },
            e.prototype.pause = function() {
                this.video.pause()
            },
            e.prototype.play = function() {
                this.errortips.clear(),
                this.video.play()
            },
            e.prototype.togglePlay = function() {
                this.errortips.clear(),
                this.video.togglePlay()
            },
            e.prototype.stop = function() {
                this.video.stop()
            },
            e.prototype.mute = function(e) {
                return this.video.mute(e)
            },
            e.prototype.volume = function(e) {
                return this.video.volume(e)
            },
            e.prototype.fullscreen = function(e) {
                return this.video.fullscreen(e)
            },
            e.prototype.disablePanel = function() {
                this.panel.isDisable || this.panel.toggleDisable()
            },
            e.prototype.enablePanel = function() {
                this.panel.isDisable && this.panel.toggleDisable()
            },
            e.prototype.isDisablePanel = function() {
                return this.panel.disable
            },
            e.prototype.load = function(e, t) {
                this.errortips.clear(),
                this.loading.show(),
                this.video.load(e || this.options.src, t)
            },
            e.prototype.playing = function() {
                return this.video.playing()
            },
            e.prototype.paused = function() {
                return this.video.paused()
            },
            e
        } ()
    },
    function(e, t, n) {
        var i = n(7);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(9)(i, {});
        i.locals && (e.exports = i.locals)
    },
    function(e, t, n) { (e.exports = n(8)()).push([e.id, "\n        .vcp-player {\n            position: relative;\n            z-index: 0;\n            font-family: Tahoma, '\\5FAE\\8F6F\\96C5\\9ED1', \\u5b8b\\u4f53, Verdana, Arial, sans-serif;\n            background-color: black;\n          }\n        .live-player .vcp-timeline{\n            display: none;\n        }\n          \n          .vcp-player video {\n            display: block;\n            overflow: hidden;\n          }\n          \n          .vcp-fullscreen.vcp-player,\n          .vcp-fullscreen video {\n            width: 100%!important;\n            height: 100%!important;\n          }\n          \n          \n          /* 伪全屏 */\n          \n          body.vcp-full-window {\n            width: 100%!important;\n            height: 100%!important;\n            overflow-y: auto;\n          }\n          \n          .vcp-full-window .vcp-player {\n            position: fixed;\n            left: 0;\n            top: 0;\n          }\n          \n          .vcp-video {\n            width: 100%;\n            height: 100%;\n          }\n          \n          \n          /* chrome flash 成功加载到DOM之前会闪白屏，所以加个黑屏遮一遮 */\n          \n          .vcp-pre-flash {\n            z-index: 999;\n            background: black;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n          }\n          \n          .vcp-controls-panel {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            font-size: 14px;\n            height: 40px;\n            z-index: 10000;\n          }\n          \n          .vcp-controls-panel.show {\n            -webkit-animation: fadeIn ease 0.8s;\n            animation: fadeIn ease 0.8s;\n            animation-fill-mode: forwards;\n            -webkit-animation-fill-mode: forwards;\n          }\n          \n          .vcp-controls-panel.hide {\n            -webkit-animation: fadeOut ease 0.8s;\n            animation: fadeOut ease 0.8s;\n            animation-fill-mode: forwards;\n            -webkit-animation-fill-mode: forwards;\n          }\n          \n          .vcp-panel-bg {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            left: 0;\n            top: 0;\n            background-color: rgb(54, 57, 60);\n            opacity: 0.8;\n            filter: alpha(opacity=80);\n            z-index: 1000;\n          }\n          \n          .vcp-playtoggle {\n            cursor: pointer;\n            position: relative;\n            z-index: 1001;\n            width: 40px;\n            height: 100%;\n            /* transition-duration: 200ms; */\n            float: left;\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAA3UlEQVQokZWOIU7EYBCFvyZNCBUkNaSC4xRXV1dMb4CBsFnEGjwOSTgAgWA5A1yAFZVlTRNE+ft3xMMsm6Vhm+5Lxsy8b95D0pmkT0lvkk4lMTaYmTMzbc29mZ3sAoK2bb+AI/7KAddRFN0O9gRN06yA4+FhrXdgHsfx6wao63oM+NUDME+SpA6qqpoCAHwDF6FzboIXgAi42wcAYB9AwNVU4AW4TNN0GXZdN2b8AGZZlj1vKnnvD3bE3wCLPM+1fQi994cD8xMwK4pi+V9k2Pf9+frbCliUZfk41vEHKxeP3CVOtvUAAAAASUVORK5CYII=) no-repeat center center;\n          }\n          \n          .vcp-playing .vcp-playtoggle:hover,\n          .vcp-playtoggle:hover,\n          .vcp-playtoggle:focus {\n            background-color: #525a5f;\n            opacity: 0.9;\n            filter: alpha(opacity=90);\n          }\n          \n          .touchable .vcp-playtoggle:hover {\n            background-color: transparent;\n            opacity: 1;\n          }\n          \n          .vcp-playing .vcp-playtoggle {\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAp0lEQVQoke2RsU0DURBEX7AyOlGDAyiAzBXQg+UW3IADOiCgCoSozReRWL6/Y2mc3Imvf4ccOGWkCUb7XrTY3tj+sv1uO2zzR99G7hVJR0kee1gSJO0qxiHpkd+sI4I2kp6qeYnMPAGTeOq6biaNzJRzlFJmUJuWiWEYbkot8y/dJZVS6m/OPws0zCoys77/LEmZ2VfzISRtgT3QAx9LkqRP4AV4Br6vhLqt+c0Ui4kAAAAASUVORK5CYII=) no-repeat center center;\n          }\n          \n          .vcp-bigplay {\n            width: 100%;\n            height: 80%;\n            /*会遮住原生控制栏*/\n            position: absolute;\n            background-color: white\\0;\n            filter: alpha(opacity=0);\n            /*奇怪的IE8/9鼠标事件穿透*/\n            opacity: 0;\n            z-index: 1000;\n            top: 0;\n            left: 0;\n          }\n          \n          .vcp-slider {\n            position: relative;\n            z-index: 1001;\n            float: left;\n            background: rgb(196, 196, 196);\n            height: 10px;\n            opacity: 0.9;\n            filter: alpha(opacity=90);\n            cursor: pointer;\n          }\n          \n          .vcp-slider .vcp-slider-track {\n            width: 0;\n            height: 100%;\n            margin-top: 0;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            background-color: #9ec0e0;\n            position: absolute;\n            top:0;\n            left:0;\n            /*beautiful blue*/\n          }\n          \n          .vcp-slider .vcp-slider-thumb {\n            cursor: pointer;\n            background-color: white;\n            top: 0;\n            left: 0;\n            border-radius: 1em!important;\n            height: 10px;\n            margin-left: -5px;\n            width: 10px;\n            position: absolute;\n          }\n          \n          .vcp-slider .vcp-slider-progress {\n            cursor: pointer;\n            height: 100%;\n            background-color: #3580c3;\n            /* transition-duration: 200ms; */\n            position: absolute;\n          }\n          \n          .vcp-slider-vertical {\n            position: relative;\n            width: 0.5em;\n            height: 8em;\n            top: -5.6em;\n            z-index: 1001;\n            background-color: rgb(28, 28, 28);\n            opacity: 0.9;\n            filter: alpha(opacity=90);\n            cursor: pointer;\n          }\n          \n          .vcp-slider-vertical .vcp-slider-track {\n            background-color: rgb(18, 117, 207);\n            width: 0.5em;\n            height: 100%;\n            opacity: 0.8;\n            filter: alpha(opacity=80);\n          }\n          \n          .vcp-slider-vertical .vcp-slider-thumb {\n            cursor: pointer;\n            position: absolute;\n            background-color: aliceblue;\n            width: 0.8em;\n            height: 0.8em;\n            border-radius: 0.8em!important;\n            margin-top: -0.4em;\n            top: 0;\n            left: -0.15em;\n          }\n          \n          \n          /* 时间线/进度条 */\n          \n          .vcp-timeline {\n            top: -10px;\n            left: 0;\n            height: 10px;\n            position: absolute;\n            z-index: 1001;\n            width: 100%;\n          }\n          \n          .vcp-timeline .vcp-slider-thumb {\n            top: -4px;\n            /* transition-duration: 200ms; */\n          }\n          \n          .vcp-timeline .vcp-slider {\n            margin-top: 8px;\n            height: 2px;\n            transition-duration: 100ms;\n            width: 100%;\n          }\n          \n          .vcp-timeline:hover .vcp-slider {\n            margin-top: 0;\n            height: 10px;\n          }\n          \n          .vcp-timeline:hover .vcp-slider-thumb {\n            display: block;\n            width: 16px;\n            height: 16px;\n            top: -3px;\n            margin-left: -8px;\n          }\n          \n          \n          /* 时间展示 */\n          \n          .vcp-timelabel {\n            display: inline-block;\n            line-height: 40px;\n            height: 40px;\n            /*width: 40px;*/\n            float: left;\n            color: white;\n            padding: 0 9px;\n            z-index: 1001;\n            position: relative;\n          }\n          \n          \n          /* 音量控制 */\n          \n          .vcp-volume {\n            height: 40px;\n            width: 40px;\n            cursor: pointer;\n            position: relative;\n            z-index: 1001;\n            float: right;\n            background-color: transparent;\n            opacity: 0.9;\n            filter: alpha(opacity=90);\n          }\n          \n          .vcp-volume-icon {\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/volume.png);\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/volume.svg), none;\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABSUlEQVQokY3Sv2sVQRDA8c+FSwxiEYOCKfwBkkIxiCAEUyVVWv8CwTK1nVgJIiRgI2jhH5A0ScTGwiIpIqQUQq6xuEZ4IMZ2754Pn8VNSDDLIwPL7szOfHd2ZorhcGiEfMINPEDWsRwMBjn7bWzifuiTSFlAv9//3/YYG7gQ+hGKU/eXIqsKyrZtb+ItroXjw8xDfzGOP7iOQ7zAq6LX6+1jPpdeyC9cxTss4U6cVzBb1HX9G5fPAVjAVzzHa11R14uqqmrcGgE4wkykv4PF+OoeHpUppZF9DCkDUAcAfmCsTCldPAegif0pduO8jG9lSqnJhpzIMNb70JdwD1N4WTZNs4IPuKL720QGMo4t3XxM4UBX0O2ybdvPuiJOB+AJVk8FH0O/hH4Xb/CMbpBggJ/hsIbvulEec7bF1XEw+VGGj5jDdgCyTvAPqItfDawQrL8AAAAASUVORK5CYII=) no-repeat center center;\n            display: inline-block;\n            width: 40px;\n            height: 40px;\n            position: absolute;\n            left: 0;\n            top: 0;\n          }\n          \n          .vcp-volume-muted .vcp-volume-icon {\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/muted.png);\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/muted.svg), none;\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAABiElEQVQokYWTsWtTURSHv5de+0LB4Wmo7WADFcE3CA6CgeveDhkC2TI4uHXsn6Gr4OKQLegQkM4Z89agLimFktpBSmn6Wofc3HtLjkPeIO1NeuAM95zf/c4593IiEWGJHQBbwKuFChG54977Z977H9578d6LiKyFdCKCug2cTCYN4CsQF6Ex8FApNQk1oPI8rwKfgA0gAl4HdDdK3ak1B1hrvwFvFs4IAqxaa/eBgyRJjgHyPH8ONKLRaHQJJEsAF+Vy+QVwUZxXCugMQBljru8BRMAlUAWGwM8CcA3UlDFm6T8Wtp6m6elwOHzP/IEBammaHkb9fv8MeLLk8lhrXRkMBk+BX8A58Bj4A7xVxpjpPdUly7Jt4Bi40VonWZZVgRPgSk2n0z3gC1Ap5l0NQB4AH4DPAFrr371ebxfYiUSEbrergEcF4B3w8f8R4jjertfrf0PtRaFd6HQ6DaALlIBZHMebzWbzPAQohYKtVuu7c+6lc+7IOTe21vqQDggv021vt9vRotw/dwncr+/T9bYAAAAASUVORK5CYII=) no-repeat center center;\n          }\n          \n          .vcp-volume .vcp-slider-vertical {\n            top: -8.4em;\n            left: 1em;\n            display: none;\n          }\n          \n          .vcp-volume .vcp-slider-track {\n            position: absolute;\n            bottom: 0;\n          }\n          \n          .vcp-volume .vcp-volume-bg {\n            height: 8.8em;\n            width: 2em;\n            position: absolute;\n            left: 0.25em;\n            top: -8.8em;\n            background: rgb(36, 36, 36);\n            display: none;\n          }\n          \n          /* 全屏控件 */\n          \n          .vcp-fullscreen-toggle {\n            position: relative;\n            width: 40px;\n            height: 40px;\n            float: right;\n            cursor: pointer;\n            z-index: 1001;\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen.png);\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen.svg), none;\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABrElEQVQokZ2TMWsUQRiGnz3HFGkOm2sMG3+BKIj4A8x1HhJyRdKYNo2FYBFJuoCiRZpIRCwu4CWBC2kU5U4EHRBxiRAkzXZhU+hdd034bj51LLKL4yaVL7wM884zM8wLE3nv14BrgALngEvAE2CVv7oDPAQOgV+AAfZR1R+q6gNvquq4957Cqjqmqk9L3PeKqmaqSuBPxpjj4FaMMU5VP5a4I+Ocq/Cv1pxzF4GlarX6G2A4HN4HHpe481G/3/fAS+A1sB0sztZqte3BYDAF9IJ8HrgC3DUici+O41WALMsuAOvAO+A9gIjsAZvAHLAYx/EGsJFl2TfCYrz3pGk6laZpdEZeL2eR957/VbkskiS5fhaYJMmNU5uttfPFxFo7KyJfrLU71tpqno1ba9dF5LO1diFgb0fdbtfnJb0C3gQHz9Xr9a1er3eTkwILTQNXgQdGRPaBhdyFngG7ACLyAVgBlvK13Xw8MKPRSEtPWWw2m4+KSaPR+AksdzqdDHgecMcV59yEc47Ak+12+1SRzrnJEjdhVPUtcDngbgFfgRdF0Gq1Zjj5WXsBd/AHtvAqwoYICK4AAAAASUVORK5CYII=) no-repeat center center;\n\n          }\n          \n          .vcp-fullscreen .vcp-fullscreen-toggle {\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen_exit.png);\n            background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen_exit.svg), none;\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABrElEQVQ4jY3SQYhOURQH8N/wDCNN7NSkkL2tZIOSlKaMGhOL2TAWzMYgZSyUZDEpFojxbUYkZfItrBQrCyVlYWNjq1hYmG/eHXMsvvv0+uaRf53Ouff83//+73lXRIiIgYiYzvX/xuWIGIoIImJLRLyPLto10mhEnMn1WERM1Hqzmf8lInZIKV1LKUUtbqWUduV6JqUkpTSR17tTStM9/Lt9CwsL6zCHEStxCvdxEC8b+m8wXJRl2cFR3MAUVtVI/TmvaRB4gJODg4OKsiyrzXs410OsBPsaROaqolhcXIRjeNxAHMh5bUPvNSZxu+h0OvATx/EDSzUXH3L9CodyHSiwvnJaOXnRcFId3zUPtnud7OQAfiFl9cj9T/iKjdipO5vlzO3HBrQrkSE8bDhkCjPYj2cN/YtoV9dp4SPe9ZCqX7dkJYblMVROYF+2ubpGXO7Jdez5I5Kd3MHpBmL6h5Pz2D4/Pz9alGV5tUfgCR6hjW15b3POR7AXZ/N6BDeLsiyf4kT+4C3GMmFS9y1UuILnObbiML6h1ddqtWATLuBSg+2/4Tpmx8fHP/8GroQSfF/fX4MAAAAASUVORK5CYII=) no-repeat center center;\n\n          }\n          \n          .vcp-loading {\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            margin-top: -40px;\n            display: none;\n          }\n          \n          .vcp-poster {\n            position: absolute;\n            left: 0;\n            top: 0;\n            overflow: hidden;\n            z-index: 1000;\n            width: 100%;\n            height: 100%;\n            display: none;\n          }\n          \n          .vcp-poster-pic {\n            position: relative;\n          }\n          \n          .vcp-poster-pic.default {\n            left: 50%;\n            top: 50%;\n            -ms-transform: translate(-50%, -50%);\n            /* IE 9 */\n            -webkit-transform: translate(-50%, -50%);\n            /* Safari */\n            transform: translate(-50%, -50%);\n          }\n          \n          .vcp-poster-pic.cover {\n            width: 100%;\n            left: 50%;\n            top: 50%;\n            -ms-transform: translate(-50%, -50%);\n            /* IE 9 */\n            -webkit-transform: translate(-50%, -50%);\n            /* Safari */\n            transform: translate(-50%, -50%);\n          }\n          \n          .vcp-poster-pic.stretch {\n            width: 100%;\n            height: 100%;\n          }\n          \n          .vcp-error-tips {\n            position: absolute;\n            z-index: 1001;\n            width: 100%;\n            height: 4.5em;\n            left: 0;\n            top: 50%;\n            color: orangered;\n            margin-top: -5.25em;\n            text-align: center;\n            display: none;\n          }\n          \n          .vcp-clarityswitcher {\n            height: 40px;\n            width: 40px;\n            cursor: pointer;\n            position: relative;\n            z-index: 1001;\n            float: right;\n            background-color: transparent;\n            opacity: 0.9;\n          }\n          \n          .vcp-vertical-switcher-container {\n            width: 40px;\n            position: absolute;\n            left: 0em;\n            bottom: 2.4em;\n            background: rgb(36, 36, 36);\n            display: none;\n          }\n          \n          .vcp-vertical-switcher-current {\n            display: block;\n            color: #fff;\n            text-align: center;\n            line-height: 40px;\n          }\n          \n          .vcp-vertical-switcher-item {\n            display: block;\n            color: #fff;\n            text-align: center;\n            line-height: 2em;\n          }\n          \n          .vcp-vertical-switcher-item.current {\n            color: #888;\n          }\n          \n          \n          /* animations */\n          \n          @-webkit-keyframes fadeOut {\n            from {\n              opacity: 1;\n            }\n            to {\n              opacity: 0;\n            }\n          }\n          \n          @keyframes fadeOut {\n            from {\n              opacity: 1;\n            }\n            to {\n              opacity: 0;\n            }\n          }\n          \n          .fadeOut {\n            -webkit-animation: fadeOut ease 0.8s;\n            animation: fadeOut ease 0.8s;\n            animation-fill-mode: forwards;\n            -webkit-animation-fill-mode: forwards;\n          }\n          \n          @-webkit-keyframes fadeIn {\n            from {\n              opacity: 0;\n            }\n            to {\n              opacity: 1;\n            }\n          }\n          \n          @keyframes fadeIn {\n            from {\n              opacity: 0;\n            }\n            to {\n              opacity: 1;\n            }\n          }\n          \n          .fadeIn {\n            -webkit-animation: fadeIn ease 0.8s;\n            animation: fadeIn ease 0.8s;\n            animation-fill-mode: forwards;\n            -webkit-animation-fill-mode: forwards;\n          }\n        ", ""])
    },
    function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            },
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var i = {},
                o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n: n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            },
            e
        }
    },
    function(e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                o = u[i.id];
                if (o) {
                    o.refs++;
                    for (s = 0; s < o.parts.length; s++) o.parts[s](i.parts[s]);
                    for (; s < i.parts.length; s++) o.parts.push(l(i.parts[s], t))
                } else {
                    for (var r = [], s = 0; s < i.parts.length; s++) r.push(l(i.parts[s], t));
                    u[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: r
                    }
                }
            }
        }
        function o(e) {
            for (var t = [], n = {},
            i = 0; i < e.length; i++) {
                var o = e[i],
                r = o[0],
                s = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                n[r] ? n[r].parts.push(s) : t.push(n[r] = {
                    id: r,
                    parts: [s]
                })
            }
            return t
        }
        function r(e, t) {
            var n = d(),
            i = v[v.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            v.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function s(e) {
            e.parentNode.removeChild(e);
            var t = v.indexOf(e);
            t >= 0 && v.splice(t, 1)
        }
        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css",
            r(e, t),
            t
        }
        function l(e, t) {
            var n, i, o;
            if (t.singleton) {
                var l = y++;
                n = f || (f = a(t)),
                i = c.bind(null, n, l, !1),
                o = c.bind(null, n, l, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                var t = document.createElement("link");
                return t.rel = "stylesheet",
                r(e, t),
                t
            } (t), i = function(e, t) {
                var n = t.css,
                i = t.sourceMap;
                i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var o = new Blob([n], {
                    type: "text/css"
                }),
                r = e.href;
                e.href = URL.createObjectURL(o),
                r && URL.revokeObjectURL(r)
            }.bind(null, n), o = function() {
                s(n),
                n.href && URL.revokeObjectURL(n.href)
            }) : (n = a(t), i = function(e, t) {
                var n = t.css,
                i = t.media;
                i && e.setAttribute("media", i);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function() {
                s(n)
            });
            return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else o()
            }
        }
        function c(e, t, n, i) {
            var o = n ? "": i.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, o);
            else {
                var r = document.createTextNode(o),
                s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(r, s[t]) : e.appendChild(r)
            }
        }
        var u = {},
        p = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)),
                t
            }
        },
        h = p(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        d = p(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        f = null,
        y = 0,
        v = [];
        e.exports = function(e, t) {
            void 0 === (t = t || {}).singleton && (t.singleton = h()),
            void 0 === t.insertAt && (t.insertAt = "bottom");
            var n = o(e);
            return i(n, t),
            function(e) {
                for (var r = [], s = 0; s < n.length; s++) {
                    var a = n[s]; (l = u[a.id]).refs--,
                    r.push(l)
                }
                if (e) {
                    i(o(e), t)
                }
                for (s = 0; s < r.length; s++) {
                    var l = r[s];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete u[l.id]
                    }
                }
            }
        };
        var m = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        } ()
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ?
        function(e) {
            return void 0 === e ? "undefined": _typeof(e)
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": void 0 === e ? "undefined": _typeof(e)
        },
        r = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        s = i(n(2)),
        a = i(n(3)),
        l = n(4),
        c = i(n(12)),
        u = i(n(1)),
        p = (a.FullscreenApi,
        function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "H5Video"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                var n = this.player.options,
                i = "system" == n.controls ? "": null,
                r = !!n.autoplay || null;
                return n.poster && "object" == o(n.poster) ? n.poster.src: "string" == typeof n.poster ? n.poster: null,
                this.createEl("video", {
                    controls: i,
                    preload: "auto",
                    autoplay: r,
                    "webkit-playsinline": "",
                    playsinline: "",
                    "x-webkit-airplay": "allow",
                    "x5-video-player-type": "h5" == n.x5_type ? "h5": null,
                    "x5-video-player-fullscreen": !!n.x5_fullscreen || null,
                    "x5-video-orientation": ["landscape", "portrait", "landscape|portrait"][n.x5_orientation] || null
                }),
                e.prototype.render.call(this, t)
            },
            t.prototype.__hlsLoaded = function(e) {
                if (!Hls.isSupported()) return this.notify({
                    type: "error",
                    code: 5,
                    timeStamp: +new Date
                });
                var t = new Hls;
                t.loadSource(e),
                t.attachMedia(this.el),
                t.on(Hls.Events.MANIFEST_PARSED,
                function(e, t) {}),
                t.on(Hls.Events.ERROR, a.bind(this, this.__hlsOnError)),
                this.hls = t
            },
            t.prototype.__hlsOnManifestParsed = function(e, t) {
                this.metaDataLoaded = !0
            },
            t.prototype.__hlsOnError = function(e, t) {
                var n = t.type,
                i = t.details,
                o = t.fatal,
                r = this.hls;
                if (o) switch (n) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    i.indexOf("TimeOut") > 0 ? a.console.error("加载视频文件超时") : a.console.error("无法加载视频文件，请检查网络，以及视频文件是否允许跨域请求访问，m3u8文件是否存在 " + (t.response && t.response.status ? "netstatus:" + t.response.status: "")),
                    this.notify({
                        type: "error",
                        code: 2,
                        timeStamp: +new Date
                    }),
                    r.startLoad();
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    r.recoverMediaError();
                    break;
                default:
                    r.destroy()
                }
            },
            t.prototype.__flvLoaded = function(e) {
                if (!flvjs.isSupported()) return this.notify({
                    type: "error",
                    code: 5,
                    timeStamp: +new Date
                });
                var t = flvjs.createPlayer({
                    type: "flv",
                    isLive: this.player.options.live,
                    url: e
                });
                t.attachMediaElement(this.el),
                t.on(flvjs.Events.ERROR, a.bind(this,
                function(e, t, n) {
                    var i = {
                        type: "error"
                    };
                    e == flvjs.ErrorTypes.NETWORK_ERROR && (i.code = 2),
                    e == flvjs.ErrorTypes.MEDIA_ERROR && (i.code = 1002),
                    flvjs.ErrorTypes.OTHER_ERROR,
                    i.timeStamp = +new Date,
                    this.notify(i)
                })),
                t.on(flvjs.Events.MEDIA_INFO, a.bind(this,
                function(e, t) {
                    console.log("flv MEDIA_INFO", e, t)
                })),
                t.on(flvjs.Events.STATISTICS_INFO, a.bind(this,
                function(e, t) {})),
                this.flv = t,
                t.load()
            },
            t.prototype.setup = function() {
                this.playState = c.PlayStates.IDLE,
                this.seekState = c.SeekStates.IDLE,
                this.metaDataLoaded = !1,
                this.__timebase = +new Date,
                this.on(l.MSG.MetaLoaded, this.notify),
                this.on(l.MSG.Loaded, this.notify),
                this.on(l.MSG.Progress, this.notify),
                this.on(l.MSG.Play, this.notify),
                this.on(l.MSG.Playing, this.notify),
                this.on(l.MSG.Pause, this.notify),
                this.on(l.MSG.Error, this.notify),
                this.on(l.MSG.TimeUpdate, this.notify),
                this.on(l.MSG.Ended, this.notify),
                this.on(l.MSG.Seeking, this.notify),
                this.on(l.MSG.Seeked, this.notify),
                this.on(l.MSG.VolumeChange, this.notify),
                this.on("durationchange", this.notify),
                this.load(this.options.src, this.options.m3u8 ? a.VideoType.M3U8: "")
            },
            t.prototype.notify = function(e) {
                var t = {
                    type: e.type,
                    src: this,
                    ts: +new Date,
                    timeStamp: e.timeStamp
                };
                switch (e.type) {
                case l.MSG.MetaLoaded:
                    this.metaDataLoaded = !0;
                    break;
                case l.MSG.Error:
                    t.detail = this.el && this.el.error || {
                        code: e.code
                    },
                    t.detail.reason = {
                        1 : "MEDIA_ERR_ABORTED",
                        2 : "MEDIA_ERR_NETWORK",
                        3 : "MEDIA_ERR_DECODE",
                        4 : "MEDIA_ERR_SRC_NOT_SUPPORTED"
                    } [t.detail.code];
                    break;
                case l.MSG.Ended:
                    this.pause(),
                    this.playState = c.PlayStates.STOP;
                    break;
                case "durationchange":
                    0 != this.videoHeight() && (t.type = l.MSG.Resize);
                    break;
                case l.MSG.Playing:
                    this.playState = e.type.toUpperCase();
                    break;
                case l.MSG.Pause:
                    this.playState = c.PlayStates.PAUSED;
                    break;
                case l.MSG.Seeking:
                case l.MSG.Seeked:
                    this.seekState = e.type.toUpperCase()
                }
                e.type,
                this.pub(t)
            },
            t.prototype.videoWidth = function() {
                return this.el.videoWidth
            },
            t.prototype.videoHeight = function() {
                return this.el.videoHeight
            },
            t.prototype.width = function(e) {
                if (!e) return this.el.width;
                this.el.style.width = e
            },
            t.prototype.height = function(e) {
                if (!e) return this.el.height;
                this.el.style.height = e
            },
            t.prototype.play = function() {
                this.el.play()
            },
            t.prototype.togglePlay = function() {
                var e = this.options.src.indexOf(".m3u8") > -1;
                this.options.live && e && this.playState == c.PlayStates.IDLE && !this.metaDataLoaded && 10 != u.IOS_VERSION ? this.player.load() : this.paused() ? this.play() : this.pause()
            },
            t.prototype.pause = function() {
                this.el.pause()
            },
            t.prototype.stop = function() {
                this.el.pause(),
                this.el.currentTime = 0
            },
            t.prototype.paused = function() {
                return this.el.paused
            },
            t.prototype.buffered = function() {
                return this.el.buffered.length >= 1 ? this.el.buffered.end(this.el.buffered.length - 1) : 0
            },
            t.prototype.currentTime = function(e) {
                return void 0 === e ? this.el.currentTime: this.el.currentTime = e
            },
            t.prototype.duration = function() {
                return this.el.duration || 0
            },
            t.prototype.mute = function(e) {
                return void 0 === e ? this.el.muted: (this.volume(e ? 0 : this.__lastVol || 1), this.el.muted = e)
            },
            t.prototype.volume = function(e) {
                return void 0 === e ? this.el.volume: (e < 0 && (e = 0), e > 1 && (e = 1), 0 != e && (this.__lastVol = e), this.el.muted = 0 == e, this.options.volume = e, this.el.volume = e)
            },
            t.prototype.fullscreen = function(e) {
                return a.doFullscreen(this.player, e, this.owner)
            },
            t.prototype.load = function(e, t) {
                this.pub({
                    type: l.MSG.Load,
                    src: this,
                    ts: +new Date,
                    detail: {
                        src: e,
                        type: t
                    }
                });
                var n = e.indexOf(".m3u8") > -1 || t == a.VideoType.M3U8,
                i = e.indexOf(".flv") > -1;
                if (!u.IS_ENABLED_MSE || !n && !i || u.IS_X5TBS && this.player.options.x5_player || n && u.IS_MAC && u.IS_SAFARI && !u.IS_IOS) this.__type = t,
                this.el.src = e;
                else {
                    var o = this;
                    n ? (this.__type = a.VideoType.M3U8, void 0 === window.Hls ? s.loadScript(a.CDNPath + "libs/hls.js",
                    function() {
                        o.__hlsLoaded.call(o, e)
                    }) : this.__hlsLoaded(e)) : i && (this.__type = a.VideoType.FLV, void 0 === window.flvjs ? s.loadScript(a.CDNPath + "libs/flv.js",
                    function() {
                        o.__flvLoaded.call(o, e)
                    }) : this.__flvLoaded(e))
                }
            },
            t.prototype.playing = function() {
                return ! this.el.paused
            },
            t.prototype.type = function() {
                return this.__type
            },
            t
        } (r.
    default));
        t.
    default = p
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o(e, t) {
            return t + "_" + e
        }
        function r(e, t) {
            return t.guid && -1 == String(t.guid).indexOf("_") ? e + "_" + t.guid: t.guid
        }
        t.__esModule = !0;
        var s = i(n(2)),
        a = i(n(3)),
        l = i(n(4)),
        c = i(n(1)),
        u = function() {
            function e(t, n) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, e),
                this.name = n,
                this.player = t,
                this.options = t.options,
                this.fnCache = {},
                this.guid = a.guid()
            }
            return e.prototype.createEl = function(e, t, n) {
                return this.el = s.createEl(e, t, n)
            },
            e.prototype.render = function(e) {
                return e && this.el && (this.owner = e, e.appendChild(this.el), this.setup()),
                this.el
            },
            e.prototype.on = function(e, t, n) {
                "string" == typeof e && (n = t, t = e, e = this.el),
                c.IS_MOBILE && "click" == t && (t = "touchend"),
                this.cbs = this.cbs || {};
                var i = r(this.guid, n),
                l = !i,
                u = i && !this.fnCache[i];
                return l || u ? (n = a.bind(this, n, this.guid), this.fnCache[n.guid] = n, i = n.guid) : n = this.fnCache[i],
                s.on(e, t, n),
                this.cbs[o(i, t)] = {
                    guid: i,
                    el: e,
                    type: t
                },
                n
            },
            e.prototype.off = function(e, t, n) {
                "string" == typeof e && (n = t, t = e, e = this.el),
                c.IS_MOBILE && "click" == t && (t = "touchend");
                var i = r(this.guid, n);
                this.fnCache[i] && (n = this.fnCache[i]),
                s.off(e, t, n),
                delete this.cbs[o(i, t)]
            },
            e.prototype.pub = function(e) {
                var t = this;
                setTimeout(function() {
                    l.pub(e, t.player)
                },
                0)
            },
            e.prototype.sub = function(e, t, n) {
                l.sub(e, t, n, this.player)
            },
            e.prototype.unsub = function(e, t, n) {
                l.unsub(e, t, n, this.player)
            },
            e.prototype.handleMsg = function() {},
            e.prototype.setup = function() {},
            e.prototype.destroy = function() {
                if (this.handleMsg && this.unsub("*", "*", this.handleMsg), this.cbs) {
                    for (var e in this.cbs) if (this.cbs.hasOwnProperty(e)) {
                        var t = this.cbs[e];
                        s.off(t.el, t.type, this.fnCache[t.guid]),
                        delete this.cbs[e]
                    }
                    this.fnCache = null,
                    this.cbs = null;
                    try {
                        this.el.parentNode.removeChild(this.el)
                    } catch(e) {}
                }
            },
            e
        } ();
        t.
    default = u
    },
    function(e, t) {
        t.__esModule = !0;
        t.PlayStates = {
            IDLE: "IDLE",
            PLAYING: "PLAYING",
            PAUSED: "PAUSED",
            STOP: "STOP"
        },
        t.SeekStates = {
            IDLE: "IDLE",
            SEEKING: "SEEKING",
            SEEKED: "SEEKED"
        },
        t.ControlsStates = {
            DEFAULT: "default",
            NONE: "none",
            SYSTEM: ""
        }
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        r = n(4),
        s = i(n(2)),
        a = i(n(3)),
        l = i(n(12)),
        c = i(n(1)),
        u = function(e) {
            function t(n) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "FlashVideo")),
                o = "vcpFlashCB_" + i.guid;
                return i.__flashCB = o,
                window[o] || (window[o] = function(e, t) {
                    t = t && t[0];
                    var n = window[o].fnObj && window[o].fnObj[t.objectID];
                    n && n(e, t)
                },
                window[o].fnObj = {}),
                i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(e) {
                this.__timebase = +new Date;
                var t = "//imgcache.qq.com/open/qcloud/video/player/release/QCPlayer.swf",
                n = (this.player.options, "opaque"),
                i = "obj_vcplayer_" + this.player.guid,
                o = this.__flashCB;
                this.__id = i;
                var r = s.createEl("div", {
                    class: "vcp-video"
                });
                r.innerHTML = '\n\t\t<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="" id="' + i + '" width="100%" height="100%">\n            <param name="movie"  value="' + t + '" />\n            <param name="quality" value="autohigh" />\n            <param name="swliveconnect" value="true" />\n            <param name="allowScriptAccess" value="always" />\n            <param name="bgcolor" value="#000" />\n            <param name="allowFullScreen" value="true" />\n            <param name="wmode" value="' + n + '" />\n            <param name="FlashVars" value="cbName=' + o + '" />\n\n            <embed src="' + t + '" width="100%" height="100%" name="' + i + '"\n                   quality="autohigh"\n                   bgcolor="#000"\n                   align="middle" allowFullScreen="true"\n                   allowScriptAccess="always"\n                   type="application/x-shockwave-flash"\n                   swliveconnect="true"\n                   wmode="' + n + '"\n                   FlashVars="cbName=' + o + '"\n                   pluginspage="http://www.macromedia.com/go/getflashplayer" >\n            </embed>\n        </object>\n\t\t',
                this.container = r,
                this.owner = e,
                this.owner.appendChild(r),
                this.cover = s.createEl("div", {
                    class: "vcp-pre-flash"
                }),
                this.owner.appendChild(this.cover),
                window[this.__flashCB].fnObj[this.__id] = a.bind(this, this.notify)
            },
            t.prototype.setup = function() {
                this.on("error", this.notify),
                this.playState = l.PlayStates.IDLE,
                this.seekState = l.SeekStates.IDLE,
                this.metaDataLoaded = !1
            },
            t.prototype.doPolling = function() {
                this.options.live || (clearInterval(this.__timer), this.__timer = setInterval(this.interval.bind(this), 1e3))
            },
            t.prototype.endPolling = function() {
                clearInterval(this.__timer)
            },
            t.prototype.interval = function() {
                var e;
                try {
                    e = this.el.getState()
                } catch(e) {
                    return void this.endPolling()
                }
                if (this.__m3u8) {
                    var t = this.currentTime() + e.bufferLength;
                    this.__buffered !== t && (this.__buffered = t, this.pub({
                        type: r.MSG.Progress,
                        src: this,
                        ts: +new Date
                    })),
                    this.__buffered >= this.duration() && this.endPolling()
                } else this.__rtmp || (this.__bytesloaded != e.bytesLoaded && (this.__bytesloaded = e.bytesLoaded, this.pub({
                    type: r.MSG.Progress,
                    src: this,
                    ts: +new Date
                })), this.__bytesloaded >= this.__bytesTotal && this.endPolling())
            },
            t.prototype.destroy = function() {
                delete window[this.__flashCB].fnObj[this.__id],
                this.endPolling(),
                e.prototype.destroy.call(this)
            },
            t.prototype.notify = function(e, t) {
                var n = {
                    type: e,
                    ts: +new Date
                };
                try {
                    switch (this.options.debug && this.pub({
                        type: n.type,
                        src: this,
                        ts: n.ts,
                        detail: a.extend({
                            debug: !0
                        },
                        t)
                    }), n.type) {
                    case "ready":
                        if (this.el = function(e) {
                            return window.document[e] ? window.document[e] : -1 != navigator.appName.indexOf("Microsoft Internet") ? document.getElementById(e) : document.embeds && document.embeds[e] ? document.embeds[e] : void 0
                        } (this.__id), this.setup(), c.IS_FIREFOX) {
                            i = this;
                            setTimeout(function() {
                                i.el.setAutoPlay( !! i.options.autoplay),
                                i.__timebase = new Date - t.time,
                                i.load(i.options.src)
                            },
                            0)
                        } else this.el.setAutoPlay( !! this.options.autoplay),
                        this.__timebase = new Date - t.time,
                        this.load(this.options.src);
                        return;
                    case "metaData":
                        n.type = r.MSG.MetaLoaded,
                        this.__videoWidth = t.videoWidth,
                        this.__videoHeight = t.videoHeight,
                        this.__duration = t.duration,
                        this.__bytesTotal = t.bytesTotal,
                        this.__prevPlayState = null,
                        this.__m3u8 = t.type === a.VideoType.M3U8,
                        this.__rtmp = t.type === a.VideoType.RTMP,
                        this.__type = t.type,
                        this.__metaloaded = !0,
                        this.metaDataLoaded = !0,
                        this.doPolling();
                        var i;
                        if (! (i = this).cover) break;
                        setTimeout(function() {
                            i.cover && (i.owner.removeChild(i.cover), i.cover = null)
                        },
                        500);
                        break;
                    case "playState":
                        this.playState = t.playState,
                        t.playState == l.PlayStates.PLAYING ? (this.__playing = !0, this.__stopped = !1, n.type = r.MSG.Play) : t.playState == l.PlayStates.PAUSED ? (this.__playing = !1, this.__stopped = !1, n.type = r.MSG.Pause) : t.playState == l.PlayStates.STOP ? (this.__playing = !1, this.__stopped = !0, n.type = r.MSG.Ended, this.__prevPlayState = null, this.options.live && (this.metaDataLoaded = !1)) : t.playState == l.PlayStates.IDLE && (this.__playing = !1, this.__stopped = !0, n.type = r.MSG.Ended);
                        break;
                    case "seekState":
                        if (this.seekState = t.seekState, !this.__metaloaded) return;
                        if (t.seekState == l.SeekStates.SEEKING) n.type = r.MSG.Seeking;
                        else {
                            if (t.seekState != l.SeekStates.SEEKED) return;
                            this.__m3u8 || this.options.live || t.playState != l.PlayStates.STOP || (this.play(), this.__prevPlayState = t.playState),
                            n.type = r.MSG.Seeked
                        }
                        break;
                    case "netStatus":
                        this.options.live || ("NetStream.Buffer.Full" == t.code ? (this.__prevPlayState == l.PlayStates.PAUSED || (this.__prevPlayState, l.PlayStates.STOP), this.__prevPlayState = null) : t.code),
                        "NetConnection.Connect.Closed" == t.code && this.options.src.indexOf("rtmp://") > -1 && (this.playState == l.PlayStates.STOP ? (n.type = "error", t = {
                            code: 13,
                            reason: t.code
                        }) : (n.type = "error", t = {
                            code: 1002,
                            reason: t.code
                        })),
                        t.code;
                        break;
                    case "mediaTime":
                        this.__videoWidth = t.videoWidth,
                        this.__videoHeight = t.videoHeight,
                        n.type = r.MSG.TimeUpdate;
                        break;
                    case "error":
                        if ("NetStream.Seek.InvalidTime" == t.code) return this.currentTime(t.details),
                        !1;
                        "NetStream.Play.StreamNotFound" == t.code && this.pub({
                            type: "netStatus",
                            src: this,
                            ts: n.ts,
                            detail: t
                        });
                        var o = isNaN(parseInt(t.code)) ? 1002 : t.code,
                        s = isNaN(parseInt(t.code)) ? t.code: t.msg,
                        u = s.match(/#(\d+)/);
                        u && u[1] && (o = u[1]),
                        t = {
                            code: o,
                            reason: s || ""
                        },
                        this.metaDataLoaded = !1
                    } ! ("printLog" == e || "canPlay" == e) && this.pub({
                        type: n.type,
                        src: this,
                        ts: n.ts,
                        detail: t
                    })
                } catch(t) {
                    a.console.error(e + " " + n.type, t)
                }
            },
            t.prototype.handleMsg = function(e) {},
            t.prototype.videoWidth = function() {
                return this.__videoWidth
            },
            t.prototype.videoHeight = function() {
                return this.__videoHeight
            },
            t.prototype.width = function(e) {
                return void 0 === e ? this.el && this.el.width: (e = "100%", this.el && (this.el.width = e))
            },
            t.prototype.height = function(e) {
                return void 0 === e ? this.el && this.el.height: (e = "100%", this.el && (this.el.height = e))
            },
            t.prototype.playerResume = function() {
                this.options.isLive ? this.player.load() : this.el.playerResume()
            },
            t.prototype.play = function() {
                this.playerResume()
            },
            t.prototype.togglePlay = function() {
                this.metaDataLoaded ? this.playState == l.PlayStates.PAUSED ? this.playerResume() : this.playState == l.PlayStates.PLAYING ? this.el.playerPause() : this.playState == l.PlayStates.STOP ? (this.currentTime(0), this.playerResume()) : this.el.playerPlay() : this.player.load()
            },
            t.prototype.pause = function() {
                this.el.playerPause()
            },
            t.prototype.stop = function() {
                this.el.playerStop()
            },
            t.prototype.paused = function() {
                return ! this.__playing
            },
            t.prototype.buffered = function() {
                var e;
                return this.__m3u8 ? this.__buffered || 0 : (e = (this.__bytesloaded || 0) / (this.__bytesTotal || 1), this.duration() * e)
            },
            t.prototype.currentTime = function(e) {
                if (void 0 === e) return this.el.getPosition();
                this.el.playerSeek(e)
            },
            t.prototype.duration = function() {
                return this.__duration
            },
            t.prototype.mute = function(e) {
                if (void 0 === e) return 0 == this.volume();
                this.volume(e ? 0 : this.__lastVol || 1)
            },
            t.prototype.volume = function(e) {
                if (void 0 === e) return this.el && this.el.getState().volume;
                this.el && this.el.playerVolume(e),
                0 != e && (this.__lastVol = e),
                this.options.volume = e,
                this.pub({
                    type: r.MSG.VolumeChange,
                    src: this,
                    ts: +new Date
                })
            },
            t.prototype.fullscreen = function(e) {
                return a.doFullscreen(this.player, e, this.owner)
            },
            t.prototype.load = function(e, t) {
                this.pub({
                    type: r.MSG.Load,
                    src: this,
                    ts: +new Date,
                    detail: {
                        src: e,
                        type: t
                    }
                }),
                this.el && this.el.playerLoad(e)
            },
            t.prototype.playing = function() {
                return this.el && this.el.getState && this.el.getState().playState === l.PlayStates.PLAYING
            },
            t.prototype.type = function() {
                return this.__type
            },
            t.prototype.state = function() {
                return this.playState
            },
            t
        } (o.
    default);
        t.
    default = u
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        t.__esModule = !0;
        var r = o(n(11)),
        s = o(n(15)),
        a = o(n(16)),
        l = n(17),
        c = o(n(18)),
        u = o(n(19)),
        p = o(n(20)),
        h = o(n(21)),
        d = n(4),
        f = i(n(2)),
        y = i(n(3)),
        v = i(n(1)),
        m = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Panel"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.createEl("div", {
                    class: "vcp-controls-panel"
                }),
                this.hide(),
                this.el.appendChild(f.createEl("div", {
                    class: "vcp-panel-bg"
                })),
                this.isDisable = !1,
                this.playToggle = new s.
            default(this.player),
                this.playToggle.render(this.el),
                this.timelabel = new u.
            default(this.player),
                this.timelabel.render(this.el),
                this.timeline = new c.
            default(this.player),
                this.timeline.render(this.el),
                this.fullscreen = new a.
            default(this.player),
                this.fullscreen.render(this.el),
                v.IS_MOBILE || (this.volume = new p.
            default(this.player), this.volume.render(this.el)),
                this.options.videoSource && this.options.videoSource.definitions.length > 1 && !v.IS_MOBILE && (this.claritySwitcher = new h.
            default(this.player), this.claritySwitcher.render(this.el)),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                var e = y.bind(this, this.handleMsg);
                this.sub(l.MSG.Changing, this.volume, e),
                this.sub(l.MSG.Changed, this.timeline.progress, e),
                this.sub(d.MSG.TimeUpdate, this.player.video, e),
                this.sub(d.MSG.Progress, this.player.video, e),
                this.sub(d.MSG.MetaLoaded, this.player.video, e),
                this.sub(d.MSG.Pause, this.player.video, e),
                this.sub(d.MSG.Play, this.player.video, e),
                this.sub(d.MSG.Ended, this.player.video, e)
            },
            t.prototype.handleMsg = function(e) {
                switch (e.type) {
                case d.MSG.MetaLoaded:
                    this.timeline.percent(this.player.percent()),
                    this.timeline.buffered(this.player.buffered()),
                    this.player.volume(void 0 === this.options.volume ? .5 : this.options.volume),
                    !this.options.autoplay && this.show();
                    break;
                case d.MSG.TimeUpdate:
                    this.timeline.scrubbing || this.timeline.percent(this.player.percent());
                    break;
                case d.MSG.Pause:
                    this.show();
                    break;
                case d.MSG.Play:
                    break;
                case d.MSG.Progress:
                    this.timeline.buffered(this.player.buffered());
                    break;
                case l.MSG.Changed:
                    e.src === this.timeline.progress && this.player.percent(this.timeline.percent());
                    break;
                case d.MSG.Ended:
                    this.show()
                }
            },
            t.prototype.toggle = function() {
                f.hasClass(this.el, "show") ? this.hide() : this.show()
            },
            t.prototype.toggleDisable = function() {
                this.isDisable = !this.isDisable
            },
            t.prototype.show = function() {
                if (this.isDisable) return ! 1;
                this.options.onPanelShow && this.options.onPanelShow(),
                f.hasClass(this.el, "hide") && (f.removeClass(this.el, "hide"), f.addClass(this.el, "show"))
            },
            t.prototype.hide = function() {
                this.options.onPanelHide && this.options.onPanelHide(),
                f.removeClass(this.el, "show"),
                f.addClass(this.el, "hide")
            },
            t
        } (r.
    default);
        t.
    default = m
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        r = (i(n(2)), i(n(4)), i(n(3)), i(n(12)),
        function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "PlayToggle"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.createEl("div", {
                    class: "vcp-playtoggle"
                }),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.on("click", this.onClick)
            },
            t.prototype.onClick = function() {
                this.player.togglePlay()
            },
            t.prototype.handleMsg = function(e) {
                console.log("@" + this.name, e)
            },
            t
        } (o.
    default));
        t.
    default = r
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        r = (i(n(2)), i(n(4)), i(n(3))),
        s = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "FullscreenToggle"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.createEl("div", {
                    class: "vcp-fullscreen-toggle"
                }),
                window.fsApi = r.FullscreenApi,
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.on("click", this.onClick)
            },
            t.prototype.onClick = function() {
                this.player.fullscreen(!this.player.fullscreen())
            },
            t.prototype.handleMsg = function(e) {
                console.log(t.name, e)
            },
            t
        } (o.
    default);
        t.
    default = s
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0,
        t.MSG = void 0;
        var o = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        r = i(n(2)),
        s = (i(n(4)), i(n(3)), t.MSG = {
            Changing: "sliderchanging",
            Changed: "sliderchanged"
        }),
        a = function(e) {
            function t(n, i) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Slider"));
                return o.vertical = i || !1,
                o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.isMoving = !1,
            t.prototype.render = function(t, n) {
                var i = this.vertical ? "vcp-slider-vertical": "vcp-slider";
                return this.createEl("div", {
                    class: i
                }),
                this.track = r.createEl("div", {
                    class: "vcp-slider-track"
                }),
                this.thumb = r.createEl("div", {
                    class: "vcp-slider-thumb"
                }),
                this.progress = r.createEl("div", {
                    class: "vcp-slider-progress"
                }),
                this.el.appendChild(this.track),
                this.el.appendChild(this.progress),
                this.el.appendChild(this.thumb),
                this.enabled = void 0 === n || n,
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.enabled && (this.ownerDoc = document.body.ownerDocument, this.on("mousedown", this.mousedown), this.on("touchstart", this.mousedown))
            },
            t.prototype.handleMsg = function(e) {},
            t.prototype.mousedown = function(e) {
                return e.preventDefault && e.preventDefault(),
                this.pos = r.findElPosition(this.el),
                this.on(this.ownerDoc, "mouseup", this.mouseup),
                this.on(this.ownerDoc, "mousemove", this.mousemove),
                this.on(this.ownerDoc, "touchend", this.mouseup),
                this.on(this.ownerDoc, "touchmove", this.mousemove),
                this.isMoving = !0,
                this.mousemove(e),
                !1
            },
            t.prototype.mouseup = function(e) {
                e.target || e.srcElement;
                this.off(this.ownerDoc, "mouseup", this.mouseup),
                this.off(this.ownerDoc, "mousemove", this.mousemove),
                this.off(this.ownerDoc, "touchend", this.mouseup),
                this.off(this.ownerDoc, "touchmove", this.mousemove),
                this.isMoving = !1,
                this.pub({
                    type: s.Changed,
                    src: this,
                    private: !0
                })
            },
            t.prototype.mousemove = function(e) {
                var t = r.getPointerPosition(this.el, e, this.pos);
                this.vertical ? (this.__percent = 1 - t.y, this.thumb.style.top = 100 * this.__percent + "%") : (this.__percent = t.x, this.progress.style.width = 100 * this.__percent + "%", this.thumb.style.left = 100 * this.__percent + "%"),
                this.__percent = Number(this.__percent.toFixed(3)),
                this.pub({
                    type: s.Changing,
                    src: this,
                    private: !0
                })
            },
            t.prototype.percent = function(e) {
                if (void 0 === e || null === e) return this.__percent;
                this.__percent = e,
                this.vertical ? this.thumb.style.top = 100 * this.__percent + "%": (this.progress.style.width = 100 * this.__percent + "%", this.thumb.style.left = 100 * this.__percent + "%")
            },
            t
        } (o.
    default);
        t.
    default = a
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        t.__esModule = !0;
        var r = n(17),
        s = o(r),
        a = o(n(11)),
        l = (i(n(2)), i(n(3))),
        c = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Timeline"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.enabled = !this.options.live,
                this.createEl("div", {
                    class: "vcp-timeline"
                }),
                this.progress = new s.
            default(this.player, !1),
                this.progress.render(this.el, this.enabled),
                this.track = this.progress.track,
                this.enabled || (this.el.style.display = "none"),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.enabled && (this.sub(r.MSG.Changing, this.progress, l.bind(this, this.handleMsg)), this.sub(r.MSG.Changed, this.progress, l.bind(this, this.handleMsg)))
            },
            t.prototype.handleMsg = function(e) {
                e.type === r.MSG.Changing ? (this.scrubbing = !0, this.syncLabel(this.percent())) : e.type === r.MSG.Changed && (this.scrubbing = !1)
            },
            t.prototype.syncLabel = function(e) {
                var t = this.player.duration();
                e = Math.min(e, 1);
                var n = "";
                t && (n = l.convertTime(e * t) + " / " + l.convertTime(t)),
                this.pub({
                    type: "timelabel",
                    src: "timeline",
                    label: n,
                    private: !0
                })
            },
            t.prototype.buffered = function(e) {
                this.enabled && (e = Math.min(e, 1), this.__buffered = e, this.track.style.width = 100 * e + "%")
            },
            t.prototype.percent = function(e) {
                if (this.enabled) return void 0 === e ? this.progress.percent() || 0 : (e = Math.min(e, 1), this.syncLabel(e), this.__buffered < e && this.buffered(this.player.buffered()), this.progress.percent(e))
            },
            t
        } (a.
    default);
        t.
    default = c
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        t.__esModule = !0;
        o(n(17));
        var r = o(n(11)),
        s = (i(n(2)), i(n(3))),
        a = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Timelabel"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.createEl("span", {
                    class: "vcp-timelabel"
                }),
                this.options.isLive && (this.el.style.display = "none"),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.sub("timelabel", "timeline", s.bind(this, this.handleMsg))
            },
            t.prototype.handleMsg = function(e) {
                this.el.innerHTML = e.label
            },
            t
        } (r.
    default);
        t.
    default = a
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        t.__esModule = !0;
        var r = n(17),
        s = o(r),
        a = o(n(11)),
        l = i(n(2)),
        c = i(n(3)),
        u = n(4),
        p = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Volume"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.__isInside = !1,
            t.prototype.__addVolumeEnterEvent = function() {
                console.log(this),
                this.__isInside = !0,
                this.bg.style.display = "block",
                this.volume.el.style.display = "block"
            },
            t.prototype.__addVolumeLeaveEvent = function() {
                var e = this;
                if (this.__isInside = !1, this.volume.isMoving) return setTimeout(function() {
                    if (e.__isInside) return ! 1;
                    e.__addVolumeLeaveEvent()
                },
                100);
                this.bg.style.display = "none",
                this.volume.el.style.display = "none"
            },
            t.prototype.render = function(t) {
                var n = this;
                return this.createEl("div", {
                    class: "vcp-volume"
                }),
                this.bg = l.createEl("div", {
                    class: "vcp-volume-bg"
                }),
                this.el.appendChild(this.bg),
                this.volume = new s.
            default(this.player, !0),
                this.volume.render(this.el),
                this.track = this.volume.track,
                this.icon = l.createEl("span", {
                    class: "vcp-volume-icon"
                }),
                this.el.appendChild(this.icon),
                this.el.addEventListener("mouseenter",
                function() {
                    return n.__addVolumeEnterEvent()
                }),
                this.el.addEventListener("mouseleave",
                function() {
                    return n.__addVolumeLeaveEvent()
                }),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.sub(r.MSG.Changing, this.volume, c.bind(this, this.handleMsg)),
                this.sub(r.MSG.Changed, this.volume, c.bind(this, this.handleMsg)),
                this.sub(u.MSG.VolumeChange, this.player.video, c.bind(this, this.handleMsg)),
                this.on(this.icon, "click", this.toggleMute)
            },
            t.prototype.handleMsg = function(e) {
                switch (e.type) {
                case r.MSG.Changing:
                    this.syncTrack(this.percent());
                    break;
                case r.MSG.Changed:
                    this.percent(this.percent());
                    break;
                case u.MSG.VolumeChange:
                    var t = this.player.volume();
                    this.syncTrack(t),
                    0 == t ? this.syncMute(!0) : t > 0 && this.__muted && this.syncMute(!1)
                }
            },
            t.prototype.toggleMute = function(e) {
                var t = !this.player.mute();
                this.player.mute(t)
            },
            t.prototype.syncMute = function(e) {
                e ? l.addClass(this.el, "vcp-volume-muted") : l.removeClass(this.el, "vcp-volume-muted"),
                this.__muted = e
            },
            t.prototype.syncTrack = function(e) {
                this.track.style.height = 100 * e + "%",
                this.volume.percent(1 - e)
            },
            t.prototype.percent = function(e) {
                return void 0 === e ? 1 - this.volume.percent() || 0 : (this.player.volume(e), e)
            },
            t
        } (a.
    default);
        t.
    default = p
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        r = i(n(2)),
        s = (i(n(3)), {
            od: "1080p",
            hd: "720p",
            sd: "360p"
        }),
        a = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "ClaritySwitcher"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                this.show = !1,
                this.createEl("div", {
                    class: "vcp-clarityswitcher"
                }),
                this.current = r.createEl("a", {
                    class: "vcp-vertical-switcher-current"
                }),
                this.container = r.createEl("div", {
                    class: "vcp-vertical-switcher-container"
                }),
                this.items = [],
                this.currentItem = "";
                var n = this.options.videoSource;
                this.current.innerHTML = s[n.curDef],
                this.el.appendChild(this.current);
                for (var i = 0; i < n.definitions.length; i++) {
                    var o = r.createEl("a", {
                        class: "vcp-vertical-switcher-item"
                    });
                    o.innerHTML = s[n.definitions[i]],
                    n.definitions[i] == n.curDef && (o.classList.add("current"), this.currentItem = o),
                    o.setAttribute("data-def", n.definitions[i]),
                    this.items.push(o),
                    this.container.appendChild(o)
                }
                return this.el.appendChild(this.container),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.on("click", this.onClick),
                this.on("mouseenter", this.onMouseEnter),
                this.on("mouseleave", this.onMouseLeave)
            },
            t.prototype.onClick = function(e) {
                var t = e.target.getAttribute("data-def");
                t ? (this.current.innerHTML = s[t], this.currentItem.classList.remove("current"), e.target.classList.add("current"), this.currentItem = e.target, this.player.switchClarity(t)) : this.show
            },
            t.prototype.onMouseLeave = function() {
                this.container.style.display = "none",
                this.show = !1
            },
            t.prototype.onMouseEnter = function() {
                this.container.style.display = "block",
                this.show = !0
            },
            t
        } (o.
    default);
        t.
    default = a
    },
    function(e, t, n) {
        t.__esModule = !0;
        var i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (n(1)),
        r = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "BigPlay"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.createEl("div", {
                    class: "vcp-bigplay"
                }),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.on("click", this.onClick)
            },
            t.prototype.onClick = function() {
                var e = this.player.video;
                if (o.IS_MOBILE && !e.paused()) return this.player.panel && this.player.panel.toggle();
                this.player.togglePlay()
            },
            t.prototype.handleMsg = function(e) {
                console.log("@" + this.name, e)
            },
            t
        } (i.
    default);
        t.
    default = r
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ?
        function(e) {
            return void 0 === e ? "undefined": _typeof(e)
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": void 0 === e ? "undefined": _typeof(e)
        },
        r = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        s = i(n(2)),
        a = i(n(3)),
        l = (i(n(1)), n(4)),
        c = function(e) {
            function t(n) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Poster"));
                return i.options.poster && "object" == o(i.options.poster) ? i.poster = i.options.poster: "string" == typeof i.options.poster ? i.poster = {
                    src: i.options.poster
                }: i.poster = {},
                i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                this.createEl("div", {
                    class: "vcp-poster"
                }),
                this.hide();
                var n = this.poster;
                if (n) {
                    this.pic = s.createEl("img", {
                        class: "vcp-poster-pic"
                    });
                    switch (this.poster.style) {
                    case "stretch":
                        s.addClass(this.pic, "stretch");
                        break;
                    case "cover":
                        s.addClass(this.pic, "cover");
                        break;
                    default:
                        s.addClass(this.pic, "default")
                    }
                    this.el.appendChild(this.pic)
                }
                return e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {
                this.on("click", this.onClick),
                this.sub(l.MSG.Load, this.player.video, a.bind(this, this.handleMsg)),
                this.sub(l.MSG.MetaLoaded, this.player.video, a.bind(this, this.handleMsg)),
                this.sub(l.MSG.Play, this.player.video, a.bind(this, this.handleMsg)),
                this.sub(l.MSG.Pause, this.player.video, a.bind(this, this.handleMsg)),
                this.sub(l.MSG.Ended, this.player.video, a.bind(this, this.handleMsg)),
                this.sub(l.MSG.Error, this.player.video, a.bind(this, this.handleMsg))
            },
            t.prototype.onClick = function() {
                this.pub({
                    type: "click",
                    src: this
                })
            },
            t.prototype.handleMsg = function(e) {
                switch (e.type) {
                case l.MSG.Load:
                    this.__loaded = !1,
                    this.setPoster(this.poster.start);
                    break;
                case l.MSG.MetaLoaded:
                    if (this.__loaded = !0, !this.player.playing()) break;
                    this.hide();
                case l.MSG.Play:
                    if (!this.__loaded) break;
                    this.hide();
                    break;
                case l.MSG.Pause:
                    if (!this.__loaded) break; ! 0 === this.options.coverpic_pause && this.setPoster(this.poster.pause);
                    break;
                case l.MSG.Ended:
                case l.MSG.Error:
                    if (!this.__loaded) break
                }
            },
            t.prototype.setPoster = function(e) {
                if (e = e || this.poster.src) {
                    this.__preload && (this.__preload.onload = null),
                    this.__preload = new Image;
                    var t = this.__preload;
                    this.hide();
                    var n = this;
                    t.onload = function() {
                        if (n.pic.src = t.src, n.show(), !a.supportStyle("transform")) {
                            if ("stretch" == n.poster.style) return;
                            var e = "cover" == n.poster.style ? n.options.width / (t.width / t.height) : t.height,
                            i = "-" + n.options.width / 2 + "px",
                            o = "-" + e / 2 + "px";
                            n.pic.style.cssText = "left: 50%; top: 50%; margin-left: " + i + "; margin-top: " + o + ";"
                        }
                    },
                    t.src = e
                }
            },
            t.prototype.toggle = function(e) {
                clearTimeout(this.__tid);
                var t = this;
                this.__tid = setTimeout(function() {
                    t.el.style.display = e
                },
                100)
            },
            t.prototype.hide = function() {
                this.__preload && (this.__preload.onload = null),
                this.toggle("none")
            },
            t.prototype.show = function() {
                this.toggle("block")
            },
            t
        } (r.
    default);
        t.
    default = c
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        r = (i(n(2)), i(n(4)), i(n(3)), {});
        r.Spinner = function() {
            function e(e, t) {
                var n, i = document.createElement(e || "div");
                for (n in t) i[n] = t[n];
                return i
            }
            function t(e) {
                for (var t = 1,
                n = arguments.length; n > t; t++) e.appendChild(arguments[t]);
                return e
            }
            function n(e, t, n, i) {
                var o = ["opacity", t, ~~ (100 * e), n, i].join("-"),
                r = .01 + n / i * 100,
                s = Math.max(1 - (1 - e) / t * (100 - r), e),
                a = l.substring(0, l.indexOf("Animation")).toLowerCase(),
                u = a && "-" + a + "-" || "";
                return p[o] || (c.insertRule("@" + u + "keyframes " + o + "{0%{opacity:" + s + "}" + r + "%{opacity:" + e + "}" + (r + .01) + "%{opacity:1}" + (r + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + s + "}}", c.cssRules.length), p[o] = 1),
                o
            }
            function i(e, t) {
                var n, i, o = e.style;
                if (t = t.charAt(0).toUpperCase() + t.slice(1), void 0 !== o[t]) return t;
                for (i = 0; i < u.length; i++) if (n = u[i] + t, void 0 !== o[n]) return n
            }
            function o(e, t) {
                for (var n in t) e.style[i(e, n) || n] = t[n];
                return e
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) void 0 === e[i] && (e[i] = n[i])
                }
                return e
            }
            function s(e, t) {
                return "string" == typeof e ? e: e[t % e.length]
            }
            function a(e) {
                this.opts = r(e || {},
                a.defaults, h)
            }
            var l, c, u = ["webkit", "Moz", "ms", "O"],
            p = {},
            h = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                scale: 1,
                corners: 1,
                color: "#000",
                opacity: .25,
                rotate: 0,
                direction: 1,
                speed: 1,
                trail: 100,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "50%",
                left: "50%",
                shadow: !1,
                hwaccel: !1,
                position: "absolute"
            };
            if (a.defaults = {},
            r(a.prototype, {
                spin: function(t) {
                    this.stop();
                    var n = this,
                    i = n.opts,
                    r = n.el = e(null, {
                        className: i.className
                    });
                    if (o(r, {
                        position: i.position,
                        width: 0,
                        zIndex: i.zIndex,
                        left: i.left,
                        top: i.top
                    }), t && t.insertBefore(r, t.firstChild || null), r.setAttribute("role", "progressbar"), n.lines(r, n.opts), !l) {
                        var s, a = 0,
                        c = (i.lines - 1) * (1 - i.direction) / 2,
                        u = i.fps,
                        p = u / i.speed,
                        h = (1 - i.opacity) / (p * i.trail / 100),
                        d = p / i.lines; !
                        function e() {
                            a++;
                            for (var t = 0; t < i.lines; t++) s = Math.max(1 - (a + (i.lines - t) * d) % p * h, i.opacity),
                            n.opacity(r, t * i.direction + c, s, i);
                            n.timeout = n.el && setTimeout(e, ~~ (1e3 / u))
                        } ()
                    }
                    return n
                },
                stop: function() {
                    var e = this.el;
                    return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0),
                    this
                },
                lines: function(i, r) {
                    function a(t, n) {
                        return o(e(), {
                            position: "absolute",
                            width: r.scale * (r.length + r.width) + "px",
                            height: r.scale * r.width + "px",
                            background: t,
                            boxShadow: n,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~ (360 / r.lines * u + r.rotate) + "deg) translate(" + r.scale * r.radius + "px,0)",
                            borderRadius: (r.corners * r.scale * r.width >> 1) + "px"
                        })
                    }
                    for (var c, u = 0,
                    p = (r.lines - 1) * (1 - r.direction) / 2; u < r.lines; u++) c = o(e(), {
                        position: "absolute",
                        top: 1 + ~ (r.scale * r.width / 2) + "px",
                        transform: r.hwaccel ? "translate3d(0,0,0)": "",
                        opacity: r.opacity,
                        animation: l && n(r.opacity, r.trail, p + u * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
                    }),
                    r.shadow && t(c, o(a("#000", "0 0 4px #000"), {
                        top: "2px"
                    })),
                    t(i, t(c, a(s(r.color, u), "0 0 1px rgba(0,0,0,.1)")));
                    return i
                },
                opacity: function(e, t, n) {
                    t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
                }
            }), "undefined" != typeof document) {
                c = function() {
                    var n = e("style", {
                        type: "text/css"
                    });
                    return t(document.getElementsByTagName("head")[0], n),
                    n.sheet || n.styleSheet
                } ();
                var d = o(e("group"), {
                    behavior: "url(#default#VML)"
                }); ! i(d, "transform") && d.adj ?
                function() {
                    function n(t, n) {
                        return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
                    }
                    c.addRule(".spin-vml", "behavior:url(#default#VML)"),
                    a.prototype.lines = function(e, i) {
                        function r() {
                            return o(n("group", {
                                coordsize: u + " " + u,
                                coordorigin: -c + " " + -c
                            }), {
                                width: u,
                                height: u
                            })
                        }
                        function a(e, a, l) {
                            t(h, t(o(r(), {
                                rotation: 360 / i.lines * e + "deg",
                                left: ~~a
                            }), t(o(n("roundrect", {
                                arcsize: i.corners
                            }), {
                                width: c,
                                height: i.scale * i.width,
                                left: i.scale * i.radius,
                                top: -i.scale * i.width >> 1,
                                filter: l
                            }), n("fill", {
                                color: s(i.color, e),
                                opacity: i.opacity
                            }), n("stroke", {
                                opacity: 0
                            }))))
                        }
                        var l, c = i.scale * (i.length + i.width),
                        u = 2 * i.scale * c,
                        p = -(i.width + i.length) * i.scale * 2 + "px",
                        h = o(r(), {
                            position: "absolute",
                            top: p,
                            left: p
                        });
                        if (i.shadow) for (l = 1; l <= i.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                        for (l = 1; l <= i.lines; l++) a(l);
                        return t(e, h)
                    },
                    a.prototype.opacity = function(e, t, n, i) {
                        var o = e.firstChild;
                        i = i.shadow && i.lines || 0,
                        o && t + i < o.childNodes.length && (o = o.childNodes[t + i], o = o && o.firstChild, (o = o && o.firstChild) && (o.opacity = n))
                    }
                } () : l = i(d, "animation")
            }
            return a
        } ();
        var s = function(e) {
            function t(n) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "Loading"))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                var n;
                this.createEl("div", {
                    class: "vcp-loading"
                });
                var i = (n = {
                    lines: 11,
                    length: 0,
                    width: 26,
                    radius: 48,
                    scale: .3,
                    corners: 10,
                    color: "#fff",
                    opacity: .3,
                    rotate: 0,
                    direction: 1,
                    speed: 1,
                    trail: 41,
                    fps: 20,
                    left: "47%",
                    shadow: !1,
                    position: "absolute",
                    zIndex: 2e9,
                    className: "vcp-spinner",
                    top: "50%"
                },
                _defineProperty(n, "left", "50%"), _defineProperty(n, "hwaccel", !0), _defineProperty(n, "position", "absolute"), n);
                new r.Spinner(i).spin(this.el);
                return e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {},
            t.prototype.handleMsg = function(e) {},
            t.prototype.show = function() {
                this.el.style.display = "block"
            },
            t.prototype.hide = function() {
                this.el.style.display = "none"
            },
            t
        } (o.
    default);
        t.
    default = s
    },
    function(e, t, n) {
        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        }
        t.__esModule = !0;
        var o, r = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (n(11)),
        s = (i(n(2)), i(n(4)), i(n(3))),
        a = {
            EnvError: "当前系统环境不支持播放该视频格式",
            EnvFlashError: "当前系统环境不支持播放该视频格式",
            VideoSourceError: "获取视频失败，请检查播放链接是否有效",
            NetworkError: "网络错误，请检查网络配置或者播放链接是否正确",
            VideoDecodeError: "视频解码错误",
            ArgumentError: "使用参数有误，请检查播放器调用代码",
            UrlEmpty: "请填写视频播放地址",
            FileProtocol: "请勿在file协议下使用播放器，可能会导致视频无法播放",
            LiveFinish: "直播已结束,请稍后再来",
            CrossDomainError: "无法加载视频文件，跨域访问被拒绝"
        },
        l = {
            FileProtocol: [10],
            ArgumentError: [11],
            UrlEmpty: [12],
            LiveFinish: [13],
            VideoSourceError: [1002, 2032],
            EnvError: [4, 5],
            NetworkError: [1001, 1, 2],
            VideoDecodeError: [3],
            CrossDomainError: [2048]
        },
        c = function(e) {
            function t(n) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                o = n;
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" !== (void 0 === t ? "undefined": _typeof(t)) && "function" != typeof t ? e: t
                } (this, e.call(this, n, "ErrorTips"));
                i.customTips = s.extend({},
                a, i.options.wording);
                for (var r in l) for (var c = 0; c < l[r].length; c++) {
                    var u = l[r][c];
                    i.customTips[u] = i.customTips[u] || i.customTips[r]
                }
                return i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, e),
            t.prototype.render = function(t) {
                return this.createEl("div", {
                    class: "vcp-error-tips"
                }),
                e.prototype.render.call(this, t)
            },
            t.prototype.setup = function() {},
            t.prototype.handleMsg = function(e) {},
            t.prototype.show = function(e) {
                if(o.poster) o.poster.hide();
                this.el.style.display = "block";
                var t = void 0;
                if ("string" == typeof e) t = e;
                else {
                    t = this.customTips[e.code] || e.reason
                }
                this.el.innerHTML = s.escapeHTML(t)
            },
            t.prototype.hide = function() {
                this.el.style.display = "none"
            },
            t.prototype.clear = function() {
                this.el.innerHTML = "",
                this.hide()
            },
            t
        } (r.
    default);
        t.
    default = c
    }])
});