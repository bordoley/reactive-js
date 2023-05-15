/// <reference types="./Store.createMutable.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import EventSource_lazyInitPublisherMixin from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { none, unsafeCast } from "../../functions.js";
import { EventListenerLike_notify, StoreLike_value, } from "../../types.js";
const Store_createMutable = (() => {
    return createInstanceFactory(mix(include(EventSource_lazyInitPublisherMixin(), Disposable_mixin), function MutableStore(instance, initialValue) {
        init(Disposable_mixin, instance);
        init(EventSource_lazyInitPublisherMixin(), instance);
        instance.v = initialValue;
        return instance;
    }, props({
        v: none,
    }), {
        get [StoreLike_value]() {
            unsafeCast(this);
            return this.v;
        },
        set [StoreLike_value](value) {
            unsafeCast(this);
            this.v = value;
            this[EventListenerLike_notify](value);
        },
    }));
})();
export default Store_createMutable;
