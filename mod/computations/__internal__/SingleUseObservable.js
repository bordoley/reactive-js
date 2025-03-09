/// <reference types="./SingleUseObservable.d.ts" />

import { getPrototype, include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, StoreLike_value, } from "../../computations.js";
import { call, isSome, none, pipe, raiseIf, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import { DispatcherLike_complete, DispatcherLike_state, DispatcherState_completed, DispatcherState_ready, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as WritableStore from "../WritableStore.js";
export const create = (() => {
    const SingleUseObservableLike_delegate = Symbol("SingleUseObservableLike_delegate");
    const queueProtoype = getPrototype(QueueMixin());
    return mixInstanceFactory(include(DisposableMixin, QueueMixin()), function SingleUseObservable(instance, config) {
        init(DisposableMixin, instance);
        init(QueueMixin(), instance, config);
        instance[DispatcherLike_state] = WritableStore.create(DispatcherState_ready);
        return instance;
    }, props({
        [SingleUseObservableLike_delegate]: none,
        [DispatcherLike_state]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            raiseIf(isSome(this[SingleUseObservableLike_delegate]), "SingleUseObservable already subscribed.");
            this[SingleUseObservableLike_delegate] = observer;
            pipe(this, Disposable.bindTo(observer));
            pipe(observer[DispatcherLike_state], EventSource.addEventHandler(v => {
                const isCompleted = this[DispatcherLike_state][StoreLike_value] ===
                    DispatcherState_completed;
                if (!isCompleted) {
                    this[DispatcherLike_state][StoreLike_value] = v;
                }
            }), Disposable.addTo(this));
            let v = none;
            while (((v = this[QueueLike_dequeue]()), isSome(v))) {
                observer[QueueableLike_enqueue](v);
            }
            const isCompleted = this[DispatcherLike_state][StoreLike_value] ===
                DispatcherState_completed;
            if (isCompleted) {
                observer[DispatcherLike_complete]();
            }
        },
        [DispatcherLike_complete]() {
            const delegate = this[SingleUseObservableLike_delegate];
            const isAlreadyCompleted = this[DispatcherLike_state][StoreLike_value] ===
                DispatcherState_completed;
            this[DispatcherLike_state][StoreLike_value] = DispatcherState_completed;
            if (isSome(delegate) && !isAlreadyCompleted) {
                delegate[DispatcherLike_complete]();
            }
        },
        [QueueableLike_enqueue](v) {
            const delegate = this[SingleUseObservableLike_delegate];
            const isCompleted = this[DispatcherLike_state][StoreLike_value] ===
                DispatcherState_completed;
            return (isCompleted ||
                (isSome(delegate)
                    ? delegate[QueueableLike_enqueue](v)
                    : call(queueProtoype[QueueableLike_enqueue], this, v)));
        },
    });
})();
