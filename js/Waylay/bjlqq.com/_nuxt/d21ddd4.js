(window.webpackJsonp = window.webpackJsonp || []).push([[68, 9, 10, 13, 65, 66, 67], {
    523: function(t, e, n) {
        var content = n(527);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("1688523e", content, !0, {
            sourceMap: !1
        })
    },
    524: function(t, e, n) {
        var content = n(534);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("35d085c9", content, !0, {
            sourceMap: !1
        })
    },
    525: function(t, e, r) {
        "use strict";
        r.r(e);
        r(43),
        r(19),
        r(47),
        r(96),
        r(95),
        r(55),
        r(54),
        r(53);
        var o = {
            props: {
                list: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                tagStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                route: {
                    type: String,
                    default: "/movie/list"
                }
            },
            methods: {
                tagColor: function(i) {
                    var t = ["#f2119b", "#8a22f2", "#0261fa"]
                      , e = t[i] || t[2];
                    return function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }
                            ))
                        }
                        return t
                    }({
                        borderColor: e,
                        color: e
                    }, this.tagStyle)
                },
                getRoute: function(t) {
                    return this.route + "?title=" + t.name.substr(0, 20) + '&filter={"keywords":"' + t.name + '"}'
                }
            }
        };
        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        var c = o
          , d = (r(526),
        r(16))
          , component = Object(d.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "tag-list"
            }, [t._l(t.list, (function(n, r) {
                return n.name ? e("nuxt-link", {
                    key: r,
                    staticClass: "tag-item",
                    attrs: {
                        to: t.getRoute(n)
                    }
                }, [t._v("\n      " + t._s(n.name) + "\n    ")]) : e("div", {
                    key: r,
                    staticClass: "tag-item"
                })
            }
            )), t._v(" "), e("div")], 2)
        }
        ), [], !1, null, "63d56314", null);
        e.default = component.exports
    },
    526: function(t, e, n) {
        "use strict";
        n(523)
    },
    527: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".tag-list[data-v-63d56314]{display:flex;flex-wrap:wrap}.tag-list .tag-item[data-v-63d56314]{background-color:#f6588d;border-radius:.4rem;color:#fff;font-size:1.2rem;line-height:1;margin-right:1rem;margin-top:1rem;padding:.6rem 1.2rem;pointer-events:auto}.bg-color[data-v-63d56314]{background-color:#fff}.bg-gray[data-v-63d56314],.bg-gray-page[data-v-63d56314]{background-color:#f0f0f0}.bg-gray-page[data-v-63d56314]{min-height:100vh}", ""]),
        r.locals = {},
        t.exports = r
    },
    529: function(t, e, n) {
        var content = n(542);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("27c17be7", content, !0, {
            sourceMap: !1
        })
    },
    530: function(t, e, n) {
        var content = n(546);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("6c0bc40c", content, !0, {
            sourceMap: !1
        })
    },
    532: function(t, e, n) {
        "use strict";
        var r = n(7)
          , o = n(292);
        r({
            target: "String",
            proto: !0,
            forced: n(293)("fixed")
        }, {
            fixed: function() {
                return o(this, "tt", "", "")
            }
        })
    },
    533: function(t, e, n) {
        "use strict";
        n(524)
    },
    534: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".my-navbar{max-width:540px}.my-navbar>>>.van-nav-bar .van-icon{color:#242424}.my-navbar>>>.van-nav-bar__arrow{font-size:1.6rem;margin-right:.4rem}", ""]),
        r.locals = {},
        t.exports = r
    },
    535: function(t, e, n) {
        "use strict";
        n.r(e);
        n(532);
        var r = {
            props: {
                title: {
                    type: String,
                    default: ""
                },
                rightText: {
                    type: String,
                    default: ""
                },
                transparent: {
                    type: Boolean,
                    default: !1
                },
                fixed: {
                    type: Boolean,
                    default: !1
                },
                border: {
                    type: Boolean,
                    default: !0
                }
            },
            methods: {
                onClickLeft: function() {
                    this.$router.back()
                }
            }
        }
          , o = (n(533),
        n(16))
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = this
              , n = e._self._c;
            return n("div", {
                staticClass: "my-navbar"
            }, [n("van-nav-bar", {
                style: {
                    "font-weight": "bold",
                    "z-index": 99,
                    background: e.transparent ? "none" : ""
                },
                attrs: {
                    title: e.title,
                    "left-arrow": "",
                    "right-text": e.rightText,
                    border: e.border,
                    fixed: e.fixed
                },
                on: {
                    "click-left": function(t) {
                        return e.onClickLeft()
                    },
                    "click-right": function() {
                        return t.$emit("click-right")
                    }
                },
                scopedSlots: e._u([{
                    key: "left",
                    fn: function() {},
                    proxy: !0
                }])
            }), e._v(" "), e.fixed ? n("div", {
                staticClass: "nav-bar-space",
                staticStyle: {
                    width: "100%",
                    height: "46px"
                }
            }) : e._e()], 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    540: function(t, e, n) {
        "use strict";
        n.r(e);
        n(73),
        n(94);
        var r = n(544)
          , o = {
            1: "scroll-x-vertical",
            2: "row-2-vertical",
            3: "row-3-vertical",
            4: "scroll-x",
            5: "row-2",
            6: "row-1and2",
            7: "row-1-info",
            8: "row-1-square",
            9: "row-1"
        }
          , l = {
            components: {
                videoItem: r.default
            },
            props: {
                templateStyle: {
                    type: String,
                    default: "row-2"
                },
                list: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                ratio: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                tsf: function() {
                    return o.hasOwnProperty(this.templateStyle) ? o[this.templateStyle] : this.templateStyle
                }
            }
        }
          , c = (n(545),
        n(16))
          , component = Object(c.a)(l, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "video-item-combination"
            }, ["row-1and2" == t.tsf ? e("van-row", {
                staticClass: "row-1and2"
            }, [e("van-col", {
                attrs: {
                    span: "24"
                }
            }, [e("video-item", {
                attrs: {
                    data: t.list[0],
                    ratio: 347 / 182
                }
            })], 1), t._v(" "), t._l(t.list.slice(1), (function(t, n) {
                return e("van-col", {
                    key: n,
                    attrs: {
                        span: "12"
                    }
                }, [e("video-item", {
                    attrs: {
                        data: t,
                        ratio: 176 / 99
                    }
                })], 1)
            }
            ))], 2) : "row-1" == t.tsf ? t._l(t.list, (function(t, n) {
                return e("video-item", {
                    key: n,
                    staticClass: "row-1",
                    attrs: {
                        data: t,
                        ratio: 850 / 477
                    }
                })
            }
            )) : "row-1-square" == t.tsf ? t._l(t.list, (function(n, r) {
                return e("video-item", {
                    key: r,
                    staticClass: "row-1",
                    attrs: {
                        "template-style": t.tsf,
                        data: n,
                        ratio: 1
                    }
                })
            }
            )) : "row-1-info" == t.tsf ? t._l(t.list, (function(n, r) {
                return e("video-item", {
                    key: r,
                    staticClass: "row-1-info",
                    attrs: {
                        data: n,
                        "template-style": t.tsf
                    }
                })
            }
            )) : "scroll-x-vertical" == t.tsf ? e("van-swipe", [e("van-swipe-item", [e("swiper", {
                attrs: {
                    options: {
                        slidesPerView: 2.8,
                        spaceBetween: 8,
                        slidesPerGroup: 2
                    }
                }
            }, t._l(t.list, (function(t, n) {
                return e("swiper-slide", {
                    key: n
                }, [e("video-item", {
                    attrs: {
                        ratio: 200 / 266,
                        data: t
                    }
                })], 1)
            }
            )), 1)], 1)], 1) : "scroll-x" == t.tsf ? e("van-swipe", [e("van-swipe-item", [e("swiper", {
                attrs: {
                    options: {
                        slidesPerView: 1.65,
                        spaceBetween: 8
                    }
                }
            }, t._l(t.list, (function(t, n) {
                return e("swiper-slide", {
                    key: n
                }, [e("video-item", {
                    attrs: {
                        ratio: 640 / 360,
                        data: t
                    }
                })], 1)
            }
            )), 1)], 1)], 1) : "row-3-vertical" == t.tsf ? e("van-row", {
                attrs: {
                    type: "flex",
                    gutter: "8"
                }
            }, t._l(t.list, (function(t, n) {
                return e("van-col", {
                    key: n,
                    attrs: {
                        span: "8"
                    }
                }, [e("video-item", {
                    attrs: {
                        data: t,
                        ratio: 115 / 152
                    }
                })], 1)
            }
            )), 1) : "row-2-vertical" == t.tsf ? e("van-row", {
                staticClass: "row-2"
            }, t._l(t.list, (function(t, n) {
                return e("van-col", {
                    key: n,
                    attrs: {
                        span: "12"
                    }
                }, [e("video-item", {
                    attrs: {
                        ratio: 175 / 233,
                        data: t
                    }
                })], 1)
            }
            )), 1) : e("van-row", {
                staticClass: "row-2"
            }, t._l(t.list, (function(t, n) {
                return e("van-col", {
                    key: n,
                    attrs: {
                        span: "12"
                    }
                }, [e("video-item", {
                    attrs: {
                        ratio: 850 / 478,
                        data: t
                    }
                })], 1)
            }
            )), 1)], 2)
        }
        ), [], !1, null, "1e92f07b", null);
        e.default = component.exports
    },
    541: function(t, e, n) {
        "use strict";
        n(529)
    },
    542: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".video-item[data-v-02032583]{margin-bottom:.6rem;position:relative}.video-item .flag[data-v-02032583]{height:1.7rem;left:0;position:absolute;top:0;width:3.5rem;z-index:2}.video-item .flag img[data-v-02032583]{height:100%;position:absolute}.video-item .coin-price[data-v-02032583]{align-items:center;background-color:#fff;border-radius:10rem;display:flex;height:1.5rem;padding:0 .4rem;position:absolute;right:.5rem;top:.5rem}.video-item .coin-price .coin[data-v-02032583]{height:1rem;width:1rem}.video-item .coin-price .price[data-v-02032583]{color:#f2902f;font-size:1rem;margin-left:.2rem}.video-item .shadow[data-v-02032583]{background:linear-gradient(transparent,rgba(0,0,0,.4));bottom:0;box-sizing:border-box;color:#fff;justify-content:space-between;left:0;padding:.7rem .4rem .5rem;position:absolute;width:100%}.video-item .shadow[data-v-02032583],.video-item .times[data-v-02032583]{align-items:center;display:flex;font-size:1.5rem}.video-item .times img[data-v-02032583]{height:1.2rem;margin-right:.1rem}.video-item .title[data-v-02032583]{font-size:1.4rem;padding:.6rem 0}.row-1-info-item[data-v-02032583]{display:flex;justify-content:space-between}.row-1-info-item>*[data-v-02032583]{width:48%;width:calc(50% - .5rem)}.row-1-info-item .info[data-v-02032583]{display:flex;flex-direction:column;height:100%;justify-content:space-between;pointer-events:auto}.row-1-info-item .info .title[data-v-02032583]{padding:.3rem 0}", ""]),
        r.locals = {},
        t.exports = r
    },
    543: function(t, e, n) {
        var content = n(559);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("cab20b68", content, !0, {
            sourceMap: !1
        })
    },
    544: function(t, e, n) {
        "use strict";
        n.r(e);
        n(43),
        n(94),
        n(290),
        n(74);
        var r = {
            props: {
                data: {
                    type: Object,
                    default: function() {
                        return {
                            id: "",
                            times: "",
                            duration: "",
                            title: ""
                        }
                    }
                },
                ratio: {
                    type: Number,
                    default: 16 / 9
                },
                templateStyle: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                url: function() {
                    var t = this.data
                      , e = t.item_type
                      , link = t.link
                      , n = t.id
                      , r = t.name;
                    return "ad" === e ? null != link ? link : "javascript:void(0)" : "/movie/detail/".concat(n, "?title=").concat(r)
                }
            }
        }
          , o = (n(541),
        n(16))
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "video-item",
                class: {
                    "row-1-info-item": "row-1-info" === t.templateStyle
                }
            }, [e("auto-link", {
                staticClass: "block",
                attrs: {
                    url: t.url,
                    title: t.data.name
                }
            }, [e("aspect-ratio", {
                attrs: {
                    ratio: t.ratio,
                    image: t.data.img_y ? t.data.img_y : t.data.img_x,
                    radius: ".5rem"
                },
                scopedSlots: t._u([{
                    key: "overlay",
                    fn: function() {
                        return ["money" == t.data.pay_type ? e("div", {
                            staticClass: "coin-price"
                        }, [e("img", {
                            staticClass: "coin",
                            attrs: {
                                src: "/icon/coin.png"
                            }
                        }), t._v(" "), e("span", {
                            staticClass: "price"
                        }, [t._v(t._s(t.data.money))])]) : t._e(), t._v(" "), "row-1-square" === t.data.pay_type ? e("div", [t._v(t._s(t.data.name))]) : e("div", {
                            staticClass: "shadow"
                        }, [null != t.data.click ? e("div", {
                            staticClass: "times"
                        }, [e("img", {
                            attrs: {
                                src: "/icon/eye-white.png"
                            }
                        }), t._v(" "), e("span", [t._v(t._s(t.data.click))])]) : t._e(), t._v(" "), e("div", {
                            staticClass: "duration"
                        }, [t._v(t._s(t.data.duration))])])]
                    },
                    proxy: !0
                }])
            })], 1), t._v(" "), "row-1-info" === t.templateStyle ? e("div", [e("aspect-ratio", {
                attrs: {
                    ratio: t.ratio
                },
                scopedSlots: t._u([{
                    key: "overlay",
                    fn: function() {
                        return [e("div", {
                            staticClass: "info"
                        }, [e("auto-link", {
                            staticClass: "title van-multi-ellipsis--l2",
                            attrs: {
                                url: t.url
                            }
                        }, [t._v("\n            " + t._s(t.data.name) + "\n          ")]), t._v(" "), e("tag-list", {
                            attrs: {
                                list: t.data.tags,
                                "tag-style": {
                                    margin: ".5rem .6rem 0 0"
                                }
                            }
                        })], 1)]
                    },
                    proxy: !0
                }], null, !1, 2873290638)
            })], 1) : e("auto-link", {
                staticClass: "block title",
                attrs: {
                    url: t.url
                }
            }, [t._v("\n    " + t._s(t.data.name) + "\n  ")])], 1)
        }
        ), [], !1, null, "02032583", null);
        e.default = component.exports;
        installComponents(component, {
            AspectRatio: n(181).default,
            AutoLink: n(291).default,
            TagList: n(525).default
        })
    },
    545: function(t, e, n) {
        "use strict";
        n(530)
    },
    546: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".row-3 .van-col[data-v-1e92f07b]{box-sizing:border-box;width:calc(33.33333 - .5333rem)}.row-3 .van-col[data-v-1e92f07b]:nth-child(3n+1),.row-3 .van-col[data-v-1e92f07b]:nth-child(3n+2){margin-right:8px!important}.row-1and2 .van-col--12[data-v-1e92f07b]{box-sizing:border-box;width:calc(50% - 4px)}.row-1and2 .van-col--12[data-v-1e92f07b]:nth-child(2n){margin-right:8px!important}.row-2 .van-col--12[data-v-1e92f07b]{box-sizing:border-box;width:calc(50% - 4px)}.row-2 .van-col--12[data-v-1e92f07b]:nth-child(odd){margin-right:8px!important}.row-1[data-v-1e92f07b],.row-1-info[data-v-1e92f07b]{margin-bottom:15px}", ""]),
        r.locals = {},
        t.exports = r
    },
    553: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(554)
          , o = n.n(r);
        for (var l in r)
            ["default"].indexOf(l) < 0 && function(t) {
                n.d(e, t, (function() {
                    return r[t]
                }
                ))
            }(l);
        e.default = o.a
    },
    554: function(t, e) {},
    558: function(t, e, n) {
        "use strict";
        n(543)
    },
    559: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".video-list-container[data-v-27a77ad3]{padding:1rem .8rem}", ""]),
        r.locals = {},
        t.exports = r
    },
    560: function(t, e, n) {
        "use strict";
        n.r(e);
        n(94),
        n(53),
        n(19);
        var r = {
            components: {
                videoItemCombination: n(540).default
            },
            props: {
                templateStyle: {
                    type: String,
                    default: ""
                },
                filter: {
                    type: String,
                    default: null
                },
                params: {
                    type: Object,
                    default: function() {
                        return null
                    }
                },
                api: {
                    type: String,
                    default: function() {
                        return "/movie/category"
                    }
                },
                ratio: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                reqParams: function() {
                    if (this.$route.path.split("/")[1],
                    this.params)
                        return this.params;
                    if (this.filter)
                        try {
                            return JSON.parse(this.filter)
                        } catch (t) {
                            console.error("<filter>不是一个正确的json字符串")
                        }
                    return {}
                }
            }
        }
          , o = (n(558),
        n(16))
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t._self._c;
            return e("base-list", {
                staticClass: "video-list-container",
                attrs: {
                    api: t.api,
                    params: t.reqParams
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(n) {
                        var r = n.listData;
                        return [e("video-item-combination", {
                            attrs: {
                                list: r,
                                "template-style": t.templateStyle,
                                ratio: t.ratio
                            }
                        })]
                    }
                }])
            })
        }
        ), [], !1, null, "27a77ad3", null);
        e.default = component.exports;
        installComponents(component, {
            BaseList: n(289).default
        })
    },
    562: function(t, e, n) {
        var content = n(578);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("bb6f431e", content, !0, {
            sourceMap: !1
        })
    },
    577: function(t, e, n) {
        "use strict";
        n(562)
    },
    578: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".loading{flex:1;padding:3rem 1rem}.bg-color{background-color:#fff}.bg-gray,.bg-gray-page{background-color:#f0f0f0}.bg-gray-page{min-height:100vh}", ""]),
        r.locals = {},
        t.exports = r
    },
    579: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        ));
        var r = function() {
            var t = this._self._c;
            this._self._setupProxy;
            return t("div", {
                staticClass: "loading"
            }, [t("van-skeleton", {
                attrs: {
                    title: "",
                    row: 6
                }
            })], 1)
        }
          , o = []
    },
    580: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(579)
          , o = n(553);
        for (var l in o)
            ["default"].indexOf(l) < 0 && function(t) {
                n.d(e, t, (function() {
                    return o[t]
                }
                ))
            }(l);
        n(577);
        var c = n(16)
          , component = Object(c.a)(o.default, r.a, r.b, !1, null, null, null);
        e.default = component.exports
    },
    673: function(t, e, n) {
        var content = n(769);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(29).default)("7a6b8f7a", content, !0, {
            sourceMap: !1
        })
    },
    768: function(t, e, n) {
        "use strict";
        n(673)
    },
    769: function(t, e, n) {
        var r = n(28)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".container[data-v-b12c1c9e]{height:100vh;height:calc(100vh - var(--vh-offset, 0px));overflow-y:auto}.page-video-detail[data-v-b12c1c9e]{background-color:#f0f0f0}.buyPanel[data-v-b12c1c9e]{color:#000;padding:2rem 4rem;text-align:center}.buyPanel[data-v-b12c1c9e],.buyPanel .tips[data-v-b12c1c9e]{font-size:1.4rem}.buyPanel .price[data-v-b12c1c9e]{font-size:2rem;margin-top:3rem}.buyPanel .price span[data-v-b12c1c9e]{font-size:3.3rem;padding-right:.5rem}.buyPanel .balance[data-v-b12c1c9e]{align-items:center;display:flex;font-size:1.3rem;margin-top:3rem}.buyPanel .balance .icon[data-v-b12c1c9e]{margin-left:.5rem}.buyPanel .btn[data-v-b12c1c9e]{margin-top:1.5rem;width:100%}.buyPanel .useTicket[data-v-b12c1c9e]{height:4rem}.buyPanel .toRecharge[data-v-b12c1c9e]{align-items:center;border:.1rem solid #999;border-radius:4rem;color:#666;display:flex;flex:1;justify-content:center;margin-left:1rem}.video-player[data-v-b12c1c9e]{pointer-events:auto;position:relative;z-index:1}.back-btn[data-v-b12c1c9e]{color:hsla(0,0%,100%,.9);font-size:2.4rem;left:1rem;pointer-events:auto;position:absolute;top:1rem;z-index:2}.video-tips[data-v-b12c1c9e]{align-items:center;background-color:#fff;display:flex;flex-wrap:wrap;justify-content:space-between;padding:1rem .8rem}.video-tips>div[data-v-b12c1c9e]{font-size:1.5rem;padding-right:2rem}.video-tips>div>.action[data-v-b12c1c9e]{color:#f6588d}.video-tips>a[data-v-b12c1c9e]{color:#f6588d;font-size:1.5rem}.video-nav[data-v-b12c1c9e]{background-color:#fff;font-size:1.4rem;justify-content:space-between;padding:1rem 1.2rem 0}.video-nav[data-v-b12c1c9e],.video-nav .line-btn[data-v-b12c1c9e]{align-items:center;color:#f6588d;display:flex}.video-nav .line-btn[data-v-b12c1c9e]{border:.1rem solid #f6588d;border-radius:2rem;font-size:1.2rem;padding:.3rem .8rem}.video-nav .line-btn img[data-v-b12c1c9e]{height:1.3rem;margin-left:.2rem}.video-info[data-v-b12c1c9e]{background-color:#fff;border-radius:.6rem;margin:1.2rem .8rem;padding:1.2rem 0 0}.video-info .title[data-v-b12c1c9e]{color:#242424;font-size:1.8rem;font-weight:700;margin:0 1.2rem}.video-info .relation_video[data-v-b12c1c9e]{margin:1rem}.video-info .des[data-v-b12c1c9e]{font-size:1.3rem;margin:.4rem 1.2rem 0}.video-info .tags[data-v-b12c1c9e]{margin:0 1.2rem}.video-info .controls[data-v-b12c1c9e]{border-top:.1rem solid rgba(0,0,0,.1);display:flex;height:5.5rem;margin-top:2rem}.video-info .controls .props[data-v-b12c1c9e]{align-items:center;box-sizing:border-box;display:flex;flex:1;font-size:#5b5b5b;font-size:1.1rem;height:100%;justify-content:space-around;padding:0 .6rem}.video-info .controls .props .van-icon[data-v-b12c1c9e]{padding:0 .4rem;vertical-align:middle}.video-info .controls .score[data-v-b12c1c9e]{background-image:url(/img/score-bg.png);background-size:auto 100%;box-sizing:border-box;color:#fff;height:100%;padding-top:1.2rem;text-align:center;width:11.7rem}.video-info .controls .score .score-label[data-v-b12c1c9e]{font-size:1rem;margin-top:.2rem}.recommend-title[data-v-b12c1c9e]{color:#242424;font-size:1.7rem;font-weight:700;margin-left:.8rem;margin-top:1.5rem}.centerx[data-v-b12c1c9e]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;flex-direction:column;height:100%;justify-content:center;left:0;top:0;width:100%}.centerx .login[data-v-b12c1c9e]{color:#f6588d;font-size:2.2rem;font-weight:700}.centerx .tips[data-v-b12c1c9e]{color:#dcdee0;font-size:1.6rem;font-weight:600}.anwser[data-v-b12c1c9e]{font-size:1.4rem;margin-left:.8rem}", ""]),
        r.locals = {},
        t.exports = r
    },
    824: function(t, e, n) {
        "use strict";
        n.r(e);
        n(43),
        n(54),
        n(75),
        n(290),
        n(19),
        n(94),
        n(97);
        var r = n(540)
          , o = n(560)
          , l = {
            components: {
                videoItemCombination: r.default,
                videoList: o.default
            },
            transition: {
                css: !1
            },
            data: function() {
                return {
                    r: {},
                    pageStatus: 1,
                    lineIndex: 0,
                    linePanelShow: !1,
                    showPlayer: !0,
                    videoInit: !1,
                    playStatus: "start",
                    vipPanelShow: !1,
                    score: 0,
                    navActiveIndex: !1
                }
            },
            computed: {
                title: function() {
                    return this.$route.query.title
                },
                videoOptions: function() {
                    return {
                        autoplay: !0,
                        controls: !0,
                        fluid: !0,
                        hls: !0,
                        loop: !1,
                        aspectRatio: "16:9",
                        sources: [{
                            type: "application/x-mpegURL",
                            src: this.r ? this.r.lines[this.lineIndex].link : ""
                        }],
                        controlBar: {
                            timeDivider: !0,
                            durationDisplay: !0,
                            remainingTimeDisplay: !1,
                            fullscreenToggle: !0
                        }
                    }
                },
                authenticated: function() {
                    return this.$store.state.authenticated
                }
            },
            fetch: function() {
                console.log(this.getDetails());
                return this.getDetails()
            },
            methods: {
                getDetails: function() {
                    var t = this;
                    return new Promise((function() {
                        var e = t.$route.params.id;
                        t.pageStatus = 1,
                        t.$request("/movie/detail", {
                            id: e
                        }).then((function(data) {
                            t.r = data,
                            t.r.score && (t.score = t.r.score / 20),
                            t.pageStatus = 2,
                            ("vip" != t.r.pay_type || t.authenticated && "vip" == t.r.layer_type) && (t.videoInit = !0)
                        }
                        )).catch((function(e) {
                            t.pageStatus = 0
                        }
                        ))
                    }
                    ))
                },
                isBalanceEnough: function(t, e) {
                    var b = Number(t)
                      , p = Number(e);
                    return !isNaN(b) && !isNaN(p) && b >= p
                },
                playing: function() {
                    this.playStatus = "start"
                },
                playEnded: function() {
                    this.r.layer_type && ("vip" === this.r.pay_type || "free" === this.r.pay_type) && (this.vipPanelShow = !0)
                },
                changeLine: function(t, i) {
                    var e = this;
                    this.lineIndex = i,
                    this.videoInit = !1,
                    this.$toast("线路切换成功！"),
                    this.$nextTick((function() {
                        setTimeout((function() {
                            e.videoInit = !0
                        }
                        ), 100)
                    }
                    )),
                    this.linePanelShow = !1
                },
                doCollect: function() {
                    var t = this;
                    if (!this.authenticated)
                        return this.openLoginDialog();
                    this.$request("/movie/doFavorite", {
                        id: this.r.id
                    }).then((function(data) {
                        "y" == data.status ? (t.r.has_favorite = !0,
                        t.r.favorite++) : (t.r.has_favorite = !1,
                        t.r.favorite--)
                    }
                    )).catch((function() {}
                    ))
                },
                openLoginDialog: function() {
                    var t = this;
                    this.$dialog.confirm({
                        title: "您还没有登录",
                        message: "去登陆"
                    }).then((function() {
                        t.$router.push("/user/login")
                    }
                    )).catch((function() {}
                    ))
                },
                openVipDialog: function() {
                    var t = this;
                    this.$dialog.confirm({
                        title: "该线路为VIP专线，请先购买VIP",
                        message: "去购买"
                    }).then((function() {
                        t.$router.push("/recharge")
                    }
                    )).catch((function() {}
                    ))
                },
                onClickBack: function() {
                    this.$router.back()
                }
            }
        }
          , c = (n(768),
        n(16))
          , component = Object(c.a)(l, (function() {
            var t = this
              , e = this
              , n = e._self._c;
            return n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "page-video-detail"
            }, [2 === e.pageStatus ? n("div", [n("aspect-ratio", {
                attrs: {
                    image: e.r.img_x
                },
                scopedSlots: e._u([{
                    key: "overlay",
                    fn: function() {
                        return [e.videoInit ? n("video-player", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.showPlayer,
                                expression: "showPlayer"
                            }],
                            staticClass: "video-player vjs-custom-skin",
                            attrs: {
                                options: e.videoOptions
                            },
                            on: {
                                play: function(t) {
                                    return e.playing()
                                },
                                ended: function(t) {
                                    return e.playEnded()
                                }
                            }
                        }) : e._e(), e._v(" "), n("van-icon", {
                            staticClass: "back-btn",
                            attrs: {
                                name: "arrow-left"
                            },
                            on: {
                                click: function(t) {
                                    return e.onClickBack()
                                }
                            }
                        }), e._v(" "), 
                        "vip" !== e.r.pay_type ? [e.authenticated ? [n("div", {
                            staticClass: "centerx"
                        }, [n("div", {
                            staticClass: "tips"
                        }, [e._v("您还不是VIP")]), e._v(" "), n("nuxt-link", {
                            staticClass: "login",
                            attrs: {
                                to: "/recharge"
                            }
                        }, [e._v("开通VIP无限观看视频")])], 1)] : [n("div", {
                            staticClass: "centerx"
                        }, [n("div", {
                            staticClass: "tips"
                        }, [e._v("您还未登录")]), e._v(" "), n("div", {
                            staticClass: "tips"
                        }, [e._v("赶快加入 体验更多精彩视频")]), e._v(" "), n("nuxt-link", {
                            staticClass: "login",
                            attrs: {
                                to: "/user/login"
                            }
                        }, [e._v("登陆/注册")])], 1)]] : e._e()]
                    },
                    proxy: !0
                }], null, !1, 2861040539)
            }), e._v(" "), n("div", {
                staticClass: "video-nav"
            }, [n("div", {
                on: {
                    click: function() {
                        return t.$router.back()
                    }
                }
            }, [e._v("回到首页")]), e._v(" "), e.r.lines.length > 0 ? n("div", {
                staticClass: "line-btn",
                on: {
                    click: function() {
                        t.linePanelShow = !0
                    }
                }
            }, [e._v("\n          " + e._s(e.r.lines[e.lineIndex].name) + "\n          "), n("img", {
                attrs: {
                    src: "/icon/change-line.png"
                }
            })]) : e._e()]), e._v(" "), n("div", {
                staticClass: "video-tips"
            }, ["vip" === e.r.pay_type ? [e.authenticated ? ["" === e.r.layer_type ? n("div", [e._v(" 正在播放VIP视频")]) : n("div", [e._v("您还不是VIP，\n              "), n("nuxt-link", {
                staticClass: "action",
                attrs: {
                    to: "/recharge"
                }
            }, [e._v("开通VIP播放视频>")])], 1)] : [n("div", [n("nuxt-link", {
                staticClass: "action",
                attrs: {
                    to: "/user/login"
                }
            }, [e._v("登陆")]), e._v("\n              后观看更多视频\n            ")], 1)]] : [e.authenticated ? ["vip" !== e.r.layer_type ? n("div", [n("nuxt-link", {
                staticClass: "action",
                attrs: {
                    to: "/vip"
                }
            }, [e._v("开通VIP观看更多视频>")])], 1) : n("div", [n("nuxt-link", {
                staticClass: "action",
                attrs: {
                    to: "/vip"
                }
            }, [e._v("查看VIP限时优惠>")])], 1)] : [n("div", [e._v("正在播放试看视频，\n              "), n("nuxt-link", {
                staticClass: "action",
                attrs: {
                    to: "/user/login"
                }
            }, [e._v("登陆")]), e._v("\n              后观看更多视频\n            ")], 1)]]], 2), e._v(" "), n("div", {
                staticClass: "video-info"
            }, [n("div", {
                staticClass: "title"
            }, [e._v(e._s(e.r.name))]), e._v(" "), n("video-item-combination", {
                staticClass: "relation_video",
                attrs: {
                    list: e.r.relation_video,
                    templateStyle: "scroll-x"
                }
            }), e._v(" "), n("div", {
                staticClass: "des"
            }, [e._v(e._s(e.r.description))]), e._v(" "), e.r.tags.length > 0 ? n("tag-list", {
                staticClass: "tags",
                attrs: {
                    list: e.r.tags
                }
            }) : e._e(), e._v(" "), n("div", {
                staticClass: "controls"
            }, [n("div", {
                staticClass: "props"
            }, [n("div", {
                staticClass: "click"
            }, [n("van-icon", {
                attrs: {
                    size: 18,
                    name: "/icon/hot.png"
                }
            }), e._v("\n              " + e._s(e.$utils.watchCount(e.r.click)) + "\n            ")], 1), e._v(" "), n("div", {
                on: {
                    click: function(t) {
                        return e.doCollect()
                    }
                }
            }, [e.r.has_favorite ? n("van-icon", {
                attrs: {
                    size: "18",
                    name: "/icon/love-active.png"
                }
            }) : n("van-icon", {
                attrs: {
                    size: "18",
                    name: "/icon/love.png"
                }
            }), e._v("\n              " + e._s(e.$utils.watchCount(e.r.favorite)) + "\n            ")], 1)]), e._v(" "), n("div", {
                staticClass: "score"
            }, [n("van-rate", {
                attrs: {
                    size: "15",
                    color: "#ffd21e",
                    "allow-half": "",
                    "void-icon": "star",
                    "void-color": "#3f2e2e",
                    gutter: ".2rem",
                    readonly: ""
                },
                model: {
                    value: e.r.score,
                    callback: function(t) {
                        e.$set(e.r, "score", t)
                    },
                    expression: "r.score"
                }
            }), e._v(" "), n("div", {
                staticClass: "score-label"
            }, [e._v("推荐指数" + e._s(e.r.score))])], 1)])], 1), e._v(" "), n("div", [n("div", {
                staticClass: "recommend-title"
            }, [e._v("\n          更多视频\n        ")]), e._v(" "), n("div", [n("video-list", {
                attrs: {
                    filter: e.r.recommend_filter,
                    templateStyle: "row-2"
                }
            })], 1)]), e._v(" "), n("van-action-sheet", {
                attrs: {
                    actions: e.r.lines
                },
                on: {
                    select: e.changeLine
                },
                model: {
                    value: e.linePanelShow,
                    callback: function(t) {
                        e.linePanelShow = t
                    },
                    expression: "linePanelShow"
                }
            }), e._v(" "), n("van-popup", {
                attrs: {
                    "safe-area-inset-bottom": "",
                    round: "",
                    position: "bottom"
                },
                model: {
                    value: e.vipPanelShow,
                    callback: function(t) {
                        e.vipPanelShow = t
                    },
                    expression: "vipPanelShow"
                }
            })], 1) : 0 === e.pageStatus ? n("div") : n("div", [e.title ? n("nav-bar") : e._e(), e._v(" "), n("loading")], 1)])])
        }
        ), [], !1, null, "b12c1c9e", null);
        e.default = component.exports;
        installComponents(component, {
            AspectRatio: n(181).default,
            TagList: n(525).default,
            NavBar: n(535).default,
            Loading: n(580).default
        })
    }
}]);
