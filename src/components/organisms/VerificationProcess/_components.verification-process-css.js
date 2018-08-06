import {html} from '@polymer/lit-element';
export default html`<style>.buv-c-verification-process{position:relative}.buv-c-verification-progress-bar{position:absolute;left:0;top:0;width:14px;display:flex;flex-direction:column;height:100%}.buv-c-verification-progress-bar__tube{transition:flex .4s ease-in-out, max-height .4s ease-in;background-color:#2ab27b;border-radius:7px;flex-grow:0}.buv-c-verification-progress-bar__tube.has-started{flex-grow:1}.buv-c-verification-progress-bar__tube.is-test{background-color:#d8d8d8}.buv-c-verification-progress-bar__tube.has-errored{background-color:#d0021b}.buv-c-verification-progress-bar.no-transition{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.buv-c-verification-process__step-list{padding-left:33px;display:table-cell;min-width:200px}.buv-u-visually-hidden{position:absolute !important;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height:1px !important;width:1px !important;overflow:hidden}
</style>`;
