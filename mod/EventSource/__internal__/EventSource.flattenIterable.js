/// <reference types="./EventSource.flattenIterable.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { pipe, returns } from "../../functions.js";
import { EventListenerLike_isErrorSafe, SinkLike_notify, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_flattenIterable = /*@__PURE__*/ (() => {
    const createFlattenIterableEventListener = (() => createInstanceFactory(mix(include(Disposable_mixin, Delegating_mixin()), function FlattenIterableEventListener(instance, delegate) {
        init(Disposable_mixin, instance);
        init(Delegating_mixin(), instance, delegate);
        pipe(instance, Disposable_bindTo(delegate));
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
        [SinkLike_notify](next) {
            for (const v of next) {
                this[DelegatingLike_delegate][SinkLike_notify](v);
            }
        },
    })))();
    return returns(EventSource_lift(createFlattenIterableEventListener));
})();
export default EventSource_flattenIterable;
