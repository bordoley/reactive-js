/// <reference types="./EventSource.map.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, MappingLike_selector, } from "../../__internal__/types.js";
import { none, partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, SinkLike_notify, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_map = /*@__PURE__*/ (() => {
    const createMapEventListener = (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function MapEventListener(instance, delegate, selector) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[MappingLike_selector] = selector;
        return instance;
    }, props({
        [MappingLike_selector]: none,
    }), {
        [EventListenerLike_isErrorSafe]: false,
        [SinkLike_notify](next) {
            const mapped = this[MappingLike_selector](next);
            this[DelegatingLike_delegate][SinkLike_notify](mapped);
        },
    })))();
    return (selector) => pipe(createMapEventListener, partial(selector), EventSource_lift);
})();
export default EventSource_map;
