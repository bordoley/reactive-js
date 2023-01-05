import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  DisposableRefLike,
  createDisposableRef,
} from "../../../__internal__/util/DisposableRefLike";
import {
  getCurrentRef,
  setCurrentRef,
} from "../../../__internal__/util/MutableRefLike";
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
import { getScheduler } from "../../ObserverLike";
import { sinkInto } from "../../ReactiveContainerLike";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__notify from "../SinkLike/SinkLike.notify";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__throttle = /*@__PURE__*/ (() => {
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
        setCurrentRef(
          pipe(
            observer.durationFunction(next),
            ObservableLike__forEach(observer.onNotify),
            ObservableLike__subscribe(getScheduler(observer)),
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
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.durationFunction = durationFunction;
          instance.mode = mode;

          instance.durationSubscription = pipe(
            createDisposableRef(DisposableLike__disposed),
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
                  sinkInto(delegate),
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
              getCurrentRef,
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

  return <T>(
    duration: Function1<T, ObservableLike> | number,
    options: { readonly mode?: ThrottleMode } = {},
  ) => {
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
      partial(durationFunction, mode),
      ObservableLike__lift(false, isNumber(duration)),
    );
  };
})();

export default ObservableLike__throttle;
