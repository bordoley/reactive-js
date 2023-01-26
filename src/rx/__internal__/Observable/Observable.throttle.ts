import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
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
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DisposableRef$create from "../../../util/__internal__/DisposableRef/DisposableRef.create";
import MutableRef$get from "../../../util/__internal__/MutableRef/MutableRef.get";
import MutableRef$set from "../../../util/__internal__/MutableRef/MutableRef.set";
import { DisposableRefLike } from "../../../util/__internal__/util.internal";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import Sink$notify from "../Sink/Sink.notify";
import Observable$forEach from "./Observable.forEach";
import Observable$lift from "./Observable.lift";
import Observable$subscribe from "./Observable.subscribe";

const Observable$throttle = /*@__PURE__*/ (<T>() => {
  type ThrottleMode = "first" | "last" | "interval";

  const createThrottleObserver: <T>(
    delegate: ObserverLike<T>,
    durationFunction: Function1<T, ObservableLike>,
    mode: ThrottleMode,
  ) => ObserverLike<T> = (<T>() => {
    const typedObserverMixin = Observer$mixin<T>();

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
        MutableRef$set(
          pipe(
            observer.durationFunction(next),
            Observable$forEach(observer.onNotify),
            Observable$subscribe(Observer$getScheduler(observer)),
          ),
        ),
      );
    };

    return createInstanceFactory(
      mix(
        include(Disposable$mixin, typedObserverMixin),
        function ThrottleObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          durationFunction: Function1<T, ObservableLike>,
          mode: ThrottleMode,
        ): ObserverLike<T> {
          init(Disposable$mixin, instance);
          init(typedObserverMixin, instance, Observer$getScheduler(delegate));

          instance.delegate = delegate;
          instance.durationFunction = durationFunction;
          instance.mode = mode;

          instance.durationSubscription = pipe(
            DisposableRef$create(Disposable$disposed),
            Disposable$addTo(delegate),
          );

          instance.onNotify = (_?: unknown) => {
            if (instance.hasValue) {
              const value = instance.value as T;
              instance.value = none;
              instance.hasValue = false;

              pipe(instance.delegate, Sink$notify(value));

              setupDurationSubscription(instance, value);
            }
          };

          pipe(
            instance,
            Disposable$addTo(delegate),
            Disposable$onComplete(() => {
              if (
                instance.mode !== "first" &&
                instance.hasValue &&
                !Disposable$isDisposed(delegate)
              ) {
                pipe(
                  [instance.value],
                  ReadonlyArray$toRunnableObservable(),
                  ReactiveContainer$sinkInto(delegate),
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
              MutableRef$get,
              Disposable$isDisposed,
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
            ReadonlyArray$toRunnableObservable({
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
      Observable$lift(false, isNumber(duration)),
    );
  };
})();

export default Observable$throttle;
