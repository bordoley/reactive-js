/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const ThrowIfEmptyObserver_delegate = Symbol("ThrowIfEmptyObserver_delegate");
    const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");
    const ThrowIfEmptyObserver_factory = Symbol("ThrowIfEmptyObserver_factory");
    function onThrowIfEmptyObserverComplete() {
        const factory = this[ThrowIfEmptyObserver_factory];
        const delegate = this[ThrowIfEmptyObserver_delegate];
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
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function ThrowIfEmptyObserver(instance, delegate, factory) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[ThrowIfEmptyObserver_factory] = factory;
        instance[ThrowIfEmptyObserver_delegate] = delegate;
        pipe(instance, DisposableContainer.onComplete(onThrowIfEmptyObserverComplete));
        return instance;
    }, props({
        [ThrowIfEmptyObserver_delegate]: none,
        [ThrowIfEmptyObserver_isEmpty]: true,
        [ThrowIfEmptyObserver_factory]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[ThrowIfEmptyObserver_delegate][ObserverLike_notify](next);
        }),
    });
})();
const Observable_throwIfEmpty = (factory) => pipe((createThrowIfEmptyObserver), partial(factory), Observable_liftPureDeferred);
export default Observable_throwIfEmpty;
