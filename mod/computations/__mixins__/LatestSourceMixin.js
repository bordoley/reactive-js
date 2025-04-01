/// <reference types="./LatestSourceMixin.d.ts" />

import { Array_push } from "../../__internal__/constants.js";
import { mix, props, proto } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ReactiveSourceLike_subscribe, } from "../../computations.js";
import { none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { LatestEventListenerContextLike_completedCount, LatestEventListenerContextLike_mode, LatestEventListenerContextLike_values, } from "./LatestEventListenerMixin.js";
const LatestSourceMixin = /*@__PURE__*/ (() => {
    const LatestSource_sources = Symbol("LatestSource_sources");
    const LatestSource_mode = Symbol("LatestSource_mode");
    const LatestSource_createLatestEventListener = Symbol("LatestSource_createLatestEventListener");
    return returns(mix(function LastestSource(sources, mode, createLatestEventListener) {
        this[LatestSource_sources] = sources;
        this[LatestSource_mode] = mode;
        this[LatestSource_createLatestEventListener] =
            createLatestEventListener;
        return this;
    }, props({
        [LatestSource_sources]: none,
        [LatestSource_mode]: "combine-latest",
        [LatestSource_createLatestEventListener]: none,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
        [ReactiveSourceLike_subscribe](eventListener) {
            const mode = this[LatestSource_mode];
            const sources = this[LatestSource_sources];
            const ctx = {
                [LatestEventListenerContextLike_completedCount]: 0,
                [LatestEventListenerContextLike_values]: [],
                [LatestEventListenerContextLike_mode]: mode,
            };
            for (const source of sources) {
                const innerSink = pipe(this[LatestSource_createLatestEventListener](eventListener, ctx), Disposable.addTo(eventListener));
                ctx[LatestEventListenerContextLike_values][Array_push](innerSink);
                source[ReactiveSourceLike_subscribe](innerSink);
            }
        },
    })));
})();
export default LatestSourceMixin;
