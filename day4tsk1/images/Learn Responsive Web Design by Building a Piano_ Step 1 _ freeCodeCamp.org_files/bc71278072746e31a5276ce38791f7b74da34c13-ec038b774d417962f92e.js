(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[6281],{30424:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return s(e)||c(e,t)||u(e,t)||p()}function s(e){if(Array.isArray(e))return e}function c(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function f(){}function h(){}h.resetWarningCache=f;var y=function(){function e(e,t,n,r,o,a){if(a!==d){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h,resetWarningCache:f};return n.PropTypes=n,n},g=m((function(e){e.exports=y()})),v=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},E=function(e){return null!==e&&"object"===o(e)},b=function(e){return E(e)&&"function"==typeof e.then},S=function(e){return E(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},C="[object Object]",w=function e(t,n){if(!E(t)||!E(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===C;if(o!==(Object.prototype.toString.call(n)===C))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var u=0;u<i.length;u+=1)s[i[u]]=!0;var l=Object.keys(s);if(l.length!==a.length)return!1;var p=t,m=n,d=function(t){return e(p[t],m[t])};return l.every(d)},P=function(e,t,n){return E(e)?Object.keys(e).reduce((function(o,i){var s=!E(t)||!w(e[i],t[i]);return n.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",j=function(e){if(null===e||S(e))return e;throw new Error(k)},O=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(j)};var t=j(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},N=t.createContext(null);N.displayName="ElementsContext";var x=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},D=t.createContext(null);D.displayName="CartElementContext";var M=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},L=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return O(n)}),[n]),s=i(t.useState(null),2),c=s[0],u=s[1],l=i(t.useState(null),2),p=l[0],m=l[1],d=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),f=d[0],h=d[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||f.stripe?"sync"!==a.tag||f.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,f,r]);var y=v(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var g=v(r);return t.useEffect((function(){if(f.elements){var e=P(r,g,["clientSecret","fonts"]);e&&f.elements.update(e)}}),[r,g,f.elements]),t.useEffect((function(){var e=f.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[f.stripe]),t.createElement(N.Provider,{value:f},t.createElement(D.Provider,{value:{cart:c,setCart:u,cartState:p,setCartState:m}},o))},A=function(e){var n=t.useContext(N);return x(n,e)},B=function(e){var n=t.useContext(D);return M(n,e)},F=function(){return A("calls useElements()").elements},I=function(){return A("calls useStripe()").stripe},_=function(){return B("calls useCartElement()").cart},T=function(){return B("calls useCartElementState()").cartState},R=function(e){return(0,e.children)(A("mounts <ElementsConsumer>"))};R.propTypes={children:g.func.isRequired};var q=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},H=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},U=function(e,n){var r="".concat(H(e),"Element"),o=n?function(e){A("mounts <".concat(r,">")),B("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,s=n.className,c=n.options,u=void 0===c?{}:c,l=n.onBlur,p=n.onFocus,m=n.onReady,d=n.onChange,f=n.onEscape,h=n.onClick,y=n.onLoadError,g=n.onLoaderStart,E=n.onNetworksChange,b=n.onCheckout,S=n.onLineItemClick,C=n.onConfirm,w=n.onCancel,k=n.onShippingAddressChange,j=n.onShippingRateChange,O=A("mounts <".concat(r,">")).elements,N=i(t.useState(null),2),x=N[0],D=N[1],M=t.useRef(null),L=t.useRef(null),F=B("mounts <".concat(r,">")),I=F.setCart,_=F.setCartState;q(x,"blur",l),q(x,"focus",p),q(x,"escape",f),q(x,"click",h),q(x,"loaderror",y),q(x,"loaderstart",g),q(x,"networkschange",E),q(x,"lineitemclick",S),q(x,"confirm",C),q(x,"cancel",w),q(x,"shippingaddresschange",k),q(x,"shippingratechange",j),"cart"===e?o=function(e){_(e),m&&m(e)}:m&&(o="payButton"===e?m:function(){m(x)}),q(x,"ready",o),q(x,"change","cart"===e?function(e){_(e),d&&d(e)}:d),q(x,"checkout","cart"===e?function(e){_(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===M.current&&O&&null!==L.current){var t=O.create(e,u);"cart"===e&&I&&I(t),M.current=t,D(t),t.mount(L.current)}}),[O,u,I]);var T=v(u);return t.useEffect((function(){if(M.current){var e=P(u,T,["paymentRequest"]);e&&M.current.update(e)}}),[u,T]),t.useLayoutEffect((function(){return function(){M.current&&(M.current.destroy(),M.current=null)}}),[]),t.createElement("div",{id:a,className:s,ref:L})};return o.propTypes={id:g.string,className:g.string,onChange:g.func,onBlur:g.func,onFocus:g.func,onReady:g.func,onEscape:g.func,onClick:g.func,onLoadError:g.func,onLoaderStart:g.func,onNetworksChange:g.func,onCheckout:g.func,onLineItemClick:g.func,onConfirm:g.func,onCancel:g.func,onShippingAddressChange:g.func,onShippingRateChange:g.func,options:g.object},o.displayName=r,o.__elementType=e,o},W="undefined"==typeof window,z=U("auBankAccount",W),V=U("card",W),$=U("cardNumber",W),G=U("cardExpiry",W),X=U("cardCvc",W),Y=U("fpxBank",W),J=U("iban",W),K=U("idealBank",W),Z=U("p24Bank",W),Q=U("epsBank",W),ee=U("payment",W),te=U("payButton",W),ne=U("paymentRequestButton",W),re=U("linkAuthentication",W),oe=U("address",W),ae=U("shippingAddress",W),ie=U("cart",W),se=U("paymentMethodMessaging",W),ce=U("affirmMessage",W),ue=U("afterpayClearpayMessage",W);e.AddressElement=oe,e.AffirmMessageElement=ce,e.AfterpayClearpayMessageElement=ue,e.AuBankAccountElement=z,e.CardCvcElement=X,e.CardElement=V,e.CardExpiryElement=G,e.CardNumberElement=$,e.CartElement=ie,e.Elements=L,e.ElementsConsumer=R,e.EpsBankElement=Q,e.FpxBankElement=Y,e.IbanElement=J,e.IdealBankElement=K,e.LinkAuthenticationElement=re,e.P24BankElement=Z,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=se,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=_,e.useCartElementState=T,e.useElements=F,e.useStripe=I,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(37711))},76266:function(e,t,n){"use strict";n.d(t,{Z:function(){return he}});var r=n(16724),o=n.n(r),a=n(73137),i=n.n(a),s=(n(88196),n(45836),n(91125),n(31405),n(37711)),c=n(58555),u=n(5889),l=n(26562),p=n.n(l),m=n(42074),d=n(75667),f=n(6555),h=n(48640),y=n(45245),g=n(41576),v=n(73002),E=n.n(v),b=n(44731),S=n.n(b);function C(e){var t=e.processing,n=e.reset,r=e.success,o=e.redirecting,a=e.isSignedIn,i=e.error,u=void 0===i?null:i,l=(0,c.$G)().t,m=t||o?"info":r?"success":"danger",d=o?""+l("donate.redirecting"):t?""+l("donate.processing"):r?""+l("donate.thank-you"):""+l("donate.error");return s.createElement(E(),{bsStyle:m,className:"donation-completion",closeLabel:l("buttons.close")},s.createElement("h4",null,s.createElement("b",null,d)),s.createElement("div",{className:"donation-completion-body"},(t||o)&&s.createElement(p(),{className:"user-state-spinner",color:"#0a0a23",fadeIn:"none",name:"line-scale"}),r&&s.createElement("div",null,s.createElement("p",null,l("donate.free-tech")),a&&s.createElement("p",null,l("donate.no-halo"))),u&&s.createElement("p",null,u)),s.createElement("div",{className:"donation-completion-buttons"},u&&s.createElement("div",null,s.createElement(S(),{bsStyle:"primary",onClick:n},l("buttons.try-again")))))}C.displayName="DonateCompletion";var w=C,P=n(52066),k=function(e){return s.createElement("svg",Object.assign({id:"patreon-logo",viewBox:"10 0 2560 356",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),s.createElement("g",null,s.createElement("path",{d:"M1536.54 72.449v76.933h128.24v61.473h-128.24v74.51h128.24v62.921h-206.64V9.529h206.64v62.92h-128.24M2070.82 178.907c0-55.652-37.76-107.434-99.21-107.434-61.95 0-99.21 51.782-99.21 107.434s37.26 107.435 99.21 107.435c61.45 0 99.21-51.783 99.21-107.435zm-278.77 0c0-92.916 66.79-178.093 179.56-178.093 112.26 0 179.05 85.177 179.05 178.093 0 92.916-66.79 178.093-179.05 178.093-112.77 0-179.56-85.177-179.56-178.093zM186.32 131.97c0-31.46-21.299-58.563-54.206-58.563H78.398v117.109h53.716c32.907 0 54.206-27.086 54.206-58.546zM0 9.529h141.788c75.016 0 123.417 56.628 123.417 122.441s-48.401 122.423-123.417 122.423h-63.39v93.893H0V9.529zM492.17 106.314l-41.621 139.382h82.266L492.17 106.314zm73.081 241.972-13.054-41.134H431.69l-13.072 41.134h-83.73L455.882 9.529h72.105l122.442 338.757h-85.178zM782.055 77.277H705.61V9.529h231.793v67.748h-76.951v271.009h-78.397V77.277M2485.08 230.202V9.529h77.91v338.757h-81.78l-121.97-217.78v217.78h-78.4V9.529h81.78l122.46 220.673M1245.68 131.97c0-31.46-21.3-58.563-54.21-58.563h-53.72v117.109h53.72c32.91 0 54.21-27.086 54.21-58.546zM1059.36 9.529h142.29c75 0 123.4 56.628 123.4 122.441 0 47.425-25.17 89.517-67.28 109.369l67.77 106.947h-90.98l-60.03-93.893h-36.78v93.893h-78.39V9.529z"})))};k.displayName="PatreonLogo";var j=k,O=P.patreonClientId,N=function(e){var t=e.postPayment;if(!O||!d.XO||!d.es.successUrl)return null;var n="&client_id="+O,r="https://www.patreon.com/oauth2/become-patron?response_type=code"+("$&min_cents="+d.XO)+n+("&redirect_uri="+d.es.successUrl)+"&scope=identity%20identity[email]";return s.createElement("a",{className:"patreon-button link-button","data-patreon-widget-type":"become-patron-button",href:r,onClick:function(){return t({paymentProvider:d.OH.Patreon})},rel:"noreferrer",target:"_blank"},s.createElement(j,null))},x=n(66556),D=n(29791),M=n(38333),L=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={isSdkLoaded:!!window.paypal,isSubscription:!0},t.onScriptLoad=function(){t.setState({isSdkLoaded:!0}),t.props.onLoad()},t}i()(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.isSubscription;return n!==t.isSubscription?{isSubscription:n}:null};var n=t.prototype;return n.componentDidMount=function(){this.loadScript(this.props.isSubscription,!0)},n.componentWillUnmount=function(){(0,M.wc)("paypal-sdk")},n.componentDidUpdate=function(e){e.isSubscription===this.state.isSubscription&&e.style.color===this.props.style.color&&e.style.tagline===this.props.style.tagline&&e.style.height===this.props.style.height&&e.isMinimalForm===this.props.isMinimalForm||(this.setState({isSdkLoaded:!1}),this.loadScript(this.state.isSubscription,!0))},n.loadScript=function(e,t){t&&(0,M.wc)("paypal-sdk");var n=this.props.isMinimalForm?"card,":"",r="?client-id="+this.props.clientId+"&disable-funding="+n+"credit,bancontact,blik,eps,giropay,ideal,mybank,p24,sepa,sofort,venmo";e&&(r+="&vault=true&intent=subscription"),(0,M.Vs)("paypal-sdk",!0,"https://www.paypal.com/sdk/js"+r,this.onScriptLoad,"paypal")},n.captureOneTimePayment=function(e,t){var n=this;return t.order.capture().then((function(t){return n.props.onApprove(t,e)}))},n.render=function(){var e=this,t=this.state,n=t.isSdkLoaded,r=t.isSubscription,o=this.props,a=o.onApprove,i=o.onError,c=o.onCancel,u=o.createSubscription,l=o.createOrder,p=o.style;if(!n)return s.createElement(s.Fragment,null);var m=window.paypal.Buttons.driver("react",{React:s,ReactDOM:D});return s.createElement(m,{createOrder:r?null:l,createSubscription:r?u:null,onApprove:r?function(e,t){return a(e,t)}:function(t,n){return e.captureOneTimePayment(t,n)},onCancel:c,onError:i,style:p})},t}(s.Component);L.displayName="PayPalButtonScriptLoader";var A=P,B=A.paypalClientId,F=A.deploymentEnv,I=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={amount:d.M4.donationAmount,duration:d.M4.donationDuration,planId:null},n}return i()(t,e),t.getDerivedStateFromProps=function(e){var t=e.donationAmount,n=e.donationDuration,r=(0,d.l7)(t,n,d.IQ[F||"staging"]);return Object.assign({},r)},t.prototype.render=function(){var e=this,t=this.state,n=t.duration,r=t.planId,o=t.amount,a=this.props,i=a.t,c=a.theme,u=a.isPaypalLoading,l=a.isMinimalForm,p="one-time"!==n,m=c===x.b.Night?"white":"gold";return B?s.createElement("div",{className:"paypal-buttons-container"},s.createElement(L,{clientId:B,createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{currency_code:"USD",value:(o/100).toString()}}]})},createSubscription:function(e,t){return t.subscription.create({plan_id:r})},isMinimalForm:l,isPaypalLoading:u,isSubscription:p,onApprove:function(t){e.props.postPayment({paymentProvider:d.OH.Paypal,data:t})},onCancel:function(){e.props.onDonationStateChange({redirecting:!1,processing:!1,success:!1,error:i("donate.failed-pay")})},onError:function(){e.props.handlePaymentButtonLoad("paypal"),e.props.onDonationStateChange({redirecting:!1,processing:!1,success:!1,error:i("donate.try-again")})},onLoad:function(){return e.props.handlePaymentButtonLoad("paypal")},planId:r,style:{tagline:!1,height:43,color:m}})):null},t}(s.Component);I.displayName="PaypalButton";var _=(0,m.P1)(y.np,y.Kt,(function(e,t){return{isDonating:e.isDonating,showLoading:t}}));I.displayName="PaypalButton";var T=(0,u.$j)(_)((0,c.Zh)()(I)),R=n(93987),q=n.n(R),H=n(93868),U=n.n(H),W=(n(88246),n(30424)),z="https://js.stripe.com/v3",V=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,$="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",G=null,X=function(e){return null!==G||(G=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn($),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(z,'"]')),t=0;t<e.length;t++){var n=e[t];if(V.test(n.src))return n}return null}();r&&e?console.warn($):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(z).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),G},Y=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r},J=Promise.resolve().then((function(){return X(null)})),K=!1;J.catch((function(e){K||console.warn(e)}));var Z=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];K=!0;var r=Date.now();return J.then((function(e){return Y(e,t,r)}))},Q=P.stripePublicKey,ee=function(e){var t=e.theme,n=e.t,r=e.onDonationStateChange,o=e.postPayment,a=e.processing,i=(0,s.useState)(!0),c=i[0],u=i[1],l=(0,s.useState)(!1),p=l[0],m=l[1],f=(0,s.useState)([{elementType:"cardNumber",complete:!1,error:null},{elementType:"cardExpiry",complete:!1,error:null}]),h=f[0],y=f[1],g=h.every((function(e){var t=e.complete,n=e.error;return t&&!n})),v=p||a,E=(0,W.useStripe)(),b=(0,W.useElements)();function C(e){var t=e.elementType,n=e.error,r=e.complete;y(h.map((function(e){return e.elementType===t?{elementType:t,error:n,complete:r}:e})))}var w={style:{base:{fontSize:"18px",color:t===x.b.Night?"#fff":"#0a0a23","::placeholder":{color:"#858591"}}}},P=function(){var e=q()(U().mark((function e(t){var a,i,s;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g){e.next=5;break}return e.abrupt("return",u(!1));case 5:u(!0);case 6:if(v||!E||!b){e.next=16;break}if(!(a=b.getElement(W.CardNumberElement))){e.next=16;break}return m(!0),e.next=12,E.createPaymentMethod({type:"card",card:a});case 12:i=e.sent,s=i.paymentMethod,i.error?r({redirecting:!1,processing:!1,success:!1,error:n("donate.went-wrong")}):s&&o({paymentProvider:d.OH.StripeCard,paymentMethodId:s.id,handleAuthentication:k});case 16:return e.abrupt("return",m(!1));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=q()(U().mark((function e(t,n){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=2;break}return e.abrupt("return",E.confirmCardPayment(t,{payment_method:n}));case 2:return e.abrupt("return",{error:{type:"StripeNotLoaded"}});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return s.createElement("form",{className:"donation-form",onSubmit:function(e){P(e)}},s.createElement("div",{className:"donation-elements"+(c?"":" failed-submition")},s.createElement(W.CardNumberElement,{className:"form-control donate-input-element",onChange:C,options:w}),s.createElement(W.CardExpiryElement,{className:"form-control donate-input-element",onChange:C,options:w})),s.createElement("div",{className:"form-status"},!c&&s.createElement("p",null,n("donate.valid-card"))),s.createElement(S(),{block:!0,bsStyle:"primary",className:"confirm-donation-btn",disabled:!E||!b||v,type:"submit"},n("buttons.donate")))},te=function(e){return Q?s.createElement(W.Elements,{stripe:Z(Q)},s.createElement(ee,e)):null},ne=P.stripePublicKey,re=function(e){var t=e.stripe,n=e.label,r=e.amount,o=e.theme,a=e.refreshErrorMessage,i=e.postPayment,c=e.onDonationStateChange,u=e.handlePaymentButtonLoad,l=(0,s.useState)(null),p=l[0],m=l[1],f=(0,s.useState)(null),h=f[0],y=f[1],g=(0,s.useState)(!1),v=g[0],E=g[1];(0,s.useEffect)((function(){if(t){var e=t.paymentRequest({country:"US",currency:"usd",total:{label:n,amount:r},requestPayerName:!0,requestPayerEmail:!0,disableWallets:["browserCard"]});e.on("token",(function(e){var t=e.token,n=e.payerEmail,r=e.payerName;m(t),e.complete("success"),i({paymentProvider:d.OH.Stripe,token:t,payerEmail:n,payerName:r})})),e.canMakePayment().then((function(t){t?(y(e),E(!0)):E(!1)}))}}),[n,r,t,i,u]);return s.createElement("form",{className:"wallets-form"},v&&h&&s.createElement(W.PaymentRequestButtonElement,{onClick:function(){p&&c({redirecting:!1,processing:!1,success:!1,error:a})},onReady:function(){return u("stripe")},options:{style:{paymentRequestButton:{type:"default",theme:o===x.b.Night?"light":"dark",height:"43px"}},paymentRequest:h}}))},oe=function(e){return s.createElement(W.ElementsConsumer,null,(function(t){var n=t.stripe;return s.createElement(re,Object.assign({stripe:n},e))}))},ae=function(e){if(ne){var t=Z(ne);return s.createElement(W.Elements,{stripe:t},s.createElement(oe,e))}return null},ie=n(94800),se=n(65416),ce=function(){return s.createElement(s.Fragment,null,s.createElement(se.G,{icon:ie.byT}),"  ")},ue=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},le=function(e){return ue(e/100)},pe=(0,m.P1)(y.Kt,y.Qi,y.qm,y.cX,y.np,(function(e,t,n,r,o){return{isSignedIn:t,isDonating:n,showLoading:e,donationFormState:r,email:o.email,theme:o.theme}})),me={postCharge:h.Ys,updateDonationFormState:h.Nb},de=function(){return s.createElement("div",{className:" donation-completion donation-completion-loading"},s.createElement(p(),{className:"script-loading-spinner",fadeIn:"none",name:"line-scale"}))},fe=function(e){function t(t){var n;(n=e.call(this,t)||this).postPayment=function(e){var t=e.paymentProvider,r=e.data,o=e.payerEmail,a=e.payerName,i=e.token,s=e.paymentMethodId,c=e.handleAuthentication,u=n.state,l=u.donationAmount,p=u.donationDuration,m=n.props,d=m.paymentContext,f=m.email;n.props.postCharge({paymentProvider:t,paymentContext:d,amount:l,duration:p,data:r,token:i,email:f||o,name:a,paymentMethodId:s,handleAuthentication:c}),n.props.handleProcessing&&n.props.handleProcessing()},n.durations=d.Gx,n.amounts=d.I9;var r=n.props.isMinimalForm?d.yc:d.M4;return n.state=Object.assign({},r),n.onDonationStateChange=n.onDonationStateChange.bind(o()(n)),n.resetDonation=n.resetDonation.bind(o()(n)),n.postPayment=n.postPayment.bind(o()(n)),n.handlePaymentButtonLoad=n.handlePaymentButtonLoad.bind(o()(n)),n}i()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.resetDonation()},n.onDonationStateChange=function(e){window.scrollTo(0,0),this.props.updateDonationFormState(Object.assign({},this.props.donationFormState,e))},n.handlePaymentButtonLoad=function(e){var t;this.props.updateDonationFormState(Object.assign({},this.props.donationFormState,{loading:Object.assign({},this.props.donationFormState.loading,(t={},t[e]=!1,t))}))},n.resetDonation=function(){return this.props.updateDonationFormState(Object.assign({},f.g$))},n.renderButtonGroup=function(){var e=this.state,t=e.donationAmount,n=e.donationDuration,r=this.props,o=r.donationFormState,a=o.loading,i=o.processing,c=r.defaultTheme,u=r.theme,l=r.t,p=r.isMinimalForm,m=r.isSignedIn,d=r.isDonating,f=c||u,h=l("one-time"===n?"donate.wallet-label":"donate.wallet-label-1",{usd:t/100})+":",y=m&&(p||!d);return s.createElement(s.Fragment,null,s.createElement("b",{className:p?"donation-label-modal":""},l("donate.confirm-monthly",{usd:le(t)})),s.createElement(g.Z,{size:"medium"}),s.createElement("fieldset",{className:"donate-btn-group security-legend"},s.createElement("legend",null,s.createElement(ce,null),l("donate.secure-donation")),a.stripe&&a.paypal&&s.createElement(de,null),s.createElement(ae,{amount:t,handlePaymentButtonLoad:this.handlePaymentButtonLoad,label:h,onDonationStateChange:this.onDonationStateChange,postPayment:this.postPayment,refreshErrorMessage:l("donate.refresh-needed"),theme:f}),s.createElement(T,{donationAmount:t,donationDuration:n,handlePaymentButtonLoad:this.handlePaymentButtonLoad,postPayment:this.postPayment,isMinimalForm:y,isPaypalLoading:a.paypal,onDonationStateChange:this.onDonationStateChange,theme:f}),(!a.stripe||!a.paypal)&&s.createElement(N,{postPayment:this.postPayment}),y&&s.createElement(s.Fragment,null,s.createElement("div",{className:"separator"},l("donate.or-card")),s.createElement(te,{onDonationStateChange:this.onDonationStateChange,postPayment:this.postPayment,processing:i,t:l,theme:f}))))},n.renderPageForm=function(){var e=this.state,t=e.donationAmount,n=e.donationDuration,r=this.props.t,o=le(t),a=ue(t/100*50),i=r("donate.your-donation-3",{usd:o,hours:a});return"one-time"===n?i=r("donate.your-donation",{usd:o,hours:a}):"month"===n&&(i=r("donate.your-donation-2",{usd:o,hours:a})),s.createElement(s.Fragment,null,s.createElement("p",{className:"donation-description"},i),s.createElement("div",null,this.renderButtonGroup()))},n.render=function(){var e=this.props,t=e.donationFormState,n=t.processing,r=t.success,o=t.error,a=t.redirecting,i=e.isMinimalForm,c=e.isSignedIn;return r||o?s.createElement(w,{processing:n,redirecting:a,success:r,error:o,isSignedIn:c,reset:this.resetDonation}):s.createElement(s.Fragment,null,(n||a)&&s.createElement(w,{processing:n,redirecting:a,success:r,error:o,isSignedIn:c,reset:this.resetDonation}),s.createElement("div",{className:n||a?"hide":""},i?this.renderButtonGroup():this.renderPageForm()))},t}(s.Component);fe.displayName="DonateForm",fe.displayName="DonateForm";var he=(0,u.$j)(pe,me)((0,c.Zh)()(fe))},38333:function(e,t,n){"use strict";function r(e,t,n,r,o){var a=document.createElement("script");a.type="text/javascript",a.id=e,a.async=t,a.onload=r,a.src=n,a.text=o,document.getElementsByTagName("head")[0].appendChild(a)}function o(e){var t=document.getElementById(e);t&&t.remove()}function a(){r("mathjax",!1,"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",null,"MathJax.Hub.Config({\n      tex2jax: {\n        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],\n        processEscapes: true,\n        processClass: 'rosetta-code|project-euler|intermediate-algorithm-scripting'\n      }\n    });\n    MathJax.Hub.Queue([\n      'Typeset',\n      MathJax.Hub,\n      document.querySelector('intermediate-algorithm-scripting'),\n      document.querySelector('.rosetta-code'),\n      document.querySelector('.project-euler')\n    ]);")}n.d(t,{LE:function(){return a},Vs:function(){return r},wc:function(){return o}})}}]);
//# sourceMappingURL=bc71278072746e31a5276ce38791f7b74da34c13-ec038b774d417962f92e.js.map