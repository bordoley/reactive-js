/// <reference types="./Observable.buffer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { BufferObserver_buffer, BufferObserver_count, BufferObserver_durationFunction, BufferObserver_durationSubscription, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../__internal__/symbols.js";
import { SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { invoke, isNumber, none, pipe } from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_never from "./Observable.never.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const createBufferObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_mixin, delegatingMixin()), function BufferObserver(instance, delegate, durationFunction, count) {
        init(Disposable_mixin, instance);
        initObserverMixinFromDelegate(instance, delegate);
        init(delegatingMixin(), instance, delegate);
        instance[BufferObserver_buffer] = [];
        instance[BufferObserver_durationFunction] = durationFunction;
        instance[BufferObserver_durationSubscription] =
            SerialDisposable_create(Disposable_disposed);
        instance[BufferObserver_count] = count;
        pipe(instance, Disposable_onComplete(() => {
            const { [BufferObserver_buffer]: buffer } = instance;
            instance[BufferObserver_buffer] = [];
            if (ReadonlyArray_isEmpty(buffer)) {
                delegate[DisposableLike_dispose]();
            }
            else {
                pipe(buffer, Optional_toObservable(), invoke(ObservableLike_observe, delegate));
            }
        }));
        return instance;
    }, props({
        [BufferObserver_buffer]: none,
        [BufferObserver_durationFunction]: none,
        [BufferObserver_durationSubscription]: none,
        [BufferObserver_count]: 0,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const { [BufferObserver_buffer]: buffer, [BufferObserver_count]: count, } = this;
            buffer.push(next);
            const doOnNotify = () => {
                this[BufferObserver_durationSubscription][SerialDisposableLike_current] = Disposable_disposed;
                const buffer = this[BufferObserver_buffer];
                this[BufferObserver_buffer] = [];
                this[DelegatingLike_delegate][ObserverLike_notify](buffer);
            };
            if (ReadonlyArray_getLength(buffer) === count) {
                doOnNotify();
            }
            else if (this[BufferObserver_durationSubscription][SerialDisposableLike_current][DisposableLike_isDisposed]) {
                this[BufferObserver_durationSubscription][SerialDisposableLike_current] = pipe(next, this[BufferObserver_durationFunction], Observable_forEach(doOnNotify), Observable_subscribeWithConfig(this));
            }
        },
    }));
    return ((options = {}) => {
        const durationOption = options.duration ?? MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? (_) => Observable_never()
            : isNumber(durationOption)
                ? (_) => pipe([none], ReadonlyArray_toObservable({
                    delay: clampPositiveNonZeroInteger(durationOption),
                }))
                : durationOption;
        const count = clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, count), Disposable_addTo(delegate));
        };
        return pipe(operator, Observable_lift({
            [ObservableLike_isEnumerable]: durationOption === MAX_SAFE_INTEGER,
            [ObservableLike_isRunnable]: isNumber(durationOption),
        }));
    });
})();
export default Observable_buffer;
