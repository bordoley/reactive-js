/// <reference types="./ReducerSinkMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import DisposableMixin from "./DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
export const ReducerSinkMixin = /*@__PURE__*/ (() => {
    const ReducerSinkMixin_accumulatorRef = Symbol("ReducerSinkMixin_accumulatorRef");
    const ReducerSinkMixin_reducer = Symbol("ReducerSinkMixin_reducer");
    return returns(mix(include(DisposableMixin, DisposeOnCompleteSinkMixin()), function ReducerSinkMixin(reducer, ref) {
        init(DisposableMixin, this);
        init(DisposeOnCompleteSinkMixin(), this);
        this[ReducerSinkMixin_reducer] = reducer;
        this[ReducerSinkMixin_accumulatorRef] = ref;
        return this;
    }, props({
        [ReducerSinkMixin_accumulatorRef]: none,
        [ReducerSinkMixin_reducer]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const ref = this[ReducerSinkMixin_accumulatorRef];
            const reducer = this[ReducerSinkMixin_reducer];
            const acc = ref[0];
            ref[0] = reducer(acc, next);
        },
    })));
})();
