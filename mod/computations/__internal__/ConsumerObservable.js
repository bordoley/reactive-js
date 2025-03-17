/// <reference types="./ConsumerObservable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../computations.js";
import { bindMethod, isSome, none, pipe, } from "../../functions.js";
import * as Consumer from "../../utils/Consumer.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, EventListenerLike_notify, QueueLike_dequeue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";
export const create = (() => {
    const ConsumerObservable_delegate = Symbol("ConsumerObservable_delegate");
    const ConsumerObservable_onReadyPublisher = Symbol("ConsumerObservable_onReadyPublisher");
    return mixInstanceFactory(include(DisposableMixin), function ConsumerObservable(config) {
        init(DisposableMixin, this);
        const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
        const queue = pipe(Consumer.create(config), Disposable.addTo(this));
        this[ConsumerObservable_delegate] = queue;
        this[ConsumerObservable_onReadyPublisher] = onReadyPublisher;
        pipe(queue[ConsumerLike_addOnReadyListener](bindMethod(onReadyPublisher, EventListenerLike_notify)), Disposable.addTo(this));
        return this;
    }, props({
        [ConsumerObservable_delegate]: none,
        [ConsumerObservable_onReadyPublisher]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        get [ConsumerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[ConsumerObservable_delegate][ConsumerLike_backpressureStrategy];
        },
        get [ConsumerLike_capacity]() {
            unsafeCast(this);
            return this[ConsumerObservable_delegate][ConsumerLike_capacity];
        },
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            return this[ConsumerObservable_delegate][ConsumerLike_isReady];
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[ConsumerObservable_delegate][SinkLike_isCompleted];
        },
        [ObservableLike_observe](observer) {
            const oldDelegate = this[ConsumerObservable_delegate];
            this[ConsumerObservable_delegate] = observer;
            pipe(this, Disposable.bindTo(observer));
            pipe(observer[ConsumerLike_addOnReadyListener](bindMethod(this[ConsumerObservable_onReadyPublisher], EventListenerLike_notify)), Disposable.addTo(this));
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
            this[ConsumerObservable_delegate][SinkLike_complete]();
        },
        [EventListenerLike_notify](v) {
            this[ConsumerObservable_delegate][EventListenerLike_notify](v);
        },
        [ConsumerLike_addOnReadyListener](callback) {
            return pipe(this[ConsumerObservable_onReadyPublisher], EventSource.addEventHandler(callback), Disposable.addTo(this));
        },
    });
})();
