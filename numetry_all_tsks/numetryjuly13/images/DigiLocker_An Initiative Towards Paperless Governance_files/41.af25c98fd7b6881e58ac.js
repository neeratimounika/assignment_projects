(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/0te":function(n,t,o){"use strict";o.r(t),t.default="ion-text {\n  color: #000;\n  margin-bottom: 8px;\n  font-size: 17px;\n}"},Eihb:function(n,t,o){"use strict";o.r(t),o.d(t,"PrivacyPolicyPageModule",(function(){return g}));var i=o("mrSG"),e=o("fXoL"),r=o("ofXK"),a=o("3Pt+"),c=o("sYmb"),s=o("TEn/"),l=o("tyNb"),d=o("9ans"),b=o("jhN1");let u=class{constructor(n,t){this.auth=n,this.titleService=t}ionViewDidEnter(){this.titleService.setTitle("Privacy Policy")}ngOnInit(){}};u.ctorParameters=()=>[{type:d.a},{type:b.d}],u=Object(i.c)([Object(e.n)({selector:"app-privacy-policy",template:Object(i.e)(o("sCK4")).default,styles:[Object(i.e)(o("/0te")).default]})],u);const p=[{path:"",component:u}];let f=class{};f=Object(i.c)([Object(e.M)({imports:[l.i.forChild(p)],exports:[l.i]})],f);var m=o("aDnW");let g=class{};g=Object(i.c)([Object(e.M)({imports:[r.b,a.b,s.d,f,c.b.forChild(),m.a],declarations:[u]})],g)},sCK4:function(n,t,o){"use strict";o.r(t),t.default='\x3c!-- <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot="start">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons> --\x3e\n\x3c!-- <ion-title>About</ion-title> --\x3e\n\x3c!-- </ion-toolbar>\n</ion-header> --\x3e\n\n<ion-content>\n    <ion-grid [fixed]="true">\n        <div class="pageMargin"></div>\n        <ion-toolbar>\n            <ion-title color="tertiary">\n                <strong>{{\'DigiLocker\' | translate}} {{\'Privacy Policy\' | translate}} </strong></ion-title>\n            <ion-buttons slot="start" *ngIf="auth.isLogin()">\n                <ion-button routerLink="/about" size="small" color="primary" fill="clear" shape="round">\n                    <ion-icon name="arrow-back"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n        <ion-card mode="ios" class="ion-padding ion-no-margin ion-margin-bottom">\n            <ion-card-content class="ion-padding" mode="ios">\n\n                <div [innerHTML]="\'privacyPolicyPara1\' | translate"></div>\n\n            </ion-card-content>\n        </ion-card>\n    </ion-grid>\n    <app-footer *ngIf="!auth.isLogin()"></app-footer>\n</ion-content>'}}]);