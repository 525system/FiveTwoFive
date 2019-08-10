/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=654)}({654:function(e,t){const n={users:[{id:"user-1",name:"Joe Doe",avatar:"https://randomuser.me/api/portraits/thumb/men/26.jpg"},{id:"user-2",name:"Ella Harper",avatar:"https://randomuser.me/api/portraits/thumb/women/65.jpg"}],userId:"user-1"};const s=document.getElementById("tc-adapter-console");let i=0;function o(e,t){const n=document.createElement("div"),o=document.createElement("div"),a=(new Date).getTime();return s.classList.add("updated"),n.className="tc-adapter-console__action",n.textContent=e,o.className="tc-adapter-console__data",o.textContent=JSON.stringify(t),i<a-500&&(s.innerHTML=""),s.appendChild(n),s.appendChild(o),setTimeout(()=>{s.classList.remove("updated")},500),i=a,Promise.resolve(t)}window.ClassicEditor.create(document.querySelector(".tc-adapter .editor"),{initialData:'<h2>\n\t\tBilingual Personality Disorder\n\t</h2>\n\t<p>\n\t\tThis may be the first time you hear about this\n\t\t<suggestion id="suggestion-1:user-2" suggestion-type="insertion" type="start"></suggestion>\n\t\t made-up<suggestion id="suggestion-1:user-2" suggestion-type="insertion" type="end"></suggestion>\n\t\tdisorder but it actually isn’t so far from the truth.\n\t\tAs recent studies show, the language you speak has more effects on you then you realise.\n\t\tAccording to the studies, the language a person speaks affects their cognition,\n\t\t<suggestion id="suggestion-2:user-1" suggestion-type="deletion" type="start"></suggestion>\n\t\tfeelings, <suggestion id="suggestion-2:user-1" suggestion-type="deletion" type="end"></suggestion>\n\t\tbehaviour, emotions and hence <strong>their personality</strong>.\n\t</p>\n\t<figure class="image image-style-side">\n\t\t<img src="../../../assets/img/collaboration-demo-img.jpeg">\n\t\t<figcaption>\n\t\t\tOne language, one person.\n\t\t</figcaption>\n\t</figure>\n\t<p>\n\t\tThis shouldn’t come as a surprise\n\t\t<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>\n\t\tthat different regions of the brain becomes more active depending on the activity.\n\t\tSince structure, information and especially\n\t\t<suggestion id="suggestion-3:user-1" suggestion-type="formatInline:886cqig6g8rf" type="start"></suggestion>\n\t\tthe culture of languages<suggestion id="suggestion-3:user-1" suggestion-type="formatInline:886cqig6g8rf" type="end"></suggestion>\n\t\tvaries substantially\n\t\tand the language a person speaks is a essential element of daily life.\n\t</p>',plugins:["Essentials","Paragraph","Bold","Italic","Heading","Link","Image","ImageToolbar","ImageCaption","ImageStyle","TrackChanges",class{constructor(e){this.editor=e}init(){const e=this.editor.plugins.get("Users"),t=this.editor.plugins.get("TrackChanges");for(const t of n.users)e.addUser(t);e.defineMe("user-1"),t.adapter={getSuggestion:e=>new Promise(t=>{switch(e){case"suggestion-1":t({id:"suggestion-1",type:"insertion",authorId:"user-2",createdAt:new Date(2019,1,13,11,20,48)});break;case"suggestion-2":t({id:"suggestion-2",type:"deletion",authorId:"user-1",createdAt:new Date(2019,1,14,12,7,20)});break;case"suggestion-3":const n={commandName:"bold",commandParams:[{forceValue:!0}]};t({id:"suggestion-3",type:"formatInline:886cqig6g8rf",authorId:"user-1",createdAt:new Date(2019,2,8,10,2,7),data:n})}}),addSuggestion:e=>(o("addSuggestion()",e),Promise.resolve({createdAt:new Date})),updateSuggestion:e=>(o("updateSuggestion()",e),Promise.resolve())}}}],toolbar:["heading","|","bold","italic","link","|","trackChanges"],licenseKey:"NWjyPk8qp4CA4TwnjbyaTUCOxdy16VLgz1r6qeU2YPDg3Nw36KIRzRhLtUfvHssefklb7tTq0g==",sidebar:{container:document.querySelector(".tc-adapter .sidebar")},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]}}).then(e=>{window.editor=e,e.execute("trackChanges")}).catch(e=>console.error(e))}});
//# sourceMappingURL=snippet.js.map