/// <reference types="./Broadcaster.latest.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import DelegatingEventListenerMixin from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import LatestEventListenerMixin from "../../__mixins__/LatestEventListenerMixin.js";
import LatestSourceMixin from "../../__mixins__/LatestSourceMixin.js";
const createLatestEventListener = 
/*@__PURE__*/
(() => mixInstanceFactory(include(DelegatingEventListenerMixin(), LatestEventListenerMixin()), function LatestEventListener(delegate, context) {
    init(DelegatingEventListenerMixin(), this, delegate);
    init(LatestEventListenerMixin(), this, delegate, context);
    return this;
}))();
const latest = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(LatestSourceMixin()), function BroadcasterLatestSource(broadcasters, mode) {
        init(LatestSourceMixin(), this, broadcasters, mode, createLatestEventListener);
        return this;
    }, props(), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: true,
    }));
})();
export const Broadcaster_combineLatest = ((...broadcasters) => latest(broadcasters, "combine-latest"));
export const Broadcaster_zipLatest = ((...broadcasters) => latest(broadcasters, "zip-latest"));
