var Dw = function(a) {
                return Cw(a.D, a.J, a.ta)
            }
              , Cw = function(a, b, c) {
                var d = ""
                  , e = _.A(_.hc(_.Ap(a), Ev, 1, _.wp), Cv, 1)
                  , f = null != c ? c : _.O(e, 7);
                c = _.B(e, wv, 11).filter(function(D) {
                    return _.O(D, 1) == f
                })[0];
                d += '<div class="fc-ab-root"><div class="fc-dialog-overlay"></div><div class="fc-dialog-container" tabindex="0">' + (0 < _.V(_.up(_.zp(a)).filter(function(D) {
                    return 1 == D.C()
                })).length ? _.Tq() : "") + "<section><header><h1>" + (null != _.A(e, _.pp, 9) ? b && 3 == _.ap(_.A(e, _.pp, 9), 4) ? null != _.O(_.A(e, _.pp, 9), 1) ? '<div class="fc-site-macro-logo">' + _.Sq(_.A(e, _.pp, 9), _.dq(_.V(_.O(c, 2))) ? null : _.O(c, 2)) + "</div>" : '<div class="fc-header-image-container"><img class="fc-placeholder-image" alt="' + _.W(_.O(c, 2)) + '" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/></div>' : _.Sq(_.A(e, _.pp, 9), _.O(c, 2)) : _.wq(_.S(_.O(c, 2)))) + "</h1><h2>" + _.wq(_.S(_.O(c, 3))) + '</h2></header><div class="fc-dialog-body"><p>' + _.wq(_.S(_.O(c, 4))) + '</p></div><div class="fc-buttons">';
                var g = (new Map).set(_.V(3), "whitelist").set(_.V(2), "custom-choice")
                  , h = (new Map).set(_.V(3), 1).set(_.V(2), 3)
                  , k = _.zp(a);
                k = (null == k ? null : _.up(k)).filter(function(D) {
                    return _.yq(_.V(Array.from(_.V(h).keys())), D.C())
                });
                for (var m = k.length, n = {}, v = 0; v < m; n = {
                    Aa: n.Aa
                },
                v++)
                    n.Aa = k[v],
                    d += '<button class="fc-button fc-button-' + _.W(g.get(n.Aa.C())) + '" tabindex="0"><p class="fc-button-label">' + _.S(_.B(c, uv, 6).filter(function(D) {
                        return function(N) {
                            return _.ap(N, 1) == h.get(D.Aa.C())
                        }
                    }(n)).map(function(D) {
                        return _.O(D, 2)
                    })[0]) + "</p></button>";
                d += "</div>";
                0 < _.V(_.up(_.zp(a)).filter(function(D) {
                    return 2 == D.C()
                })).length && null != _.O(c, 5) && (a = _.A(e, yv, 6),
                a = null == a ? null : _.A(a, xv, 4),
                d += '<a class="fc-subscription-link"' + (b || null == _.O(a, 1) || 0 == _.V(_.O(a, 1)).length ? "" : " href=" + Pv(_.sq(_.O(a, 1)))) + ">" + _.S(_.O(c, 5)) + "</a>");
                return (0,
                _.R)(d + "</section></div></div>")
            };
            var Fw = function(a) {
                return Ew(a.D, a.J, a.Na, a.Ub)
            }
              , Ew = function(a, b, c, d) {
                var e = ""
                  , f = _.A(_.hc(_.Ap(a), Ev, 1, _.wp), Cv, 1)
                  , g = _.A(a, _.xp, 4);
                g = null == g ? null : _.G(g, 1);
                var h = 0 < _.V(_.up(_.zp(a)).filter(function(U) {
                    return 1 == U.C()
                })).length;
                if (null == a)
                    var k = null;
                else {
                    var m = _.A(a, _.xp, 4);
                    k = null == m ? null : _.G(m, 1)
                }
                var n = _.A(f, _.pp, 9)
                  , v = Dv(f);
                m = Dv(f);
                var D = b;
                D || (a = _.A(a, _.xp, 4),
                D = 2 == (null == a ? null : _.G(a, 2)));
                a = _.Nq(_.zq("div", "header", "h1", "h2", "a", "p", "button", "i"), "fc-ab-root") + _.Nq(_.zq("div", "iframe"), "fc-whitelist-root") + ".fc-ab-root section, .fc-ab-root section header {background-color: transparent; border: 0; display: block; font-size: 1em; letter-spacing: normal; margin: 0; opacity: 1; outline: none; padding: 0; position: static;}" + _.Qq(b, "fc-ab-root", k) + _.Qq(b, "fc-whitelist-root", 1) + ".fc-ab-root .fc-site-macro-logo {display: flex; flex-direction: row; justify-content: center; padding: 8px 0;}.fc-ab-root .fc-header-image-container {padding-bottom: 6px; max-width: 100%;" + _.Iq(null == n ? null : _.qp(n)) + "}.fc-ab-root .fc-placeholder-image {border: 1px solid #dadce0; border-radius: 4px; box-sizing: border-box; padding: 12px 100px;}" + (b ? ".fc-ab-root .fc-header-image-default {background-color: lightgrey; height: 42px; width: 210px;}" : "") + ".fc-ab-root .fc-header-image {display: block; text-align: center; max-width: 100%;}.fc-ab-root .fc-dialog-container {box-shadow: 0 0 0.75em #888; box-sizing: border-box;" + (2 == g ? b && _.eq(d) ? "bottom: 0; left: 0; position: absolute; right: 0; width: 100%;" : "bottom: 0; display: flex; justify-content: center; position: fixed;" : "") + _.Gq(null == v ? null : Av(v)) + _.Oq(_.O(f, 7)) + "}.fc-ab-root .fc-dialog-container:focus {outline: none;}.fc-ab-root section {";
                var N;
                h ? N = (0,
                _.T)("margin-top: 1.25em;") : N = "";
                e += a + N + (2 == g && b ? "margin-left: auto; margin-right: auto;" : "") + _.Hq(null == m ? null : Av(m)) + "}" + _.Pq(".fc-ab-root .fc-dialog-overlay, .fc-whitelist-root .fc-dialog-overlay", D) + (h ? _.Jq("fc-ab-root") : "") + ".fc-whitelist-root .fc-whitelist-dialog-wrapper {align-items: center; display: flex; justify-content: center; height: 100%; left: 0; opacity: 1; position: fixed; top: 0; width: 100%;}.fc-whitelist-root .fc-whitelist-dialog {box-shadow: 1px -1px 16px #888888; border-radius: 2px; height: 100%; left: 0; max-height: 570px; max-width: 600px; top: 0; width: 100%;}";
                if (c)
                    g = 1200 <= c ? Gw("16px", 720, g, d) : 960 <= c ? Gw("16px", 70 * c / 100, g, d) : 608 <= c ? Gw("14px", 70 * c / 100, g, d) : 480 <= c ? Gw("14px", 80 * c / 100, g, d) : Gw("13px", 90 * c / 100, g, d),
                    e += g;
                else {
                    e += "@media screen and (max-width: " + (b ? "859px" : "479px") + ") {";
                    c = "";
                    switch (g) {
                    case 2:
                        c += "85%";
                        break;
                    default:
                        c += "90%"
                    }
                    d = Dv(f);
                    null == d ? d = null : (d = Av(d),
                    d = null == d ? null : _.mp(d));
                    null == d ? d = 0 : (d = Dv(f),
                    null == d ? d = null : (d = Av(d),
                    null == d ? d = null : (d = _.mp(d),
                    d = null == d ? null : _.$o(d))));
                    e += Hw("13px", c, 408, d, g);
                    e += "}@media screen and (min-width: " + (b ? "860px" : "480px") + ") {";
                    c = "";
                    switch (g) {
                    case 2:
                        c += "85%";
                        break;
                    default:
                        c += "80%"
                    }
                    d = Dv(f);
                    null == d ? d = null : (d = Av(d),
                    d = null == d ? null : _.mp(d));
                    null == d ? d = 0 : (d = Dv(f),
                    null == d ? d = null : (d = Av(d),
                    null == d ? d = null : (d = _.mp(d),
                    d = null == d ? null : _.$o(d))));
                    e += Hw("14px", c, 516, d, g);
                    e += "}@media screen and (min-width: " + (b ? "1010px" : "608px") + ") {";
                    c = "";
                    switch (g) {
                    case 2:
                        c += "80%";
                        break;
                    default:
                        c += "70%"
                    }
                    d = Dv(f);
                    null == d ? d = null : (d = Av(d),
                    d = null == d ? null : _.mp(d));
                    null == d ? d = 0 : (d = Dv(f),
                    null == d ? d = null : (d = Av(d),
                    null == d ? d = null : (d = _.mp(d),
                    d = null == d ? null : _.$o(d))));
                    e += Hw("14px", c, 768, d, g);
                    e += "}@media screen and (min-width: " + (b ? "1420px" : "960px") + ") {";
                    c = "";
                    switch (g) {
                    case 2:
                        c += "80%";
                        break;
                    default:
                        c += "70%"
                    }
                    d = Dv(f);
                    null == d ? d = null : (d = Av(d),
                    d = null == d ? null : _.mp(d));
                    null == d ? d = 0 : (d = Dv(f),
                    null == d ? d = null : (d = Av(d),
                    null == d ? d = null : (d = _.mp(d),
                    d = null == d ? null : _.$o(d))));
                    e += Hw("16px", c, 880, d, g);
                    e += "}@media screen and (min-width: " + (b ? "1700px" : "1200px") + ") {";
                    c = "";
                    switch (g) {
                    case 2:
                        c += "70%";
                        break;
                    default:
                        c += "720px"
                    }
                    d = Dv(f);
                    null == d ? d = null : (d = Av(d),
                    d = null == d ? null : _.mp(d));
                    null == d ? d = 0 : (d = Dv(f),
                    null == d ? d = null : (d = Av(d),
                    null == d ? d = null : (d = _.mp(d),
                    d = null == d ? null : _.$o(d))));
                    e += Hw("16px", c, 1008, d, g);
                    e += "}"
                }
                g = Dv(f);
                c = Dv(f);
                d = Dv(f);
                e += ".fc-ab-root header h1 {display: block; line-height: 1.3; margin-bottom: 0.5em; margin-top: 0; padding: 0;" + _.Fq(void 0, null == g ? null : _.A(g, _.np, 2)) + "}.fc-ab-root header h2 {display: block; line-height: 1.3; margin-bottom: 0.5em; margin-top: 0; padding: 0;" + _.Fq(void 0, null == c ? null : _.A(c, _.np, 3)) + "}.fc-ab-root .fc-dialog-body {font: inherit;}.fc-ab-root .fc-dialog-body p {display: block; line-height: 1.4; margin-bottom: 0.5em; margin-top: 0;" + _.Fq(void 0, null == d ? null : _.A(d, _.np, 1)) + "}.fc-ab-root .fc-buttons {";
                g = Dv(f);
                null == g ? g = null : (g = _.A(g, _.np, 3),
                g = null == g ? null : _.ap(g, 7));
                switch (g) {
                case 2:
                    e += "justify-content: center;";
                    break;
                case 3:
                    e += "justify-content: flex-end; margin-right: -0.25em;";
                    break;
                default:
                    e += "justify-content: flex-start; margin-left: -0.25em;"
                }
                g = Dv(f);
                c = Dv(f);
                d = Dv(f);
                f = Dv(f);
                e += "align-items: stretch; display: flex; flex-wrap: wrap; font-size: inherit; margin-top: 1em; width: 100%;}.fc-ab-root .fc-button {cursor: pointer; display: flex; flex-grow: 0; letter-spacing: normal; margin: 0.25em; opacity: 1; outline: none;" + _.Fq(void 0, null == g ? null : _.A(g, _.np, 4)) + _.Hq(null == c ? null : _.A(c, _.lp, 6)) + _.Gq(null == d ? null : _.A(d, _.lp, 6)) + "}.fc-ab-root .fc-button-label {align-self: center; color: inherit; cursor: pointer; font: inherit; line-height: 1.4em; margin: 0; min-width: 168px; text-align: inherit; width: 100%;}.fc-ab-root .fc-dialog-container .fc-subscription-link {cursor: pointer; display: block; line-height: 1.2em; margin-top: 0.5em; outline: none; text-decoration: none;" + _.Fq(void 0, null == f ? null : _.A(f, _.np, 8)) + "}" + (b ? "" : ".fc-ab-root button:focus .fc-button-label, .fc-ab-root a:focus {outline: auto;}");
                return (0,
                _.T)(e)
            }
              , Hw = function(a, b, c, d, e) {
                a = ".fc-ab-root .fc-dialog-container {font-size: " + _.X(a) + ";";
                switch (e) {
                case 1:
                    a += "position: relative; width: " + _.X(b) + ";";
                    break;
                case 2:
                    a += "left: 0; width: calc(100% - " + _.X(2 * d) + "px);"
                }
                a += "}" + (_.cq(e, 2) ? ".fc-ab-root section {max-width: " + _.X(c) + "px; width: " + _.X(b) + ";}" : "");
                return (0,
                _.T)(a)
            }
              , Gw = function(a, b, c, d) {
                return (0,
                _.T)("div.fc-ab-root {justify-content: flex-start; overflow-x: auto;}.fc-ab-root .fc-dialog-container {font-size: " + _.X(a) + ";" + (_.eq(d) && 2 == c ? "width: 100%;" : "width: " + _.X(Math.round(b)) + "px; position: relative;") + "margin: auto;}")
            };
