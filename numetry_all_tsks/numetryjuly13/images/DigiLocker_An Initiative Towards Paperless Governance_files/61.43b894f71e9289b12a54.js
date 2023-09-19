(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"6V3l":function(n,e,t){"use strict";t.r(e),e.default=".card {\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n}\n\nion-item .item-native {\n  background-color: #FBFBFB;\n}\n\n.card-content-ios {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.sc-ion-modal-md-h {\n  --max-height: 200px!important;\n}\n\n@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .sc-ion-modal-md-h {\n    --height: 250px!important;\n  }\n}"},OKpi:function(n,e,t){"use strict";t.r(e),t.d(e,"HipsPageModule",(function(){return g}));var o=t("mrSG"),i=t("fXoL"),s=t("ofXK"),a=t("3Pt+"),r=t("TEn/"),l=t("tyNb"),c=t("AytR"),d=t("sRcL"),p=t("mP49");let h=class{constructor(n,e,t,o){this.router=n,this.navCtlr=e,this.ajax=t,this.modalController=o,this.abhaRecords=[],this.isSkeleton=!0,this.abhaRecords}ngOnInit(){const n=this.router.getCurrentNavigation().extras.state;n.token?(this.isSkeleton=!1,this.phrtoken=n.token,this.myRecords=n.resp,this.myRecords.patient.links.forEach(n=>{n.expanded=!1,this.abhaRecords.push(n)})):this.navCtlr.navigateBack("digilocker-services/health-locker")}reqTypeCR(n){this.abhaLoader();let e=[n.id],t={"content-type":"application/json","X-AUTH-TOKEN":this.phrtoken},o=c.a.phrPostLoginCalls,i={reqType:"cr",reloadConsent:"true",hipIds:e};this.ajax.postMethod(o,i,t).subscribe(t=>{if(t.status){let o=[];for(let n of e)o.push(t.response[n]);this.crstatus(o,n)}else this.abhaLoaderdismiss(),this.ajax.showToast(t.response.message,5e3,"warning")})}crstatus(n,e){let t={"content-type":"application/json","X-AUTH-TOKEN":this.phrtoken},o=c.a.phrPostLoginCalls,i={reqType:"crstatus",requestIds:n};this.ajax.postMethod(o,i,t).subscribe(n=>{this.abhaLoaderdismiss(),n.status?this.navCtlr.navigateForward("services/abha/hips/records",{state:{resp:n.response.statuses[0],hip:e,token:this.phrtoken,profile:n}}):this.ajax.showToast(n.response.message,5e3,"warning")})}abhaLoader(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:p.a,cssClass:"abhaloaderView",swipeToClose:!0,componentProps:{},backdropDismiss:!1});n.present(),n.onDidDismiss().then(n=>{})}))}abhaLoaderdismiss(){return Object(o.b)(this,void 0,void 0,(function*(){yield this.modalController.dismiss()}))}dismiss(){this.navCtlr.pop()}expandItem(n,e){n.expanded?n.expanded=!1:this[e].map(e=>(e.expanded=n==e&&!e.expanded,e))}};h.ctorParameters=()=>[{type:l.g},{type:r.i},{type:d.a},{type:r.h}],h=Object(o.c)([Object(i.n)({selector:"app-hips",template:Object(o.e)(t("fUbb")).default,styles:[Object(o.e)(t("6V3l")).default]})],h);const b=[{path:"",component:h},{path:"records",loadChildren:()=>Promise.all([t.e(0),t.e(64)]).then(t.bind(null,"T8/b")).then(n=>n.RecordsPageModule)},{path:"links",loadChildren:()=>t.e(62).then(t.bind(null,"XLKO")).then(n=>n.LinksPageModule)}];let m=class{};m=Object(o.c)([Object(i.M)({imports:[l.i.forChild(b)],exports:[l.i]})],m);var u=t("aDnW");let g=class{};g=Object(o.c)([Object(i.M)({imports:[s.b,a.b,r.d,m,u.a],declarations:[h]})],g)},fUbb:function(n,e,t){"use strict";t.r(e),e.default='\x3c!-- <ion-header>\n    <ion-toolbar>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header> --\x3e\n\n<ion-content class="ion-padding">\n    <div class="pageMargin"></div>\n    <ion-grid [fixed]="true" *ngIf="!isSkeleton">\n        <ion-row class="ion-no-padding">\n            <ion-col size-md="8" size="12">\n                <ion-toolbar>\n                    <ion-title color="tertiary">\n                        <strong> Linked Health Facilities ({{myRecords[\'patient\']["id"]}}) </strong>\n                    </ion-title>\n                    <ion-buttons slot="start">\n                        <ion-button (click)="dismiss()" color="dark" fill="clear" shape="round" size="small">\n                            <ion-icon ios="arrow-back" md="arrow-back"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            \x3c!-- <ion-col size-md="4" size="12">\n                <ion-button color="primary" size="small" style="text-align: right; padding-right: 20px;">Fetch Health Facilities/Records</ion-button>\n            </ion-col> --\x3e\n        </ion-row>\n        <ion-row>\n            <ion-col size="12">\n                <ion-card style="margin-bottom: 12px; margin-top: 0px;" class="cursor" mode="ios" *ngFor="let hips of this.abhaRecords">\n                    <ion-item lines="full">\n                        <ion-icon (click)="expandItem(hips, \'abhaRecords\')" name="business" style="color: rgb(39, 25, 165);" slot="start"></ion-icon>\n                        <ion-label (click)="expandItem(hips, \'abhaRecords\')">\n                            <h3>\n                                {{hips["hip"].name}}\n                            </h3>\n                            <small>\n                                {{hips["hip"].id}}\n                            </small>\n                        </ion-label>\n\n                        <ion-button (click)="reqTypeCR(hips[\'hip\'])" fill="" style="color: rgb(39, 25, 165);" slot="end"><strong>Pull Records </strong></ion-button>\n                    </ion-item>\n\n\n                    <app-expandable expandHeight="auto" [expanded]="hips.expanded">\n                        <ion-card-content style="margin-top: 1px; background-color: #FBFBFB;" class=" cursor ion-no-margin" mode="ios">\n                            <ion-item lines="full" *ngFor="let careContext of hips[\'careContexts\']" style="background-color: #FBFBFB;">\n                                <ion-icon name="" style="color: rgb(39, 25, 165);" slot="start" style="margin-right: 5px"></ion-icon>\n                                <ion-label>\n                                    <h3>\n                                        {{careContext.display}}\n                                    </h3>\n                                    <small>\n                                        Patient ID - {{careContext.referenceNumber}}\n                                    </small>\n                                </ion-label>\n                                \x3c!-- <ion-text>\n                                    Patient ID - {{hips["referenceNumber"]}}\n                                </ion-text> --\x3e\n                            </ion-item>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n    <ion-grid [fixed]="true" *ngIf="isSkeleton">\n        <ion-row>\n            <ion-col>\n                <ion-card mode="ios" class="ion-margin " *ngFor="let list of [].constructor(3)">\n                    <ion-item lines="none">\n                        <ion-avatar slot="start">\n                            <ion-skeleton-text animated></ion-skeleton-text>\n                        </ion-avatar>\n                        <ion-label>\n                            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n                        </ion-label>\n                        <ion-label>\n                            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n                        </ion-label>\n                        <ion-label>\n                            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n                        </ion-label>\n                        <ion-icon name="ellipse" color="light"></ion-icon>\n                        <ion-icon name="ellipse" color="light"></ion-icon>\n                    </ion-item>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'}}]);