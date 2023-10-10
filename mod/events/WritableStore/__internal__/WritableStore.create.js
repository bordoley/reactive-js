/// <reference types="./WritableStore.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { StoreLike_value } from "../../../events.js";
import { none } from "../../../functions.js";
import { SinkLike_notify } from "../../../utils.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LazyInitEventSourceMixin, { LazyInitEventSourceMixin_publisher, } from "../../../utils/__mixins__/LazyInitEventSourceMixin.js";
const WritableStore_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(LazyInitEventSourceMixin(), DisposableMixin), function WritableStore(instance, initialValue) {
        init(DisposableMixin, instance);
        init(LazyInitEventSourceMixin(), instance);
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
