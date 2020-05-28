(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(10),o=(n(0),n(165)),s={id:"overview",title:"Overview",sidebar_label:"Overview"},r={id:"overview",title:"Overview",description:"Areas covered",source:"@site/../docs/spec-overview.md",permalink:"/docs/next/overview",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/spec-overview.md",version:"next",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Reference implementations",permalink:"/docs/next/reference"},next:{title:"Create Operation",permalink:"/docs/next/create"}},c=[{value:"Areas covered",id:"areas-covered",children:[]},{value:"Focus on API",id:"focus-on-api",children:[]},{value:"SDL",id:"sdl",children:[]},{value:"Naming",id:"naming",children:[]},{value:"Base schema",id:"base-schema",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"areas-covered"},"Areas covered"),Object(o.b)("p",null,"This specification describes all aspects of a flexible GraphQL API suitable for relational databases."),Object(o.b)("h2",{id:"focus-on-api"},"Focus on API"),Object(o.b)("p",null,"GraphQLCRUD is a collection of specifications for GraphQL APIs that are abstracting from any database technologies. GraphQLCRUD is concerned with the API only and abstracts from the implementation. As such two implementations of GraphQLCRUD could choose to store data in different ways, but applications interacting with the data through the GraphQLCRUD API wouldn't be able to tell the difference."),Object(o.b)("h2",{id:"sdl"},"SDL"),Object(o.b)("p",null,"Examples are used throughout this spec to show the final schema generated for a specific data model. In all examples, the SDL notation is used to define the data model. The benefit of SDL is that it is database independent, so we can use the same notation accross all supported databases."),Object(o.b)("h2",{id:"naming"},"Naming"),Object(o.b)("p",null,"GraphQLCRUD does not specify how fields generated for each data type must be named. It is up to each GraphQLCRUD implementation to define a naming system. The reference implementation uses the naming convention as listed in the example queries"),Object(o.b)("h2",{id:"base-schema"},"Base schema"),Object(o.b)("p",null,"Specification is basing on the example model of Note and Comment.\nAny additional types will be directly referenced in the schema"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n  description: String\n  comments: [Comment]!\n}\n\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n  votes: Int\n  note: Note\n}\n\n")))}l.isMDXComponent=!0}}]);