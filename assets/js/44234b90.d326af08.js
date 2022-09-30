"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[7012],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6776:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:30,title:"Upgrade Guide",id:"upgrade"},p=void 0,d={unversionedId:"upgrade",id:"upgrade",title:"Upgrade Guide",description:"This document covers the process of upgrading MineTrax from older version to latest.",source:"@site/docs/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/docs/upgrade",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/upgrade.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Upgrade Guide",id:"upgrade"},sidebar:"tutorialSidebar",previous:{title:"Custom Themes",permalink:"/docs/tutorials/custom-themes"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},m={},s=[{value:"Supported Versions",id:"supported-versions",level:2},{value:"Upgrading Web",id:"upgrading-web",level:2},{value:"1. Enter Maintenance Mode",id:"1-enter-maintenance-mode",level:3},{value:"2. Clear compiled template &amp; cache",id:"2-clear-compiled-template--cache",level:3},{value:"3. Take the latest pull",id:"3-take-the-latest-pull",level:3},{value:"4. Update the composer &amp; npm dependencies",id:"4-update-the-composer--npm-dependencies",level:3},{value:"5. Run the migrations",id:"5-run-the-migrations",level:3},{value:"6. Restart the Queue Listeners",id:"6-restart-the-queue-listeners",level:3},{value:"7. Fix Permissions",id:"7-fix-permissions",level:3},{value:"8. Exit the Maintenance Mode",id:"8-exit-the-maintenance-mode",level:3},{value:"Upgrading Plugin",id:"upgrading-plugin",level:2}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document covers the process of upgrading MineTrax from older version to latest.\nIt is highly recommened to always keep your version updated to get latest features and bug fixes."),(0,i.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Web Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Plugin Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported"),(0,i.kt)("th",{parentName:"tr",align:null},"PHP Versions"),(0,i.kt)("th",{parentName:"tr",align:null},"Minecraft Versions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0-alpha"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0-alpha"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.1-alpha"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.1-alpha"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.18"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.2-alpha"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.2-alpha"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.18"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.3-alpha"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.3-alpha"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.4-alpha"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.4-alpha"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,"1.0.6-alpha")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,"1.0.5-alpha")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.19"))))),(0,i.kt)("h2",{id:"upgrading-web"},"Upgrading Web"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Upgrade guide for web consider ",(0,i.kt)("inlineCode",{parentName:"p"},"Ubuntu")," as operating system. If you using some other OS you might have to tweak some commands accordingly."))),(0,i.kt)("p",null,"Follow the process step by step to upgrade web to latest version."),(0,i.kt)("h3",{id:"1-enter-maintenance-mode"},"1. Enter Maintenance Mode"),(0,i.kt)("p",null,"Maintenance mode will disable the web for end user so we don't expose any unexpected error or logs to them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan down\n")),(0,i.kt)("h3",{id:"2-clear-compiled-template--cache"},"2. Clear compiled template & cache"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan cache:clear\nphp artisan view:clear\nphp artisan config:clear\nphp artisan clear\n")),(0,i.kt)("h3",{id:"3-take-the-latest-pull"},"3. Take the latest pull"),(0,i.kt)("p",null,"Take latest pull from the Github web repo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\ngit pull origin main\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have made any changes to the code, this process might fail and you have to revert back your changes before taking the pull. If the process fail then stash out your local changes and try to pull again. Make sure to backup your changes so you can add them back."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\ngit stash\ngit pull origin main\n")))),(0,i.kt)("p",null,"Once latest changes are pulled fix back the permissions for storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\nchmod -R 755 storage/* bootstrap/cache\n")),(0,i.kt)("h3",{id:"4-update-the-composer--npm-dependencies"},"4. Update the composer & npm dependencies"),(0,i.kt)("p",null,"Install the latest dependencies changes from composer & npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\ncomposer install\nnpm install\nnpm run prod\n")),(0,i.kt)("h3",{id:"5-run-the-migrations"},"5. Run the migrations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan migrate --force\n")),(0,i.kt)("h3",{id:"6-restart-the-queue-listeners"},"6. Restart the Queue Listeners"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan queue:restart\n")),(0,i.kt)("h3",{id:"7-fix-permissions"},"7. Fix Permissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chown -R www-data:www-data /var/www/minetrax/*\n")),(0,i.kt)("h3",{id:"8-exit-the-maintenance-mode"},"8. Exit the Maintenance Mode"),(0,i.kt)("p",null,"Everything is done! Now lets turn back the site up for everyone."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan up\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note on Breaking changes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some version upgrade might introduce breaking changes. If so, it will be mentioned in the release note and discord.\nMake sure to read the release note on github and discord for any additional step required for upgrading to version with breaking changes."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web Release Notes: ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/MineTrax/minetrax/releases"},"https://github.com/MineTrax/minetrax/releases"))),(0,i.kt)("h2",{id:"upgrading-plugin"},"Upgrading Plugin"),(0,i.kt)("p",null,"Upgrading your plugin is as simple as just downloading the latest version of the plugin and replacing old ",(0,i.kt)("inlineCode",{parentName:"p"},"Minetrax.jar")," file with the new one. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Download Link: ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/MineTrax/plugin/releases"},"https://github.com/MineTrax/plugin/releases"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure to replace the file and not keep two version of it in plugins directory.\nEg: If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"Minetrax-1.0.2.jar")," and upgrading to ",(0,i.kt)("inlineCode",{parentName:"p"},"Minetrax-1.0.3.jar")," make sure to delete the old file i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"Minetrax-1.0.2.jar"),"."))))}c.isMDXComponent=!0}}]);