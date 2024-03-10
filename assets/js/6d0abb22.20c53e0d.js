"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[6732],{837:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=a(4848),l=a(8453);const i={sidebar_position:10,title:"Localization",id:"localization"},s=void 0,r={id:"web/localization",title:"Localization",description:"If you know a language and want to contribute to localization. Please join our Discord group and  ping Xinecraft#2139. It will be very helpful for the project as current translated text are mostly from Google Translate.",source:"@site/docs/web/localization-feature.md",sourceDirName:"web",slug:"/web/localization",permalink:"/docs/web/localization",draft:!1,unlisted:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/localization-feature.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Localization",id:"localization"},sidebar:"tutorialSidebar",previous:{title:"How to Debug",permalink:"/docs/web/debug"},next:{title:"SMTP Configuration",permalink:"/docs/web/smtp-configuration"}},o={},d=[{value:"How to change default language?",id:"how-to-change-default-language",level:2},{value:"How to make changes to language files?",id:"how-to-make-changes-to-language-files",level:2},{value:"Language Switcher Feature",id:"language-switcher-feature",level:2},{value:"How to add a new language?",id:"how-to-add-a-new-language",level:2},{value:"Method 1 (Manual)",id:"method-1-manual",level:3},{value:"Method 2 (Automatic)",id:"method-2-automatic",level:3},{value:"1. Go to MineTrax installation folder",id:"1-go-to-minetrax-installation-folder",level:4},{value:"2. Run the language creator script for PHP",id:"2-run-the-language-creator-script-for-php",level:4},{value:"3. Run the language creator script for JSON",id:"3-run-the-language-creator-script-for-json",level:4},{value:"3. Review the language files",id:"3-review-the-language-files",level:4},{value:"4. Finally change locale of Web to newly added language",id:"4-finally-change-locale-of-web-to-newly-added-language",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Help Wanted! Contribute to Localization",type:"success",children:(0,t.jsxs)(n.p,{children:["If you know a language and want to contribute to localization. Please join our ",(0,t.jsx)(n.a,{href:"https://discord.gg/Hzfj27k",children:(0,t.jsx)(n.strong,{children:"Discord group"})})," and  ping ",(0,t.jsx)(n.code,{children:"Xinecraft#2139"}),". It will be very helpful for the project as current translated text are mostly from Google Translate."]})}),"\n",(0,t.jsx)(n.p,{children:"Localization feature allows you to translate the web in any language you want. You can choose from predefined language or add new one."}),"\n",(0,t.jsx)(n.p,{children:"Below are list of languages which are already added by default."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Code"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"English"}),(0,t.jsx)(n.td,{children:"en"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Spanish"}),(0,t.jsx)(n.td,{children:"es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Russian"}),(0,t.jsx)(n.td,{children:"ru"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Slovak"}),(0,t.jsx)(n.td,{children:"sk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"German"}),(0,t.jsx)(n.td,{children:"de"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Polish"}),(0,t.jsx)(n.td,{children:"pl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ukrainian"}),(0,t.jsx)(n.td,{children:"uk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hindi"}),(0,t.jsx)(n.td,{children:"hi"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Italian"}),(0,t.jsx)(n.td,{children:"it"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Chinese (Traditional)"}),(0,t.jsx)(n.td,{children:"zh-hk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Chinese (Simplified)"}),(0,t.jsx)(n.td,{children:"zh-cn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Japanese"}),(0,t.jsx)(n.td,{children:"ja"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-change-default-language",children:"How to change default language?"}),"\n",(0,t.jsxs)(n.p,{children:["Open your ",(0,t.jsx)(n.code,{children:".env"})," file in any text editor and change ",(0,t.jsx)(n.code,{children:"APP_LOCALE"})," environment variable to a valid language code for whatever language you want. Eg: en, fr, hi, ru etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".env"',children:"// For german it should be\nAPP_LOCALE=de\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, clear the cache by running ",(0,t.jsx)(n.code,{children:"update.sh"})," script so your changes will reflect instantly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /var/www/minetrax\nsudo sh update.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Done! Now open your website default language will be changed to the language you set."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-make-changes-to-language-files",children:"How to make changes to language files?"}),"\n",(0,t.jsx)(n.p,{children:"The default included translations was done using automatic translation script might not be correct, so it is recommended that you review the translation files for your language and make changes as per requirements."}),"\n",(0,t.jsxs)(n.p,{children:["Translations files are stored in folder ",(0,t.jsx)(n.code,{children:"lang"})," in the root directory.\nTo change text for your language you will have to edit all files in folder of your language code & {lang}.json.\nEg, to edit for german you edit:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/lang\n    /de\n        auth.php\n        pagination.php\n        passwords.php\n        validation.php\n\t\t//... all other file exists in this directory\n\tde.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Translation files will look something like this."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"JSON file:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="lang/de.json"',children:'{\n\t"Thanks": "Vielen Dank",\n\t"Hey :name": "Hallo :name",\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"PHP File:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="lang/de/auth.php"',children:"<?php \nreturn [\n  'failed' => 'Diese Anmeldeinformationen stimmen nicht mit unseren Aufzeichnungen \xfcberein.',\n  'password' => 'Das angegebene Passwort ist falsch.',\n  'throttle' => 'Zu viele Anmeldeversuche. Bitte versuchen Sie es in :seconds Sekunden erneut.',\n];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Left side of the expression in both JSON and PHP files are ",(0,t.jsx)(n.code,{children:"Key"})," and should not be changed. Only the right side which is ",(0,t.jsx)(n.code,{children:"Value"})," must be changed."]}),"\n",(0,t.jsx)(n.p,{children:"Feel free to translate the right part as per requirements."}),"\n",(0,t.jsx)(n.p,{children:"After completing your changes clear the caches so your changes will reflect instantly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /var/www/minetrax\nphp artisan cache:clear\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Note that in some cases there is a colon (:) before some string, Eg: ",(0,t.jsx)(n.code,{children:":name"}),". Those are special placeholder which will be dynamically replaced to variables so those special placeholders should not be translated."]})}),"\n",(0,t.jsx)(n.h2,{id:"language-switcher-feature",children:"Language Switcher Feature"}),"\n",(0,t.jsx)(n.p,{children:"MineTrax comes with a language switcher which allows users to change the language of the website. It is enabled by default and allows users to change to any supported language."}),"\n",(0,t.jsxs)(n.p,{children:["To disable the language switcher, open your ",(0,t.jsx)(n.code,{children:".env"})," file and change ",(0,t.jsx)(n.code,{children:"AVAILABLE_LOCALES"})," to ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"AVAILABLE_LOCALES=null\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to enable only specific languages, you can set the ",(0,t.jsx)(n.code,{children:"AVAILABLE_LOCALES"})," to a comma separated list of language codes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"AVAILABLE_LOCALES=en,de,fr,ru\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-add-a-new-language",children:"How to add a new language?"}),"\n",(0,t.jsx)(n.p,{children:"It is very simple to add new language if your desired language is not included in the list."}),"\n",(0,t.jsx)(n.p,{children:"To add support for new language you have two methods:"}),"\n",(0,t.jsx)(n.h3,{id:"method-1-manual",children:"Method 1 (Manual)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to minetrax folder Eg: ",(0,t.jsx)(n.code,{children:"cd /var/www/minetrax"})]}),"\n",(0,t.jsxs)(n.li,{children:["copy ",(0,t.jsx)(n.code,{children:"lang/en"})," folder to ",(0,t.jsx)(n.code,{children:"lang/YOUR_LANGUAGE_CODE"})," Eg: ",(0,t.jsx)(n.code,{children:"lang/hr"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["copy ",(0,t.jsx)(n.code,{children:"lang/en.json"})," file to ",(0,t.jsx)(n.code,{children:"lang/YOUR_LANGUAGE_CODE.json"})," Eg: ",(0,t.jsx)(n.code,{children:"lang/en.json"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Now start adding translations in the newly created files as ",(0,t.jsx)(n.a,{href:"#how-to-make-changes-to-language-files",children:"described above"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Change the locale of your site to the new language by changing ",(0,t.jsx)(n.code,{children:"APP_LOCALE"})," env variable as ",(0,t.jsx)(n.a,{href:"#how-to-change-default-language",children:"described here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Using the above method might get cumbersome as you will have to add translations for every text manually. Follow the second method instead if you prefer automatic translation from google translate."}),"\n",(0,t.jsx)(n.h3,{id:"method-2-automatic",children:"Method 2 (Automatic)"}),"\n",(0,t.jsx)(n.p,{children:"This method uses google translate to add translation for all text automatically."}),"\n",(0,t.jsx)(n.h4,{id:"1-go-to-minetrax-installation-folder",children:"1. Go to MineTrax installation folder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /var/www/minetrax\n"})}),"\n",(0,t.jsx)(n.h4,{id:"2-run-the-language-creator-script-for-php",children:"2. Run the language creator script for PHP"}),"\n",(0,t.jsx)(n.p,{children:"Run the command in console."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan translate:files\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will ask few questions, answer it as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" What is base locale? [en]:\n > en\n\n What are the target locales? Comma seperate each lang key [es,fr,ru,sk,de,pl,uk,hi]:\n // highlight-next-line\n > YOUR_DESIRED_LANGUAGE <- Replace with your desired language code\n\n Force overwrite existing translations? [No]:\n  [0] No\n  [1] Yes\n > 0\n\n Verbose each translation? [Yes]:\n  [0] No\n  [1] Yes\n > 1\n\n Use text exploration and json translation or php files? [php]:\n  [0] json\n  [1] php\n > php\n\n Are there specific target files to translate only? ex: file1,file2 []:\n >\n\n Are there specific files to exclude? [auth,pagination,validation,passwords]:\n > no\n\n 0/1 [>---------------------------]   0%\n en -> xx translating...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let it run and it should create a new folder named as your language code inside ",(0,t.jsx)(n.code,{children:"lang"})," folder, with all php translation files."]}),"\n",(0,t.jsx)(n.h4,{id:"3-run-the-language-creator-script-for-json",children:"3. Run the language creator script for JSON"}),"\n",(0,t.jsx)(n.p,{children:"Run the command in console."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan translate:files\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will ask few questions, answer it as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" What is base locale? [en]:\n > en\n\n What are the target locales? Comma seperate each lang key [es,fr,ru,sk,de,pl,uk,hi]:\n // highlight-next-line\n > YOUR_DESIRED_LANGUAGE <- Replace with your desired language code\n\n Force overwrite existing translations? [No]:\n  [0] No\n  [1] Yes\n > 0\n\n Verbose each translation? [Yes]:\n  [0] No\n  [1] Yes\n > 1\n\n Use text exploration and json translation or php files? [php]:\n  [0] json\n  [1] php\n > json\n\n 0/1 [>---------------------------]   0%\nen -> xx translating...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will take a while, let it complete and it should create a new json file ",(0,t.jsx)(n.code,{children:"lang/YOUR_LANGUAGE_CODE.json"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"3-review-the-language-files",children:"3. Review the language files"}),"\n",(0,t.jsxs)(n.p,{children:["Text translated by Google will reduced your work but you still should check for wrong translations and fix them.\nEg: Google translate will translate to word ",(0,t.jsx)(n.code,{children:"Steam"})," in translation text but it shouldn't be in some cases."]}),"\n",(0,t.jsxs)(n.p,{children:["Now open the newly created folder & files in ",(0,t.jsx)(n.code,{children:"lang"})," directory for your language and review/edit them as required."]}),"\n",(0,t.jsx)(n.h4,{id:"4-finally-change-locale-of-web-to-newly-added-language",children:"4. Finally change locale of Web to newly added language"}),"\n",(0,t.jsxs)(n.p,{children:["Change the locale of your site to the new language by changing ",(0,t.jsx)(n.code,{children:"APP_LOCALE"})," env variable as ",(0,t.jsx)(n.a,{href:"#how-to-change-default-language",children:"described here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(6540);const l={},i=t.createContext(l);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);