
                try {
                    (function () {
                        var util = {
                            isValidGuid: function (val) {
                                var validGUIDPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
                                var isValid = val && validGUIDPattern.test(val.trim());
                                return isValid;
                            },
                            warnIfInvalidToken: function (token) {
                                var isTokenValid = util.isValidGuid(token);
                                if (!isTokenValid) {
                                    console.error('Token is not a valid GUID');
                                }
                                return isTokenValid;
                            }
                        };
                        var TatariTagManager = /** @class */ (function () {
                            function TatariTagManager(token) {
                                this.debugCookieName = 'ttm-debug-cookie';
                                this.debugCookieTime = 24 * 60 * 60 * 1000; // 1 day
                                this.debug = false;
                                this.util = util;
                                this._i = token;
                                this.checkDebugCookie(); // Debug before everything
                            }
                            TatariTagManager.prototype.enableDebug = function () {
                                this.createCookie(this.debugCookieName, '1', this.debugCookieTime);
                                this.debug = true;
                                console.info('Debug: TTM Debug Enabled');
                            };
                            // handle multiple instantiations of the snippet
                            TatariTagManager.prototype.init = function (token) {
                                this._i = token;
                                // emit console error if token is not valid GUID
                                util.warnIfInvalidToken(token);
                            };
                            TatariTagManager.prototype.flushCommandQueue = function (commandQueue) {
                                if (commandQueue === void 0) { commandQueue = []; }
                                if (this.debug) {
                                    console.info('Debug: flushing command queue', commandQueue);
                                }
                                if (commandQueue.length > 0) {
                                    var that_1 = this;
                                    commandQueue.forEach(function (m) {
                                        that_1[m[0]].apply(that_1, m.slice(1, m.length));
                                    });
                                }
                            };
                            TatariTagManager.prototype.onPageview = function () {
                                if (this.debug) {
                                    console.info('Debug: onPageview triggered');
                                }
                                // custom stuff you want to do on pageview

(function () {
    var baseUrl = 'https://segment.prod.bidr.io/associate-segment?';
    var params = {
        buzz_key: 'tatari',
        segment_key: 'tatari-533',
        value: '',
        uncacheplz: '' + Math.floor(Math.random() * 10000042069)
    };
    var img = new Image(0, 0);
    img.src = baseUrl + new URLSearchParams(params).toString();
    img.style.display = 'none';
    img.alt = '';
    document.body.appendChild(img);
})();

// hook for TTM on pageview
if (window['TatariXandr'] && window['TatariXandr'].event) {
    window['TatariXandr'].event('PageView');
}
else {
    pixie('event', 'PageView');
}
!(function () {
    try {
        !(function (t, i) {
            if (!i.ttd) {                
                var n1 = t.createElement("script");
                n1.type = "text/javascript";
                n1.async = !0;
                n1.src = "https://js.adsrvr.org/up_loader.1.1.0.js"; 
                n1.onload = function() {ttd_dom_ready( function() {if (typeof TTDUniversalPixelApi === 'function') {window.tatari.ttd = new TTDUniversalPixelApi();window.tatari.ttd.init('c01c8r5', ['7su9ct3'], 'https://insight.adsrvr.org/track/up');}});};
                var e = t.getElementsByTagName("head")[0];
                e.appendChild(n1);
            }
        })(document, window.tatari || []);
    } catch (t) {
        console.log(t);
    }
})();

(function() {
    var base_url = 'https://segment.prod.bidr.io/associate-segment?';
    var params = {
        'buzz_key': 'tatari',
        'segment_key': "tatari-43",
        'value': '',
        'uncacheplz': "" + Math.floor(Math.random() * 10000042069),
    };

    var img = new Image(0, 0);
    img.src = base_url + new URLSearchParams(params).toString();
    document.body.appendChild(img);
})();
                            };
                            TatariTagManager.prototype.onTrack = function (event, arg) {
                                if (this.debug) {
                                    console.info('Debug: onTrack triggered', event, arg);
                                }
                                // custom stuff you want to do on track being fired

(function () {
    var segments = {"purchase": "tatari-539", "sign_up": "tatari-540", "Parent Registration Complete": "tatari-541", "Registration selected Greenlight Invest": "tatari-542", "Registration selected Greenlight Max": "tatari-543", "Reg - Core Plan": "tatari-2814", " Reg - Infinity Plan": "tatari-2815", "Reg - Max Plan": "tatari-2816", "Reg - Select Plan": "tatari-2817", "Reg - Infinity Plan": "tatari-2847"};
    var baseUrl = 'https://segment.prod.bidr.io/associate-segment?';
    var params = {
        buzz_key: 'tatari',
        value: '',
        segment_key: segments[event],
        uncacheplz: '' + Math.floor(Math.random() * 10000042069)
    };
    // If we have a matching segment name, fire the event
    if (params['segment_key']) {
        var img = new Image(0, 0);
        img.src = baseUrl + new URLSearchParams(params).toString();
        img.style.display = 'none';
        img.alt = '';
        document.body.appendChild(img);
    }
})();

// hook for TTM on track
if (window['TatariXandr'] && window['TatariXandr'].event) {
    window['TatariXandr'].event(event);
}
else {
    // Xandr doesn't accept events with spaces or hyphens
    pixie('event', event.replace(/-|\s/g, ''));
}
(function() {
    var segments = {"page_view":"tatari-43","Parent Registration Complete":"tatari-44","Registration selected Greenlight Invest":"tatari-45","Registration selected Greenlight Max":"tatari-46"} ;
    var base_url = 'https://segment.prod.bidr.io/associate-segment?';
    var params = {
        'buzz_key': 'tatari',
        'value': '',
        'segment_key': segments[event],
        'uncacheplz': "" + Math.floor(Math.random() * 10000042069),
    };

    // If we have a matching segment name, fire the event
    if(params['segment_key']) {
        var img = new Image(0, 0);
        img.src = base_url + new URLSearchParams(params).toString();
        document.body.appendChild(img);
    }
})();


                            };
                            TatariTagManager.prototype.onIdentify = function (id) {
                                if (this.debug) {
                                    console.info('Debug: onIdentify triggered', id);
                                }
                                // custom stuff to do on identify

                            };
                            TatariTagManager.prototype.createCookie = function (cookieName, cookieValue, cookieExp) {
                                var exp = '';
                                var date = new Date();
                                var domain = "domain=" + this.getDomain() + ";";
                                date.setTime(date.getTime() + cookieExp);
                                exp = "expires=" + date.toUTCString() + ";";
                                document.cookie = cookieName + "=" + cookieValue + "; " + exp + " " + domain + " path=/";
                                return cookieValue;
                            };
                            TatariTagManager.prototype.getDomain = function () {
                                var testCookieName = 'testTLD';
                                var testCookie = testCookieName + "=test";
                                var loc = document.location || { hostname: '' };
                                var hostnames = loc.hostname.split('.');
                                var domain = '';
                                hostnames.some(function (_, i) {
                                    var testDomain = hostnames.slice(hostnames.length - i - 1).join('.');
                                    document.cookie = testCookie + ";domain=" + testDomain + ";";
                                    if (document.cookie.indexOf(testCookie) !== -1) {
                                        // found tld, remove cookie
                                        domain = testDomain;
                                        document.cookie = testCookieName + "=;domain=" + domain + ";expires=" + (new Date(0)).toUTCString() + ";";
                                        return true;
                                    }
                                });
                                return domain;
                            };
                            TatariTagManager.prototype.getCookie = function (cookieName) {
                                var name = cookieName + "=";
                                var decodedCookie = decodeURIComponent(document.cookie);
                                var ca = decodedCookie.split(';');
                                for (var _a = 0, ca_1 = ca; _a < ca_1.length; _a++) {
                                    var c = ca_1[_a];
                                    while (c.charAt(0) === ' ') {
                                        c = c.substring(1);
                                    }
                                    if (c.indexOf(name) === 0) {
                                        return c.substring(name.length, c.length);
                                    }
                                }
                                return;
                            };
                            TatariTagManager.prototype.removeCookie = function (cookieName) {
                                var domain = this.getDomain();
                                // delete cookie which doesn't specify domain
                                document.cookie = cookieName + "=; Max-Age=-99999999;";
                                // delete cookie which does specify domain
                                if (domain) {
                                    document.cookie = cookieName + "=; Max-Age=-99999999; domain=" + domain + ";";
                                }
                            };
                            TatariTagManager.prototype.checkDebugCookie = function () {
                                var val = this.getCookie(this.debugCookieName);
                                this.debug = val ? true : false;
                            };
                            return TatariTagManager;
                        }());
                        // Using tracker before real script is initialized
                        var mockTagManager = window['ttm'] || [];
                        // Here we replace the mock ttm with the real one
                        var realTagManager = new TatariTagManager(mockTagManager['_i']);
                        window['ttm'] = realTagManager;
                        realTagManager.flushCommandQueue(mockTagManager);
                    })();
                }
                catch (e) {
                    console.log(e);
                }
