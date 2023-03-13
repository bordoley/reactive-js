import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import {
  ContainerOf,
  ContainerOperator,
  FromReadonlyArray,
} from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import {
  Function1,
  Optional,
  SideEffect,
  isNumber,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ThrottleMode,
  ThrottleMode_first,
  ThrottleMode_interval,
  ThrottleMode_last,
} from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";

const createThrottleObserver: <T>(
  delegate: ObserverLike<T>,
  durationFunction: Function1<T, ObservableLike>,
  mode: ThrottleMode,
) => ObserverLike<T> = (<T>() => {
  const typedObserverMixin = Observer_mixin<T>();

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

  type TProperties = {
    [ThrottleObserver_value]: Optional<T>;
    [ThrottleObserver_hasValue]: boolean;
    readonly [ThrottleObserver_durationSubscription]: SerialDisposableLike;
    readonly [ThrottleObserver_durationFunction]: Function1<T, ObservableLike>;
    readonly [ThrottleObserver_mode]: ThrottleMode;
    readonly [ThrottleObserver_onNotify]: SideEffect;
  };

  const setupDurationSubscription = (
    observer: ObserverLike<T> & TProperties,
    next: T,
  ) => {
    observer[ThrottleObserver_durationSubscription][
      SerialDisposableLike_current
    ] = pipe(
      observer[ThrottleObserver_durationFunction](next),
      Observable_forEach<ObservableLike>(observer[ThrottleObserver_onNotify]),
      Observable_subscribe(observer[DispatcherLike_scheduler]),
    );
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin),
      function ThrottleObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        durationFunction: Function1<T, ObservableLike>,
        mode: ThrottleMode,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, delegate[DispatcherLike_scheduler]);

        instance[ThrottleObserver_durationFunction] = durationFunction;
        instance[ThrottleObserver_mode] = mode;

        instance[ThrottleObserver_durationSubscription] = pipe(
          SerialDisposable_create(Disposable_disposed),
          Disposable_addTo(delegate),
        );

        instance[ThrottleObserver_onNotify] = (_?: unknown) => {
          if (instance[ThrottleObserver_hasValue]) {
            const value = instance[ThrottleObserver_value] as T;
            instance[ThrottleObserver_value] = none;
            instance[ThrottleObserver_hasValue] = false;

            delegate[ObserverLike_notify](value);

            setupDurationSubscription(instance, value);
          }
        };

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            if (
              instance[ThrottleObserver_mode] !== ThrottleMode_first &&
              instance[ThrottleObserver_hasValue] &&
              !delegate[DisposableLike_isDisposed]
            ) {
              pipe(
                instance[ThrottleObserver_value],
                Optional_toObservable(),
                Observable_observeWith(delegate),
              );
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: ThrottleMode_interval,
        [ThrottleObserver_onNotify]: none,
      }),
      {
        [ObserverLike_notify](this: ObserverLike<T> & TProperties, next: T) {
          Observer_assertState(this);

          this[ThrottleObserver_value] = next;
          this[ThrottleObserver_hasValue] = true;

          const durationSubscriptionDisposableIsDisposed =
            this[ThrottleObserver_durationSubscription][
              SerialDisposableLike_current
            ][DisposableLike_isDisposed];

          if (
            durationSubscriptionDisposableIsDisposed &&
            this[ThrottleObserver_mode] !== ThrottleMode_last
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

const throttleImpl = <C extends ObservableLike, T>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
  duration: Function1<T, ContainerOf<C, unknown>>,
  mode: ThrottleMode,
): ContainerOperator<C, T, T> => {
  return pipe(
    createThrottleObserver,
    partial<
      ObserverLike<T>,
      Function1<T, ObservableLike>,
      ThrottleMode,
      ObserverLike<T>
    >(duration, mode),
    lift,
  );
};

const HigherOrderObservable_throttle =
  <C extends ObservableLike, T>(
    fromReadonlyArray: FromReadonlyArray<
      C,
      { delay: number; delayStart: boolean }
    >["fromReadonlyArray"],
    lift: <T>(
      f: Function1<ObserverLike<T>, ObserverLike<T>>,
    ) => ContainerOperator<C, T, T>,
  ) =>
  (
    duration: Function1<T, ContainerOf<C, unknown>> | number,
    options: { readonly mode?: ThrottleMode } = {},
  ): ContainerOperator<C, T, T> => {
    const { mode = ThrottleMode_interval } = options;

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
          ) => ContainerOperator<C, T, T>)
        : lift,
      durationFunction,
      mode,
    );
  };

export default HigherOrderObservable_throttle;
