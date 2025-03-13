import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
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
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_takeUntil: Observable.Signature["takeUntil"] = /*@__PURE__*/ (<
  T,
>() => {
  const TakeUntilObserver_notifier = Symbol("TakeUntilObserver_notifier");

  interface TProperties {
    [TakeUntilObserver_notifier]: PureSynchronousObservableLike;
  }

  const createTakeUntilObserver = mixInstanceFactory(
    include(DisposableMixin, LiftedObserverMixin()),
    function TakeUntilObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        TProperties,
      delegate: ObserverLike<T>,
      notifier: PureSynchronousObservableLike,
    ): ObserverLike<T> {
      init(DisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      pipe(this, Disposable.addTo(delegate));

      this[TakeUntilObserver_notifier] = notifier;

      pipe(
        notifier,
        Observable_takeFirst(),
        Observable_subscribeWithConfig(delegate, delegate),
        Disposable.addTo(this),
        DisposableContainer.onComplete(
          bindMethod(this, QueueableLike_complete),
        ),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilObserver_notifier]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];
        delegate[QueueableLike_enqueue](next);
      },

      [LiftedObserverLike_complete](this: LiftedObserverLike<T>) {
        this[LiftedObserverLike_delegate][QueueableLike_complete]();
        this[DisposableLike_dispose]();
      },
    }),
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
