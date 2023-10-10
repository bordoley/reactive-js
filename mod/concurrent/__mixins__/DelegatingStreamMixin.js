/// <reference types="./DelegatingStreamMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { StreamLike_scheduler, } from "../../concurrent.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "./DelegatingReplayObservableMixin.js";
const DelegatingStreamMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDispatcherMixin(), DelegatingReplayObservableMixin(), DelegatingDisposableMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(DelegatingReplayObservableMixin(), instance, delegate);
        init(DelegatingDispatcherMixin(), instance, delegate);
        instance[StreamLike_scheduler] = delegate[StreamLike_scheduler];
        return instance;
    }, props({
        [StreamLike_scheduler]: none,
    }), {}));
})();
export default DelegatingStreamMixin;
