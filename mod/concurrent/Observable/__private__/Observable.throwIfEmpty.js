/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const ThrowIfEmptyObserver_delegate = Symbol("ThrowIfEmptyObserver_delegate");
    const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DisposableMixin, DelegatingObserverMixin()), function ThrowIfEmptyObserver(instance, delegate, factory) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[ThrowIfEmptyObserver_delegate] = delegate;
        pipe(instance, Disposable.onComplete(() => {
            let err = none;
            if (instance[ThrowIfEmptyObserver_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            delegate[DisposableLike_dispose](err);
        }));
        return instance;
    }, props({
        [ThrowIfEmptyObserver_delegate]: none,
        [ThrowIfEmptyObserver_isEmpty]: true,
    }), {
        [ObserverLike_notify](next) {
            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[ThrowIfEmptyObserver_delegate][ObserverLike_notify](next);
        },
    })));
})();
const Observable_throwIfEmpty = (factory) => pipe(createThrowIfEmptyObserver, partial(factory), Observable_liftPureDeferred);
export default Observable_throwIfEmpty;
