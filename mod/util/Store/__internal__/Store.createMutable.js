/// <reference types="./Store.createMutable.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, unsafeCast } from "../../../functions.js";
import { EventListenerLike_notify, StoreLike_value, } from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import EventPublisher_lazyInitMixin from "../../EventPublisher/__internal__/EventPublisher.lazyInitMixin.js";
const Store_createMutable = (() => {
    return createInstanceFactory(mix(include(EventPublisher_lazyInitMixin(), Disposable_mixin), function MutableStore(instance) {
        init(Disposable_mixin, instance);
        init(EventPublisher_lazyInitMixin(), instance);
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
