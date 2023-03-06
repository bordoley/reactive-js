/// <reference types="./Observable.buffer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { isNumber, none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import DisposableRef_create from "../../../util/DisposableRef/__internal__/DisposableRef.create.js";
import { MutableRefLike_current, } from "../../../util/__internal__/util.internal.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_never from "./Observable.never.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const BufferObserver_buffer = Symbol("BufferObserver_buffer");
    const BufferObserver_durationFunction = Symbol("BufferObserver_durationFunction");
    const BufferObserver_durationSubscription = Symbol("BufferObserver_durationSubscription");
    const BufferObserver_maxBufferSize = Symbol("BufferObserver_maxBufferSize");
    const createBufferObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_mixin, delegatingMixin()), function BufferObserver(instance, delegate, durationFunction, maxBufferSize) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(delegatingMixin(), instance, delegate);
        instance[BufferObserver_buffer] = [];
        instance[BufferObserver_durationFunction] = durationFunction;
        instance[BufferObserver_durationSubscription] =
            DisposableRef_create(Disposable_disposed);
        instance[BufferObserver_maxBufferSize] = maxBufferSize;
        pipe(instance, Disposable_onComplete(() => {
            const { [BufferObserver_buffer]: buffer } = instance;
            instance[BufferObserver_buffer] = [];
            if (ReadonlyArray_isEmpty(buffer)) {
                pipe(delegate, Disposable_dispose());
            }
            else {
                pipe([buffer], ReadonlyArray_toObservable(), Observable_observeWith(delegate));
            }
        }));
        return instance;
    }, props({
        [BufferObserver_buffer]: none,
        [BufferObserver_durationFunction]: none,
        [BufferObserver_durationSubscription]: none,
        [BufferObserver_maxBufferSize]: 0,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const { [BufferObserver_buffer]: buffer, [BufferObserver_maxBufferSize]: maxBufferSize, } = this;
            buffer.push(next);
            const doOnNotify = () => {
                this[BufferObserver_durationSubscription][MutableRefLike_current] =
                    Disposable_disposed;
                const buffer = this[BufferObserver_buffer];
                this[BufferObserver_buffer] = [];
                this[DelegatingLike_delegate][ObserverLike_notify](buffer);
            };
            if (ReadonlyArray_getLength(buffer) === maxBufferSize) {
                doOnNotify();
            }
            else if (this[BufferObserver_durationSubscription][MutableRefLike_current][DisposableLike_isDisposed]) {
                this[BufferObserver_durationSubscription][MutableRefLike_current] =
                    pipe(next, this[BufferObserver_durationFunction], Observable_forEach(doOnNotify), Observable_subscribe(this[ObserverLike_scheduler]));
            }
        },
    }));
    return ((options = {}) => {
        var _a, _b;
        const durationOption = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? (_) => Observable_never()
            : isNumber(durationOption)
                ? (_) => pipe([none], ReadonlyArray_toObservable())
                : durationOption;
        const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, maxBufferSize), Disposable_addTo(delegate));
        };
        return pipe(operator, Observable_lift(durationOption === MAX_SAFE_INTEGER));
    });
})();
export default Observable_buffer;
