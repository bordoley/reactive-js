/// <reference types="./Observable.buffer.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, ObserverLike_notify, } from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const BufferObserver_delegate = Symbol("BufferObserver_delegate");
const BufferObserver_buffer = Symbol("BufferObserver_buffer");
const BufferObserver_count = Symbol("BufferingLike_count");
const createBufferObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, ObserverMixin()), function BufferObserver(instance, delegate, count) {
    init(DisposableMixin, instance);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[BufferObserver_delegate] = delegate;
    instance[BufferObserver_count] = clampPositiveNonZeroInteger(count ?? MAX_SAFE_INTEGER);
    instance[BufferObserver_buffer] = [];
    pipe(instance, Disposable.addTo(delegate), DisposableContainer.onComplete(() => {
        const buffer = instance[BufferObserver_buffer];
        instance[BufferObserver_buffer] = [];
        if (buffer[Array_length] > 0) {
            delegate[QueueableLike_enqueue](buffer);
            delegate[DispatcherLike_complete]();
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }));
    return instance;
}, props({
    [BufferObserver_delegate]: none,
    [BufferObserver_buffer]: none,
    [BufferObserver_count]: 0,
}), {
    [ObserverLike_notify](next) {
        Observer_assertObserverState(this);
        const buffer = this[BufferObserver_buffer];
        const count = this[BufferObserver_count];
        buffer[Array_push](next);
        if (buffer[Array_length] === count) {
            this[BufferObserver_buffer] = [];
            this[BufferObserver_delegate][ObserverLike_notify](buffer);
        }
    },
}))();
const Observable_buffer = (options) => pipe((createBufferObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_buffer;
