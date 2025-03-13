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
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
  QueueableLike_isCompleted,
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
    const delegateIsCompleted = delegate[QueueableLike_isCompleted];

    if (this[ThrottleObserver_hasValue] && !delegateIsCompleted) {
      const value = this[ThrottleObserver_value] as T;
      this[ThrottleObserver_value] = none;
      this[ThrottleObserver_hasValue] = false;

      delegate[QueueableLike_enqueue](value);

      setupDurationSubscription(this, value);
    }
  }

  const setupDurationSubscription = (
    observer: LiftedObserverLike<T> & TProperties,
    next: T,
  ) => {
    const delegate = observer[LiftedObserverLike_delegate];
    observer[ThrottleObserver_durationSubscription][
      SerialDisposableLike_current
    ] = pipe(
      observer[ThrottleObserver_durationFunction](next),
      Observable_forEach(bind(notifyThrottleObserverDelegate, observer)),
      Observable_subscribeWithConfig(delegate, observer),
      Disposable.addTo(delegate),
    );
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function ThrottleObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
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
      [LiftedObserverLike_notify](
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

      [LiftedObserverLike_complete](this: TProperties & LiftedObserverLike<T>) {
        const delegate = this[LiftedObserverLike_delegate];
        if (
          this[ThrottleObserver_mode] !== ThrottleFirstMode &&
          this[ThrottleObserver_hasValue] &&
          !delegate[QueueableLike_isCompleted] &&
          isSome(this[ThrottleObserver_value])
        ) {
          const value = this[ThrottleObserver_value];
          this[ThrottleObserver_value] = none;
          this[ThrottleObserver_hasValue] = false;
          delegate[QueueableLike_enqueue](value);
        }
        delegate[QueueableLike_complete]();
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
    Observable_liftPureDeferred,
  );
};

export default Observable_throttle;
