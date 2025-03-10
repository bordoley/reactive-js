import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import {
  Function1,
  Optional,
  bind,
  isSome,
  none,
  partial,
  pipe,
  pipeLazy,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DispatcherLike_complete,
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
  QueueableLike_enqueue,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

export const ThrottleFirstMode = "first";
export const ThrottleLastMode = "last";
export const ThrottleIntervalMode = "interval";

const createThrottleObserver: <T>(
  delegate: ObserverLike<T>,
  durationFunction: Function1<T, ObservableLike>,
  mode: Observable.ThrottleMode,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const ThrottleObserver_value = Symbol("ThrottleObserver_value");
  const ThrottleObserver_hasValue = Symbol("ThrottleObserver_hasValue");
  const ThrottleObserver_durationSubscription = Symbol(
    "ThrottleObserver_durationSubscription",
  );
  const ThrottleObserver_durationFunction = Symbol(
    "ThrottleObserver_durationFunction",
  );
  const ThrottleObserver_mode = Symbol("ThrottleObserver_mode");

  type TProperties = {
    [ThrottleObserver_value]: Optional<T>;
    [ThrottleObserver_hasValue]: boolean;
    readonly [ThrottleObserver_durationSubscription]: SerialDisposableLike;
    readonly [ThrottleObserver_durationFunction]: Function1<T, ObservableLike>;
    readonly [ThrottleObserver_mode]: Observable.ThrottleMode;
  };

  function notifyThrottleObserverDelegate(
    this: LiftedObserverLike<T> & TProperties,
    _?: unknown,
  ) {
    const delegate = this[LiftedObserverLike_delegate];

    if (this[ThrottleObserver_hasValue]) {
      const value = this[ThrottleObserver_value] as T;
      this[ThrottleObserver_value] = none;
      this[ThrottleObserver_hasValue] = false;

      delegate[ObserverLike_notify](value);

      setupDurationSubscription(this, value);
    }
  }

  const setupDurationSubscription = (
    observer: LiftedObserverLike<T> & TProperties,
    next: T,
  ) => {
    observer[ThrottleObserver_durationSubscription][
      SerialDisposableLike_current
    ] = pipe(
      observer[ThrottleObserver_durationFunction](next),
      Observable_forEach(bind(notifyThrottleObserverDelegate, observer)),
      Observable_subscribeWithConfig(
        observer[LiftedObserverLike_delegate],
        observer,
      ),
      Disposable.addTo(observer[LiftedObserverLike_delegate]),
    );
  };

  function onThrottleObserverComplete(
    this: TProperties & LiftedObserverLike<T>,
  ) {
    const delegate = this[LiftedObserverLike_delegate];
    if (
      this[ThrottleObserver_mode] !== ThrottleFirstMode &&
      this[ThrottleObserver_hasValue] &&
      !delegate[DisposableLike_isDisposed] &&
      isSome(this[ThrottleObserver_value])
    ) {
      delegate[QueueableLike_enqueue](this[ThrottleObserver_value]);
      delegate[DispatcherLike_complete]();
    }
  }

  return mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()),
    function ThrottleObserver(
      this: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      durationFunction: Function1<T, ObservableLike>,
      mode: Observable.ThrottleMode,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin(), this, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[ThrottleObserver_durationFunction] = durationFunction;
      this[ThrottleObserver_mode] = mode;

      this[ThrottleObserver_durationSubscription] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

      pipe(this, DisposableContainer.onComplete(onThrottleObserverComplete));

      return this;
    },
    props<TProperties>({
      [ThrottleObserver_value]: none,
      [ThrottleObserver_hasValue]: false,
      [ThrottleObserver_durationSubscription]: none,
      [ThrottleObserver_durationFunction]: none,
      [ThrottleObserver_mode]: ThrottleIntervalMode,
    }),
    proto({
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: LiftedObserverLike<T> & TProperties,
        next: T,
      ) {
        this[ThrottleObserver_value] = next;
        this[ThrottleObserver_hasValue] = true;

        const durationSubscriptionDisposableIsDisposed =
          this[ThrottleObserver_durationSubscription][
            SerialDisposableLike_current
          ][DisposableLike_isDisposed];

        if (
          durationSubscriptionDisposableIsDisposed &&
          this[ThrottleObserver_mode] !== ThrottleLastMode
        ) {
          notifyThrottleObserverDelegate.call(this);
        } else if (durationSubscriptionDisposableIsDisposed) {
          setupDurationSubscription(this, next);
        }
      }),
    }),
  );
})();

const Observable_throttle: Observable.Signature["throttle"] = <T>(
  duration: number,
  options: { readonly mode?: Observable.ThrottleMode } = {},
) => {
  const { mode = ThrottleIntervalMode } = options;

  const durationObservable = pipeLazy(
    none,
    Observable_fromValue({ delay: duration }),
  );

  return pipe(
    createThrottleObserver<T>,
    partial(durationObservable, mode),
    Observable_liftPureDeferred,
  );
};

export default Observable_throttle;
