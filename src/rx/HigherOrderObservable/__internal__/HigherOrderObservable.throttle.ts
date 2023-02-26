import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ContainerOf,
  ContainerOperator,
  FromReadonlyArray,
} from "../../../containers.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
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
  ObservableLike,
  ObserverLike,
  SinkLike_notify,
  ThrottleMode,
  ThrottleMode_first,
  ThrottleMode_interval,
  ThrottleMode_last,
} from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import DisposableRef_create from "../../../util/DisposableRef/__internal__/DisposableRef.create.js";
import MutableRef_set from "../../../util/MutableRef/__internal__/MutableRef.set.js";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import RunnableObservable_lift from "../../RunnableObservable/__internal__/RunnableObservable.lift.js";

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
    readonly [ThrottleObserver_durationSubscription]: DisposableRefLike;
    readonly [ThrottleObserver_durationFunction]: Function1<T, ObservableLike>;
    readonly [ThrottleObserver_mode]: ThrottleMode;
    readonly [ThrottleObserver_onNotify]: SideEffect;
  };

  const setupDurationSubscription = (
    observer: ObserverLike<T> & TProperties,
    next: T,
  ) => {
    pipe(
      observer[ThrottleObserver_durationSubscription],
      MutableRef_set(
        pipe(
          observer[ThrottleObserver_durationFunction](next),
          Observable_forEach(observer[ThrottleObserver_onNotify]),
          Observable_subscribe(Observer_getScheduler(observer)),
        ),
      ),
    );
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin),
      function ThrottleObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        durationFunction: Function1<T, ObservableLike>,
        mode: ThrottleMode,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));

        instance[ThrottleObserver_durationFunction] = durationFunction;
        instance[ThrottleObserver_mode] = mode;

        instance[ThrottleObserver_durationSubscription] = pipe(
          DisposableRef_create(Disposable_disposed),
          Disposable_addTo(delegate),
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
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            if (
              instance[ThrottleObserver_mode] !== ThrottleMode_first &&
              instance[ThrottleObserver_hasValue] &&
              !Disposable_isDisposed(delegate)
            ) {
              pipe(
                [instance[ThrottleObserver_value]],
                ReadonlyArray_toRunnableObservable(),
                ReactiveContainer_sinkInto(delegate),
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
        [SinkLike_notify](this: ObserverLike<T> & TProperties, next: T) {
          Observer_assertState(this);

          this[ThrottleObserver_value] = next;
          this[ThrottleObserver_hasValue] = true;

          const durationSubscriptionDisposableIsDisposed =
            this[ThrottleObserver_durationSubscription][MutableRefLike_current][
              DisposableLike_isDisposed
            ];

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
          (RunnableObservable_lift as unknown as <T>(
            f: Function1<ObserverLike<T>, ObserverLike<T>>,
          ) => ContainerOperator<C, T, T>)
        : lift,
      durationFunction,
      mode,
    );
  };

export default HigherOrderObservable_throttle;
