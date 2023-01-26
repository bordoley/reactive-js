/// <reference types="./Observable.buffer.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, isEmpty, none, getLength, isNumber, max } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DisposableRef$create from '../../../util/__internal__/DisposableRef/DisposableRef.create.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import EnumerableObservable$never from '../EnumerableObservable/EnumerableObservable.never.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    const createBufferObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable$mixin), function BufferObserver(instance, delegate, durationFunction, maxBufferSize) {
        init(Disposable$mixin, instance);
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription =
            DisposableRef$create(Disposable$disposed);
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, Disposable$onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];
            if (isEmpty(buffer)) {
                pipe(delegate, Disposable$dispose());
            }
            else {
                pipe([buffer], ReadonlyArray$toRunnableObservable(), ReactiveContainer$sinkInto(delegate));
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
                    Disposable$disposed;
                const buffer = this.buffer;
                this.buffer = [];
                pipe(this.delegate, Sink$notify(buffer));
            };
            if (getLength(buffer) === maxBufferSize) {
                doOnNotify();
            }
            else if (Disposable$isDisposed(this.durationSubscription[MutableRefLike_current])) {
                this.durationSubscription[MutableRefLike_current] = pipe(next, this.durationFunction, Observable$forEach(doOnNotify), Observable$subscribe(Observer$getScheduler(this)));
            }
        },
    }));
    return (options = {}) => {
        var _a, _b;
        const durationOption = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? EnumerableObservable$never
            : isNumber(durationOption)
                ? (_) => pipe([none], ReadonlyArray$toRunnableObservable())
                : durationOption;
        const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, maxBufferSize), Disposable$addTo(delegate));
        };
        return pipe(operator, Observable$lift(durationOption === MAX_SAFE_INTEGER));
    };
})();

export { Observable$buffer as default };
