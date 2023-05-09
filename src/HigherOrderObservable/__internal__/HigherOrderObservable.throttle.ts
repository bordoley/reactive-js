import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __ThrottleObserver_durationFunction,
  __ThrottleObserver_durationSubscription,
  __ThrottleObserver_hasValue,
  __ThrottleObserver_mode,
  __ThrottleObserver_onNotify,
  __ThrottleObserver_value,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../__internal__/types.js";
import { Containers, ObservableContainer } from "../../containers.js";
import {
  Function1,
  Optional,
  SideEffect,
  invoke,
  isNumber,
  none,
  partial,
  pipe,
} from "../../functions.js";
import {
  DisposableLike_isDisposed,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";

const createThrottleObserver: <T>(
  delegate: ObserverLike<T>,
  durationFunction: Function1<T, ObservableLike>,
  mode: "first" | "last" | "interval",
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__ThrottleObserver_value]: Optional<T>;
    [__ThrottleObserver_hasValue]: boolean;
    readonly [__ThrottleObserver_durationSubscription]: SerialDisposableLike;
    readonly [__ThrottleObserver_durationFunction]: Function1<
      T,
      ObservableLike
    >;
    readonly [__ThrottleObserver_mode]: "first" | "last" | "interval";
    readonly [__ThrottleObserver_onNotify]: SideEffect;
  };

  const setupDurationSubscription = (
    observer: ObserverLike<T> & TProperties & DelegatingLike<ObserverLike>,
    next: T,
  ) => {
    observer[__ThrottleObserver_durationSubscription][
      SerialDisposableLike_current
    ] = pipe(
      observer[__ThrottleObserver_durationFunction](next),
      Observable_forEach<ObservableContainer>(
        observer[__ThrottleObserver_onNotify],
      ),
      Observable_subscribeWithConfig(
        observer[DelegatingLike_delegate],
        observer,
      ),
      Disposable_addTo(observer[DelegatingLike_delegate]),
    );
  };

  return createInstanceFactory(
    mix(
      include(Observer_mixin(), Delegating_mixin()),
      function ThrottleObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        durationFunction: Function1<T, ObservableLike>,
        mode: "first" | "last" | "interval",
      ): ObserverLike<T> {
        init(Delegating_mixin<ObserverLike>(), instance, delegate);
        Observer_mixin_initFromDelegate(instance, delegate);

        instance[__ThrottleObserver_durationFunction] = durationFunction;
        instance[__ThrottleObserver_mode] = mode;

        instance[__ThrottleObserver_durationSubscription] = pipe(
          SerialDisposable_create(Disposable_disposed),
          Disposable_addTo(delegate),
        );

        instance[__ThrottleObserver_onNotify] = (_?: unknown) => {
          if (instance[__ThrottleObserver_hasValue]) {
            const value = instance[__ThrottleObserver_value] as T;
            instance[__ThrottleObserver_value] = none;
            instance[__ThrottleObserver_hasValue] = false;

            delegate[ObserverLike_notify](value);

            setupDurationSubscription(instance, value);
          }
        };

        pipe(
          instance,
          Disposable_onComplete(() => {
            if (
              instance[__ThrottleObserver_mode] !== "first" &&
              instance[__ThrottleObserver_hasValue] &&
              !delegate[DisposableLike_isDisposed]
            ) {
              pipe(
                instance[__ThrottleObserver_value],
                Optional_toObservable(),
                invoke(ObservableLike_observe, delegate),
              );
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [__ThrottleObserver_value]: none,
        [__ThrottleObserver_hasValue]: false,
        [__ThrottleObserver_durationSubscription]: none,
        [__ThrottleObserver_durationFunction]: none,
        [__ThrottleObserver_mode]: "interval",
        [__ThrottleObserver_onNotify]: none,
      }),
      {
        [ObserverLike_notify](
          this: ObserverLike<T> & TProperties & DelegatingLike<ObserverLike>,
          next: T,
        ) {
          Observer_assertState(this);

          this[__ThrottleObserver_value] = next;
          this[__ThrottleObserver_hasValue] = true;

          const durationSubscriptionDisposableIsDisposed =
            this[__ThrottleObserver_durationSubscription][
              SerialDisposableLike_current
            ][DisposableLike_isDisposed];

          if (
            durationSubscriptionDisposableIsDisposed &&
            this[__ThrottleObserver_mode] !== "last"
          ) {
            this[__ThrottleObserver_onNotify]();
          } else if (durationSubscriptionDisposableIsDisposed) {
            setupDurationSubscription(this, next);
          }
        },
      },
    ),
  );
})();

const throttleImpl = <C extends ObservableContainer, T>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => Containers.Operator<C, T, T>,
  duration: Function1<T, Containers.Of<C, unknown>>,
  mode: "first" | "last" | "interval",
): Containers.Operator<C, T, T> => {
  return pipe(
    createThrottleObserver,
    partial<
      ObserverLike<T>,
      Function1<T, ObservableLike>,
      "first" | "last" | "interval",
      ObserverLike<T>
    >(duration, mode),
    lift,
  );
};

const HigherOrderObservable_throttle =
  <C extends ObservableContainer, T>(
    fromReadonlyArray: <T>(options?: {
      readonly count?: number;
      readonly delay?: number;
      readonly delayStart?: boolean;
      readonly start?: number;
    }) => Function1<readonly T[], Containers.Of<C, T>>,
    lift: <T>(
      f: Function1<ObserverLike<T>, ObserverLike<T>>,
    ) => Containers.Operator<C, T, T>,
  ) =>
  (
    duration: Function1<T, Containers.Of<C, unknown>> | number,
    options: { readonly mode?: "first" | "last" | "interval" } = {},
  ): Containers.Operator<C, T, T> => {
    const { mode = "interval" } = options;

    const durationFunction = isNumber(duration)
      ? (_: T) =>
          pipe(
            [none],
            fromReadonlyArray({
              delay: duration,
              delayStart: true,
            }),
          )
      : duration;

    return throttleImpl<C, T>(
      isNumber(duration)
        ? // Note: This is only safe because we can control all the callers and know
          // all the valid subtypes of ObservableLike
          (Runnable_lift as unknown as <T>(
            f: Function1<ObserverLike<T>, ObserverLike<T>>,
          ) => Containers.Operator<C, T, T>)
        : lift,
      durationFunction,
      mode,
    );
  };

export default HigherOrderObservable_throttle;
