import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
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
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__disposed from "../../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import DisposableRefLike__create from "../../../util/__internal__/DisposableRefLike/DisposableRefLike.create";
import MutableRefLike__get from "../../../util/__internal__/MutableRefLike/MutableRefLike.get";
import MutableRefLike__set from "../../../util/__internal__/MutableRefLike/MutableRefLike.set";
import { DisposableRefLike } from "../../../util/__internal__/util.internal";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import ReactiveContainerLike__sinkInto from "../ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import SinkLike__notify from "../SinkLike/SinkLike.notify";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__throttle = /*@__PURE__*/ (<T>() => {
  type ThrottleMode = "first" | "last" | "interval";

  const createThrottleObserver: <T>(
    delegate: ObserverLike<T>,
    durationFunction: Function1<T, ObservableLike>,
    mode: ThrottleMode,
  ) => ObserverLike<T> = (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<T>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      value: Optional<T>;
      hasValue: boolean;
      readonly durationSubscription: DisposableRefLike;
      readonly durationFunction: Function1<T, ObservableLike>;
      readonly mode: ThrottleMode;
      readonly onNotify: SideEffect;
    };

    const setupDurationSubscription = (
      observer: ObserverLike<T> & TProperties,
      next: T,
    ) => {
      pipe(
        observer.durationSubscription,
        MutableRefLike__set(
          pipe(
            observer.durationFunction(next),
            ObservableLike__forEach(observer.onNotify),
            ObservableLike__subscribe(ObserverLike__getScheduler(observer)),
          ),
        ),
      );
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function ThrottleObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          durationFunction: Function1<T, ObservableLike>,
          mode: ThrottleMode,
        ): ObserverLike<T> {
          init(DisposableLike__mixin, instance);
          init(
            typedObserverMixin,
            instance,
            ObserverLike__getScheduler(delegate),
          );

          instance.delegate = delegate;
          instance.durationFunction = durationFunction;
          instance.mode = mode;

          instance.durationSubscription = pipe(
            DisposableRefLike__create(DisposableLike__disposed),
            DisposableLike__addTo(delegate),
          );

          instance.onNotify = (_?: unknown) => {
            if (instance.hasValue) {
              const value = instance.value as T;
              instance.value = none;
              instance.hasValue = false;

              pipe(instance.delegate, SinkLike__notify(value));

              setupDurationSubscription(instance, value);
            }
          };

          pipe(
            instance,
            DisposableLike__addTo(delegate),
            DisposableLike__onComplete(() => {
              if (
                instance.mode !== "first" &&
                instance.hasValue &&
                !DisposableLike__isDisposed(delegate)
              ) {
                pipe(
                  [instance.value],
                  ReadonlyArrayLike__toRunnableObservable(),
                  ReactiveContainerLike__sinkInto(delegate),
                );
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          delegate: none,
          value: none,
          hasValue: false,
          durationSubscription: none,
          durationFunction: none,
          mode: "interval",
          onNotify: none,
        }),
        {
          [SinkLike_notify](this: ObserverLike<T> & TProperties, next: T) {
            this.value = next;
            this.hasValue = true;

            const durationSubscriptionDisposableIsDisposed = pipe(
              this.durationSubscription,
              MutableRefLike__get,
              DisposableLike__isDisposed,
            );

            if (
              durationSubscriptionDisposableIsDisposed &&
              this.mode !== "last"
            ) {
              this.onNotify();
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
            ReadonlyArrayLike__toRunnableObservable({
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
      ObservableLike__lift(false, isNumber(duration)),
    );
  };
})();

export default ObservableLike__throttle;
