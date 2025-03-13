/// <reference types="./Observable.buffer.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_complete, QueueableLike_enqueue, QueueableLike_isReady, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBufferObserver = /*@__PURE__*/ (() => {
    const BufferObserver_buffer = Symbol("BufferObserver_buffer");
    const BufferObserver_count = Symbol("BufferingLike_count");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function BufferObserver(delegate, count) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[BufferObserver_count] = clampPositiveNonZeroInteger(count ?? MAX_SAFE_INTEGER);
        this[BufferObserver_buffer] = [];
        return this;
    }, props({
        [BufferObserver_buffer]: none,
        [BufferObserver_count]: 0,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            const buffer = this[BufferObserver_buffer];
            const count = this[BufferObserver_count];
            buffer[Array_push](next);
            const shouldEmit = buffer[Array_length] === count;
            return ((shouldEmit &&
                ((this[BufferObserver_buffer] = []),
                    delegate?.[LiftedObserverLike_notify]?.(buffer) ??
                        delegate[QueueableLike_enqueue](buffer))) ||
                delegate[QueueableLike_isReady]);
        },
        [LiftedObserverLike_complete]() {
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
        },
    }));
})();
const Observable_buffer = (options) => pipe((createBufferObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_buffer;
