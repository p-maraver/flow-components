import { TooltipHostMixin } from './tooltip/src/vaadin-tooltip-host-mixin.js';
import { html, PolymerElement } from '@polymer/polymer';

// Test component

customElements.define(
'tooltip-host',
class extends TooltipHostMixin(PolymerElement) {
    static get template() {
    return html`
        <style>
        :host {
            display: block;
            padding: 5px 10px;
            border: solid 1px #e2e2e2;
            text-align: center;
        }
        </style>
        <slot></slot>
        <slot name="tooltip"></slot>
    `;
    }
},
);