/// <reference types="./WritableStore.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, StoreLike_value, } from "../events.js";
import { none, strictEquality } from "../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../utils/__mixins__/DelegatingDisposableMixin.js";
import * as Publisher from "./Publisher.js";
export const create = /*@__PURE__*/ (() => {
    const WritableStore_equality = Symbol("WritableStore_equality");
    const WritableStore_value = Symbol("WritableStore_value");
    return mixInstanceFactory(include(DelegatingDisposableMixin()), function WritableStore(instance, initialValue, options) {
        const publisher = Publisher.create(options);
        init(DelegatingDisposableMixin(), instance, publisher);
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
                this[DelegatingDisposableLike_delegate][EventListenerLike_notify](value);
            }
        },
        [EventSourceLike_addEventListener](listener) {
            this[DelegatingDisposableLike_delegate][EventSourceLike_addEventListener](listener);
        },
    });
})();
