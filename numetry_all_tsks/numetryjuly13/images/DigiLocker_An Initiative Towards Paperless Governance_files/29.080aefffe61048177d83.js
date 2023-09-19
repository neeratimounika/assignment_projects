(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"WT/b":function(n,e,t){"use strict";t.r(e),e.default="ion-item ion-label {\n  cursor: pointer;\n  text-overflow: unset;\n  white-space: pre-line;\n}\n\nul li {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 14px !important;\n  color: #000 !important;\n}\n\nol li {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 14px !important;\n  color: #000 !important;\n}\n\np {\n  color: #000;\n}"},cVfo:function(n,e,t){"use strict";t.r(e),e.default='<ion-content class="ion-padding">\n    <ion-grid [fixed]="true">\n        <ion-card mode="ios" class="ion-padding ion-no-margin ion-margin-bottom">\n            \x3c!--About Digilocker--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>{{\'About DigiLocker\' | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'aboutDigilocker\')" *ngFor="let item of aboutDigilocker">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header)| translate}}</ion-label>\n                    </ion-item>\n\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqAAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 2">\n                            <ion-text>\n                                <div [innerHTML]="\'faqAAns2\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 3">\n                            <ul>\n                                <li style="list-style:none;"><strong>{{\'Benefits to Citizens\' | translate}}</strong>\n                                    <ol class="ml_20">\n                                        <li>{{\'benefitCitizens1\' | translate}}</li>\n                                        <li>{{\'benefitCitizens2\' | translate}}</li>\n                                        <li>{{\'benefitCitizens3\' | translate}}</li>\n                                        <li>{{\'benefitCitizens4\' | translate}}</li>\n                                    </ol>\n                                </li>\n                                <li style="list-style:none;"><strong>{{\'Benefits to Agencies\' | translate}}</strong>\n                                    <ol class="ml_20">\n                                        <li>{{\'benefitAgencies1\' | translate}} </li>\n                                        <li>{{\'benefitAgencies2\' | translate}}</li>\n                                        <li>{{\'benefitAgencies3\' | translate}}</li>\n                                        <li>{{\'benefitAgencies4\' | translate}}</li>\n                                    </ol>\n                                </li>\n                            </ul>\n\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 4">\n                            <ion-text>\n                                \x3c!-- <div [innerHTML]="\'faqAAns4\' | translate"></div> --\x3e\n                                <p> <strong>DigiLocker is completely safe and secure to use.</strong> </p>\n                                <p><strong>The following practices have been adopted to ensure data security:</strong></p>\n                                <ul class=\'ml_20\' type=\'i\'>\n                                    <li><strong>Standard Practices:</strong> DigiLocker follows standard software development practices of uniform coding standards, guidelines and reviews. Every release is reviewed and tested internally for security and penetration\n                                        vulnerabilities before getting deployed.\n                                    </li>\n                                    <li><strong>2048 Bit RSA SSL Encryption:</strong> DigiLocker uses 2048 bit secure socket layer (SSL) Encryption for information transmitted during any activity.</li>\n                                    <li><strong>Multifactor Authentication based Sign Up and Sign in: </strong>DigiLocker uses multifactor authentication based signup and signin via Mobile OTP (one time password) or Biometric auth combined with PIN validation\n                                        for authenticating users and allowing access to the platform.</li>\n                                    <li><strong>ISO 27001 certified Data Hosting facilities:</strong> The application is hosted on ISO 27001 security certified data hosting facility.</li>\n                                    <li><strong>Data Redundancy:</strong> Data is backed up in secure environment with proper multi zone redundancy.</li>\n                                    <li><strong>Timed Log Out: </strong> To protect citizen\u2019s account from unauthorized access, our system is designed to terminate session automatically if extended inactivity is detected.</li>\n                                    <li><strong>Security Audit: </strong> DigiLocker system is audited by CERT-IN empanelled audit agencies and the external third party application security audit certificates are obtained at regular intervals.</li>\n                                    <li><strong>User Consent Based System:</strong> The data from DigiLocker is shared only with the citizen\'s explicit consent. All sharing and access activities are logged and conveyed to the citizen. Organizations that need\n                                        access to citizens\' certificates need to register on DigiLocker and seek explicit consent from the citizen.</li>\n                                </ul>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n            \x3c!--Sign In/Sign Up--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>  {{"Sign In/Sign Up" | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'signInSignUp\')" *ngFor="let item of signInSignUp">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header) | translate}}</ion-label>\n                    </ion-item>\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 2">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns2\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 3">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns3\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 4">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns4\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 5">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns5\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 6">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns6\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 7">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns7\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 8">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns8\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 9">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns9\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 10">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns10\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 12">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns12\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        \x3c!-- <ion-card-content *ngIf="item.subId == 13">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns13\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content> --\x3e\n                        <ion-card-content *ngIf="item.subId == 14">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns14\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 15">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns15\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 16">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns16\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 17">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns17\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 18">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns18\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 19">\n                            <ion-text>\n                                <div [innerHTML]="\'faqBAns19\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n            \x3c!--Documents--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>{{"Documents" | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'documents\')" *ngFor="let item of documents">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header) | translate}}</ion-label>\n                    </ion-item>\n\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqCAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 2">\n                            <ion-text>\n                                <div [innerHTML]="\'faqCAns2\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 3">\n                            <ion-text>\n                                <div [innerHTML]="\'faqCAns3\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 4">\n                            <ion-text>\n                                <div [innerHTML]="\'faqCAns4\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 5">\n                            <ion-text>\n                                <div [innerHTML]="\'faqCAns5\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n            \x3c!--UIDAI as an issuer of digital Aadhaar in DigiLocker--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>{{"FaqUIDAI" | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'UidaiIssuer\')" *ngFor="let item of UidaiIssuer">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header) | translate}}</ion-label>\n                    </ion-item>\n\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqDAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 2">\n                            <ion-text>\n                                <div [innerHTML]="\'faqDAns2\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n            \x3c!--Ministry of Road Transport and Highways--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>{{"FaqMoRTH" | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'MoRTH\')" *ngFor="let item of MoRTH">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header) | translate}}</ion-label>\n                    </ion-item>\n\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqEAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 2">\n                            <ion-text>\n                                <div [innerHTML]="\'faqEAns2\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 3">\n                            <ion-text>\n                                <div [innerHTML]="\'faqEAns3\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 4">\n                            <ion-text>\n                                <div [innerHTML]="\'faqEAns4\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 5">\n                            <ion-text>\n                                <div [innerHTML]="\'faqEAns5\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                        <ion-card-content *ngIf="item.subId == 6">\n                            <ion-text>\n                                <div [innerHTML]="\'faqEAns6\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n            \x3c!--CBSE Integration with DigiLocker as an Issuer--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>{{"FaqCBSE" | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'CbseIssuer\')" *ngFor="let item of CbseIssuer">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header) | translate}}</ion-label>\n                    </ion-item>\n\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqFAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n            \x3c!--Issuer/Requester--\x3e\n            <ion-item lines="full">\n                <ion-label color="tertiary">\n                    <strong>{{"Issuer/Requester" | translate}}</strong>\n                </ion-label>\n            </ion-item>\n            <ion-row (click)="expandItem(item, \'IssuerRequester\')" *ngFor="let item of IssuerRequester">\n                <ion-col size="12">\n                    <ion-item lines="full">\n                        <ion-icon name="help-circle-outline" class="ion-margin-end"></ion-icon>\n                        <ion-label>{{(item.header) | translate}}</ion-label>\n                    </ion-item>\n\n                    <app-expandable expandHeight="auto" [expanded]="item.expanded">\n                        <ion-card-content *ngIf="item.subId == 1">\n                            <ion-text>\n                                <div [innerHTML]="\'faqGAns1\' | translate"></div>\n                            </ion-text>\n                        </ion-card-content>\n                    </app-expandable>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </ion-grid>\n</ion-content>'},khZm:function(n,e,t){"use strict";t.r(e),t.d(e,"FaqPageModule",(function(){return m}));var i=t("mrSG"),a=t("fXoL"),o=t("ofXK"),d=t("3Pt+"),r=t("sYmb"),s=t("TEn/"),l=t("tyNb"),c=t("jhN1");let u=class{constructor(n){this.titleService=n,this.aboutDigilocker=[],this.signInSignUp=[],this.documents=[],this.UidaiIssuer=[],this.MoRTH=[],this.CbseIssuer=[],this.IssuerRequester=[],this.aboutDigilocker=[{expanded:!1,header:"faqAQ1",subId:1},{expanded:!1,header:"faq-A-Q2",subId:2},{expanded:!1,header:"faqAQ3",subId:3},{expanded:!1,header:"faqAQ4",subId:4}],this.signInSignUp=[{expanded:!1,header:"faqBQ1",subId:1},{expanded:!1,header:"faqBQ2",subId:2},{expanded:!1,header:"faqBQ3",subId:3},{expanded:!1,header:"faqBQ4",subId:4},{expanded:!1,header:"faqBQ5",subId:5},{expanded:!1,header:"faqBQ6",subId:6},{expanded:!1,header:"faqBQ7",subId:7},{expanded:!1,header:"faqBQ8",subId:8},{expanded:!1,header:"faqBQ9",subId:9},{expanded:!1,header:"faqBQ10",subId:10},{expanded:!1,header:"faqBQ12",subId:12},{expanded:!1,header:"faqBQ14",subId:14},{expanded:!1,header:"faqBQ15",subId:15},{expanded:!1,header:"faqBQ16",subId:16},{expanded:!1,header:"faqBQ17",subId:17},{expanded:!1,header:"faqBQ18",subId:18},{expanded:!1,header:"faqBQ19",subId:19}],this.documents=[{expanded:!1,header:"faqCQ1",subId:1},{expanded:!1,header:"faqCQ2",subId:2},{expanded:!1,header:"faqCQ3",subId:3},{expanded:!1,header:"faqCQ4",subId:4},{expanded:!1,header:"faqCQ5",subId:5}],this.UidaiIssuer=[{expanded:!1,header:"faqDQ1",subId:1},{expanded:!1,header:"faqDQ2",subId:2}],this.MoRTH=[{expanded:!1,header:"faqEQ1",subId:1},{expanded:!1,header:"faqEQ2",subId:2},{expanded:!1,header:"faqEQ3",subId:3},{expanded:!1,header:"faqEQ4",subId:4},{expanded:!1,header:"faqEQ5",subId:5},{expanded:!1,header:"faqEQ6",subId:6}],this.CbseIssuer=[{expanded:!1,header:"faqFQ1",subId:1}],this.IssuerRequester=[{expanded:!1,header:"faqGQ1",subId:1}]}ionViewDidEnter(){this.titleService.setTitle("FAQ")}ngOnInit(){}expandItem(n,e){n.expanded?n.expanded=!1:this[e].map(e=>(e.expanded=n==e&&!e.expanded,e))}};u.ctorParameters=()=>[{type:c.d}],u=Object(i.c)([Object(a.n)({selector:"app-faq",template:Object(i.e)(t("cVfo")).default,styles:[Object(i.e)(t("WT/b")).default]})],u);const f=[{path:"",component:u}];let p=class{};p=Object(i.c)([Object(a.M)({imports:[l.i.forChild(f)],exports:[l.i]})],p);var x=t("Dq3m");let m=class{};m=Object(i.c)([Object(a.M)({imports:[o.b,d.b,s.d,r.b.forChild(),p],declarations:[u,x.a]})],m)}}]);