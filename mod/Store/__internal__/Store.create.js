/// <reference types="./Store.create.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import EventSource_lazyInitPublisherMixin, { LazyInitEventMixin_eventPublisher, } from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { SinkLike_notify, StoreLike_value, } from "../../types.js";
const Store_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(EventSource_lazyInitPublisherMixin(), Disposable_mixin), function WritableStore(instance, initialValue) {
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
            if (this.v !== value) {
                this.v = value;
                this[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](value);
            }
        },
    }));
})();
export default Store_create;
