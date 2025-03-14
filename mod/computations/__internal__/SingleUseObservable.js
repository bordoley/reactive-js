/// <reference types="./SingleUseObservable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Queue from "../../utils/Queue.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { EventListenerLike_notify, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, QueueableLike_onReady, SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";
export const create = (() => {
    const SingleUseObservableLike_delegate = Symbol("SingleUseObservableLike_delegate");
    return mixInstanceFactory(include(DisposableMixin), function SingleUseObservable(config) {
        init(DisposableMixin, this);
        const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
        this[QueueableLike_onReady] = onReadyPublisher;
        const queue = Queue.create(config);
        this[SingleUseObservableLike_delegate] = queue;
        pipe(queue[QueueableLike_onReady], EventSource.addEventHandler(bindMethod(onReadyPublisher, EventListenerLike_notify)), Disposable.addTo(this));
        return this;
    }, props({
        [SingleUseObservableLike_delegate]: none,
        [QueueableLike_onReady]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[SingleUseObservableLike_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[SingleUseObservableLike_delegate][QueueableLike_capacity];
        },
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[SingleUseObservableLike_delegate][QueueableLike_isReady];
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[SingleUseObservableLike_delegate][SinkLike_isCompleted];
        },
        [ObservableLike_observe](observer) {
            const oldDelegate = this[SingleUseObservableLike_delegate];
            this[SingleUseObservableLike_delegate] = observer;
            pipe(this, Disposable.bindTo(observer));
            pipe(observer[QueueableLike_onReady], EventSource.addEventHandler(bindMethod(this[QueueableLike_onReady], EventListenerLike_notify)), Disposable.addTo(this));
            if (isSome(oldDelegate[QueueLike_dequeue])) {
                unsafeCast(oldDelegate);
                let v = none;
                while (((v = oldDelegate[QueueLike_dequeue]()), isSome(v))) {
                    observer[SinkLike_push](v);
                }
            }
            if (oldDelegate[SinkLike_isCompleted]) {
                observer[SinkLike_complete]();
            }
            oldDelegate[SinkLike_complete]();
        },
        [SinkLike_complete]() {
            this[SingleUseObservableLike_delegate][SinkLike_complete]();
        },
        [SinkLike_push](v) {
            this[SingleUseObservableLike_delegate][SinkLike_push](v);
        },
    });
})();
