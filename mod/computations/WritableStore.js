/// <reference types="./WritableStore.d.ts" />

import { getPrototype, include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, StoreLike_value, } from "../computations.js";
import { call, none, strictEquality } from "../functions.js";
import { EventListenerLike_notify } from "../utils.js";
import PublisherMixin from "./__mixins__/PublisherMixin.js";
export const create = /*@__PURE__*/ (() => {
    const WritableStore_equality = Symbol("WritableStore_equality");
    const WritableStore_value = Symbol("WritableStore_value");
    const publisherPrototype = getPrototype(PublisherMixin());
    return mixInstanceFactory(include(PublisherMixin()), function WritableStore(initialValue, options) {
        init(PublisherMixin(), this, options);
        this[WritableStore_value] = initialValue;
        this[WritableStore_equality] = options?.equality ?? strictEquality;
        return this;
    }, props({
        [WritableStore_equality]: none,
        [WritableStore_value]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        get [StoreLike_value]() {
            unsafeCast(this);
            return this[WritableStore_value];
        },
        set [StoreLike_value](value) {
            unsafeCast(this);
            this[EventListenerLike_notify](value);
        },
        [EventListenerLike_notify](v) {
            if (!this[WritableStore_equality](this[WritableStore_value], v)) {
                this[WritableStore_value] = v;
                call(publisherPrototype[EventListenerLike_notify], this, v);
            }
        },
    });
})();
