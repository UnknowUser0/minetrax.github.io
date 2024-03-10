"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[3422],{5551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:1,title:"Setup Web (AutoInstaller)",id:"setup-web-autoinstaller"},o=void 0,l={id:"installation/setup-web-autoinstaller",title:"Setup Web (AutoInstaller)",description:"You only need to follow either AutoInstaller or Manual, not both.",source:"@site/docs/installation/setup-web-autoinstaller.mdx",sourceDirName:"installation",slug:"/installation/setup-web-autoinstaller",permalink:"/docs/installation/setup-web-autoinstaller",draft:!1,unlisted:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/installation/setup-web-autoinstaller.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Setup Web (AutoInstaller)",id:"setup-web-autoinstaller"},sidebar:"tutorialSidebar",previous:{title:"Before you Begin",permalink:"/docs/introduction/before-you-begin"},next:{title:"Setup Web (Manually)",permalink:"/docs/installation/setup-web-manually"}},a={},d=[{value:"Server Requirements",id:"server-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Finalize",id:"finalize",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"You only need to follow either AutoInstaller or Manual, not both."}),(0,i.jsxs)(n.p,{children:["If you want us to install minetrax for your servers or stuck in any step and need help, Feel free to join our ",(0,i.jsx)(n.a,{href:"https://discord.gg/Hzfj27k",children:(0,i.jsx)(n.strong,{children:"Discord group"})})," and ask in help section or ping ",(0,i.jsx)(n.code,{children:"Xinecraft#2139"}),". Its free. \xaf\\_(\u30c4)_/\xaf"]})]}),"\n",(0,i.jsx)(n.p,{children:"AutoInstaller helps you to install minetrax on your server with just one command. It will install all the dependencies and setup everything for you.\nYou just need to run one command and it will do the rest for you."}),"\n",(0,i.jsx)(n.p,{children:"AutoInstaller should only be used in a fresh VPS/Dedicated Server with Ubuntu (LTS) installed."}),"\n",(0,i.jsx)(n.h2,{id:"server-requirements",children:"Server Requirements"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"As of today, MineTrax cannot be installed on a Shared Hosting. VPS or Dedicated Server is required."})}),"\n",(0,i.jsx)(n.p,{children:"AutoInstaller requires a fresh VPS with Ubuntu (LTS). It is recommended to have atleast 1GB of RAM and 1 vCPU."}),"\n",(0,i.jsx)(n.p,{children:"It is important that you choose LTS version of Ubuntu as AutoInstaller will fail on Non-LTS releases, Below are some Ubuntu releases and their support status:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Codename"}),(0,i.jsx)(n.th,{children:"Supported"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ubuntu 22.04 LTS"}),(0,i.jsx)(n.td,{children:"Jammy Jellyfish"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ubuntu 20.04 LTS"}),(0,i.jsx)(n.td,{children:"Focal Fossa"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ubuntu 18.04 LTS"}),(0,i.jsx)(n.td,{children:"Bionic Beaver"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ubuntu 23.04"}),(0,i.jsx)(n.td,{children:"Lunar Lobster"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ubuntu 22.10"}),(0,i.jsx)(n.td,{children:"Kinetic Kudu"}),(0,i.jsx)(n.td,{children:"\u274c"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Simply select one of supported releases during creation of the VPS in your provider panel."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you looking for affordable & good VPS providers, you can try ",(0,i.jsx)(n.a,{href:"https://m.do.co/c/aece040492d0",children:"DigitalOcean"})," & ",(0,i.jsx)(n.a,{href:"https://hetzner.cloud/?ref=UBpE7ZNeerEj",children:"Hetzner"}),". Both give credit upto 100$ to get started for free."]})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["AutoInstaller should only be used in a fresh VPS/Dedicated Server. Do not use it on a server with any other software installed, use ",(0,i.jsx)(n.a,{href:"../installation/setup-web-manually",children:"Manual Installation"})," instead for such case."]})}),"\n",(0,i.jsxs)(n.p,{children:["SSH into your VPS/Dedicated Server and run the following command (Make sure to run the script with ",(0,i.jsx)(n.code,{children:"root"})," user, if you are not logged in as root, you can switch to root using ",(0,i.jsx)(n.code,{children:"sudo su root"})," command):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -o ~/install.sh https://minetrax.github.io/install.sh && chmod +x ~/install.sh && ~/install.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"It will start the installation process and will take some time to complete."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You will be prompted to enter Domain name which will open up minetrax. Enter your domain name there and press enter. Eg: ",(0,i.jsx)(n.code,{children:"example.com"})]}),"\n",(0,i.jsx)(n.li,{children:"Next, you will also get prompted to enter a database name and password for minetrax installation, Enter your desired data there and press enter. (Do not include any spaces in database name and password)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"If during installation you get any more prompt, just keep pressing enter to continue."})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Domain name can be either a subdomain or a domain. For example, ",(0,i.jsx)(n.code,{children:"minetrax.example.com"})," or ",(0,i.jsx)(n.code,{children:"example.com"})," both are valid.\nMake sure you create a DNS record for your domain/subdomain pointing to your server IP."]})}),"\n",(0,i.jsx)(n.h2,{id:"finalize",children:"Finalize"}),"\n",(0,i.jsxs)(n.p,{children:["Once the installation is complete, you will be able to access minetrax on your domain ",(0,i.jsx)(n.code,{children:"http://your_domain.com"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A SuperAdmin user is created already for you, you can login and change the password:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Username: superadmin\nPassword: admin123\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"CHANGE PASSWORD & EMAIL",type:"danger",children:[(0,i.jsxs)(n.p,{children:["It is very important that you change the ",(0,i.jsx)(n.strong,{children:"password"})," & ",(0,i.jsx)(n.strong,{children:"email"})," of the ",(0,i.jsx)(n.code,{children:"superadmin"})," user after logging in."]}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["You can change password from ",(0,i.jsx)(n.code,{children:"Edit Profile"})," section and email from ",(0,i.jsx)(n.code,{children:"Admin > Users"})," section"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["After checking your site is up and running, make sure to change ",(0,i.jsx)(n.code,{children:"APP_ENV=production"})," and ",(0,i.jsx)(n.code,{children:"APP_DEBUG=false"})," in the ",(0,i.jsx)(n.code,{children:".env"})," file created at ",(0,i.jsx)(n.code,{children:"/var/www/minetrax"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:'APP_NAME="YOUR_DESIRED_APP_NAME"\nAPP_ENV=production\nAPP_DEBUG=false\n'})}),"\n",(0,i.jsxs)(n.admonition,{title:"DISABLE DEBUG MODE",type:"danger",children:[(0,i.jsxs)(n.p,{children:["It is very important that you change your ",(0,i.jsx)(n.strong,{children:"APP_ENV"})," to ",(0,i.jsx)(n.code,{children:"production"})," and ",(0,i.jsx)(n.strong,{children:"APP_DEBUG"})," to ",(0,i.jsx)(n.code,{children:"false"})," in the ",(0,i.jsx)(n.code,{children:".env"})," file when you are done testing and setting up the site."]}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Keeping APP_ENV to ",(0,i.jsx)(n.code,{children:"local"})," or APP_DEBUG to ",(0,i.jsx)(n.code,{children:"true"})," might expose sensitive information to end users."]})})]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsx)(n.p,{children:"Now you are all set to go, you can start using minetrax and add your servers to it.\nBelow are some steps to follow next:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../installation/setup-web-ssl",children:"Secure your Web with SSL Certificate"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../installation/adding-minecraft-server",children:"Add your First Minecraft Server to Web"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../installation/setup-plugin",children:"Install Plugin on your Minecraft Server"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);