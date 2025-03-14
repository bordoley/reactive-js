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
  ObservableLike_observe,
} from "../../../computations.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_completeDelegate,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
  LiftedObserverLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_isDisposed,
  ObserverLike,
  SerialDisposableLike,
  SerialDisposableLike_current,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";

const createSwitchAllObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<ObservableLike<T>> = /*@__PURE__*/ (<T>() => {
  const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");

  type TProperties = {
    readonly [SwitchAllObserver_currentRef]: SerialDisposableLike;
  };

  function onSwitchAllObserverInnerObservableComplete(
    this: TProperties & LiftedObserverLike<ObservableLike<T>, T>,
  ) {
    if (this[SinkLike_isCompleted]) {
      this[LiftedObserverLike_completeDelegate]();
    }
  }

  return mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      LiftedObserverMixin<ObservableLike<T>>(),
    ),
    function SwitchAllObserver(
      this: Pick<
        LiftedObserverLike<ObservableLike<T>>,
        typeof LiftedObserverLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
    ): ObserverLike<ObservableLike<T>> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<ObservableLike<T>, T>(), this, delegate, none);

      this[SwitchAllObserver_currentRef] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

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
        const subscriber = pipe(
          Observer_createWithDelegate(this[LiftedObserverLike_delegate]),
          Disposable.addTo(this),
          DisposableContainer.onComplete(
            bind(onSwitchAllObserverInnerObservableComplete, this),
          ),
        );
        next[ObservableLike_observe](subscriber)
        
        this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = subscriber;
      },

      [LiftedObserverLike_complete](
        this: TProperties & LiftedObserverLike<ObservableLike<T>, T>,
      ) {
        if (
          this[SwitchAllObserver_currentRef][SerialDisposableLike_current][
            DisposableLike_isDisposed
          ]
        ) {
          this[LiftedObserverLike_completeDelegate]();
        }
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
