/// <reference types="./WritableStore.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { SinkLike_notify, StoreLike_value, } from "../../../rx.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
import EventSource_lazyInitMixin, { LazyInitEventSourceMixin_publisher, } from "../../EventSource/__internal__/EventSource.lazyInitMixin.js";
const WritableStore_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(EventSource_lazyInitMixin(), Disposable_mixin), function WritableStore(instance, initialValue) {
        init(Disposable_mixin, instance);
        init(EventSource_lazyInitMixin(), instance);
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
                this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](value);
            }
        },
    }));
})();
export default WritableStore_create;
