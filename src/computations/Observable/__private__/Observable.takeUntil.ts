import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  PureSynchronousObservableLike,
} from "../../../computations.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike, SinkLike_complete } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_takeUntil: Observable.Signature["takeUntil"] = /*@__PURE__*/ (<
  T,
>() => {
  const createTakeUntilObserver = mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function TakeUntilObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify>,
      delegate: ObserverLike<T>,
      notifier: PureSynchronousObservableLike,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      pipe(
        notifier,
        Observable_takeFirst(),
        Observable_subscribe(delegate),
        Disposable.addTo(this),
        DisposableContainer.onComplete(bindMethod(this, SinkLike_complete)),
      );

      return this;
    },
  );

  return (notifier: PureSynchronousObservableLike) =>
    pipe(
      createTakeUntilObserver,
      partial(notifier),
      Observable_lift({
        [ObservableLift_isStateless]: Computation.isMulticasted(notifier),
        [ComputationLike_isDeferred]: !Computation.isMulticasted(notifier),
        [ComputationLike_isPure]: Computation.isPure(notifier),
        [ComputationLike_isSynchronous]: Computation.isSynchronous(notifier),
      }),
    );
})() as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
