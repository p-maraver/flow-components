/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Commercial Vaadin Developer License 4.0, available at https://vaadin.com/license/cvdl-4.0.
 */
import { css } from 'lit';

export const spreadsheetStyles = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    isolation: isolate;
  }

  .v-disabled {
    cursor: default !important;
  }

  .v-spreadsheet {
    box-sizing: border-box;
    min-height: 100px;
    overflow: hidden;
    position: relative;
    padding: 0px;
    /*
    padding-bottom: $spreadsheet-toolbar-height;
    padding-left: $spreadsheet-row-header-width;
    padding-top: $spreadsheet-toolbar-height + $spreadsheet-bottom-bar-height;
     */
    border: 1px solid #c7c7c7;
    font-family: Helvetica;
    font-size: 14px;
    color: #464646;
  }
  .v-spreadsheet.hidefunctionbar {
    padding-top: 28px;
  }
  .v-spreadsheet.hidefunctionbar .functionbar {
    height: 0;
    display: none;
  }
  .v-spreadsheet.hidefunctionbar .sheet.top-right-pane,
  .v-spreadsheet.hidefunctionbar .sheet.top-left-pane {
    top: 0px;
  }
  .v-spreadsheet.hidefunctionbar .corner {
    top: 0px;
  }
  .v-spreadsheet.hidetabsheet {
    padding-bottom: 0px;
  }
  .v-spreadsheet.hidetabsheet .sheet-tabsheet {
    height: 0;
    display: none;
  }
  .v-spreadsheet.hidetabsheet .sheet.bottom-right-pane {
    bottom: 0px;
  }
  .v-spreadsheet > div {
    outline: none;
  }
  .v-spreadsheet > div,
  .v-spreadsheet .sheet > div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .v-spreadsheet.row-resizing,
  .v-spreadsheet.row-resizing div {
    cursor: row-resize;
  }
  .v-spreadsheet.col-resizing,
  .v-spreadsheet.col-resizing div {
    cursor: col-resize;
  }
  .v-spreadsheet.selecting {
    cursor: crosshair;
  }
  .v-spreadsheet .functionbar {
    background-color: white;
    border-bottom: 1px solid #c7c7c7;
    height: 29px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  .v-spreadsheet .functionbar .functionfield,
  .v-spreadsheet .functionbar .addressfield {
    box-sizing: border-box;
    font-size: 14px;
    height: 100%;
    width: 100%;
    padding: 0;
    padding-left: 5px;
    border: none;
    color: #474747;
    outline: none;
  }
  .v-spreadsheet .functionbar .arrow {
    position: absolute;
    left: 161px;
    top: 0;
    line-height: 33px;
    font-size: x-small;
  }
  .v-spreadsheet .functionbar .namedrangebox {
    position: absolute;
    left: 161px;
    width: 15px;
    height: 100%;
    opacity: 0;
  }
  .v-spreadsheet .functionbar .fixed-left-panel {
    box-sizing: border-box;
    float: left;
    width: 176px;
    height: 100%;
    border-right: 1px solid #c7c7c7;
    background: #fafafa;
  }
  .v-spreadsheet .functionbar .adjusting-right-panel {
    box-sizing: border-box;
    overflow: hidden;
    padding-right: 5px;
    height: 100%;
  }
  .v-spreadsheet .functionbar .addressfield {
    text-align: center;
    background: #fafafa;
  }
  .v-spreadsheet .functionbar .functionfield {
    font: 400 14px/1.55 Helvetica;
  }
  .v-spreadsheet .functionbar .formulaoverlay {
    font: 400 14px/1.55 Helvetica;
    position: absolute;
    top: 3px;
    left: 181px;
    pointer-events: none;
    color: rgba(0, 0, 0, 0);
  }
  .v-spreadsheet .functionbar .formulaoverlay span {
    border-radius: 2px;
  }
  .v-spreadsheet .sheet.bottom-right-pane {
    overflow: scroll;
    right: 0;
    bottom: 28px;
    position: absolute;
  }
  .v-spreadsheet .sheet .cell {
    box-sizing: border-box;
    background-color: white;
    border-right: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
    overflow: visible;
    padding: 0 2px;
    position: absolute;
    white-space: nowrap;
    flex-direction: column;
    justify-content: flex-end;
    line-height: normal;
  }
  .v-spreadsheet .sheet .cell.selected-cell-highlight {
    outline: solid #222222 1px;
    outline-offset: -2px;
    z-index: 1;
  }
  .v-spreadsheet .sheet .cell > .v-button {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .v-spreadsheet .sheet div.cell.r {
    text-align: right;
  }
  .v-spreadsheet .sheet div.merged-cell {
    display: block;
    overflow: hidden;
    z-index: 1 !important;
  }
  .v-spreadsheet .sheet div.custom-editor-cell {
    padding: 2px;
  }
  .v-spreadsheet .sheet.bottom-right-pane div.merged-cell {
    z-index: 1 !important;
  }
  .v-spreadsheet .sheet > input[type='text'] {
    border: 0 !important;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    cursor: text;
    display: block !important;
    outline: none !important;
    overflow: hidden;
    padding: 0 !important;
    position: absolute;
    z-index: 3 !important;
  }
  .v-spreadsheet .sheet .floater {
    border-right: 0;
    border-bottom: 0;
    z-index: -1;
    background-color: white;
  }
  .v-spreadsheet.nogrid .sheet .cell {
    border-right: 0px;
    border-bottom: 0px;
  }
  .v-spreadsheet .top-left-pane div.merged-cell {
    z-index: 1 !important;
  }
  .v-spreadsheet .top-right-pane div.merged-cell,
  .v-spreadsheet .bottom-left-pane div.merged-cell {
    z-index: 1 !important;
  }
  .v-spreadsheet .top-left-pane,
  .v-spreadsheet .top-right-pane,
  .v-spreadsheet .bottom-left-pane {
    box-sizing: border-box;
    border-right: 1px solid #6a6a6a;
    border-bottom: 1px solid #6a6a6a;
    overflow: visible;
    position: absolute;
  }
  .v-spreadsheet .top-left-pane.inactive,
  .v-spreadsheet .top-right-pane.inactive,
  .v-spreadsheet .bottom-left-pane.inactive {
    border-right: 0;
    border-bottom: 0;
  }
  .v-spreadsheet .bottom-left-pane {
    height: 100%;
    left: 0;
    padding-bottom: 28px;
    z-index: 0;
  }
  .v-spreadsheet .bottom-left-pane .rh {
    left: 0;
    margin-top: 0 !important;
  }
  .v-spreadsheet .bottom-left-pane .cell,
  .v-spreadsheet .bottom-left-pane .sheet-image {
    margin-left: 50px;
  }
  .v-spreadsheet .bottom-left-pane .sheet-selection {
    margin-left: 51px;
  }
  .v-spreadsheet .top-left-pane {
    left: 0;
    top: 30px;
    z-index: 0;
  }
  .v-spreadsheet .top-left-pane .ch {
    top: 0;
    margin-left: 50px;
  }
  .v-spreadsheet .top-left-pane .rh {
    left: 0;
    margin-top: 27px;
  }
  .v-spreadsheet .top-left-pane .cell,
  .v-spreadsheet .top-left-pane .sheet-image {
    margin-top: 27px;
    margin-left: 50px;
  }
  .v-spreadsheet .top-left-pane .sheet-selection {
    margin-top: 28px;
    margin-left: 51px;
  }
  .v-spreadsheet .top-right-pane {
    top: 30px;
    width: 100%;
    z-index: 0;
  }
  .v-spreadsheet .top-right-pane .ch {
    top: 0;
    margin-left: 0 !important;
  }
  .v-spreadsheet .top-right-pane .cell,
  .v-spreadsheet .top-right-pane .sheet-image {
    margin-top: 27px;
  }
  .v-spreadsheet .top-right-pane .sheet-selection {
    margin-top: 28px;
  }
  .v-spreadsheet.noheaders .top-left-pane .cell,
  .v-spreadsheet.noheaders .top-left-pane .sheet-image,
  .v-spreadsheet.noheaders .top-right-pane .cell,
  .v-spreadsheet.noheaders .top-right-pane .sheet-image {
    margin-top: 0;
  }
  .v-spreadsheet.noheaders .top-left-pane .sheet-selection,
  .v-spreadsheet.noheaders .top-right-pane .sheet-selection {
    margin-top: 1px;
  }
  .v-spreadsheet.noheaders .top-left-pane .cell,
  .v-spreadsheet.noheaders .top-left-pane .sheet-image,
  .v-spreadsheet.noheaders .bottom-left-pane .cell,
  .v-spreadsheet.noheaders .bottom-left-pane .sheet-image {
    margin-left: 0;
  }
  .v-spreadsheet.noheaders .top-left-pane .sheet-selection,
  .v-spreadsheet.noheaders .bottom-left-pane .sheet-selection {
    margin-left: 1px;
  }
  .v-spreadsheet .ch,
  .v-spreadsheet .rh,
  .v-spreadsheet .corner {
    background-color: #fafafa;
    font-family: Helvetica;
    font-size: 13px;
    overflow: hidden;
    position: absolute;
    text-align: center;
  }
  .v-spreadsheet .rh {
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
    border-right: 1px solid #c7c7c7;
    cursor: e-resize;
    -webkit-touch-callout: none;
    width: 50px;
    z-index: 2;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    flex-direction: column;
    line-height: 100%;
  }
  .v-spreadsheet .rh.selected-row-header {
    background: #e6edf4 !important;
    border-right: 2px solid #63b1ff;
  }
  .v-spreadsheet .rh .header-resize-dnd-first,
  .v-spreadsheet .rh .header-resize-dnd-second {
    background: transparent;
    cursor: row-resize;
    height: 3px;
    position: absolute;
    left: 0;
    width: 49px;
    z-index: 2;
  }
  .v-spreadsheet .rh .header-resize-dnd-first {
    top: 0;
  }
  .v-spreadsheet .rh .header-resize-dnd-second {
    border-bottom: 1px solid #c7c7c7;
    bottom: 0;
  }
  .v-spreadsheet .rh.resize-extra {
    border-bottom: 1px solid #c7c7c7;
  }
  .v-spreadsheet .ch {
    background-color: #fafafa;
    background-image: linear-gradient(to bottom, #fafafa 2%, #f0f0f0 98%);
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
    border-bottom: 1px solid #c7c7c7;
    cursor: s-resize;
    height: 27px;
    line-height: 27px;
    -webkit-touch-callout: none;
    z-index: 2;
  }
  .v-spreadsheet .ch.selected-column-header {
    background: #e6edf4 !important;
    border-bottom: 2px solid #63b1ff;
  }
  .v-spreadsheet .ch .header-resize-dnd-first,
  .v-spreadsheet .ch .header-resize-dnd-second {
    background: transparent;
    cursor: col-resize;
    height: 27px;
    position: absolute;
    top: 0;
    width: 3px;
    z-index: 2;
  }
  .v-spreadsheet .ch .header-resize-dnd-first {
    left: 0;
  }
  .v-spreadsheet .ch .header-resize-dnd-second {
    border-right: 1px solid #c7c7c7;
    right: 0;
  }
  .v-spreadsheet .ch.resize-extra {
    border-right: 1px solid #c7c7c7;
  }
  .v-spreadsheet.protected.lock-format-columns .ch .header-resize-dnd-first,
  .v-spreadsheet.protected.lock-format-columns .ch .header-resize-dnd-second,
  .v-spreadsheet.protected.lock-format-rows .rh .header-resize-dnd-first,
  .v-spreadsheet.protected.lock-format-rows .rh .header-resize-dnd-second {
    cursor: default;
  }
  .v-spreadsheet.noheaders {
    padding-left: 0px;
    padding-top: 30px;
  }
  .v-spreadsheet.noheaders .ch,
  .v-spreadsheet.noheaders .rh,
  .v-spreadsheet.noheaders .corner {
    display: none;
  }
  .v-spreadsheet .ch.col1 .header-resize-dnd-first,
  .v-spreadsheet .rh.row1 .header-resize-dnd-first {
    display: none;
  }
  .v-spreadsheet > div.resize-line {
    background: #197de1;
  }
  .v-spreadsheet .resize-line,
  .v-spreadsheet .sheet > div.resize-line {
    border: none;
    height: 0;
    padding: 0;
    visibility: hidden;
    width: 0;
    z-index: 2;
    position: absolute;
  }
  .v-spreadsheet.col-resizing .resize-line,
  .v-spreadsheet.col-resizing .sheet > div.resize-line {
    height: 100%;
    visibility: visible;
    width: 1px;
  }
  .v-spreadsheet.col-resizing > .resize-line {
    margin-left: 49px;
    margin-top: -28px;
  }
  .v-spreadsheet.col-resizing .sheet > div.resize-line {
    margin-left: -1px;
  }
  .v-spreadsheet.row-resizing .resize-line,
  .v-spreadsheet.row-resizing .sheet > div.resize-line {
    height: 1px;
    visibility: visible;
    width: 100%;
  }
  .v-spreadsheet.row-resizing > .resize-line {
    margin-top: 56px;
    margin-left: -50px;
  }
  .v-spreadsheet.row-resizing .sheet > div.resize-line {
    margin-top: -1px;
  }
  .v-spreadsheet .corner {
    background-color: #fafafa;
    background-image: linear-gradient(to bottom, #fafafa 2%, #f0f0f0 98%);
    box-sizing: border-box;
    cursor: default;
    top: 30px;
    left: 0;
    width: 50px;
    height: 27px;
    border-bottom: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
    z-index: 1;
  }
  .v-spreadsheet .sheet > div.sheet-image {
    background: transparent;
    border: none;
    cursor: default;
    height: auto;
    width: auto;
    position: absolute;
  }
  .v-spreadsheet .bottom-right-pane.sheet > div.sheet-image {
    z-index: 1;
  }
  .v-spreadsheet .top-left-pane > div.sheet-image {
    z-index: 1;
  }
  .v-spreadsheet .top-right-pane > div.sheet-image,
  .v-spreadsheet .bottom-left-pane > div.sheet-image {
    z-index: 1;
  }
  .v-spreadsheet .sheet .cell-comment-triangle {
    border-color: transparent #ffcf16 transparent transparent;
    border-style: solid;
    border-width: 0 9px 9px 0;
    height: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    z-index: 1;
  }
  .v-spreadsheet .sheet .cell-invalidformula-triangle {
    border-color: transparent #ed473b transparent transparent;
    border-style: solid;
    border-width: 0 9px 9px 0;
    height: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    z-index: 1;
  }
  .v-spreadsheet .sheet .comment-overlay-line {
    background-color: #a7a7a7 !important;
    border: none !important;
    display: block !important;
    height: 1px;
    padding: 0;
    position: absolute;
    transform-origin: 0% 50%;
    z-index: 1;
  }
  .v-spreadsheet div.sheet-selection {
    background-color: transparent !important;
    border: none !important;
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    overflow: visible;
    pointer-events: none;
    margin-left: 1px;
    margin-top: 1px;
  }
  .v-spreadsheet div.sheet-selection.col0.row0 {
    display: none;
  }
  .v-spreadsheet.notfocused .sheet-selection {
    opacity: 0.6;
  }
  .v-spreadsheet .sheet-selection .s-top,
  .v-spreadsheet .sheet-selection .s-left,
  .v-spreadsheet .sheet-selection .s-bottom,
  .v-spreadsheet .sheet-selection .s-right {
    padding: 0;
    background-color: #197de1;
    position: absolute;
  }
  .v-spreadsheet .sheet-selection .s-top.extend,
  .v-spreadsheet .sheet-selection .s-left.extend,
  .v-spreadsheet .sheet-selection .s-bottom.extend,
  .v-spreadsheet .sheet-selection .s-right.extend {
    background-color: #40b527 !important;
  }
  .v-spreadsheet .sheet-selection .s-top {
    top: -2px;
    left: -2px;
    height: 2px;
    pointer-events: all;
  }
  .v-spreadsheet .sheet-selection .s-left {
    width: 2px;
    padding-bottom: 1px;
  }
  .v-spreadsheet .sheet-selection .s-bottom {
    height: 2px;
    bottom: 0;
  }
  .v-spreadsheet .sheet-selection .s-right {
    right: 0;
    width: 2px;
  }
  .v-spreadsheet .sheet-selection .s-corner {
    background-color: #40b527;
    position: absolute;
    bottom: -2px;
    left: -2px;
    height: 6px;
    width: 6px;
    outline: 2px solid white;
    cursor: crosshair;
  }
  .v-spreadsheet .sheet-selection.paintmode {
    background-color: rgba(235, 247, 233, 0.8) !important;
  }
  .v-spreadsheet .sheet-selection.paintmode .s-top,
  .v-spreadsheet .sheet-selection.paintmode .s-left,
  .v-spreadsheet .sheet-selection.paintmode .s-bottom,
  .v-spreadsheet .sheet-selection.paintmode .s-right {
    background-color: #40b527;
  }
  .v-spreadsheet .sheet-tabsheet {
    background: #fafafa;
    border-top: 1px solid #c7c7c7;
    height: 28px;
    width: 100%;
    cursor: default;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options {
    background: #fafafa;
    cursor: pointer;
    display: inline-block;
    height: 28px;
    position: absolute;
    width: 130px;
    z-index: 3;
    left: 0;
    top: 0;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div {
    line-height: 26px;
    width: 26px;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    position: relative;
    text-align: center;
    z-index: inherit;
    color: #464646;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-beginning::before,
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-end::before,
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-left::before,
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-right::before,
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.add-new-tab::before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    background: currentColor;
    -webkit-mask-image: var(--mask-image);
    mask-image: var(--mask-image);
    --mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>');
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-end::before {
    --mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>');
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-left::before {
    --mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>');
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.scroll-tabs-right::before {
    --mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>');
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.add-new-tab::before {
    --mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>');
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div:hover {
    color: #197de1;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-options div.hidden {
    color: #d6d6d6;
    cursor: default;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-container {
    transition: margin-left 200ms;
    display: inline-block;
    left: 130px;
    position: absolute;
    z-index: inherit;
    margin-right: 206px;
    height: 25px;
    overflow: hidden;
    white-space: nowrap;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-container .sheet-tabsheet-tab {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 300;
    background: #fafafa;
    color: #6a6a6a;
    border: 1px solid #c7c7c7;
    border-top: none;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin-left: 5px;
    max-width: 200px;
    min-width: 50px;
    overflow: hidden;
    padding: 2px 6px;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    top: -1px;
    z-index: inherit;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-container .sheet-tabsheet-tab.selected-tab {
    background: #ffffff;
    cursor: default;
    color: #2584e2;
    max-width: none;
    position: relative;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-container .sheet-tabsheet-tab.selected-tab input[type='text'] {
    font-family: Helvetica;
    font-size: 14px;
    color: #2584e2;
    border: none !important;
    font-weight: 300;
    height: 20px;
    outline: none !important;
    padding: 0 !important;
    position: relative;
    top: 0;
    left: 0;
    width: inherit;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-temp {
    font-family: Helvetica;
    font-size: 14px;
    display: inline;
    left: -5000px;
    position: fixed;
    white-space-collapse: preserve;
  }
  .v-spreadsheet .sheet-tabsheet .sheet-tabsheet-infolabel {
    background: #fafafa;
    z-index: inherit;
    position: absolute;
    right: 0;
    font-weight: bold;
    font-size: 11px;
    border-left: 1px solid #c7c7c7;
    padding-left: 5px;
    padding-right: 5px;
    width: 200px;
    height: 100%;
    line-height: 29px;
    display: inline;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .v-spreadsheet .sheet-tabsheet,
  .v-spreadsheet .sheet-tabsheet div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .v-spreadsheet .sheet div div.popupbutton {
    padding: 0;
    color: #191919;
    font-weight: 400;
    white-space: nowrap;
    outline: none;
    position: absolute;
    bottom: 0px;
    right: 1px;
    cursor: pointer;
    height: 11px;
    width: 11px;
    border: solid 1px lightgrey;
    text-align: center;
    background: white;
    border-radius: 2px;
  }
  .v-spreadsheet .sheet div div.popupbutton:after {
    content: '▼';
    color: grey;
    font-size: 11px;
    vertical-align: top;
  }
  .v-spreadsheet .sheet div div.popupbutton.v-disabled {
    opacity: 0.5;
  }
  .v-spreadsheet .sheet-selection.touch.fill .fill-touch-square {
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    top: -15px;
  }
  .v-spreadsheet .sheet-selection.touch.fill .fill-touch-square > .square {
    position: absolute;
    background-color: #40b527;
    width: 6px;
    height: 6px;
    border: 2px solid white;
    top: -4px;
  }
  .v-spreadsheet .sheet-selection.touch.fill .s-right > .fill-touch-square,
  .v-spreadsheet .sheet-selection.touch.fill .s-left > .fill-touch-square {
    top: 50%;
    margin-top: -15px;
  }
  .v-spreadsheet .sheet-selection.touch.fill .s-right > .fill-touch-square > .square,
  .v-spreadsheet .sheet-selection.touch.fill .s-left > .fill-touch-square > .square {
    top: 11px;
    left: 11px;
  }
  .v-spreadsheet .sheet-selection.touch.fill .s-top > .fill-touch-square {
    top: -20px;
    left: 50%;
  }
  .v-spreadsheet .sheet-selection.touch.fill .s-top > .fill-touch-square > .square {
    left: 50%;
    margin-top: 20px;
    margin-left: -4px;
  }
  .v-spreadsheet .sheet-selection.touch.fill .s-bottom > .fill-touch-square {
    top: -8px;
    left: 50%;
  }
  .v-spreadsheet .sheet-selection.touch.fill .s-bottom > .fill-touch-square > .square {
    left: 50%;
    margin-top: 8px;
    margin-left: -4px;
  }
  .v-spreadsheet .sheet-selection.touch .s-corner {
    width: 7px;
    height: 7px;
    left: 7px;
    bottom: 7px;
    background-color: #197de1;
    border-radius: 5px;
  }
  .v-spreadsheet .sheet-selection.touch .s-corner-touch {
    width: 30px;
    height: 30px;
    position: absolute;
    left: -10px;
    bottom: -10px;
  }
  .v-spreadsheet .col-group-pane,
  .v-spreadsheet .col-group-freeze-pane {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: #fafafa;
    border-bottom: 1px solid #c7c7c7;
    box-sizing: border-box;
  }
  .v-spreadsheet .col-group-pane .grouping,
  .v-spreadsheet .col-group-freeze-pane .grouping {
    position: absolute;
    height: 7px;
    border-top: 2px solid #c7c7c7;
    border-left: 2px solid #c7c7c7;
    cursor: pointer;
  }
  .v-spreadsheet .col-group-pane .grouping .expand,
  .v-spreadsheet .col-group-freeze-pane .grouping .expand {
    position: relative;
    top: -7px;
    float: right;
    right: -4px;
    height: 12px;
    width: 12px;
    background-color: #c7c7c7;
    color: white;
    border: none;
    line-height: 11px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font-size: 12px;
  }
  .v-spreadsheet .col-group-pane .grouping.plus,
  .v-spreadsheet .col-group-freeze-pane .grouping.plus {
    border: none;
  }
  .v-spreadsheet .col-group-pane .grouping.plus .expand,
  .v-spreadsheet .col-group-freeze-pane .grouping.plus .expand {
    top: -5px;
  }
  .v-spreadsheet .col-group-pane .grouping.inversed,
  .v-spreadsheet .col-group-freeze-pane .grouping.inversed {
    border-right: 2px solid #c7c7c7;
    border-left: none;
  }
  .v-spreadsheet .col-group-pane .grouping.inversed .expand,
  .v-spreadsheet .col-group-freeze-pane .grouping.inversed .expand {
    right: initial;
    left: -4px;
    float: none;
  }
  .v-spreadsheet .col-group-freeze-pane {
    overflow: hidden;
    border-right: 1px solid #6a6a6a;
  }
  .v-spreadsheet .col-group-border {
    position: absolute;
  }
  .v-spreadsheet .col-group-border .border {
    position: absolute;
    width: 100%;
    z-index: 1;
    border-bottom: 1px dotted #c7c7c7;
    margin-top: 20px;
  }
  .v-spreadsheet .row-group-pane,
  .v-spreadsheet .row-group-freeze-pane {
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 1;
    background-color: #fafafa;
    border-right: 1px solid #c7c7c7;
    box-sizing: border-box;
  }
  .v-spreadsheet .row-group-pane .grouping,
  .v-spreadsheet .row-group-freeze-pane .grouping {
    position: absolute;
    width: 8px;
    border-top: 2px solid #c7c7c7;
    border-left: 2px solid #c7c7c7;
    cursor: pointer;
  }
  .v-spreadsheet .row-group-pane .grouping.plus,
  .v-spreadsheet .row-group-freeze-pane .grouping.plus {
    border: none;
  }
  .v-spreadsheet .row-group-pane .grouping .expand,
  .v-spreadsheet .row-group-freeze-pane .grouping .expand {
    position: absolute;
    bottom: -4px;
    right: 2px;
    height: 12px;
    width: 12px;
    background-color: #c7c7c7;
    color: white;
    border: none;
    line-height: 11px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font-size: 12px;
  }
  .v-spreadsheet .row-group-pane .grouping.plus .expand,
  .v-spreadsheet .row-group-freeze-pane .grouping.plus .expand {
    right: 0;
  }
  .v-spreadsheet .row-group-pane .grouping.inversed,
  .v-spreadsheet .row-group-freeze-pane .grouping.inversed {
    border-top: none;
    border-bottom: 2px solid #c7c7c7;
  }
  .v-spreadsheet .row-group-pane .grouping.inversed .expand,
  .v-spreadsheet .row-group-freeze-pane .grouping.inversed .expand {
    bottom: initial;
    top: -5px;
  }
  .v-spreadsheet .row-group-freeze-pane {
    overflow: hidden;
    border-bottom: 1px solid #6a6a6a;
  }
  .v-spreadsheet .row-group-border {
    position: absolute;
  }
  .v-spreadsheet .row-group-border .border {
    position: absolute;
    height: 100%;
    z-index: 1;
    border-right: 1px dotted #c7c7c7;
    /*margin-top: 20px;*/
  }
  .v-spreadsheet .expandbutton {
    height: 18px;
    width: 11px;
    line-height: 18px;
    font-size: 11px;
    text-align: center;
    cursor: pointer;
    color: #484848;
  }
  .v-spreadsheet .expandbutton span {
    vertical-align: text-top;
  }
  .v-spreadsheet .expandbutton:active {
    border-color: gray;
  }
  .v-spreadsheet .col-group-summary .expandbutton {
    margin-left: auto;
    margin-right: 4px;
    /*margin-top: 7px;*/
  }
  .v-spreadsheet .row-group-summary .expandbutton {
    display: inline-block;
    margin-left: 4px;
  }
  .v-spreadsheet .grouping-corner {
    position: absolute;
    left: 0;
    z-index: 1;
    border-right: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
    box-sizing: border-box;
    background-color: #fafafa;
  }
  .v-spreadsheet .col-group-summary {
    position: absolute;
    box-sizing: border-box;
    border-bottom: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
    background-color: #fafafa;
    z-index: 1;
  }
  .v-spreadsheet .row-group-summary {
    position: absolute;
    box-sizing: border-box;
    border-bottom: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
    background-color: #fafafa;
    left: 0;
    z-index: 1;
  }
  .v-spreadsheet .grouping .expand {
    line-height: 13px;
  }

  .cell-range-bg-color {
    background-color: rgba(232, 242, 252, 0.8);
  }
  span.code-snippet {
    font-family: 'Courier New', Courier, monospace;
  }
  .v-label-overlay-content {
    padding: 10px;
  }
  .sheet-image > .v-csslayout {
    overflow: visible;
    position: relative;
  }
  .sheet-image > .v-csslayout .v-button-minimize-button {
    top: -14px;
    position: absolute;
    height: auto;
    padding: 0;
  }
  .sheet-image > .v-csslayout .v-button-minimize-button::after {
    box-shadow: none;
  }
  .sheet-image > .v-csslayout .v-button-minimize-button .v-button-caption {
    display: none;
  }
  .clear-filters-button {
    width: 100%;
  }
`;

export const spreadsheetOverlayStyles = css`
  @keyframes valo-animate-in-fade {
    0% {
      opacity: 0;
    }
  }

  @keyframes valo-animate-out-fade {
    100% {
      opacity: 0;
    }
  }

  @keyframes valo-overlay-animate-in {
    0% {
      transform: translateY(-4px);
      opacity: 0;
    }
  }

  #spreadsheet-overlays .v-tooltip {
    background-color: rgba(50, 50, 50, 0.9);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    color: white;
    padding: 5px 9px;
    border-radius: 3px;
    max-width: 35em;
    overflow: hidden !important;
    font-size: 14px;
  }
  #spreadsheet-overlays .v-tooltip div[style*='width'] {
    width: auto !important;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage {
    background-color: white;
    background-color: #fff;
    color: #ed473b;
    margin: -5px -9px;
    padding: 5px 9px;
    max-height: 10em;
    overflow: auto;
    font-weight: 400;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage h2:only-child {
    font: inherit;
    line-height: inherit;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage-info {
    color: #00a7f5;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage-warning {
    color: #fc9c00;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage-error {
    color: #ed473b;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage-critical {
    color: #fa007d;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage-system {
    color: #bb00ff;
  }
  #spreadsheet-overlays .v-tooltip .v-tooltip-text {
    max-height: 10em;
    overflow: auto;
    margin-top: 10px;
  }
  #spreadsheet-overlays .v-tooltip .v-tooltip-text pre {
    margin: 0px;
  }
  #spreadsheet-overlays .v-tooltip .v-errormessage[aria-hidden='true'] .v-tooltip-text {
    margin-top: 0;
  }
  #spreadsheet-overlays .v-tooltip h1,
  #spreadsheet-overlays .v-tooltip h2,
  #spreadsheet-overlays .v-tooltip h3,
  #spreadsheet-overlays .v-tooltip h4 {
    color: inherit;
  }
  #spreadsheet-overlays .v-tooltip pre.v-tooltip-pre {
    font: inherit;
    white-space: pre-wrap;
  }
  #spreadsheet-overlays .v-contextmenu {
    padding: 4px 4px;
    border-radius: 4px;
    background-color: white;
    color: #474747;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.091);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 4px 4px;
  }
  #spreadsheet-overlays .v-contextmenu[class*='animate-in'] {
    animation: valo-overlay-animate-in 120ms;
  }
  #spreadsheet-overlays .v-contextmenu[class*='animate-out'] {
    animation: valo-animate-out-fade 120ms;
  }
  #spreadsheet-overlays .v-contextmenu table {
    border-spacing: 0;
  }
  #spreadsheet-overlays .v-contextmenu .gwt-MenuItem {
    cursor: pointer;
    line-height: 27px;
    padding: 0 20px 0 10px;
    border-radius: 3px;
    font-weight: 400;
    white-space: nowrap;
    position: relative;
    display: block;
  }
  #spreadsheet-overlays .v-contextmenu .gwt-MenuItem:active:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #0957a6;
    opacity: 0.15;
    filter: alpha(opacity=15);
    pointer-events: none;
    border-radius: inherit;
  }
  #spreadsheet-overlays .v-contextmenu .gwt-MenuItem .v-icon {
    max-height: 27px;
    margin-right: 5px;
    min-width: 1em;
  }
  #spreadsheet-overlays .v-contextmenu .gwt-MenuItem-selected {
    background-color: #197de1;
    background-image: linear-gradient(to bottom, #1b87e3 2%, #166ed6 98%);
    color: #ecf2f8;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.05);
  }

  #spreadsheet-overlays .v-spreadsheet-comment-overlay {
    padding: 4px 4px;
    border-radius: 4px;
    background-color: white;
    color: #474747;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.091);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 7px;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    -webkit-user-select: text;
    user-select: text;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay[class*='animate-in'] {
    animation: valo-overlay-animate-in 120ms;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay[class*='animate-out'] {
    animation: valo-animate-out-fade 120ms;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay .popupContent {
    overflow: visible;
    z-index: 2;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay .comment-overlay-author {
    padding-bottom: 7px;
    font-size: 11px;
    font-weight: bold;
    white-space: nowrap;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay .comment-overlay-invalidformula {
    color: #ed473b;
    max-width: 168px;
    max-height: 140px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay .comment-overlay-label {
    max-width: 168px;
    max-height: 140px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay .comment-overlay-input {
    max-width: 168px;
    max-height: 140px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 300;
    outline: none;
    border: none;
  }
  #spreadsheet-overlays .v-spreadsheet-comment-overlay .comment-overlay-separator {
    border-bottom: 1px solid #c7c7c7;
    margin-bottom: 7px;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay {
    padding: 4px 4px;
    border-radius: 4px;
    background-color: white;
    color: #474747;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.091);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay[class*='animate-in'] {
    animation: valo-overlay-animate-in 120ms;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay[class*='animate-out'] {
    animation: valo-animate-out-fade 120ms;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay .v-panel.spreadsheet-item-filter-layout {
    background-color: transparent;
    border: none;
    height: 275px;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay .v-panel.spreadsheet-item-filter-layout .v-panel-captionwrap,
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay .v-panel.spreadsheet-item-filter-layout .v-panel-content,
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay .v-panel.spreadsheet-item-filter-layout .v-panel-deco {
    background-color: transparent;
    border: none;
  }
  #spreadsheet-overlays .spreadsheet-item-filter-layout {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 275px;
    overflow-y: auto;
  }

  #spreadsheet-overlays .spreadsheet-filter-table-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay-header {
    background: white;
    height: 18px;
    position: relative;
    width: 100%;
    padding-bottom: 7px;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay-header .v-window-closebox {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 21px;
    color: #999999;
    padding-right: 4px;
    border-radius: 0 4px 0 4px;
    text-align: center;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay-header .v-window-closebox:hover {
    color: #197de1;
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay-header .v-window-closebox:before {
    content: '\\00d7';
  }
  #spreadsheet-overlays .v-spreadsheet-popupbutton-overlay-header .header-caption {
    margin: 0 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
  }
`;
