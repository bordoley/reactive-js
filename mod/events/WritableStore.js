/// <reference types="./WritableStore.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { EventListenerLike_notify, StoreLike_value, } from "../events.js";
import { none, strictEquality } from "../functions.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import LazyInitEventSourceMixin, { LazyInitEventSourceLike_publisher, } from "./__mixins__/LazyInitEventSourceMixin.js";
export const create = /*@__PURE__*/ (() => {
    const WritableStore_equality = Symbol("WritableStore_equality");
    const WritableStore_value = Symbol("WritableStore_value");
    return mixInstanceFactory(include(LazyInitEventSourceMixin(), DisposableMixin), function WritableStore(instance, initialValue, options) {
        init(DisposableMixin, instance);
        init(LazyInitEventSourceMixin(), instance);
        instance[WritableStore_value] = initialValue;
        instance[WritableStore_equality] = options?.equality ?? strictEquality;
        return instance;
    }, props({
        [WritableStore_equality]: none,
        [WritableStore_value]: none,
    }), {
        get [StoreLike_value]() {
            unsafeCast(this);
            return this[WritableStore_value];
        },
        set [StoreLike_value](value) {
            unsafeCast(this);
            if (!this[WritableStore_equality](this[WritableStore_value], value)) {
                this[WritableStore_value] = value;
                this[LazyInitEventSourceLike_publisher]?.[EventListenerLike_notify](value);
            }
        },
    });
})();
