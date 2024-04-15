"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[9759],{1718:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=r(4848),t=r(8453);const s={sidebar_position:2,title:"Plugin's config.yml",id:"plugin-config-yaml"},o=void 0,a={id:"plugin/plugin-config-yaml",title:"Plugin's config.yml",description:"Using config.yml you can modify various aspect of the plugin to suite your need.",source:"@site/docs/plugin/plugin-config-yaml.md",sourceDirName:"plugin",slug:"/plugin/plugin-config-yaml",permalink:"/docs/plugin/plugin-config-yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/plugin/plugin-config-yaml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Plugin's config.yml",id:"plugin-config-yaml"},sidebar:"tutorialSidebar",previous:{title:"Server Intel Feature",permalink:"/docs/web/server-intel-feature"},next:{title:"Plugins Support",permalink:"/docs/plugin/plugins-support"}},l={},d=[{value:"Content of config.yml",id:"content-of-configyml",level:4}];function m(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"config.yml"})," you can modify various aspect of the plugin to suite your need.\r\nIn this section we will discuss about the details of those variables."]}),"\n",(0,i.jsx)(n.h4,{id:"content-of-configyml",children:"Content of config.yml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",metastring:'title="plugins/Minetrax/config.yml"',children:'#    \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557\r\n#    \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557\u2588\u2588\u2554\u255d\r\n#    \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2554\u255d\r\n#    \u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255d     \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2554\u2588\u2588\u2557\r\n#    \u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u255d \u2588\u2588\u2557\r\n#    \u255a\u2550\u255d     \u255a\u2550\u255d\u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\r\n#                            Created By: Xinecraft\r\n#                      Support: https://discord.gg/Hzfj27k\r\n\r\n# This will enable or disable the Minetrax plugin\r\nenabled: true\r\n# The website address that will be linked. (Example: https://minetrax.live)\r\napi-host:\r\n# This is found on your website.  In Admin Section > Settings > Plugin\r\napi-key:\r\n# This is also found on your website.  In Admin Section > Settings > Plugin\r\napi-secret:\r\n# This is the id of the server on your website.  This has to be a numeric value. Can be found in Admin Section > Servers\r\nserver-id:\r\n# Your webquery ip address.  Most of the time this can be left at 0.0.0.0\r\nwebquery-host: 0.0.0.0\r\n# The port that you opened so plugin and website can communicate. Make sure this port is not already take and can be open.\r\nwebquery-port: 25569\r\n# This enables the sending of console logs to web.\r\nenable-consolelog: true\r\n# This enables the in-game chat feature.\r\nenable-chatlog: true\r\n# Sends server intel reports like cpu usage, memory etc. to website.\r\nreport-server-intel: true\r\n# Sends player intel to website for better analysis.\r\nreport-player-intel: true\r\n# Sends player inventory to Intel for better analysis.\r\nsend-inventory-data-to-player-intel: false\r\n# Message format that will be sent when sending message from website to game\r\nweb-message-format: \'&b[WEB]&r {USERNAME}: {MESSAGE}&r\'\r\n# Sends a reminder to player to link their account to website.\r\nremind-player-to-link: true\r\n# How often to send the reminder to player.  This value is in seconds (300 seconds = 5 minutes)\r\nremind-player-interval: 300\r\n# Shorten the link URL using link shorter service.  This will make the link shorter and easier to type.\r\nshorten-account-link-url: false\r\n# The message send to player to remind them to link their account\r\nremind-player-link-message:\r\n  - "&lHey there! It seems you haven\'t linked your player in web yet."\r\n  - "&lLink now and earn rewards & perks!"\r\n  - "&lType /account-link to begin"\r\n  - "&oIf you have already linked and getting this message try rejoining the server"\r\n# Message when player initialize account link process by typing /account-link\r\nplayer-link-init-message:\r\n  - "&7Please wait.. Account verification is instantiating."\r\n# Message when player getting linked is not found in website database\r\nplayer-link-not-found-message:\r\n  - "&c404! Player not in website database yet."\r\n  - "&ePlease try again later."\r\n# Message when player is already linked to an account.\r\nplayer-link-already-linked-message:\r\n  - "&eHey! This player is already linked. Plz visit {WEB_URL} to know more"\r\n# Message when player linking fails due to unknown error\r\nplayer-link-unknown-error-message:\r\n  - "&cUnknown error occurred while linking your account."\r\n  - "&ePlease try again later."\r\n# Message when player linking /account-link is successful and LINK_URL is returned for final step.\r\nplayer-link-final-action-message:\r\n  - "&a&lPlease click or open the link below to complete linking process."\r\n  - "{LINK_URL}"\r\n# If this is enabled it will send whois information about players when they join the server\r\nenable-whois-on-player-join: true\r\n# If this is enabled players with permission can run the /webwhois or /ww command\r\nenable-whois-on-command: true\r\n# This is the name of the permission players need to be able to use /ww command\r\nwhois-admin-permission-name: ww.admin\r\n# Message that is sent when /ww finds no players\r\nwhois-no-match-found-message: "&4&lNo matching player found with your whois query"\r\n# This is the format of message sent when someone joins the server for the first time\r\nwhois-player-on-first-join-message:\r\n  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"\r\n  - "&e&oNo data found for this player on web!"\r\n# This is the format of message that is sent when player joins the server\r\nwhois-player-on-join-message:\r\n  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"\r\n  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"\r\n  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"\r\n  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"\r\n  - "&e&o{URL}&r"\r\n# This is the format of message that is sent when player runs /ww command\r\nwhois-player-on-command-message:\r\n  - "&a&l{USERNAME}&r is from &a&l{COUNTRY}&r"\r\n  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"\r\n  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"\r\n  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"\r\n  - "&e&o{URL}&r"\r\n# This is the format of message that is sent when admin runs /ww command\r\nwhois-player-on-admin-command-message:\r\n  - "&a&l{USERNAME}&r is from &a&l{GEO}&r"\r\n  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"\r\n  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"\r\n  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"\r\n  - "&e&o{URL}&r"\r\n# This is the message sent when there are more than 1 players found\r\nwhois-multiple-players-title-message: \'&a&lThere is total &e&l{COUNT}&r &a&lplayers found.\'\r\n# This is the message sent to show list of players found\r\nwhois-multiple-players-list-message: \'&6#{POSITION}&r - &b{USERNAME}&r\'\r\n# This is how long before player is considered AFK in seconds. Player Intel keep track of AFK activity for Analytics..\r\n# If you use some sort of afk plugin it is recommended to set this time to match.  (300 seconds = 5 minutes)\r\nafk-threshold-in-seconds: 300\r\n# If this is enabled this will deploy a firework when a player joins the server\r\nenable-firework-on-player-join: false\r\n# If this is enabled this will only deploy a firework when player joins server for first time\r\nenable-firework-on-player-first-join: false\r\n# How many fireworks will be sent when player joins\r\njoin-fireworks-amount: 2\r\n# If enabled the plugin will send more log data in console for better debugging.\r\ndebug-mode: false\r\n# If enabled only whitelisted commands (whitelisted-commands-from-web) can be sent from web. other custom command will be discarded.\r\nallow-only-whitelisted-commands-from-web: false\r\nwhitelisted-commands-from-web:\r\n  - kill\r\n  - kick\r\n  - mute\r\n  - emute\r\n  - ban\r\n  - broadcast\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);