/// <reference types="./ObservableLike.buffer.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../__internal__/constants.mjs';
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { createDisposableRef } from '../../../__internal__/util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../../../__internal__/util/MutableRefLike.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe, isEmpty, none, getLength, isNumber, max } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from '../../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import EnumerableObservableLike__never from '../EnumerableObservableLike/EnumerableObservableLike.never.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import ReactiveContainerLike__sinkInto from '../ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import SinkLike__notify from '../SinkLike/SinkLike.notify.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const createBufferObserver = createInstanceFactory(mix(include(typedObserverMixin, DisposableLike__mixin), function BufferObserver(instance, delegate, durationFunction, maxBufferSize) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, ObserverLike__getScheduler(delegate));
        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription = createDisposableRef(DisposableLike__disposed);
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, DisposableLike__onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];
            if (isEmpty(buffer)) {
                pipe(delegate, DisposableLike__dispose());
            }
            else {
                pipe([buffer], ReadonlyArrayLike__toRunnableObservable(), ReactiveContainerLike__sinkInto(delegate));
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
                    DisposableLike__disposed;
                const buffer = this.buffer;
                this.buffer = [];
                pipe(this.delegate, SinkLike__notify(buffer));
            };
            if (getLength(buffer) === maxBufferSize) {
                doOnNotify();
            }
            else if (DisposableLike__isDisposed(this.durationSubscription[MutableRefLike_current])) {
                this.durationSubscription[MutableRefLike_current] = pipe(next, this.durationFunction, ObservableLike__forEach(doOnNotify), ObservableLike__subscribe(ObserverLike__getScheduler(this)));
            }
        },
    }));
    return (options = {}) => {
        var _a, _b;
        const durationOption = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? EnumerableObservableLike__never
            : isNumber(durationOption)
                ? (_) => pipe([none], ReadonlyArrayLike__toRunnableObservable())
                : durationOption;
        const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, maxBufferSize), DisposableLike__addTo(delegate));
        };
        return pipe(operator, ObservableLike__lift(durationOption === MAX_SAFE_INTEGER));
    };
})();

export { ObservableLike__buffer as default };
