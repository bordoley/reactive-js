/// <reference types="./Observable.buffer.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, isEmpty, none, getLength, isNumber, max } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DisposableRef_create from '../../../util/__internal__/DisposableRef/DisposableRef.create.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import EnumerableObservable_never from '../EnumerableObservable/EnumerableObservable.never.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const createBufferObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_mixin), function BufferObserver(instance, delegate, durationFunction, maxBufferSize) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription =
            DisposableRef_create(Disposable_disposed);
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, Disposable_onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];
            if (isEmpty(buffer)) {
                pipe(delegate, Disposable_dispose());
            }
            else {
                pipe([buffer], ReadonlyArray_toRunnableObservable(), ReactiveContainer_sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
    }), {
        [SinkLike_notify](next) {
            const { buffer, maxBufferSize } = this;
            buffer.push(next);
            const doOnNotify = () => {
                this.durationSubscription[MutableRefLike_current] =
                    Disposable_disposed;
                const buffer = this.buffer;
                this.buffer = [];
                this.delegate[SinkLike_notify](buffer);
            };
            if (getLength(buffer) === maxBufferSize) {
                doOnNotify();
            }
            else if (Disposable_isDisposed(this.durationSubscription[MutableRefLike_current])) {
                this.durationSubscription[MutableRefLike_current] = pipe(next, this.durationFunction, Observable_forEach(doOnNotify), Observable_subscribe(Observer_getScheduler(this)));
            }
        },
    }));
    return (options = {}) => {
        var _a, _b;
        const durationOption = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? EnumerableObservable_never
            : isNumber(durationOption)
                ? (_) => pipe([none], ReadonlyArray_toRunnableObservable())
                : durationOption;
        const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, maxBufferSize), Disposable_addTo(delegate));
        };
        return pipe(operator, Observable_lift(durationOption === MAX_SAFE_INTEGER));
    };
})();

export { Observable_buffer as default };
