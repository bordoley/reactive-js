/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__private__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const ThrowIfEmptyObserver_delegate = Symbol("ThrowIfEmptyObserver_delegate");
    const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function ThrowIfEmptyObserver(instance, delegate, factory) {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
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
        [SinkLike_notify](next) {
            Observer_assertState(this);
            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[ThrowIfEmptyObserver_delegate][SinkLike_notify](next);
        },
    }));
})();
const Observable_throwIfEmpty = (factory) => pipe(Observer_createThrowIfEmptyObserver, partial(factory), Observable_liftPure);
export default Observable_throwIfEmpty;
