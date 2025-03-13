/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, QueueableLike_complete, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");
    const ThrowIfEmptyObserver_factory = Symbol("ThrowIfEmptyObserver_factory");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function ThrowIfEmptyObserver(delegate, factory) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[ThrowIfEmptyObserver_factory] = factory;
        return this;
    }, props({
        [ThrowIfEmptyObserver_isEmpty]: true,
        [ThrowIfEmptyObserver_factory]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            this[ThrowIfEmptyObserver_isEmpty] = false;
            return (delegate?.[LiftedObserverLike_notify]?.(next) ??
                delegate[QueueableLike_enqueue](next));
        },
        [LiftedObserverLike_complete]() {
            const factory = this[ThrowIfEmptyObserver_factory];
            const delegate = this[LiftedObserverLike_delegate];
            let err = none;
            if (this[ThrowIfEmptyObserver_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
                delegate[DisposableLike_dispose](err);
            }
            else {
                delegate[QueueableLike_complete]();
            }
        },
    }));
})();
const Observable_throwIfEmpty = (factory) => pipe((createThrowIfEmptyObserver), partial(factory), Observable_liftPureDeferred);
export default Observable_throwIfEmpty;
