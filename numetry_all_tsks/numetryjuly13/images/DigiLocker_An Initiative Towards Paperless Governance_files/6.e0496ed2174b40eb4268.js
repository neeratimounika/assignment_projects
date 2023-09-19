(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2zOn":function(n,t,e){"use strict";e.r(t),e.d(t,"CreateUsingAadhaarPageModule",(function(){return g}));var o=e("mrSG"),i=e("fXoL"),a=e("ofXK"),r=e("3Pt+"),s=e("TEn/"),l=e("sYmb"),h=e("tyNb"),d=e("sRcL"),c=e("AytR"),m=e("VBEu");let u=class{constructor(n,t,e,o,i){this.formBuilder=n,this.ajax=t,this.navCtlr=e,this.platform=o,this.encrypt=i,this.deviceSize=this.platform.isLandscape(),this.isSubmitted=!1,this.txnId=null,this.cotp=!1,this.otpShow=!1,this.maxTime=120,this.healthConsent=!1}ngAfterViewChecked(){this.uhidByAadhaarForm.controls.otp.valid||this.otpElement.setFocus()}ngOnInit(){this.validationArray={aadhaar:[{value:"",disabled:!1},[r.f.required,r.f.pattern("^[0-9]+$"),r.f.maxLength(12),r.f.minLength(12)]],consent:[{value:null,disabled:!1},[r.f.required]],otp:[{value:"",disabled:!1},[]],healthId:[{value:"",disabled:!1},[r.f.pattern("^[0-9A-Za-z]+$")]]},this.uhidByAadhaarForm=this.formBuilder.group(this.validationArray)}submitUhidByAadhaarForm(){if(this.isSubmitted=!0,!this.uhidByAadhaarForm.valid)return!1;{this.ajax.showLoader();let n={"content-type":"application/json"},t=this.uhidByAadhaarForm.value.otp?c.a.uhid_verify_aadhaar_otp:c.a.uhid_generate_aadhaar_otp,e=this.uhidByAadhaarForm.get("consent").value?"true":"false",o=this.uhidByAadhaarForm.value.otp?JSON.stringify({otp:this.uhidByAadhaarForm.get("otp").value,txnId:this.txnId,username:this.uhidByAadhaarForm.get("healthId").value.trim()}):JSON.stringify({aadhaar:this.uhidByAadhaarForm.get("aadhaar").value,consent:e}),i=this.encrypt.getEncryptedValue(o);this.ajax.postMethod(t,JSON.stringify({payload:i}),n).subscribe(n=>{this.ajax.hideLoader(),null!=n.healthIdNumber&&(this.ajax.showToast("Your Health ID Number "+n.healthIdNumber+" is generated successfully,Your Health ID card is available in Issued Documents",5e3,"success","bottom"),this.navCtlr.navigateForward("issued-documents")),null!=n.txnId&&(this.isSubmitted=!1,this.txnId=n.txnId,this.cotp=!0,this.StartTimer(),this.validationArray.aadhaar=[{value:this.uhidByAadhaarForm.get("aadhaar").value,disabled:!0},[r.f.required,r.f.pattern("^[0-9]+$"),r.f.maxLength(10),r.f.minLength(10)]],this.validationArray.consent=[{value:this.uhidByAadhaarForm.get("consent").value,disabled:!1},[r.f.required]],this.validationArray.otp=["",[r.f.required,r.f.pattern("^[0-9]+$"),r.f.maxLength(6),r.f.minLength(6)]],this.validationArray.healthId=["",[r.f.required,r.f.pattern("^[0-9A-Za-z]+$")]],this.uhidByAadhaarForm=this.formBuilder.group(this.validationArray))})}}get errorControl(){return this.uhidByAadhaarForm.controls}changeType(n){this.otpShow=!this.otpShow}resendOtp(){this.maxTime=120,this.uhidByAadhaarForm.value.otp="";let n=c.a.uhid_regenerate_aadhaar_otp,t={txnId:this.txnId};this.ajax.postMethod(n,t,{}).subscribe(n=>{this.isSubmitted=!1,this.StartTimer()})}StartTimer(){setTimeout(n=>{this.maxTime>0&&(this.StartTimer(),this.maxTime=this.maxTime-1)},1e3)}dismiss(){this.navCtlr.back()}};u.ctorParameters=()=>[{type:r.a},{type:d.a},{type:s.i},{type:s.k},{type:m.a}],Object(o.c)([Object(i.nb)("aadhaar")],u.prototype,"aadhaarElement",void 0),Object(o.c)([Object(i.nb)("otp")],u.prototype,"otpElement",void 0),u=Object(o.c)([Object(i.n)({selector:"app-create-using-aadhaar",template:Object(o.e)(e("RiXK")).default,styles:[Object(o.e)(e("pEiW")).default]})],u);const p=[{path:"",component:u}];let b=class{};b=Object(o.c)([Object(i.M)({imports:[h.i.forChild(p)],exports:[h.i]})],b);let g=class{};g=Object(o.c)([Object(i.M)({imports:[a.b,r.b,r.e,s.d,l.b.forChild(),b],declarations:[u]})],g)},RiXK:function(n,t,e){"use strict";e.r(t),t.default='<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot="start">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class="ion-padding">\n    <div style="height: 10px;"></div>\n    <ion-grid [fixed]="true">\n        <ion-toolbar>\n            <ion-title color="tertiary">\n                <strong>{{\'Create your Health ID using Aadhaar Number\' | translate}}</strong>\n            </ion-title>\n            <ion-buttons slot="start">\n                <ion-button (click)="dismiss()" color="dark" fill="clear" shape="round" size="small">\n                    <ion-icon ios="arrow-back" md="arrow-back"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-grid>\n    <ion-grid [fixed]="true">\n        <ion-row>\n            <ion-col size-md="8">\n                <ion-card mode="ios" class="ion-padding ion-no-margin">\n                    <form [formGroup]="uhidByAadhaarForm" (ngSubmit)="submitUhidByAadhaarForm()" novalidate>\n                        <div>\n                            <ion-row>\n                                <ion-col size-md="4" size="12" *ngIf="deviceSize">\n                                    <ion-item lines="none">\n                                        <ion-label>{{\'Aadhaar Number\' | translate}}</ion-label>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col size-md="8" size="12">\n                                    <ion-item lines="full" mode="md">\n                                        <ion-label position="floating" *ngIf="!deviceSize">{{\'Aadhaar Number\' | translate}}\n                                        </ion-label>\n                                        <ion-input type="text" formControlName="aadhaar" minlength="12" maxlength="12" (keypress)="ajax.numberOnlyValidation($event)" [attr.disabled]="cotp" placeholder="Ex. 123456789123" required #aadhaar></ion-input>\n                                    </ion-item>\n                                    <p *ngIf="isSubmitted && errorControl.aadhaar.errors?.required">\n                                        <ion-text color="danger" class="ion-margin">\n                                            {{\'Aadhaar Number is required\' | translate}}\n                                        </ion-text>\n                                    </p>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf="!cotp">\n                                <ion-col>\n                                    <ion-list>\n                                        <ion-item lines="none" mode="md">\n                                            <ion-text>\n                                                <p *ngIf="!healthConsent">{{\'healthConsentshort\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent1\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent2\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent3\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent4\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent5\' | translate}}</p>\n                                                <p *ngIf="healthConsent">{{\'healthConsent6\' | translate}}</p>\n                                                \x3c!-- <ion-button fill="clear" (click)="healthConsent = !healthConsent">Show -<span\n                                                    [innerHtml]="healthConsent ? \'less\' : \'More...\'"> </span></ion-button> --\x3e\n                                                <a class="cursor" (click)="healthConsent = !healthConsent">Show <span\n                                                        [innerHtml]="healthConsent ? \'less\' : \'More...\'"> </span></a>\n                                            </ion-text>\n                                            <ion-checkbox slot="start" formControlName="consent" [checked]="cChecked" [attr.disabled]="cotp" required></ion-checkbox>\n                                        </ion-item>\n                                    </ion-list>\n                                    <p *ngIf="isSubmitted && errorControl.consent.errors?.required">\n                                        <ion-text color="danger" class="ion-margin">\n                                            {{\'Consent is required.\' | translate}}\n                                        </ion-text>\n                                    </p>\n                                </ion-col>\n                            </ion-row>\n                            \x3c!-- <ion-row *ngIf="!cotp">\n                                <ion-col>\n                                    <ion-item lines="none">\n                                        <ion-label>\n                                            <ion-text routerLink="/uhid/create-using-mobile" routerDirection="root" class="cursor ion-margin-left" color="primary">{{\'Register with mobile\' | translate}}</ion-text>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row> --\x3e\n                            <ion-row *ngIf="cotp">\n                                <ion-col size-md="4" size="12">\n                                    <ion-item lines="none">\n                                        <ion-label>{{\'OTP\' |translate}}</ion-label>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col size-md="8" size="12">\n                                    <ion-item lines="full">\n                                        <ion-input type="{{otpShow? \'text\': \'password\'}}" minlength="6" maxlength="6" (keypress)="ajax.numberOnlyValidation($event)" formControlName="otp" #otp>\n                                        </ion-input>\n                                        <ion-icon class="cursor" *ngIf="!errorControl.otp.pristine" (click)="changeType(\'otp\') " color="{{otpShow? \'primary\': \'dark\'}}" name="{{otpShow? \'eye\': \'eye-off\'}}" slot="end"></ion-icon>\n                                    </ion-item>\n                                    <p *ngIf="isSubmitted && errorControl.otp.errors?.required">\n                                        <ion-text color="danger" class="ion-margin">\n                                            {{\'OTP is required\' | translate}}\n                                        </ion-text>\n                                    </p>\n                                    <ion-row>\n                                        <ion-col>\n                                            <ion-text *ngIf="otp" color="{{maxTime?\'dark\':\'primary\'}}">\n                                                {{(maxTime>0)?\'Wait for the OTP, if not received try resend otp after \'+maxTime+\' second\':\'\'}}\n\n                                            </ion-text>\n                                            <p *ngIf="!maxTime && otp" class="ion-no-margin-top">\n                                                <ion-text (click)="resendOtp()" type="submit" fill="clear" size="small" class="cursor" color="primary">{{\'Resend OTP\' | translate}}\n                                                </ion-text>\n                                            </p>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf="cotp">\n                                <ion-col size-md="4" size="12">\n                                    <ion-item lines="none">\n                                        <ion-label>{{\'Enter Health ID\' | translate}}</ion-label>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col size-md="8" size="12">\n                                    <ion-item lines="full">\n                                        <ion-input type="text" formControlName="healthId" required></ion-input>\n                                        <b>@abdm</b>\n                                    </ion-item>\n                                    <ion-text color="danger" class="ion-margin" *ngIf="isSubmitted && errorControl.healthId.errors?.required">\n                                        {{\'Health ID\' | translate}} {{"Req" | translate}}\n                                    </ion-text>\n                                    <ion-text color="danger" class="ion-margin" *ngIf="errorControl.healthId.errors?.pattern">\n                                        {{\'Only characters and numbers allowed.\' | translate}}\n                                    </ion-text>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                        <ion-button type="submit" color="primary" class="ion-float-right">{{\'Submit\' | translate}}\n                        </ion-button>\n                    </form>\n                </ion-card>\n                <p *ngIf="!cotp" class="ion-text-center">{{"Already have health ID?" | translate}}\n                    <ion-text routerLink="/uhid" routerDirection="root" class="cursor" color="primary">{{\'Get Your Health ID card\' | translate}}</ion-text>\n                </p>\n                \x3c!-- <p *ngIf="cotp && !maxTime " class="ion-text-center">{{"Did not get OTP?" | translate}}\n                    <ion-text routerLink="/uhid/create-using-mobile" routerDirection="root" class="cursor" color="primary">{{\'Register with mobile\' | translate}}</ion-text>\n                </p> --\x3e\n            </ion-col>\n            <ion-col size-md="4" class="ion-no-padding" *ngIf="deviceSize">\n                <ion-card mode="ios" color="warning" class="ion-no-margin-top">\n                    <ion-card-content>\n                        <ion-text>\n                            <h4>Health ID is a hassle-free method of accessing your health records digitally. The Health ID can be used at a participating healthcare facility to receive your lab reports, prescriptions and diagnosis digitally.</h4>\n                            <a href="https://ndhm.gov.in/faq" target="_blank">Know More</a>\n                        </ion-text>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'},pEiW:function(n,t,e){"use strict";e.r(t),t.default=""}}]);