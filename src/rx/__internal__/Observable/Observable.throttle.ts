import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import {
  Function1,
  Optional,
  SideEffect,
  isNumber,
  none,
  partial,
  pipe,
} from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DisposableRef_create from "../../../util/__internal__/DisposableRef/DisposableRef.create";
import MutableRef_set from "../../../util/__internal__/MutableRef/MutableRef.set";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import Observable_forEach from "./Observable.forEach";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";

const Observable_throttle = /*@__PURE__*/ (<T>() => {
  type ThrottleMode = "first" | "last" | "interval";

  const createThrottleObserver: <T>(
    delegate: ObserverLike<T>,
    durationFunction: Function1<T, ObservableLike>,
    mode: ThrottleMode,
  ) => ObserverLike<T> = (<T>() => {
    const typedObserverMixin = Observer_mixin<T>();

    const ThrottleObserver_delegate = Symbol("ThrottleObserver_delegate");
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
      readonly [ThrottleObserver_delegate]: ObserverLike<T>;
      [ThrottleObserver_value]: Optional<T>;
      [ThrottleObserver_hasValue]: boolean;
      readonly [ThrottleObserver_durationSubscription]: DisposableRefLike;
      readonly [ThrottleObserver_durationFunction]: Function1<
        T,
        ObservableLike
      >;
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

          instance[ThrottleObserver_delegate] = delegate;
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

              instance[ThrottleObserver_delegate][SinkLike_notify](value);

              setupDurationSubscription(instance, value);
            }
          };

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              if (
                instance[ThrottleObserver_mode] !== "first" &&
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
          [ThrottleObserver_delegate]: none,
          [ThrottleObserver_value]: none,
          [ThrottleObserver_hasValue]: false,
          [ThrottleObserver_durationSubscription]: none,
          [ThrottleObserver_durationFunction]: none,
          [ThrottleObserver_mode]: "interval",
          [ThrottleObserver_onNotify]: none,
        }),
        {
          [SinkLike_notify](this: ObserverLike<T> & TProperties, next: T) {
            this[ThrottleObserver_value] = next;
            this[ThrottleObserver_hasValue] = true;

            const durationSubscriptionDisposableIsDisposed =
              this[ThrottleObserver_durationSubscription][
                MutableRefLike_current
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

  return (
    duration: Function1<T, ObservableLike> | number,
    options: { readonly mode?: ThrottleMode } = {},
  ): ContainerOperator<ObservableLike, T, T> => {
    const { mode = "interval" } = options;
    const durationFunction = isNumber(duration)
      ? (_: T) =>
          pipe(
            [none],
            ReadonlyArray_toRunnableObservable({
              delay: duration,
              delayStart: true,
            }),
          )
      : duration;
    return pipe(
      createThrottleObserver,
      partial<
        ObserverLike<T>,
        Function1<T, ObservableLike<T>>,
        ThrottleMode,
        ObserverLike<T>
      >(durationFunction, mode),
      Observable_lift(false, isNumber(duration)),
    );
  };
})();

export default Observable_throttle;
