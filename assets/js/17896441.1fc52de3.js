"use strict";(self.webpackChunkdocusaurus_plugin_docs_editor_preview=self.webpackChunkdocusaurus_plugin_docs_editor_preview||[]).push([[918],{4263:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var n=a(7294),l=a(6010),r=a(907),i=a(3783),s=a(6742),o=a(4973);var c=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(2263),m=a(3018);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.versionMetadata,l=(0,d.Z)().siteConfig.title,i=(0,r.gA)({failfast:!0}).pluginId,s=(0,m.J)(i).savePreferredVersionName,o=(0,r.Jo)(i),c=o.latestDocSuggestion,u=o.latestVersionSuggestion,h=null!=c?c:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:u.label,to:h.path,onClick:function(){return s(u.name)}})))}var E=function(e){var t=e.versionMetadata;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(h,{versionMetadata:t})},g=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},L="tableOfContents_35-E",k="table-of-contents__link";function T(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:k,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(T,{isChild:!0,toc:e.children}))}))):null}var Z=function(e){var t=e.toc;return N(k,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(L,"thin-scrollbar")},n.createElement(T,{toc:t}))},y="tocCollapsible_1PrD",U="tocCollapsibleButton_2O1e",C="tocCollapsibleContent_2Ydz",w="tocCollapsibleExpanded_3GYr";function A(e){var t,a=e.toc,r=e.className,i=(0,m.uR)({initialState:!0}),s=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(y,(t={},t[w]=!s,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",U),onClick:c},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:C,collapsed:s},n.createElement(T,{toc:a})))}var B=a(5977),I=a(4996),M=a(9105);function x(){var e=(0,B.TH)().pathname,t=(0,r.gA)(),a=function(){if(t){var a=t.pluginData.path;return e.slice(a.length)}}();return n.createElement(n.Fragment,null,n.createElement(M.Z,null,n.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),a&&n.createElement("a",{href:(0,I.Z)("/edit"+a),target:"_blank",rel:"noreferrer noopener"},n.createElement("span",{className:"material-icons"},"edit")))}var D=a(6159),O="docItemContainer_33ec",S="lastUpdated_3DPF",V="docItemCol_3FnS",F="tocMobile_3Hoh";var z=function(e){var t,a=e.content,s=e.versionMetadata,o=a.metadata,d=a.frontMatter,m=d.image,u=d.keywords,v=d.hide_title,p=d.hide_table_of_contents,h=o.description,b=o.title,f=o.editUrl,N=o.lastUpdatedAt,L=o.formattedLastUpdatedAt,k=o.lastUpdatedBy,T=(0,r.gA)({failfast:!0}).pluginId,y=(0,r.gB)(T).length>1,U=!v&&void 0===a.contentTitle,C=(0,i.Z)(),w=!p&&a.toc&&a.toc.length>0,B=w&&("desktop"===C||"ssr"===C);return n.createElement(n.Fragment,null,n.createElement(g.Z,{title:b,description:h,keywords:u,image:m}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[V]=!p,t))},n.createElement(E,{versionMetadata:s}),n.createElement("div",{className:O},n.createElement("article",null,y&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",s.label),w&&n.createElement(A,{toc:a.toc,className:F}),n.createElement("div",{className:"markdown"},U&&n.createElement(D.N,null,b),n.createElement(a,null)),(f||N||k)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},f&&n.createElement(x,{editUrl:f})),n.createElement("div",{className:(0,l.Z)("col",S)},(N||k)&&n.createElement(_,{lastUpdatedAt:N,formattedLastUpdatedAt:L,lastUpdatedBy:k})))),n.createElement(c,{metadata:o}))),B&&n.createElement("div",{className:"col col--3"},n.createElement(Z,{toc:a.toc}))))}},6159:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(9756),l=a(2122),r=a(7294),i=a(6010),s=a(4973),o=a(3018),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",m=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,l=e.id,d=(0,n.Z)(e,m),u=(0,o.LU)().navbar.hideOnScroll;return l?r.createElement(t,d,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[c]=!u,a)),id:l}),d.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,d)});var t}}}]);