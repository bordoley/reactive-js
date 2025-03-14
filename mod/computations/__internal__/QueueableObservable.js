/// <reference types="./QueueableObservable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../computations.js";
import { bindMethod, isSome, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Queue from "../../utils/Queue.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { EventListenerLike_notify, QueueLike_dequeue, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";
export const create = (() => {
    const QueueableObservable_delegate = Symbol("QueueableObservable_delegate");
    const QueueableObservable_onReadyPublisher = Symbol("QueueableObservable_onReadyPublisher");
    return mixInstanceFactory(include(DisposableMixin), function QueueableObservable(config) {
        init(DisposableMixin, this);
        const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
        const queue = pipe(Queue.create(config), Disposable.addTo(this));
        this[QueueableObservable_delegate] = queue;
        this[QueueableObservable_onReadyPublisher] = onReadyPublisher;
        pipe(queue[QueueableLike_addOnReadyListener](bindMethod(onReadyPublisher, EventListenerLike_notify)), Disposable.addTo(this));
        return this;
    }, props({
        [QueueableObservable_delegate]: none,
        [QueueableObservable_onReadyPublisher]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[QueueableObservable_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[QueueableObservable_delegate][QueueableLike_capacity];
        },
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[QueueableObservable_delegate][QueueableLike_isReady];
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[QueueableObservable_delegate][SinkLike_isCompleted];
        },
        [ObservableLike_observe](observer) {
            const oldDelegate = this[QueueableObservable_delegate];
            this[QueueableObservable_delegate] = observer;
            pipe(this, Disposable.bindTo(observer));
            pipe(observer[QueueableLike_addOnReadyListener](bindMethod(this[QueueableObservable_onReadyPublisher], EventListenerLike_notify)), Disposable.addTo(this));
            if (isSome(oldDelegate[QueueLike_dequeue])) {
                unsafeCast(oldDelegate);
                let v = none;
                while (((v = oldDelegate[QueueLike_dequeue]()), isSome(v))) {
                    observer[EventListenerLike_notify](v);
                }
            }
            if (oldDelegate[SinkLike_isCompleted]) {
                observer[SinkLike_complete]();
            }
            oldDelegate[SinkLike_complete]();
        },
        [SinkLike_complete]() {
            this[QueueableObservable_delegate][SinkLike_complete]();
        },
        [EventListenerLike_notify](v) {
            this[QueueableObservable_delegate][EventListenerLike_notify](v);
        },
        [QueueableLike_addOnReadyListener](callback) {
            return pipe(this[QueueableObservable_onReadyPublisher], EventSource.addEventHandler(callback), Disposable.addTo(this));
        },
    });
})();
