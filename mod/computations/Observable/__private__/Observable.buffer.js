/// <reference types="./Observable.buffer.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "../../../utils/__mixins__/ObserverMixin.js";
import { QueueableLike_complete, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const BufferObserver_buffer = Symbol("BufferObserver_buffer");
const BufferObserver_count = Symbol("BufferingLike_count");
function onBufferObserverCompleted() {
    const delegate = this[LiftedObserverLike_delegate];
    const buffer = this[BufferObserver_buffer];
    this[BufferObserver_buffer] = [];
    if (buffer[Array_length] > 0) {
        delegate[QueueableLike_enqueue](buffer);
        delegate[QueueableLike_complete]();
    }
    else {
        delegate[QueueableLike_complete]();
    }
}
const createBufferObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, ObserverMixin(), LiftedObserverMixin()), function BufferObserver(delegate, count) {
    init(DisposableMixin, this);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    this[BufferObserver_count] = clampPositiveNonZeroInteger(count ?? MAX_SAFE_INTEGER);
    this[BufferObserver_buffer] = [];
    pipe(this, Disposable.addTo(delegate), DisposableContainer.onComplete(onBufferObserverCompleted));
    return this;
}, props({
    [BufferObserver_buffer]: none,
    [BufferObserver_count]: 0,
}), proto({
    [ObserverMixinBaseLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        const buffer = this[BufferObserver_buffer];
        const count = this[BufferObserver_count];
        buffer[Array_push](next);
        const shouldEmit = buffer[Array_length] === count;
        return ((shouldEmit &&
            ((this[BufferObserver_buffer] = []),
                delegate?.[ObserverMixinBaseLike_notify]?.(buffer) ??
                    delegate[QueueableLike_enqueue](buffer))) ||
            !shouldEmit);
    },
})))();
const Observable_buffer = (options) => pipe((createBufferObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_buffer;
