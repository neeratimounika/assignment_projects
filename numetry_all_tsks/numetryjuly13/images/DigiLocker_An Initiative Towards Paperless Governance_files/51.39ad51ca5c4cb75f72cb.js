(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{BGac:function(n,i,t){"use strict";t.r(i),i.default="input[type=file] {\n  display: none;\n}\n\n.catCard {\n  width: 40% !important;\n  height: 170px;\n  margin-right: 3px !important;\n  padding: 5px !important;\n}\n\n.catCard .ion-card-content {\n  font-size: 10px !important;\n}\n\n.catCard .card-content-ios {\n  font-size: 14px !important;\n}\n\n.catCard ion-card-header {\n  max-height: 136px;\n  min-height: 100px !important;\n}\n\n@media only screen and (min-width: 425px) {\n  .catCard {\n    width: 40% !important;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .catCard {\n    width: 30% !important;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .catCard {\n    width: 12% !important;\n  }\n}"},TNqb:function(n,i,t){"use strict";t.r(i),t.d(i,"LbsnaaPageModule",(function(){return g}));var e=t("mrSG"),a=t("fXoL"),o=t("ofXK"),s=t("3Pt+"),l=t("TEn/"),r=t("tyNb"),d=t("sRcL"),c=t("9ans"),p=t("AytR");let h=class{constructor(n,i,t){this.navCtlr=n,this.ajax=i,this.auth=t,this.currentDirectory="/",this.fileUpload=null,this.getList=[],this.uploadList=null,this.fileOffset=0,this.isFile=!1,this.isVideo=!1,this.fileTypes=["image/jpeg","image/png","image/jpg","application/pdf"],this.fileExt=["jpeg","png","jpg","pdf"],this.isSubmitted=!1}ngOnInit(){this.listFIles()}listFIles(){return Object(e.b)(this,void 0,void 0,(function*(){let n=p.a.lbsnaa_list;yield this.ajax.postMethod(n,{},{}).subscribe(n=>{"success"==n.status&&(this.getList=n.data,n.data.forEach(n=>{["pdf"].includes(n.Ext)?this.isFile=n:["mp4","mts","MTS","Mts","Mp4","MP4"].includes(n.Ext)&&(this.isVideo=n)}))})}))}loadImageFromDevice(n){this.ajax.showLoader();var i=n.target.files;if(i.length>0){var t=i[0],e=new FileReader;this.checkFileMimeType(e,n=>{t.type==n?this.uploadAjaxCall(t):(this.ajax.hideLoader(),this.ajax.showToast("Only  PDF  files allowed. Please upload valid file format.",5e3,"danger"))}),e.readAsArrayBuffer(t),this.fileUpload=null}}loadVideoFromDevice(n){this.ajax.showLoader();var i=n.target.files;if(i.length>0){var t=i[0],e=new FileReader;this.uploadAjaxCall(t),e.readAsArrayBuffer(t),this.fileUpload=null}}checkFileMimeType(n,i){return Object(e.b)(this,void 0,void 0,(function*(){n.onload=function(n){for(var t=new Uint8Array(n.target.result).subarray(0,4),e="",a=0;a<t.length;a++)e+=t[a].toString(16);var o="unknown";switch(e){case"25504446":o="application/pdf"}i(o)}}))}uploadAjaxCall(n){let i=new FormData;i.append("body",n);let t=p.a.lbsnaa_upload;this.ajax.uploadMethod(t,i).subscribe(i=>{this.ajax.hideLoader(),this.listFIles(),i.status?(this.ajax.showToast("File uploaded successfully"),this.fileOffset=0):null!=i.message?this.ajax.showToast(i.message,5e3,"danger"):this.ajax.showToast("File "+n.name+" could not be uploaded. Please try again.",5e3,"warning")})}readFile(n){this.ajax.showLoader("");let i=p.a.lbsnaa_read,t=encodeURI("name="+n.Name);this.auth.getToken(),this.auth.getDeviceId();this.ajax.postMethod(i,t,{}).subscribe(i=>{this.ajax.hideLoader(),"success"==i.status?(this.respMsg=i,"pdf"==n.Ext&&this.downloadPdf(i.Body,n.Ext,n.Name),"mp4"!=n.Ext&&"mts"!=n.Ext||this.downloadfile(i.Body,n.Ext,n.Name)):this.ajax.showToast(i.error_description,5e3,"danger")})}downloadPdf(n,i,t){this.ajax.hideLoader();let e=`data:application/${i};base64,${n}`;var a=document.createElement("a");a.href=e,a.target="_blank",a.download=t+"."+i,a.click()}downloadfile(n,i,t){this.ajax.hideLoader();let e=`data:video/${i};base64,${n}`;var a=document.createElement("a");a.href=e,a.download=t+"."+i,a.click()}dismiss(){this.navCtlr.back()}};h.ctorParameters=()=>[{type:l.i},{type:d.a},{type:c.a}],h=Object(e.c)([Object(a.n)({selector:"app-lbsnaa",template:Object(e.e)(t("lgi7")).default,styles:[Object(e.e)(t("BGac")).default]})],h);const m=[{path:"",component:h}];let u=class{};u=Object(e.c)([Object(a.M)({imports:[r.i.forChild(m)],exports:[r.i]})],u);let g=class{};g=Object(e.c)([Object(a.M)({imports:[o.b,s.b,l.d,u],declarations:[h]})],g)},lgi7:function(n,i,t){"use strict";t.r(i),i.default='<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot="start">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        \x3c!-- <ion-title>About</ion-title> --\x3e\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-padding">\n    <ion-grid [fixed]="true">\n        <ion-row>\n            <ion-col size="12">\n                <ion-toolbar>\n                    <ion-title color="tertiary">\n                        <strong>LBSNAA</strong></ion-title>\n                    <ion-buttons slot="start">\n                        <ion-button (click)="dismiss()" color="dark" fill="clear" shape="round" size="small">\n                            <ion-icon ios="arrow-back" md="arrow-back"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=" ion-padding-top">\n\n            <ion-card class="catCard cursor ion-text-wrap ion-text-center" mode="ios" style="height:170px; margin-left: 10px;">\n                <ion-card-header>\n                    <ion-img *ngIf="!isVideo" src="/assets/img/video-player.svg"></ion-img>\n                    <ion-img *ngIf="isVideo" src="/assets/img/video-player.svg"></ion-img>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-buttons size="small" style="margin-top: 0px; margin-left: -5px;">\n                        <ion-button *ngIf="isVideo" class="cursor" (click)="readFile(isVideo)" fill="solid" color="success">\n                            <small>  <label for="lbsnaa"> Download Video</label> </small>\n                        </ion-button>\n                        <ion-button color="primary" class="ion-margin-top-md ion-float-end ion-no-padding " fill="solid" *ngIf="!isVideo">\n                            <small>  <label for="file-upload" class="cursor">Upload Video </label> </small>\n                            <input id="file-upload" type="file" accept="video/mp4, video/mts" [(ngModel)]="fileUpload" (change)="loadVideoFromDevice($event)" />\n                        </ion-button>\n\n                    </ion-buttons>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="catCard cursor ion-text-wrap ion-text-center" mode="ios" style="height:170px; margin-left: 10px;">\n                <ion-card-header>\n                    <ion-img *ngIf="isFile" src="assets/img/document.svg"></ion-img>\n                    <ion-img *ngIf="!isFile" src="assets/img/document.svg"></ion-img>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-buttons size="small" style="margin-top: 0px; ">\n                        <ion-button *ngIf="isFile" (click)="readFile(isFile)" class="cursor" color="success" fill="solid">\n                            <small> <label for="lbsnaa"> Download File</label> </small>\n                        </ion-button>\n                        <ion-button color="primary" class="ion-margin-top-md ion-float-end ion-no-padding " fill="solid" *ngIf="!isFile">\n                            <small> <label for="file-upload" class="cursor"> Upload File</label> </small>\n                            <input id="file-upload" type="file" accept="application/pdf" [(ngModel)]="fileUpload" (change)="loadImageFromDevice($event)" />\n                        </ion-button>\n\n                    </ion-buttons>\n                </ion-card-content>\n            </ion-card>\n\n            \x3c!-- </ion-card>\n                <ion-card class="catCard cursor ion-text-wrap ion-text-center" mode="ios" style="height:170px;" *ngFor ="let p of getList">\n                    <ion-card-header>\n                        <ion-icon name="{{(p.Ext == \'mp4\')?\'videocam-outline\':(p.Ext == \'mts\')?\'videocam-outline\':(p.Ext == \'pdf\')?\'document-outline\':\'\'}}" size="large"></ion-icon>\n                     </ion-card-header>\n                    <label > {{p.Name}}</label>\n                    <ion-button size="small" (click)="readFile(p)" color="primary" style="margin-top: 0px;">\n                        <ion-icon color="light" class= "ion-margin-end"name="download-outline"></ion-icon>\n                        <label for="lbsnaa-file-upload"> Download </label>\n                     </ion-button>\n                     \n                    \n                </ion-card> --\x3e\n\n\n\n        </ion-row>\n\n    </ion-grid>\n</ion-content>'}}]);