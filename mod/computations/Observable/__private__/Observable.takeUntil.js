/// <reference types="./Observable.takeUntil.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, QueueableLike_complete, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_takeUntil = /*@__PURE__*/ (() => {
    const TakeUntilObserver_notifier = Symbol("TakeUntilObserver_notifier");
    const createTakeUntilObserver = mixInstanceFactory(include(DisposableMixin, LiftedObserverMixin()), function TakeUntilObserver(delegate, notifier) {
        init(DisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        pipe(this, Disposable.addTo(delegate));
        this[TakeUntilObserver_notifier] = notifier;
        pipe(notifier, Observable_takeFirst(), Observable_subscribeWithConfig(delegate, delegate), Disposable.addTo(this), DisposableContainer.onComplete(bindMethod(this, QueueableLike_complete)));
        return this;
    }, props({
        [TakeUntilObserver_notifier]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            delegate[QueueableLike_enqueue](next);
        },
        [LiftedObserverLike_complete]() {
            this[LiftedObserverLike_delegate][QueueableLike_complete]();
            this[DisposableLike_dispose]();
        },
    }));
    return (notifier) => pipe(createTakeUntilObserver, partial(notifier), Observable_lift({
        [ObservableLift_isStateless]: Computation.isMulticasted(notifier),
        [ComputationLike_isDeferred]: !Computation.isMulticasted(notifier),
        [ComputationLike_isPure]: Computation.isPure(notifier),
        [ComputationLike_isSynchronous]: Computation.isSynchronous(notifier),
    }));
})();
export default Observable_takeUntil;
