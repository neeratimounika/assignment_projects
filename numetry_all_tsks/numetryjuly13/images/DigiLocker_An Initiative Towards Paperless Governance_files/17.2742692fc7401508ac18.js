(window.webpackJsonp=window.webpackJsonp||[]).push([[17,141],{"1obm":function(e,t,n){"use strict";n.r(t),n.d(t,"FetchDocumentPageModule",(function(){return x}));var o=n("mrSG"),i=n("fXoL"),a=n("ofXK"),r=n("3Pt+"),s=n("sYmb"),l=n("TEn/"),c=n("tyNb"),d=n("sRcL"),h=n("9ans"),m=n("AytR"),p=n("NFKh"),u=n("jhN1"),f=n("VBEu");let D=class{constructor(e,t,n,o,i,a,s,l,c,d){var h;this.formBuilder=e,this.ajax=t,this.auth=n,this.navCtrl=o,this.router=i,this.titleService=a,this.platform=s,this._translate=l,this.modalController=c,this.encrypt=d,this.modal=!1,this.deviceSize=this.platform.isLandscape(),this.isSubmitted=!1,this.otp=!1,this.respMsg=null,this.fetchDocFormData=null,this.docData=null===(h=this.router.getCurrentNavigation())||void 0===h?void 0:h.extras.state,this.validationArray={consent:[!0,r.f.required]},this.profile=null,this.selectionArray=[],this.deviceId=this.auth.getDeviceId(),this.jtoken=this.auth.getToken(),this.maxTime=0,this.cc_path=""}ngOnInit(){this.fetchDocForm=this.formBuilder.group(this.validationArray),this.profile=this.auth.userProfile(),null!=this.docData?(this.fetchDocFormDataApi(),this.docData.parameters.iparams.sort((e,t)=>e.cdd_level-t.cdd_level),this.docData.parameters.iparams.forEach(e=>{this.selectionArray[e.keyname]=[],1==e.cdd_level&&this.dropDownAPI(this.docData.partnerServiceId,null,e.keyname)})):(this.docData=JSON.parse(sessionStorage.getItem("fetchDoc")),this.docData&&!["ADHAR"].includes(this.docData.docTypeId)?(this.fetchDocFormDataApi(),this.docData.parameters.iparams.sort((e,t)=>e.cdd_level-t.cdd_level),this.docData.parameters.iparams.forEach(e=>{this.selectionArray[e.keyname]=[],1==e.cdd_level&&this.dropDownAPI(this.docData.partnerServiceId,null,e.keyname)})):this.navCtrl.pop())}ionViewDidEnter(){this.titleService.setTitle("Fetch Document")}get f(){return this.fetchDocForm.controls}dropDownAPIBKP(e=null,t=null,n=null){let o=this.fetchDocForm.value[n],i="/"+e,a=m.a.digi_partners_cascades;t&&(i+="/"+t+"/"+o,n=n.replace(t,parseInt(t)+1),parseInt(t)+1>1&&(a=m.a.digi_partners_nextcascades)),this.ajax.getMethod(a+i).subscribe(e=>{this.selectionArray[n]=e.records})}dropDownAPI(e=null,t=null,n=null){let o=this.fetchDocForm.value[n],i=m.a.digi_partners_nextcascades+"/"+e,a=parseInt(t);t&&(this.selectionArrayEmpty(a,n),n=n.replace(a,a+1),this.cc_path=this.cc_path+"/"+o),this.ajax.getMethod(i+this.cc_path).subscribe(e=>{this.selectionArray[n]=e.records})}selectionArrayEmpty(e,t){let n=this.cc_path.split("/"),o="",i=[];for(let a=e+1;a<=6;a++)o=t.replace(e,a),i.push(o),this.selectionArray[o]=[];this.docData.parameters.iparams.forEach(e=>{i.includes(e.keyname)||(this.validationArray[e.keyname]=[this.fetchDocForm.get(e.keyname).value,[r.f.required]])}),this.fetchDocForm=this.formBuilder.group(this.validationArray),this.cc_path=2==e?"/"+n[e-1]:3==e?"/"+n[e-2]+"/"+n[e-1]:4==e?"/"+n[e-3]+"/"+n[e-2]+"/"+n[e-1]:5==e?"/"+n[e-4]+"/"+n[e-3]+"/"+n[e-2]+"/"+n[e-1]:""}fetchDocFormDataApi(){this.docData.parameters.iparams.forEach(e=>{this.validationArray[e.keyname]=["",[]]}),this.fetchDocForm=this.formBuilder.group(this.validationArray),"1"==this.docData.parameters.details.enabledDob||"1"==this.docData.parameters.details.enabledGender?(this.fetchDocFormData={},this.fetchDocFormData.customDob=this.profile.dob?this.profile.dob.slice(0,10):null,this.fetchDocFormData.gender=this.profile.gender):this.fetchDocFormData=[]}submitForm(){if(this.isSubmitted=!0,this.respMsg=null,!this.fetchDocForm.valid)return!1;{this.ajax.showLoader();let e=this.fetchDocRequestParam(),t=this.encrypt.getEncryptedValue(JSON.stringify({data:e}));this.ajax.postMethod(m.a.fetchDocRequest,JSON.stringify({payload:t}),{"content-type":"application/json"}).subscribe(e=>{this.ajax.hideLoader(),null!=e.request_id?(this.ajax.showToast(this._translate.instant("Your request has been submitted. Please wait for confirmation from the Issuer."),5e3,"warning","bottom"),this.chekTxnStatus(e.request_id,1)):this.ajax.showToast(e.error_description,5e3,"warning","bottom")})}}chekTxnStatus(e,t=2){this.maxTime<=30?(1==t&&this.ajax.showLoader(),setTimeout(n=>{this.maxTime=this.maxTime+5;let o={jtoken:this.jtoken,"device-security-id":this.deviceId};this.ajax.getMethod(m.a.fetchDocRequest+"?request_id="+e,o).subscribe(n=>{1==t&&this.ajax.hideLoader(),null!=n.status&&(["S","F","W"].includes(n.status)?(this.ajax.showToast("S"==n.status?"Document fetched successfully.":n.remarks,5e3,"S"==n.status?"success":"warning","bottom"),this.modal?"S"==n.status&&this.modalController.dismiss():"S"==n.status&&this.navCtrl.navigateForward("issued-documents")):(this.chekTxnStatus(e),this.ajax.showToast(n.remarks,5e3,"warning","bottom")))})},5e3)):(this.ajax.hideLoader(),this.modalController.dismiss())}issuedDocPendingData(e){return{doc_type_id:this.docData.docTypeId,org_id:this.docData.orgId,uri:"Pending-"+this.docData.docTypeId+"-Pending",issuer_id:"Pending",modified_on:(new Date).toLocaleDateString("en-CA"),categories:[],orgName:this.docData.orgName,docDescription:this.docData.docDescription,issuedOn:(new Date).toLocaleDateString("en-CA"),repoId:this.docData.partnerServiceId,metadata:"",data_type_xml:"",data_type_pdf:"",date:(new Date).toLocaleDateString("en-CA"),dataType:{xml:0,json:0,pdf:0},delete:0,txn_id:e}}fetchDocRequestParam(){let e=Object(p.MD5)(this.auth.userProfile().residentName.replace(/\s+/g,"").toLowerCase()).toString(),t="WSTL"+Date.now()+e,n={doc_type:this.docData.docTypeId,org_id:this.docData.orgId,record_from:"WSTL",txn_id:t,consent:this.fetchDocForm.value.consent?"true":"false"};return this.docData.parameters.iparams&&this.docData.parameters.iparams.forEach(e=>{""!=this.fetchDocForm.value[e.keyname]?n[e.keyname]=this.fetchDocForm.value[e.keyname].trim():n[e.keyname]=""}),n}get errorControl(){return this.fetchDocForm.controls}onTermsChecked(){this.fetchDocForm.value.consent||this.fetchDocForm.patchValue({consent:null})}dismiss(){this.navCtrl.back()}dismiss1(){this.modalController.dismiss()}};D.ctorParameters=()=>[{type:r.a},{type:d.a},{type:h.a},{type:l.i},{type:c.g},{type:u.d},{type:l.k},{type:s.c},{type:l.h},{type:f.a}],D=Object(o.c)([Object(i.n)({selector:"app-fetch-document",template:Object(o.e)(n("bkRp")).default,styles:[Object(o.e)(n("4POB")).default]})],D);const g=[{path:"",component:D}];let b=class{};b=Object(o.c)([Object(i.M)({imports:[c.i.forChild(g)],exports:[c.i]})],b);class y{constructor(e){this.elementRef=e}onSelectClick(){setTimeout(()=>{this.initDirective()},100)}initDirective(){this.selectWrapper=document.getElementsByClassName("alert-wrapper")[0];let e=document.getElementsByClassName("alert-radio-group")[0],t=this.createInputElement();this.selectWrapper.insertBefore(t,e)}getSelectOptions(){this.selectOptions=document.getElementsByClassName("select-interface-option")}createInputElement(){let e=document.createElement("Input");return e.setAttribute("placeholder","Type to search"),e.id="i_s_searchInput",e.style.padding="0.5em 1em",e.style.border="unset",e.onkeyup=this.onSearchChanged,e}onSearchChanged(){var e,t;for(e=document.getElementById("i_s_searchInput").value.toUpperCase(),this.selectOptions=document.getElementsByClassName("select-interface-option"),t=0;t<this.selectOptions.length;t++)this.selectOptions.item(t).querySelector(".alert-button-inner").querySelector(".alert-radio-label").innerHTML.toUpperCase().indexOf(e)>-1?this.selectOptions.item(t).style.display="":this.selectOptions.item(t).style.display="none"}}y.\u0275fac=function(e){return new(e||y)(i.Mc(i.v))},y.\u0275dir=i.Hc({type:y,selectors:[["","idlDefault",""]],hostBindings:function(e,t){1&e&&i.Zc("click",(function(){return t.onSelectClick()}))}}),y.ctorParameters=()=>[{type:i.v}],y.propDecorators={onSelectClick:[{type:i.A,args:["click"]}]};class v{}v.\u0275fac=function(e){return new(e||v)},v.\u0275mod=i.Kc({type:v}),v.\u0275inj=i.Jc({imports:[[]]}),("undefined"==typeof ngJitMode||ngJitMode)&&i.nd(v,{declarations:[y],exports:[y]});let x=class{};x=Object(o.c)([Object(i.M)({imports:[a.b,r.b,r.e,l.d,s.b.forChild(),b,v],declarations:[D]})],x)},"4POB":function(e,t,n){"use strict";n.r(t),t.default=".item.sc-ion-label-ios-h,\n.item .sc-ion-label-ios-h {\n  white-space: unset;\n}\n\nion-item ion-select {\n  max-width: 60%;\n}\n\n.ion-text-wrap {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 33px;\n}\n\n@media only screen and (min-width: 768px) {\n  .ion-text-wrap {\n    font-size: 14px;\n  }\n}"},VBEu:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("mrSG"),i=n("fXoL"),a=n("NFKh"),r=n("9ans"),s=n("4pnn");let l=class{constructor(e,t){this.auth=e,this.CookieService=t}encryptedAES(e){let t=Object(a.MD5)(this.auth.userProfile().dlId).toString();var n=a.enc.Utf8.parse(t),o=a.enc.Utf8.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),i=a.AES.encrypt(e,n,{iv:o}).toString();return encodeURI(i.replace(/\+/g,"---"))}getEncryptedValue(e){let t=this.auth.userProfile().dlId.slice(0,16),n=Object(a.MD5)(t).toString(),o=a.enc.Utf8.parse(t),i=a.enc.Utf8.parse(n),r=a.AES.encrypt(e,i,{iv:o}).toString();return encodeURI(r.replace(/\+/g,"---"))}decryptedAES(e){let t=e.replaceAll("---","+"),n=this.CookieService.get("d")?this.CookieService.get("d").replace(/"/g,""):"",o=Object(a.MD5)(n+this.auth.userProfile().dlId).toString();var i=a.enc.Utf8.parse(o),r=a.enc.Utf8.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");return a.AES.decrypt(t,i,{iv:r}).toString(a.enc.Utf8)}};l.ctorParameters=()=>[{type:r.a},{type:s.c}],l=Object(o.c)([Object(i.E)({providedIn:"root"})],l)},bkRp:function(e,t,n){"use strict";n.r(t),t.default='\x3c!-- <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot="start">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header> --\x3e\n<ion-content class="ion-padding">\n    <div class="pageMargin"></div>\n    <ion-grid [fixed]="true">\n        <ion-toolbar>\n            <ion-title color="tertiary">\n                <strong>{{docData.docDescription | translate}}</strong>\n            </ion-title>\n            <ion-buttons slot="start">\n                <ion-button (click)="dismiss()" color="dark" fill="clear" shape="round" size="small">\n                    <ion-icon ios="arrow-back" md="arrow-back"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-grid>\n    <ion-grid [fixed]="true">\n\n        <ion-row *ngIf="this.docData.parameters.iparams">\n            <ion-col size-md="8">\n                <ion-card mode="ios" class="ion-padding ion-no-margin">\n                    <ion-row>\n                        <ion-col class="ion-padding">\n                            <ion-text color="tertiary" class="ion-no-margin ion-padding-start">\n                                <h3><strong> {{\'Get your document by entering the required details\' | translate}}\n                                    </strong>\n                                </h3>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <form [formGroup]="fetchDocForm" (ngSubmit)="submitForm()" novalidate>\n                        <ion-row *ngIf="docData.parameters.details.enabledFullname==\'1\'">\n                            <ion-col size-md="4" size="12">\n                                <ion-item lines="none">\n                                    <ion-label> {{\'Name\' | translate}} {{\'(\'}}{{\'from aadhaar\'| translate}}{{\')\'}}</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col size-md="8" size="12">\n                                <ion-item lines="full">\n                                    <ion-label>\n                                        {{profile.residentName}}\n                                    </ion-label>\n\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row *ngIf="docData.parameters.details.enabledDob==\'1\'">\n                            <ion-col size-md="4" size="12">\n                                <ion-item lines="none">\n                                    <ion-label>{{\'DOB_Full\' | translate}}</ion-label>\n\n                                </ion-item>\n                            </ion-col>\n                            <ion-col size-md="8" size="12">\n                                <ion-item lines="full">\n                                    <ion-label *ngIf="fetchDocFormData">\n                                        {{(fetchDocFormData.customDob)?(fetchDocFormData.customDob | date : \'dd-MM-yyyy\':\'IST\'):\'\'}}\n                                    </ion-label>\n                                    <ion-skeleton-text *ngIf="!fetchDocFormData" animated style="width: 100%;height:25px;"></ion-skeleton-text>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row *ngIf="docData.parameters.details.enabledGender==\'1\'">\n                            <ion-col size-md="4" size="12">\n                                <ion-item lines="none">\n                                    <ion-label> {{\'Gender\' | translate}}</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col size-md="8" size="12">\n                                <ion-item lines="full">\n                                    <ion-label *ngIf="fetchDocFormData">\n                                        {{(fetchDocFormData.gender==\'M\')?\'Male\':(fetchDocFormData.gender==\'F\')?\'Female\':(fetchDocFormData.gender==\'O\')?\'Other\':(fetchDocFormData.gender==\'T\')?\'Transgender\':\'\'}}\n                                    </ion-label>\n                                    <ion-skeleton-text *ngIf="!fetchDocFormData" animated style="width: 100%;height:25px;"></ion-skeleton-text>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row *ngFor="let fd of docData.parameters.iparams">\n                            <ion-col size-md="4" size="12">\n                                <ion-item lines="none">\n                                    <ion-label>{{fd.label | translate}} <sup *ngIf="fd.required==\'1\'"><ion-text color="danger">*</ion-text></sup></ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col size-md="8" size="12">\n                                <ion-item lines="full" mode="md">\n                                    <ion-input *ngIf="!fd.dd_value && !fd.cdd_level" maxlength="{{(fd.keyname == \'panno\')?10:60}}" pattern="{{(fd.keyname == \'panno\')?\'[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}\':\'\'}}" [attr.disabled]="(fetchDocFormData?false:true)" placeholder="{{\'Enter\' | translate}} {{fd.label | translate}}"\n                                        formControlName="{{fd.keyname}}" type="text" [required]="fd.required == \'1\' ? true : false"></ion-input>\n                                    <ion-label style="display:none">{{fd.label | translate}}</ion-label>\n\n                                    <ion-select idlDefault *ngIf="fd.dd_value" value="{{fd.keyname}}" formControlName="{{fd.keyname}}" mode="ios" placeholder="Select" [required]="fd.required === \'1\' ? true : false">\n                                        <ion-select-option *ngFor="let op of fd.dd_value.split(\',\')">{{op}}\n                                        </ion-select-option>\n                                    </ion-select>\n                                    <ion-select idlDefault *ngIf="fd.cdd_level && selectionArray[fd.keyname]?.length" value="{{fd.keyname}}" (ionChange)="dropDownAPI(docData.partnerServiceId,fd.cdd_level,fd.keyname)" formControlName="{{fd.keyname}}" mode="ios" placeholder="Select {{fd.label}}" [required]="fd.required === \'1\' ? true : false">\n                                        <ion-select-option *ngFor="let op of selectionArray[fd.keyname] " value="{{op.code}}">{{op.name}}</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                                <small *ngIf="!fd.dd_value && !fd.cdd_level" [attr.disabled]="(fetchDocFormData?false:true)">{{\'Ex.\' | translate}}  {{fd.example}}</small>\n                                <br *ngIf="!fd.dd_value && !fd.cdd_level" />\n                                <ion-label color="danger" *ngIf="isSubmitted && errorControl[fd.keyname].errors?.required">\n                                    <small> {{fd.label | translate}} {{\'Req\' | translate}}</small>\n                                </ion-label>\n                                <ion-label color="danger" *ngIf="isSubmitted && errorControl[fd.keyname].errors?.pattern">\n                                    <small> Please enter correct format</small>\n                                </ion-label>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                <ion-list>\n                                    <ion-item lines="none" mode="md">\n                                        <ion-text>{{\'Consent\' | translate}}</ion-text>\n                                        <ion-checkbox [attr.disabled]="(fetchDocFormData?false:true)" slot="start" [checked]="false" formControlName="consent" (ionChange)="onTermsChecked()" required></ion-checkbox>\n\n                                    </ion-item>\n                                </ion-list>\n                                <ion-text class="ion-padding-start" color="danger" *ngIf="isSubmitted && errorControl.consent.errors?.required">\n                                    <br /> {{\'ConsentError\' | translate}}\n                                </ion-text>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-button [attr.disabled]="(fetchDocFormData?false:true)" type="submit" color="primary" class="ion-float-right">{{\'Get Document\' | translate}}</ion-button>\n                    </form>\n                </ion-card>\n            </ion-col>\n            <ion-col size-md="4" class="ion-no-padding" *ngIf="deviceSize">\n                <ion-card mode="ios" color="warning" class="ion-no-margin-top" *ngIf="docData.orgDescription">\n                    <ion-card-content>\n                        <ion-text>{{docData.orgDescription | translate}}</ion-text>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'}}]);