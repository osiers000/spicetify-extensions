(()=>{const t={PRIVATE_SESSION_INDICATOR:"button.main-noConnection-button",MAIN_MENU:"div.main-topBar-topbarContentRight > button.main-userWidget-box",MENU_ITEM_LABEL:"span",MENU_ITEM_BUTTON:"div.main-userWidget-dropDownMenu > ul > li > button.main-contextMenu-menuItemButton",MENU_ITEM_CHECKED:"svg"},n=10,e=150;async function i(t,i){for(let o=0;o<n;o++){if(i){const n=document.querySelectorAll(t);if(n.length>0)return n}else{const n=document.querySelector(t);if(n)return n}await new Promise((t=>setTimeout(t,e)))}return null}(async(t,n)=>{for(;!t();)await new Promise((t=>setTimeout(t,e)));await n()})((()=>Spicetify.Platform),(async function(){if(!await i(t.PRIVATE_SESSION_INDICATOR,!1)){const n=await async function(t){const n=await i(t,!1);return n.click(),n}(t.MAIN_MENU),e=await async function(n){const e=await i(t.MENU_ITEM_BUTTON,!0);for(const i of e){const e=i.querySelector(t.MENU_ITEM_LABEL);if(e&&e.textContent.trim()===n)return i}return null}("Private session");e&&(await async function(n){return!!n.querySelector(t.MENU_ITEM_CHECKED)}(e)?await n.click():await e.click())}}))})();