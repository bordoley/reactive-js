/// <reference types="./ConsumerObservable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../computations.js";
import { bindMethod, isSome, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Consumer from "../../utils/__internal__/Consumer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
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
        pipe(queue[FlowControllerLike_addOnReadyListener](bindMethod(onReadyPublisher, EventListenerLike_notify)), Disposable.addTo(this));
        return this;
    }, props({
        [ConsumerObservable_delegate]: none,
        [ConsumerObservable_onReadyPublisher]: none,
    }), {
        [ComputationLike_isPure]: true,
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return this[ConsumerObservable_delegate][FlowControllerLike_isReady];
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[ConsumerObservable_delegate][SinkLike_isCompleted];
        },
        [SourceLike_subscribe](observer) {
            const oldDelegate = this[ConsumerObservable_delegate];
            this[ConsumerObservable_delegate] = observer;
            pipe(this, Disposable.bindTo(observer));
            pipe(observer[FlowControllerLike_addOnReadyListener](bindMethod(this[ConsumerObservable_onReadyPublisher], EventListenerLike_notify)), Disposable.addTo(this));
            if (isSome(oldDelegate[EnumeratorLike_moveNext])) {
                unsafeCast(oldDelegate);
                while (oldDelegate[EnumeratorLike_moveNext]()) {
                    const v = oldDelegate[EnumeratorLike_current];
                    observer[EventListenerLike_notify](v);
                }
            }
            if (oldDelegate[SinkLike_isCompleted]) {
                observer[SinkLike_complete]();
            }
            oldDelegate[DisposableLike_dispose]();
        },
        [SinkLike_complete]() {
            this[ConsumerObservable_delegate][SinkLike_complete]();
        },
        [EventListenerLike_notify](v) {
            this[ConsumerObservable_delegate][EventListenerLike_notify](v);
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return pipe(this[ConsumerObservable_onReadyPublisher], Broadcaster.addEventHandler(callback), Disposable.addTo(this));
        },
    });
})();
