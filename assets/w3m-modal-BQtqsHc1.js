const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BGp1zXGb.js","assets/index-BiHIJTgg.css"])))=>i.map(i=>d[i]);
import{at as k,au as S,av as r,aw as h,ax as g,ay as E,az as b,aA as A,aB as x,aC as c,aD as v,U as _,i as O,aE as N,aF as y,aG as L,aH as w,c as I,aI as T}from"./index-BGp1zXGb.js";const K=k`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var d=function(u,e,t,i){var o=arguments.length,a=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(u,e,t,i);else for(var n=u.length-1;n>=0;n--)(s=u[n])&&(a=(o<3?s(a):o>3?s(e,t,a):s(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};const C="scroll-lock";let l=class extends S{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.state.open,this.caipAddress=h.state.activeCaipAddress,this.caipNetwork=h.state.activeCaipNetwork,this.isSiweEnabled=g.state.isSiweEnabled,this.shake=r.state.shake,this.initializeTheming(),E.prefetch(),this.unsubscribe.push(r.subscribeKey("open",e=>e?this.onOpen():this.onClose()),r.subscribeKey("shake",e=>this.shake=e),b.subscribeKey("siweStatus",e=>this.onSiweStatusChange(e),"eip155"),h.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),h.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),g.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),A.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?x`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e=c.state.view==="ConnectingSiwe",t=c.state.view==="ApproveTransaction";if(this.isSiweEnabled){const{SIWEController:i}=await v(async()=>{const{SIWEController:a}=await import("./index-BGp1zXGb.js").then(s=>s.b6);return{SIWEController:a}},__vite__mapDeps([0,1]));i.state.status!=="success"&&(e||t)?r.shake():r.close()}else r.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=T.state,i=_.getColorTheme(t);O(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),N.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=C,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${C}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:o}=i.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}onSiweStatusChange(e){e==="success"&&r.close()}async onNewAddress(e){var s;const t=this.caipAddress,i=t?y.getPlainAddress(t):void 0,o=e?y.getPlainAddress(e):void 0,a=i===o;if(this.caipAddress=e,o&&!a&&this.isSiweEnabled)try{const{SIWEController:n}=await v(async()=>{const{SIWEController:p}=await import("./index-BGp1zXGb.js").then(f=>f.b6);return{SIWEController:p}},__vite__mapDeps([0,1])),m=b.state.siweStatus==="success";!i&&o?this.onSiweNavigation():m&&i&&o&&i!==o&&(s=n.state._client)!=null&&s.options.signOutOnAccountChange&&(await n.signOut(),this.onSiweNavigation())}catch(n){throw this.caipAddress=t,n}o||r.close()}async onNewNetwork(e){var o,a,s,n;if(!this.caipAddress){this.caipNetwork=e,c.goBack();return}const t=(a=(o=this.caipNetwork)==null?void 0:o.caipNetworkId)==null?void 0:a.toString(),i=(s=e==null?void 0:e.caipNetworkId)==null?void 0:s.toString();if(t&&i&&t!==i)if(this.isSiweEnabled){const{SIWEController:m}=await v(async()=>{const{SIWEController:p}=await import("./index-BGp1zXGb.js").then(f=>f.b6);return{SIWEController:p}},__vite__mapDeps([0,1]));(n=m.state._client)!=null&&n.options.signOutOnNetworkChange?(await m.signOut(),this.onSiweNavigation()):c.goBack()}else c.goBack();this.caipNetwork=e}onSiweNavigation(){const e=h.state.activeChain===L.CHAIN.EVM;!(b.state.siweStatus==="success")&&e?this.open?c.replace("ConnectingSiwe"):r.open({view:"ConnectingSiwe"}):c.goBack()}};l.styles=K;d([w()],l.prototype,"open",void 0);d([w()],l.prototype,"caipAddress",void 0);d([w()],l.prototype,"caipNetwork",void 0);d([w()],l.prototype,"isSiweEnabled",void 0);d([w()],l.prototype,"shake",void 0);l=d([I("w3m-modal")],l);export{l as W3mModal};
