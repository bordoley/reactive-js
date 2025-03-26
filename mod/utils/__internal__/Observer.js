/// <reference types="./Observer.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingObserverMixin from "../__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function NonDisposingDelegatingObserver(delegate) {
    init(DisposableMixin, this);
    init(DelegatingObserverMixin(), this, delegate);
    return this;
}, props(), proto({
    get [SinkLike_isCompleted]() {
        unsafeCast(this);
        return this[DisposableLike_isDisposed];
    },
    [SinkLike_complete]() {
        this[DisposableLike_dispose]();
    },
})))();
