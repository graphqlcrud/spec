(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(10),o=(n(0),n(165)),c={id:"subscriptions",title:"Subscriptions"},a={id:"subscriptions",title:"Subscriptions",description:"Subscriptions are divided to 3 different groups of changes.",source:"@site/../docs/spec-subscriptions.md",permalink:"/docs/next/subscriptions",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/spec-subscriptions.md",version:"next",sidebar:"docs",previous:{title:"Get Operation",permalink:"/docs/next/getOne"},next:{title:"Releases",permalink:"/docs/next/release"}},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Subscriptions are divided to 3 different groups of changes."),Object(o.b)("p",null,"Create, Update and Delete subscriptions can be used with filtering capabilities"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input NoteSubscriptionFilter {\n  id: IDInput\n  title: StringInput\n  description: StringInput\n  and: [NoteFilter]\n  or: [NoteFilter]\n  not: NoteFilter\n}\n\ntype Subscription {\n  newNote(filter: NoteSubscriptionFilter): Note!\n  updatedNote(filter: NoteSubscriptionFilter): Note!\n  deletedNote(filter: NoteSubscriptionFilter): Note!\n}\n")))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,d=l["".concat(c,".").concat(f)]||l[f]||b[f]||o;return n?i.a.createElement(d,a(a({ref:t},s),{},{components:n})):i.a.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);