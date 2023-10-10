/// <reference types="./Observer.createThrowIfEmptyObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
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
export default Observer_createThrowIfEmptyObserver;
