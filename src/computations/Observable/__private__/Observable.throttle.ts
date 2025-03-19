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
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
  LiftedSinkLike_isDelegateCompleted,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  DisposableLike_isDisposed,
  ObserverLike,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

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
    const delegateIsCompleted = this[LiftedSinkLike_isDelegateCompleted];

    if (this[ThrottleObserver_hasValue] && !delegateIsCompleted) {
      const value = this[ThrottleObserver_value] as T;
      this[ThrottleObserver_value] = none;
      this[ThrottleObserver_hasValue] = false;

      this[LiftedListenerLike_notifyDelegate](value);

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
      // FIXME: Does this mean we're ignoring back pressure from the consumer?
      Observable_forEach(bind(notifyThrottleObserverDelegate, observer)),
      Observable_subscribe({ scheduler: observer }),
      Disposable.addTo(observer),
    );
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function ThrottleObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedListenerLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      durationFunction: Function1<T, ObservableLike>,
      mode: Observable.ThrottleMode,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[ThrottleObserver_durationFunction] = durationFunction;
      this[ThrottleObserver_mode] = mode;

      this[ThrottleObserver_durationSubscription] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

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
      [LiftedListenerLike_notify](
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
      },

      [LiftedSinkLike_complete](this: TProperties & LiftedObserverLike<T>) {
        if (
          this[ThrottleObserver_mode] !== ThrottleFirstMode &&
          this[ThrottleObserver_hasValue] &&
          !this[LiftedSinkLike_isDelegateCompleted] &&
          isSome(this[ThrottleObserver_value])
        ) {
          const value = this[ThrottleObserver_value];
          this[ThrottleObserver_value] = none;
          this[ThrottleObserver_hasValue] = false;
          this[LiftedListenerLike_notifyDelegate](value);
        }
        this[LiftedSinkLike_completeDelegate]();
      },
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
    Observable_lift(),
  );
};

export default Observable_throttle;
