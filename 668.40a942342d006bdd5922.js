(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[668],{7668:(n,t,e)=>{"use strict";e.r(t),e.d(t,{RepositoriesModule:()=>f});var o=e(1116),r=e(1028),a=e(8619),i=e(4398),s=e(9996),c=function(n){return n.public="public",n.private="private",n}({});class g{constructor(n,t,e,o,r,a,i,s,c,g,l,_,p,u,d,m,h,O){this.id=n,this.name=t,this.fullName=e,this.description=o,this.mainLanguage=r,this.languages=a,this.topics=i,this.websiteUrl=s,this.repositoryUrl=c,this.languagesRepositoryUrl=g,this.starsRepositoryUrl=l,this.starsCount=_,this.forksCount=p,this.watchersCount=u,this.isPublic=d,this.createdDate=m,this.pushedDate=h,this.updatedDate=O}}var l=e(2693);let _=(()=>{class n{constructor(n){this.http=n}getRepositories(){return this.http.get("https://api.github.com/users/notbadcode-dev/repos?type=owner&per_page=100",this.getOptions()).pipe((0,s.U)(n=>class{static mapRepository(n){return new g(n.id,n.name,n.full_name,n.description,n.language,[n.language],n.topics,n.homepage.length>0?n.homepage:null,n.html_url,n.languages_url,n.stargazers_url,n.stargazers_count,n.forks_count,n.watchers_count,n.visibility===c.public,n.created_at,n.pushed_at,n.updated_at)}static mapRepositoryList(n){return n.map(n=>this.mapRepository(n))}}.mapRepositoryList(n)))}getRepositoryLanguages(n){return this.http.get(n,this.getOptions()).pipe((0,s.U)(n=>class{static mapRepositoryLanguage(n){const t=[],e=Object.entries(n).map(n=>n[1]).reduce((n,t)=>n+t,0);for(const[i,s]of Object.entries(n))t.push({name:i,percentage:(s/e*100).toFixed(2),percentageTransform:0});const o=t.map(n=>n.percentage).reduce((n,t)=>n+ +t.replace(",","."),0),r=t.reduce((n,t)=>n>+t.percentage.replace(",",".")?n:+t.percentage.replace(",","."),0);let a=null==t?void 0:t.find(n=>+n.percentage.replace(",",".")===r);return o-100>0?void 0!==a&&(a.percentage=parseFloat(+a.percentage.replace(",",".")-(o-100)+"").toFixed(2)):o<100&&void 0!==a&&(a.percentage=parseFloat(+a.percentage.replace(",",".")+(100-o)+"").toFixed(2)),t.map(n=>n.percentageTransform=+n.percentage.replace(",",".")),t}}.mapRepositoryLanguage(n)))}getOptions(){return{headers:{Accept:"application/vnd.github.v3+json"}}}}return n.\u0275fac=function(t){return new(t||n)(a.LFG(l.eN))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function p(n,t){if(1&n&&a._UZ(0,"span",7),2&n){const n=t.$implicit;a.uIk("data-language",null==n.name?null:n.name.toLowerCase())("style","width:"+n.percentageTransform+"%",a.Ckj)("arial-label",n.name+" "+n.percentageTransform)}}function u(n,t){if(1&n&&(a.TgZ(0,"div",8),a.O4$(),a.TgZ(1,"svg",9),a._UZ(2,"path",10),a.qZA(),a.kcU(),a.TgZ(3,"span",11),a._uU(4),a.qZA(),a.TgZ(5,"span"),a._uU(6),a.qZA(),a.qZA()),2&n){const n=t.$implicit;a.xp6(1),a.uIk("data-language",null==n.name?null:n.name.toLowerCase()),a.xp6(3),a.Oqu(n.name),a.xp6(2),a.hij("",n.percentageTransform,"%")}}let d=(()=>{class n{constructor(){this._languageList=[],this.mainLanguageName="",this.maxPercentageLanguage=0}set languageList(n){var t,e;this._languageList=n.filter(n=>"string"!=typeof n),n.length>0&&(this.maxPercentageLanguage=Math.max.apply(Math,this._languageList.map(function(n){var t;return null!==(t=n.percentageTransform)&&void 0!==t?t:0})),this.mainLanguageName=null!==(e=null===(t=this._languageList.find(n=>n.percentageTransform===this.maxPercentageLanguage))||void 0===t?void 0:t.name)&&void 0!==e?e:"")}ngOnInit(){var n,t;this.maxPercentageLanguage=Math.max.apply(Math,this._languageList.map(function(n){var t;return null!==(t=n.percentageTransform)&&void 0!==t?t:0})),this.mainLanguageName=null!==(t=null===(n=this._languageList.find(n=>n.percentageTransform===this.maxPercentageLanguage))||void 0===n?void 0:n.name)&&void 0!==t?t:""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["percentage-languages"]],inputs:{languageList:"languageList"},decls:8,vars:3,consts:[[1,"col-12"],[1,"main__language"],[1,"language__list"],[1,"__progress"],["class","progress__item",4,"ngFor","ngForOf"],[1,"language__detail__list"],["class","mr-3",4,"ngFor","ngForOf"],[1,"progress__item"],[1,"mr-3"],["aria-hidden","true","height","16","viewBox","0 0 16 16","version","1.1","width","16","data-view-component","true",1,"octicon","octicon-dot-fill","mr-2"],["fill-rule","evenodd","d","M8 4a4 4 0 100 8 4 4 0 000-8z"],[1,"text-bold","mr-1"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._uU(2),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"span",3),a.YNc(5,p,1,3,"span",4),a.qZA(),a.TgZ(6,"div",5),a.YNc(7,u,7,3,"div",6),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(2),a.hij(" ",t.mainLanguageName," "),a.xp6(3),a.Q6J("ngForOf",t._languageList),a.xp6(2),a.Q6J("ngForOf",t._languageList))},directives:[o.sg],styles:[".main__language[_ngcontent-%COMP%]{font-size:.6em}.language__list[_ngcontent-%COMP%]   .__progress[_ngcontent-%COMP%]{display:flex;height:8px;overflow:hidden;background-color:var(--lang-other-color);border-radius:6px;outline:1px solid #0000}.language__list[_ngcontent-%COMP%]   .__progress[_ngcontent-%COMP%]   [data-language][_ngcontent-%COMP%]{outline:2px solid #0000}.language__list[_ngcontent-%COMP%]   .language__detail__list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:.2em}.language__list[_ngcontent-%COMP%]   .language__detail__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;font-size:.4em;margin-right:.4em}.language__list[_ngcontent-%COMP%]   .language__detail__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child, .language__list[_ngcontent-%COMP%]   .language__detail__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){margin-right:.1em}.language__list[_ngcontent-%COMP%]   .language__detail__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){color:var(--primary-color);margin-right:.2em}.language__list[_ngcontent-%COMP%]   .language__detail__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){color:var(--primary-color-60)}[data-language].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-other-color)}[data-language].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-other-color)}[data-language=typescript].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-typescript-color)}[data-language=typescript].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-typescript-color)}[data-language=javascript].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-javascript-color)}[data-language=javascript].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-javascript-color)}[data-language=svelte].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-svelte-color)}[data-language=svelte].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-svelte-color)}[data-language=scss].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-scss-color)}[data-language=scss].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-scss-color)}[data-language=css].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-css-color)}[data-language=css].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-css-color)}[data-language=html].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-html-color)}[data-language=html].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-html-color)}[data-language=shell].progress__item[_ngcontent-%COMP%]{background-color:var(--lang-shell-color)}[data-language=shell].octicon-dot-fill[_ngcontent-%COMP%]{fill:var(--lang-shell-color)}"]}),n})();function m(n,t){if(1&n&&(a.TgZ(0,"div"),a.TgZ(1,"button"),a._UZ(2,"a",12),a.qZA(),a.qZA()),2&n){const n=a.oxw().$implicit;a.xp6(2),a.uIk("href",n.websiteUrl,a.LSH)}}function h(n,t){if(1&n&&(a.TgZ(0,"div",2),a.TgZ(1,"div",3),a.TgZ(2,"div",4),a.TgZ(3,"h4"),a._uU(4),a.qZA(),a.TgZ(5,"p"),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"div",5),a.TgZ(8,"div"),a.TgZ(9,"button"),a._UZ(10,"a",6),a.qZA(),a.qZA(),a.YNc(11,m,3,1,"div",7),a.qZA(),a.qZA(),a.TgZ(12,"div",8),a.TgZ(13,"div",9),a._UZ(14,"hr"),a.qZA(),a.qZA(),a.TgZ(15,"div",10),a._UZ(16,"percentage-languages",11),a.qZA(),a.qZA()),2&n){const n=t.$implicit,e=a.oxw();a.xp6(4),a.Oqu(n.name),a.xp6(2),a.hij(" ",e._utilsService.isActiveLanguageFromCode(e._utilsService.applanguageCodes.EN)?n.description.split(".")[0]:n.description.split(".")[1]," "),a.xp6(4),a.uIk("href",n.repositoryUrl,a.LSH),a.xp6(1),a.Q6J("ngIf",null!==n.websiteUrl),a.xp6(5),a.Q6J("languageList",n.languages)}}const O=[{path:"",component:(()=>{class n{constructor(n,t){this._utilsService=n,this._githubService=t,this.repositoryList=[],this.repositoryLanguageList=[]}ngOnInit(){this.getRepositories()}ngOnDestroy(){var n;null===(n=this.repositoriesSuscription)||void 0===n||n.unsubscribe()}getRepositories(){this.repositoriesSuscription=this._githubService.getRepositories().subscribe(n=>{this.repositoryList=n,n.map(n=>{this.getRepositoryLanguages(n)})},n=>{var t;null===(t=this.repositoriesSuscription)||void 0===t||t.unsubscribe(),n&&console.error(n)})}getRepositoryLanguages(n){n&&(null==n?void 0:n.languagesRepositoryUrl)&&(this.repositoriesSuscription=this._githubService.getRepositoryLanguages(n.languagesRepositoryUrl).subscribe(t=>{n.languages=t},n=>{var t;null===(t=this.repositoriesSuscription)||void 0===t||t.unsubscribe(),n&&console.error(n)}))}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(i.F),a.Y36(_))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-repositories"]],decls:2,vars:1,consts:[[1,"container__repositories"],["class","card__repository container",4,"ngFor","ngForOf"],[1,"card__repository","container"],[1,"row","main__info"],[1,"col-10"],[1,"col-2","actions"],["target","_blank","alt","Open repository","rel","noopener","role","img",1,"repositories__rel"],[4,"ngIf"],[1,"row"],[1,"col-12"],[1,"row","more__info"],[3,"languageList"],["target","_blank","alt","Open site","rel","noopener","role","img",1,"browser__rel"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.YNc(1,h,17,5,"div",1),a.qZA()),2&n&&(a.xp6(1),a.Q6J("ngForOf",t.repositoryList))},directives:[o.sg,o.O5,d],styles:['.container__repositories[_ngcontent-%COMP%]{display:grid;grid-gap:1.5rem;gap:1.5rem;grid-auto-flow:dense;grid-auto-rows:16rem;grid-template-columns:repeat(auto-fill,minmax(22rem,1fr));padding:3rem 1rem 1rem}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]{text-decoration:none;color:var(--primary-color);font-size:2rem;border:min(1px,.1em) solid var(--primary-color-10);background-color:var(--primary-color-025);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border-radius:.5rem;padding:.5em .6em;box-shadow:2px 4px 12px #00000014;transform:scale3d(1);transition:bottom,box-shadow,transform .3s cubic-bezier(0,0,.5,1);-moz-transition:bottom,box-shadow,transform .6s ease 0s;-webkit-transition:bottom,box-shadow,transform .6s ease 0s;-o-transition:bottom,box-shadow,transform .6s ease 0s}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]:hover{box-shadow:2px 4px 16px #00000029;transform:scale3d(1.05,1.05,1.05)}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]{min-height:3em}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{letter-spacing:1px}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:var(--primary-color-10);border:solid min(1px,.1em);border-color:var(--primary-color-15);border-radius:.2em;padding:.2em;transition:background .3s linear 0s;-moz-transition:background .3s linear 0s;-webkit-transition:background .3s linear 0s;-o-transition:background .3s linear 0s}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--accent-color-25);border:min(1px,.1em) solid var(--accent-color-25)}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:before{filter:var(--svg-filter-active);opacity:var(--svg-opacity-active)}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:before{width:.7em;height:.7em;display:block;content:"";filter:var(--svg-filter)}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] > a.repositories__rel[_ngcontent-%COMP%]:before{background:var(--svg-file-repositories-rel)}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] > a.browser__rel[_ngcontent-%COMP%]:before{background:var(--svg-file-link-rel)}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .main__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{margin-top:.2em}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:.3em 0 .1em}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .more__info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .more__info[_ngcontent-%COMP%]   .topic__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;font-size:12px;font-weight:500;line-height:18px;border:1px solid #0000;border-radius:2em;padding:0 10px;line-height:22px;color:var(--accent-color);background-color:var(--accent-color-25);border:1px solid var(--accent-color,#0000);margin-right:.6em}.container__repositories[_ngcontent-%COMP%]   .card__repository[_ngcontent-%COMP%]   .more__info[_ngcontent-%COMP%]   .topic__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{color:var(--primary-color-revert);background:var(--accent-color)}.container__repositories[_ngcontent-%COMP%]   .card__repository.comming__soon[_ngcontent-%COMP%]{border-style:dotted;display:flex;flex-direction:column;justify-content:center;align-items:center;border:4px dotted var(--primary-color-rgba-20)!important;background-color:var(--primary-color-rgba-10)}.container__repositories[_ngcontent-%COMP%]   .card__repository.comming__soon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:6rem;height:6rem}.container__repositories[_ngcontent-%COMP%]   .card__repository.comming__soon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--primary-color)}.container__repositories[_ngcontent-%COMP%]   .card__repository.comming__soon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2.2rem;text-align:center}']}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[r.Bz.forChild(O)],r.Bz]}),n})();var v=e(24);let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({providers:[_],imports:[[o.ez,v.aw.forChild(),C]]}),n})()}}]);