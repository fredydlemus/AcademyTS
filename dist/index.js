(()=>{"use strict";var e={587:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.Course=void 0,s.Course=class{constructor(e){this._isFree=!1,this._lang="spanish",this._name=e.name,this._classes=e.classes,this._isFree=e.isFree,this._lang=e.lang}}},220:(e,s,t)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.freeStudent=void 0;const r=t(513);class a extends r.Student{constructor(e){super(e)}}s.freeStudent=a},513:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.Student=void 0,s.Student=class{constructor(e){this._approvedCorses=void 0,this._learningPaths=void 0,this._name=e.name,this._email=e.email,this._username=e.username,this._social={twitter:e.socialMedia.twitter,instagram:e.socialMedia.instagram,facebook:e.socialMedia.facebook},this._approvedCorses=e.approvedCourses,this._learningPaths=e.learningPaths}}}},s={};function t(r){var a=s[r];if(void 0!==a)return a.exports;var o=s[r]={exports:{}};return e[r](o,o.exports,t),o.exports}(()=>{const e=t(587),s=new(t(220).freeStudent)({name:"fredy",email:"fredyflemus@gmail.com",username:"fredyflemus",socialMedia:{twitter:"fredyflemus",instagram:"fredyflemus",facebook:"fredyflemus"}}),r=new e.Course({name:"CursoDeProgramacion",classes:["clase"]});console.log(s),console.log(r)})()})();