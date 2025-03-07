import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import DelegatingObserverMixin from "../../../computations/__mixins__/DelegatingObserverMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../computations/__mixins__/LiftedObserverMixin.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  HigherOrderInnerComputationLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../computations.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
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
    include(
      DisposableMixin,
      DelegatingObserverMixin<ObservableLike<T>>(),
      LiftedObserverMixin(),
    ),
    function SwitchAllObserver(
      instance: Pick<
        ObserverLike<ObservableLike<T>>,
        typeof ObserverLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
    ): ObserverLike<ObservableLike<T>> {
      init(DisposableMixin, instance);
      init(DelegatingObserverMixin(), instance, delegate);
      init(LiftedObserverMixin(), instance, delegate);

      instance[SwitchAllObserver_currentRef] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

      pipe(
        instance,
        DisposableContainer.onComplete(onSwitchAllObserverComplete),
      );

      return instance;
    },
    props<TProperties>({
      [SwitchAllObserver_currentRef]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties &
          LiftedObserverLike<ObservableLike<T>, T> &
          SerialDisposableLike,
        next: ObservableLike<T>,
      ) {
        this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = pipe(
          next,
          Observable_forEach(
            bindMethod(this[LiftedObserverLike_delegate], ObserverLike_notify),
          ),
          Observable_subscribeWithConfig(
            this[LiftedObserverLike_delegate],
            this,
          ),
          Disposable.addTo(this[LiftedObserverLike_delegate]),
          DisposableContainer.onComplete(
            bind(onSwitchAllObserverInnerObservableComplete, this),
          ),
        );
      }),
    },
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
