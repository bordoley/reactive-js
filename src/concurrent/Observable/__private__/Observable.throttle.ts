import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DispatcherLike_complete,
  ObservableLike,
  ObserverLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Function1,
  Optional,
  SideEffect,
  isSome,
  none,
  partial,
  pipe,
  pipeLazy,
} from "../../../functions.js";
import {
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__private__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observer_createThrottleObserver: <T>(
  delegate: ObserverLike<T>,
  durationFunction: Function1<T, ObservableLike>,
  mode: "first" | "last" | "interval",
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
  const ThrottleObserver_onNotify = Symbol("ThrottleObserver_onNotify");
  const ThrottleObserver_delegate = Symbol("ThrottleObserver_delegate");

  type TProperties = {
    [ThrottleObserver_value]: Optional<T>;
    [ThrottleObserver_hasValue]: boolean;
    readonly [ThrottleObserver_durationSubscription]: SerialDisposableLike;
    readonly [ThrottleObserver_durationFunction]: Function1<T, ObservableLike>;
    readonly [ThrottleObserver_mode]: "first" | "last" | "interval";
    readonly [ThrottleObserver_onNotify]: SideEffect;
    [ThrottleObserver_delegate]: ObserverLike<T>;
  };

  const setupDurationSubscription = (
    observer: ObserverLike<T> & TProperties,
    next: T,
  ) => {
    observer[ThrottleObserver_durationSubscription][
      SerialDisposableLike_current
    ] = pipe(
      observer[ThrottleObserver_durationFunction](next),
      Observable_forEach(observer[ThrottleObserver_onNotify]),
      Observable_subscribeWithConfig(
        observer[ThrottleObserver_delegate],
        observer,
      ),
      Disposable.addTo(observer[ThrottleObserver_delegate]),
    );
  };

  return createInstanceFactory(
    mix(
      include(DisposableMixin, DelegatingObserverMixin()),
      function ThrottleObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        durationFunction: Function1<T, ObservableLike>,
        mode: "first" | "last" | "interval",
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        instance[ThrottleObserver_delegate] = delegate;
        init(DelegatingObserverMixin(), instance, delegate);

        instance[ThrottleObserver_durationFunction] = durationFunction;
        instance[ThrottleObserver_mode] = mode;

        instance[ThrottleObserver_durationSubscription] = pipe(
          SerialDisposable.create(Disposable.disposed),
          Disposable.addTo(delegate),
        );

        instance[ThrottleObserver_onNotify] = (_?: unknown) => {
          if (instance[ThrottleObserver_hasValue]) {
            const value = instance[ThrottleObserver_value] as T;
            instance[ThrottleObserver_value] = none;
            instance[ThrottleObserver_hasValue] = false;

            delegate[SinkLike_notify](value);

            setupDurationSubscription(instance, value);
          }
        };

        pipe(
          instance,
          Disposable.onComplete(() => {
            if (
              instance[ThrottleObserver_mode] !== "first" &&
              instance[ThrottleObserver_hasValue] &&
              !delegate[DisposableLike_isDisposed] &&
              isSome(instance[ThrottleObserver_value])
            ) {
              delegate[QueueableLike_enqueue](instance[ThrottleObserver_value]);
              delegate[DispatcherLike_complete]();
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_delegate]: none,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: "interval",
        [ThrottleObserver_onNotify]: none,
      }),
      {
        [SinkLike_notify](this: ObserverLike<T> & TProperties, next: T) {
          Observer_assertState(this);

          this[ThrottleObserver_value] = next;
          this[ThrottleObserver_hasValue] = true;

          const durationSubscriptionDisposableIsDisposed =
            this[ThrottleObserver_durationSubscription][
              SerialDisposableLike_current
            ][DisposableLike_isDisposed];

          if (
            durationSubscriptionDisposableIsDisposed &&
            this[ThrottleObserver_mode] !== "last"
          ) {
            this[ThrottleObserver_onNotify]();
          } else if (durationSubscriptionDisposableIsDisposed) {
            setupDurationSubscription(this, next);
          }
        },
      },
    ),
  );
})();

const Observable_throttle: Observable.Signature["throttle"] = (
  duration: number,
  options: { readonly mode?: "first" | "last" | "interval" } = {},
) => {
  const { mode = "interval" } = options;

  const durationObservable = pipeLazy(
    [none],
    // FIXME: Observable_fromValue
    Observable_fromIterable({ delay: duration, delayStart: true }),
  );

  return pipe(
    Observer_createThrottleObserver,
    partial(durationObservable, mode),
    Observable_liftWithSideEffects,
  );
};

export default Observable_throttle;
