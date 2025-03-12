/// <reference types="./SingleUseObservable.d.ts" />

import { getPrototype, include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, ObservableLike_observe, } from "../../computations.js";
import { call, isSome, none, pipe, raiseIf, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import { DispatcherLike_complete, DispatcherLike_isCompleted, DispatcherLike_onReady, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
import * as Publisher from "../Publisher.js";
export const create = (() => {
    const SingleUseObservableLike_delegate = Symbol("SingleUseObservableLike_delegate");
    const queueProtoype = getPrototype(QueueMixin());
    return mixInstanceFactory(include(DisposableMixin, QueueMixin()), function SingleUseObservable(config) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, config);
        this[DispatcherLike_onReady] = Publisher.create();
        return this;
    }, props({
        [SingleUseObservableLike_delegate]: none,
        [DispatcherLike_onReady]: none,
        [DispatcherLike_isCompleted]: false,
    }), {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            raiseIf(isSome(this[SingleUseObservableLike_delegate]), "SingleUseObservable already subscribed.");
            this[SingleUseObservableLike_delegate] = observer;
            pipe(this, Disposable.bindTo(observer));
            const isCompleted = this[DispatcherLike_isCompleted];
            let v = none;
            while (((v = this[QueueLike_dequeue]()), isSome(v))) {
                observer[QueueableLike_enqueue](v);
            }
            if (isCompleted) {
                observer[DispatcherLike_complete]();
            }
            else {
                observer[DispatcherLike_onReady][EventSourceLike_addEventListener](this[DispatcherLike_onReady]);
            }
        },
        [DispatcherLike_complete]() {
            const delegate = this[SingleUseObservableLike_delegate];
            const isAlreadyCompleted = this[DispatcherLike_isCompleted];
            this[DispatcherLike_isCompleted] = true;
            if (isSome(delegate) && !isAlreadyCompleted) {
                delegate[DispatcherLike_complete]();
            }
        },
        [QueueableLike_enqueue](v) {
            const delegate = this[SingleUseObservableLike_delegate];
            const isCompleted = this[DispatcherLike_isCompleted];
            return (isCompleted ||
                (isSome(delegate)
                    ? delegate[QueueableLike_enqueue](v)
                    : call(queueProtoype[QueueableLike_enqueue], this, v)));
        },
    });
})();
