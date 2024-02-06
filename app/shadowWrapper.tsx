// ShadowWrapper.js or ShadowWrapper.ts if using TypeScript
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ShadowComponent from './shadowComponent';

class ShadowWrapper extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);

    const root = ReactDOMClient.createRoot(mountPoint);
    root.render(<ShadowComponent />);
  }
}

if (!customElements.get('shadow-wrapper')) {
  customElements.define('shadow-wrapper', ShadowWrapper);
}
