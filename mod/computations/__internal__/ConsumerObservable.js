/// <reference types="./ConsumerObservable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../computations.js";
import { bindMethod, isSome, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Consumer from "../../utils/__internal__/Consumer.js";
import DelegatingConsumerMixin from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Publisher from "../Publisher.js";
export const create = (() => {
    const ConsumerObservable_onReadyPublisher = Symbol("ConsumerObservable_onReadyPublisher");
    return mixInstanceFactory(include(DisposableMixin, DelegatingConsumerMixin()), function ConsumerObservable(config) {
        init(DisposableMixin, this);
        const queue = pipe(Consumer.create(config), Disposable.addTo(this));
        init(DelegatingConsumerMixin(), this, queue);
        const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
        this[ConsumerObservable_onReadyPublisher] = onReadyPublisher;
        pipe(queue[FlowControllerLike_addOnReadyListener](bindMethod(onReadyPublisher, EventListenerLike_notify)), Disposable.addTo(this));
        return this;
    }, props({
        [ConsumerObservable_onReadyPublisher]: none,
    }), {
        [ComputationLike_isPure]: true,
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_subscribe](observer) {
            const oldDelegate = this[DelegatingEventListenerLike_delegate];
            this[DelegatingEventListenerLike_delegate] = observer;
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
        [FlowControllerLike_addOnReadyListener](callback) {
            return pipe(this[ConsumerObservable_onReadyPublisher], Broadcaster.addEventHandler(callback), Disposable.addTo(this));
        },
    });
})();
