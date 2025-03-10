/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, ObserverLike_notify, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");
    const ThrowIfEmptyObserver_factory = Symbol("ThrowIfEmptyObserver_factory");
    function onThrowIfEmptyObserverComplete() {
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
        }
        delegate[DisposableLike_dispose](err);
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()), function ThrowIfEmptyObserver(delegate, factory) {
        init(DisposableMixin, this);
        init(DelegatingObserverMixin(), this, delegate);
        init(LiftedObserverMixin(), this, delegate);
        this[ThrowIfEmptyObserver_factory] = factory;
        pipe(this, DisposableContainer.onComplete(onThrowIfEmptyObserverComplete));
        return this;
    }, props({
        [ThrowIfEmptyObserver_isEmpty]: true,
        [ThrowIfEmptyObserver_factory]: none,
    }), proto({
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }),
    }));
})();
const Observable_throwIfEmpty = (factory) => pipe((createThrowIfEmptyObserver), partial(factory), Observable_liftPureDeferred);
export default Observable_throwIfEmpty;
