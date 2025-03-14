/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_completeDelegate, LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
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
            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[LiftedObserverLike_notifyDelegate](next);
        },
        [LiftedObserverLike_complete]() {
            const factory = this[ThrowIfEmptyObserver_factory];
            let err = none;
            if (this[ThrowIfEmptyObserver_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
                this[DisposableLike_dispose](err);
            }
            else {
                this[LiftedObserverLike_completeDelegate]();
            }
        },
    }));
})();
const Observable_throwIfEmpty = (factory) => pipe((createThrowIfEmptyObserver), partial(factory), Observable_liftPureDeferred);
export default Observable_throwIfEmpty;
