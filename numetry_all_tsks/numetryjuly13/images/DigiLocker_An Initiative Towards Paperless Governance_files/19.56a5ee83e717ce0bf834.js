(window.webpackJsonp=window.webpackJsonp||[]).push([[19,141],{"723k":function(n,e,i){"use strict";i.r(e),i.d(e,"ProfilePageModule",(function(){return I}));var o=i("mrSG"),t=i("fXoL"),a=i("ofXK"),l=i("3Pt+"),s=i("sYmb"),r=i("TEn/"),c=i("tyNb"),d=i("AytR"),m=i("sRcL"),p=i("9ans"),h=i("WAqu"),g=i("y5PO"),f=i("DMre"),u=i("pZaC"),b=i("CapT"),v=i("goW5"),y=i("jhN1"),D=i("QKxH");let x=class{constructor(n,e,i,o,t,a,l){this.ajax=n,this.modalController=e,this.alertCtrl=i,this.auth=o,this.navCtlr=t,this.titleService=a,this._translate=l,this.profile=null,this.profileData=[],this.getNominee=null,this.nonAadhaar=!1,this.profilePhoto=null,this.profilemobileno=null,this.verifiedUserTypes=[],this.photo=!0,this.imageChangedEvent="",this.croppedImage=""}ionViewDidEnter(){this.titleService.setTitle("Profile")}ngOnInit(){this.profile=this.auth.userProfile(),this.verifiedUserTypes=d.a.verified_user_type,this.getProfileDetails(),this.getProfilePhoto(),this.verifiedUserTypes.includes(this.profile.user_type)?(this.photo=!1,this.getNomineeDetails()):this.nonAadhaar=!0}verifyAadhar(){return Object(o.b)(this,void 0,void 0,(function*(){this.navCtlr.navigateForward("verify-aadhaar")}))}img(){return this.getProfilePhoto(),!0}getProfilePhoto(){return Object(o.b)(this,void 0,void 0,(function*(){"missing"==localStorage.getItem("avatar")||null==localStorage.getItem("avatar")?this.profilePhoto=null:this.profilePhoto="data:image/png;base64,"+localStorage.getItem("avatar")}))}getProfilenonAadhaar(){return Object(o.b)(this,void 0,void 0,(function*(){yield this.ajax.postMethod(d.a.get_image,"",{}).subscribe(n=>{"success"==n.status&&(localStorage.setItem("avatar",n.Body),this.profilePhoto="data:image/png;base64,"+n.Body)})}))}getProfileDetails(){return Object(o.b)(this,void 0,void 0,(function*(){yield this.ajax.postMethod(d.a.profile,"",{}).subscribe(n=>{n.customDob=n.date_of_birth?n.date_of_birth.slice(0,10):null,this.profileData=n,this.profilemobileno=this.profileData.mobile})}))}getNomineeDetails(){return Object(o.b)(this,void 0,void 0,(function*(){yield this.ajax.postMethod(d.a.get_nominee,"",{}).subscribe(n=>{this.getNominee=n})}))}updateProfile(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:v.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{profile:this.profileData},backdropDismiss:!1});n.present(),n.onDidDismiss().then(n=>{n.data.dismissed&&this.getProfileDetails()})}))}updateMobile(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:h.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{profile:this.profileData},backdropDismiss:!1});n.present(),n.onDidDismiss().then(n=>{n.data.dismissed&&this.getProfileDetails()})}))}updateEmail(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:g.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{profile:this.profileData},backdropDismiss:!1});n.present(),n.onDidDismiss().then(n=>{n.data.dismissed&&this.getProfileDetails()})}))}verifyEmail(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:f.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{profile:this.profileData},backdropDismiss:!1});n.present(),n.onDidDismiss().then(n=>{n.data.dismissed&&this.getProfileDetails()})}))}updatePIN(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:u.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{profile:this.profileData},backdropDismiss:!1});n.present(),n.onDidDismiss().then(n=>{n.data.dismissed&&this.getProfileDetails()})}))}addNominee(){return Object(o.b)(this,void 0,void 0,(function*(){""!=this.profileData.mobile?this.navCtlr.navigateRoot("profile/add-nominee",{state:this.profileData}):this.addMobileAlert()}))}viewNominee(){return Object(o.b)(this,void 0,void 0,(function*(){(yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{nominee:this.getNominee},backdropDismiss:!1})).present()}))}deleteNominee(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:this._translate.instant("Delete Nominee?"),message:this._translate.instant("Would you like to delete nominee ")+this.getNominee.name+" ?",buttons:[{text:this._translate.instant("Cancel"),role:"cancel",cssClass:"primary"},{text:this._translate.instant("Delete"),role:"delete",cssClass:"danger"}]});n.present(),n.onDidDismiss().then(n=>{if("delete"==n.role){let n=encodeURI("username="+this.getNominee.username+"&nominee_id="+this.getNominee.nominee_id);this.ajax.postMethod(d.a.delete_nominee,n,{}).subscribe(n=>{"success"==n.status?(this.ajax.showToast("Nominee deleted successfully.",5e3,"success","bottom"),this.getNomineeDetails()):this.ajax.showToast(n.error_description,5e3,"danger","bottom")})}})}))}cropimageModel(n){return Object(o.b)(this,void 0,void 0,(function*(){var e=n.target.files;if(e.length>0){var i=e[0];if("image/jpeg"==i.type||"image/jpg"==i.type||"image/png"==i.type){const e=yield this.modalController.create({component:D.a,cssClass:"options-modal",swipeToClose:!0,componentProps:{photoEvent:n},backdropDismiss:!1});e.present(),e.onDidDismiss().then(n=>{n.data.dismissed&&this.getProfilenonAadhaar()})}else this.ajax.showToast("File format is not supported.",5e3,"danger")}}))}addMobileAlert(){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"",message:this._translate.instant("Nominee feature requires mobile number authentication, Please add mobile number in your account"),buttons:[{text:this._translate.instant("Cancel"),role:"cancel",cssClass:"primary"},{text:this._translate.instant("Add Mobile"),role:"addmob",cssClass:"danger"}]});n.present(),n.onDidDismiss().then(n=>{"addmob"==n.role&&this.updateMobile()})}))}};x.ctorParameters=()=>[{type:m.a},{type:r.h},{type:r.a},{type:p.a},{type:r.i},{type:y.d},{type:s.c}],x=Object(o.c)([Object(t.n)({selector:"app-profile",template:Object(o.e)(i("VVTS")).default,styles:[Object(o.e)(i("EGjV")).default]})],x);const w=[{path:"",component:x},{path:"add-nominee",loadChildren:()=>i.e(58).then(i.bind(null,"UJ48")).then(n=>n.AddNomineePageModule)}];let z=class{};z=Object(o.c)([Object(t.M)({imports:[c.i.forChild(w)],exports:[c.i]})],z);var k=i("og1k");let I=class{};I=Object(o.c)([Object(t.M)({imports:[k.a,a.b,l.b,r.d,z,s.b.forChild()],declarations:[x]})],I)},EGjV:function(n,e,i){"use strict";i.r(e),e.default='ion-card-header {\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n}\n\nion-card-header {\n  --ion-background-color: #f8f9fc !important;\n  --background: #f8f9fc !important;\n}\n\nion-card-header ion-toolbar {\n  min-height: 0px !important;\n  --min-height: 0px;\n  --max-height: 22px;\n}\n\n.toolbar-background {\n  background: #f8f9fc;\n}\n\nion-thumbnail {\n  --size: 110px;\n}\n\nion-thumbnail ion-img {\n  padding: 2px;\n  border-radius: 12px;\n}\n\n.centerImg {\n  margin: auto;\n}\n\n.image {\n  height: 9vw !important;\n  width: 9vw !important;\n  border: 2px solid #fff;\n  border-radius: 60%;\n  box-shadow: 0 0 5px gray;\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.circle-pic {\n  border-radius: 80% !important;\n  overflow: hidden;\n}\n\n.circle-pic:hover {\n  border-radius: 80% !important;\n  content: "update Photo";\n  overflow: hidden;\n}\n\nion-avatar {\n  height: 100%;\n  width: 100%;\n}\n\n.prifileImage :hover .hoverButton {\n  opacity: 100;\n}\n\n.prifileImage :hover .hoverButton img {\n  opacity: 100;\n}\n\n.prifileImage img {\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n}\n\n.prifileImage .hoverButton {\n  position: absolute;\n  top: 20px;\n  padding-top: 26px;\n  padding-bottom: 29px;\n  padding-left: 21px;\n  padding-right: 21px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.696);\n  color: #fff;\n  opacity: 0;\n}\n\n.prifileImage .hoverButton img {\n  opacity: 0;\n}\n\np {\n  color: #000;\n}\n\n.multiline-label {\n  display: flex;\n  align-items: center;\n}\n\n.flex-container {\n  display: flex;\n}\n\n.text {\n  white-space: pre-wrap;\n  word-break: break-word;\n}'},VBEu:function(n,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i("mrSG"),t=i("fXoL"),a=i("NFKh"),l=i("9ans"),s=i("4pnn");let r=class{constructor(n,e){this.auth=n,this.CookieService=e}encryptedAES(n){let e=Object(a.MD5)(this.auth.userProfile().dlId).toString();var i=a.enc.Utf8.parse(e),o=a.enc.Utf8.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),t=a.AES.encrypt(n,i,{iv:o}).toString();return encodeURI(t.replace(/\+/g,"---"))}getEncryptedValue(n){let e=this.auth.userProfile().dlId.slice(0,16),i=Object(a.MD5)(e).toString(),o=a.enc.Utf8.parse(e),t=a.enc.Utf8.parse(i),l=a.AES.encrypt(n,t,{iv:o}).toString();return encodeURI(l.replace(/\+/g,"---"))}decryptedAES(n){let e=n.replaceAll("---","+"),i=this.CookieService.get("d")?this.CookieService.get("d").replace(/"/g,""):"",o=Object(a.MD5)(i+this.auth.userProfile().dlId).toString();var t=a.enc.Utf8.parse(o),l=a.enc.Utf8.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");return a.AES.decrypt(e,t,{iv:l}).toString(a.enc.Utf8)}};r.ctorParameters=()=>[{type:l.a},{type:s.c}],r=Object(o.c)([Object(t.E)({providedIn:"root"})],r)},VVTS:function(n,e,i){"use strict";i.r(e),e.default='\x3c!-- <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot="start">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header> --\x3e\n<ion-content class="ion-padding">\n    <ion-grid [fixed]="true">\n        <div class="pageMargin"></div>\n        <ion-row>\n            <ion-col size="12">\n                <ion-text color="tertiary">\n                    <h2><strong>\n                            {{"DigiLocker Profile" | translate}}\n                        </strong>\n                    </h2>\n                </ion-text>\n\n                <ion-text>\n                    <h4>{{"Here you can find or change profile information and also add or delete the nominee to your DigiLocker Account." | translate}}\n                    </h4>\n                </ion-text>\n\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="ion-no-padding ion-margin-top">\n            <ion-col size="12" size-xl="10" class="ion-no-padding ion-no-margin">\n\n                <ion-card mode="ios" class="ion-no-margin ">\n                    <ion-card-header>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n\n                                    <ion-buttons class="ion-float-end">\n                                        <ion-button *ngIf="profileData.user_type && !verifiedUserTypes.includes(profileData.user_type)" (click)="updateProfile()" size="big" color="primary" fill="clear">\n                                            {{"Edit" | translate}}\n                                        </ion-button>\n                                    </ion-buttons>\n                                    <ion-card-title color="tertiary" class="text-16" style="padding-top: 5px; width: 80%;">\n                                        <ion-text>{{"User Details" | translate}}</ion-text>\n                                    </ion-card-title>\n\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-card-header>\n                    <ion-row>\n                        <ion-col size="12" size-md="2">\n\n                            <ion-thumbnail class="ion-margin-top  centerImg ion-text-center image-center " mode="ios">\n                                <a class="prifileImage" *ngIf="img()">\n                                    <label for="photo-upload" class="{{photo?\'cursor\':\'\'}}">\n\n                                <ion-avatar class="image-center ion-margin-top">\n                                       <span class="hoverButton" *ngIf="nonAadhaar"> <img src="assets/img/camera.svg"> <br><small>{{profilePhoto?\'Change Photo\':\'Upload Photo\'}}</small></span>\n\n                                    <img [src]="profilePhoto?profilePhoto:\'assets/img/profile_blank.svg\'">\n                                  </ion-avatar>\n\n                            </label>\n                                    <input *ngIf="photo" id="photo-upload" type="file" accept="image/png, image/jpeg, image/png" (change)="cropimageModel($event)" hidden />\n\n                                </a>\n\n                                <ion-badge color="success" class="ion-margin-top image-center " title="{{\'Verified\' | translate}}" size="small" *ngIf="!nonAadhaar && profilePhoto">\n\n                                    <ion-label color="light">\u2714&nbsp;{{\'Verified\' | translate}} &nbsp;</ion-label>\n                                </ion-badge>\n                                <ion-badge color="warning" class="ion-margin-top image-center cursor" title="{{\'Verify Now\' | translate}}" (click)="verifyAadhar()" size="small" *ngIf="nonAadhaar && profilePhoto">\n                                   \x3c!-- <ion-label class="multiline-label" class="ion-text-wrap" color="light"> \u2716 &nbsp;{{ \'Not Verified\' | translate }}</ion-label> --\x3e\n                                   <ion-label class="multiline-label" color="light">\n                                    <div class="flex-container">\n                                      <div class="text">\u2716 {{ \'Not Verified\' | translate }}</div>\n                                    </div>\n                                  </ion-label>\n                                </ion-badge>\n\n\n                            </ion-thumbnail>\n\n                        </ion-col>\n                        <ion-col size="12" size-md="10">\n                            <ion-item lines="full">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size="12" size-md="2">\n                                            <ion-label>\n                                                <p>{{"Name" | translate}}</p>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1" class="ion-hide">\n                                            <ion-label>:</ion-label>\n                                        </ion-col>\n                                        <ion-col size="12" size-md="8">\n                                            <ion-label>\n                                                <p>{{(profileData.residentName)?profileData.residentName:null}}</p>\n                                                <ion-skeleton-text *ngIf="profileData.length==0" animated style="width: 50%"></ion-skeleton-text>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1">\n                                            <ion-label></ion-label>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                            <ion-item lines="full">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size="12" size-md="2">\n                                            <ion-label>\n                                                <p>{{"DOB" | translate}}</p>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1" class="ion-hide">\n                                            <ion-label>:</ion-label>\n                                        </ion-col>\n                                        <ion-col size="12" size-md="8">\n                                            <ion-label>\n                                                \x3c!--{{profileData.date_of_birth | date : \'dd-MM-yyyy\':\'IST\'}}--\x3e\n                                                <p> {{(profileData.customDob)?(profileData.customDob):null}}</p>\n                                                <ion-skeleton-text *ngIf="profileData.length==0" animated style="width: 50%"></ion-skeleton-text>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1">\n                                            <ion-label></ion-label>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                            <ion-item lines="full">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size="12" size-md="2">\n                                            <ion-label>\n                                                <p>{{"Gender" | translate}}</p>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1" class="ion-hide">\n                                            <ion-label>:</ion-label>\n                                        </ion-col>\n                                        <ion-col size="12" size-md="8">\n                                            <ion-label>\n                                                <p> {{(profileData.gender==\'M\')?\'Male\':(profileData.gender==\'F\')?\'Female\':(profileData.gender==\'T\')?\'Transgender\':(profileData.gender==\'O\')?\'Other\':\'\'}}</p>\n                                                <ion-skeleton-text *ngIf="profileData.length==0" animated style="width: 50%"></ion-skeleton-text>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1">\n                                            <ion-label></ion-label>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                            <ion-item lines="full">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size="12" size-md="2">\n                                            <ion-label>\n                                                <p>{{"Mobile" | translate}}</p>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1" class="ion-hide">\n                                            <ion-label>:</ion-label>\n                                        </ion-col>\n                                        <ion-col size="10" size-md="8">\n                                            <ion-label>\n                                                <p> {{profileData.mobile?profileData.mobile:(profileData.length)?\'\':\'\'}} </p>\n                                            </ion-label>\n                                            <ion-label size="small" color="primary" class="cursor" *ngIf="!profileData.mobile" (click)="updateMobile()">\n                                                {{\'Add Mobile\' | translate}}\n                                            </ion-label>\n                                            <ion-skeleton-text *ngIf="profileData.length==0" animated style="width: 50%">\n                                            </ion-skeleton-text>\n\n                                        </ion-col>\n                                        <ion-col size-md="1" size="2" class="ion-text-end">\n                                            <ion-button fill="clear" size="small" title="{{\'Edit\' | translate}}" class="ion-float-right" (click)="updateMobile()" *ngIf="profileData.mobile" style="margin-top: 0px;">\n                                                <ion-icon name="create" class="cursor" color="primary" size="small">\n                                                </ion-icon>\n                                            </ion-button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                            <ion-item lines="full">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size="12" size-md="2">\n                                            <ion-label>\n                                                <p>{{"Email" | translate}}</p>\n                                            </ion-label>\n                                        </ion-col>\n                                        <ion-col size-md="1" class="ion-hide">\n                                            <ion-label>:</ion-label>\n                                        </ion-col>\n                                        <ion-col size="10" size-md="7">\n                                            <ion-label>\n                                                <p> {{profileData.email?profileData.email:(profileData.length)?\'\':\'\'}} </p>\n                                                <span class="cursor" title="Verify Email">\n                                                    <ion-icon\n                                                        *ngIf="profileData.email && profileData.email_verified==\'N\'"\n                                                        (click)="verifyEmail()"\n                                                        name="{{(profileData.email_verified==\'Y\')?\'checkmark-circle\':\'alert-circle-outline\'}}"\n                                                        color="{{(profileData.email_verified==\'Y\')?\'success\':\'danger\'}}">\n                                                    </ion-icon>\n                                                </span>\n                                            </ion-label>\n                                            <ion-label size="small" color="primary" class="cursor" *ngIf="!profileData.email && profileData.email_verified ==\'N\'">\n\n                                                <ion-text size="small" color="primary" class="cursor" *ngIf="!profileData.email && profileData.email_verified ==\'N\'" (click)="updateEmail()">\n                                                    {{"AddEmail" | translate}}\n                                                </ion-text>\n                                            </ion-label>\n                                            <ion-skeleton-text animated *ngIf="profileData.length==0" style="width: 50%">\n                                            </ion-skeleton-text>\n\n                                        </ion-col>\n                                        <ion-col size-md="2" size="2" class="ion-text-right">\n                                            \x3c!-- <ion-icon *ngIf="profileData.email_verified==\'N\'" class="cursor" color="success" name="finger-print-outline"></ion-icon>--\x3e\n                                            <ion-button fill="clear" size="small" (click)="updateEmail()" title="{{\'Edit\' | translate}}" *ngIf="profileData.email" class="ion-float-right" style="margin-top: 0px;">\n                                                <ion-icon name="{{(profileData.email)?\'create\':\'\'}}" class="cursor" color="primary"></ion-icon>\n                                            </ion-button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                </ion-card>\n\n                <ion-card mode="ios" *ngIf="getNominee" class="ion-no-margin ion-margin-top">\n                    <ion-card-header>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n                                    <ion-card-title color="tertiary" class="text-16">\n                                        <ion-text>{{"Nominee Details" | translate}}</ion-text>\n                                    </ion-card-title>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-card-header>\n\n                    <ion-grid *ngIf="getNominee.status==\'error\' && profileData.mobile !=\'null\' ">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item lines="none">\n\n                                    <ion-button (click)="addNominee()" title="Add Nominee" size="small" color="warning" fill="solid" slot="start">\n                                        <ion-text> {{"Add Nominee" | translate}} </ion-text>\n                                    </ion-button>\n\n\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-item lines="full" *ngIf="getNominee.status==\'success\'">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size="12" size-md="2">\n                                    <ion-label *ngIf="getNominee.status==\'success\'">{{"Name" | translate}}</ion-label>\n                                </ion-col>\n                                <ion-col size-md="1" class="ion-hide">\n                                    <ion-label *ngIf="getNominee.status==\'success\'">:</ion-label>\n                                </ion-col>\n                                <ion-col size="8" size-md="7">\n                                    <ion-label *ngIf="getNominee.status==\'success\'">{{getNominee.name}}</ion-label>\n                                    <ion-label *ngIf="!getNominee.status">\n                                        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n                                    </ion-label>\n\n                                </ion-col>\n                                <ion-col size-md="1" size="2" class="ion-text-end">\n                                    <ion-button fill="clear" size="small" *ngIf="getNominee.status==\'success\'" (click)="viewNominee()" title="{{\'View\' | translate}}" style="margin-right: 0px;">\n                                        <ion-icon name="eye" class="cursor" color="primary" size="small"></ion-icon>\n                                    </ion-button>\n\n                                    \x3c!-- <ion-label *ngIf="getNominee.status==\'success\'" class=" ion-margin-end" title="View">\n                                            <ion-icon (click)="viewNominee()" name="eye" class="cursor" color="primary"></ion-icon>\n                                        </ion-label> --\x3e\n\n\n                                </ion-col>\n                                <ion-col size-md="1" size="2" class="ion-text-center">\n                                    <ion-button fill="clear" size="small" *ngIf="getNominee.status==\'success\'" (click)="deleteNominee()" title="{{\'Delete\' | translate}}">\n                                        <ion-icon name="trash" class="cursor" color="danger" size="small"></ion-icon>\n                                    </ion-button>\n\n                                    \x3c!-- <ion-label *ngIf="getNominee.status==\'success\'">\n                                            <ion-icon (click)="deleteNominee()" name="trash" class="cursor" color="danger"></ion-icon>\n                                        </ion-label> --\x3e\n                                </ion-col>\n\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item>\n                </ion-card>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'}}]);