(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{UUSl:function(t,i,e){"use strict";e.r(i),e.d(i,"SignupPageModule",(function(){return f}));var n=e("mrSG"),o=e("fXoL"),s=e("ofXK"),a=e("3Pt+"),r=e("TEn/"),l=e("tyNb"),u=e("9ans"),c=e("AytR"),g=e("NFKh");let h=class{constructor(t,i){var e;this.auth=t,this.navCtlr=i,this.did=null,this.signin=null,this.signup=null,this.signature=Object(g.MD5)(this.did).toString(),this.url=c.a.signUpUrl,this.language=null!==(e=localStorage.getItem("language"))&&void 0!==e?e:c.a.defaultLanguage,this.auth.getDeviceId()}ngOnInit(){if(this.auth.isLogin())this.navCtlr.navigateRoot("home");else if(this.did=this.auth.getDeviceId(),this.did){let t=Object(g.MD5)(this.did).toString();this.signin=c.a.loginUrl+t+"--"+this.language,this.signup=c.a.signUpUrl+t+"--"+this.language,this.auth.isLogin()?this.navCtlr.navigateRoot("home"):location.href=this.signup}else location.href=""}};h.ctorParameters=()=>[{type:u.a},{type:r.i}],Object(n.c)([Object(o.nb)("vidForm")],h.prototype,"vidForm",void 0),h=Object(n.c)([Object(o.n)({selector:"app-signup",template:Object(n.e)(e("vfPX")).default,styles:[Object(n.e)(e("bYg9")).default]})],h);const d=[{path:"",component:h}];let p=class{};p=Object(n.c)([Object(o.M)({imports:[l.i.forChild(d)],exports:[l.i]})],p);var b=e("aDnW");let f=class{};f=Object(n.c)([Object(o.M)({imports:[s.b,a.b,r.d,p,b.a],declarations:[h]})],f)},bYg9:function(t,i,e){"use strict";e.r(i),i.default=""},vfPX:function(t,i,e){"use strict";e.r(i),i.default='<app-header *ngIf="!auth.isLogin()"></app-header>\n<ion-content>\n<ion-row >\n    <ion-col>\n      <ion-progress-bar type="indeterminate"></ion-progress-bar>\n    </ion-col>\n </ion-row>\n  <form #vidForm ngNoForm name="vidForm" [action]="url" target="_self" method="POST">\n    <input type="text" [hidden]="\'true\'" name="device-security-id" [value]="signature">\n  <button type="submit" [hidden]="\'true\'" ></button>\n  </form>\n</ion-content>\n'}}]);