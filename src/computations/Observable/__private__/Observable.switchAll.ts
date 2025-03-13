import {
  Mutable,
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
  HigherOrderInnerComputationLike,
  ObservableLike,
} from "../../../computations.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike_enqueue,
  QueueableLike_isReady,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const createSwitchAllObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<ObservableLike<T>> = /*@__PURE__*/ (<T>() => {
  const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");

  type TProperties = {
    readonly [SwitchAllObserver_currentRef]: SerialDisposableLike;
  };

  function onSwitchAllObserverComplete(
    this: TProperties & LiftedObserverLike<ObservableLike<T>, T>,
  ) {
    if (
      this[SwitchAllObserver_currentRef][SerialDisposableLike_current][
        DisposableLike_isDisposed
      ]
    ) {
      this[LiftedObserverLike_delegate][DisposableLike_dispose]();
    }
  }

  function onSwitchAllObserverInnerObservableComplete(
    this: TProperties & LiftedObserverLike<ObservableLike<T>, T>,
  ) {
    if (this[DisposableLike_isDisposed]) {
      this[LiftedObserverLike_delegate][DisposableLike_dispose]();
    }
  }

  return mixInstanceFactory(
    include(DisposableMixin, LiftedObserverMixin<ObservableLike<T>>()),
    function SwitchAllObserver(
      this: Pick<
        LiftedObserverLike<ObservableLike<T>>,
        typeof LiftedObserverLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
    ): ObserverLike<ObservableLike<T>> {
      init(DisposableMixin, this);
      init(LiftedObserverMixin<ObservableLike<T>, T>(), this, delegate, none);

      pipe(this, Disposable.addTo(delegate));

      this[SwitchAllObserver_currentRef] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

      pipe(this, DisposableContainer.onComplete(onSwitchAllObserverComplete));

      return this;
    },
    props<TProperties>({
      [SwitchAllObserver_currentRef]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties &
          LiftedObserverLike<ObservableLike<T>, T> &
          SerialDisposableLike,
        next: ObservableLike<T>,
      ) {
        const delegate = this[LiftedObserverLike_delegate];
        this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = pipe(
          next,
          Observable_forEach(bindMethod(delegate, QueueableLike_enqueue)),
          Observable_subscribeWithConfig(delegate, this),
          Disposable.addTo(delegate),
          DisposableContainer.onComplete(
            bind(onSwitchAllObserverInnerObservableComplete, this),
          ),
        );
        return delegate[QueueableLike_isReady];
      },
    }),
  );
})();

const Observable_switchAll: Observable.Signature["switchAll"] = ((options?: {
  readonly innerType?: HigherOrderInnerComputationLike;
}) =>
  Observable_lift({
    [ObservableLift_isStateless]: false,
    [ComputationLike_isDeferred]: Computation.isDeferred(
      options?.innerType ?? {},
    ),
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(
      options?.innerType ?? {},
    ),
  })(createSwitchAllObserver)) as Observable.Signature["switchAll"];

export default Observable_switchAll;
