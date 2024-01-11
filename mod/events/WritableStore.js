/// <reference types="./WritableStore.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../__internal__/mixins.js";
import { EventListenerLike_notify, StoreLike_value, } from "../events.js";
import { none, strictEquality } from "../functions.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import LazyInitEventSourceMixin, { LazyInitEventSourceMixin_publisher, } from "./__mixins__/LazyInitEventSourceMixin.js";
export const create = /*@__PURE__*/ (() => {
    const WritableStore_equality = Symbol("WritableStore_equality");
    return createInstanceFactory(mix(include(LazyInitEventSourceMixin(), DisposableMixin), function WritableStore(instance, initialValue, options) {
        init(DisposableMixin, instance);
        init(LazyInitEventSourceMixin(), instance);
        instance.v = initialValue;
        instance[WritableStore_equality] = options?.equality ?? strictEquality;
        return instance;
    }, props({
        [WritableStore_equality]: none,
        v: none,
    }), {
        get [StoreLike_value]() {
            unsafeCast(this);
            return this.v;
        },
        set [StoreLike_value](value) {
            unsafeCast(this);
            if (!this[WritableStore_equality](this.v, value)) {
                this.v = value;
                this[LazyInitEventSourceMixin_publisher]?.[EventListenerLike_notify](value);
            }
        },
    }));
})();
