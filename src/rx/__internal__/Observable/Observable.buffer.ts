import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { MAX_SAFE_INTEGER } from "../../../constants";
import { ContainerOperator } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import {
  Function1,
  getLength,
  isEmpty,
  isNumber,
  max,
  none,
  pipe,
} from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DisposableRef$create from "../../../util/__internal__/DisposableRef/DisposableRef.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import EnumerableObservable$never from "../EnumerableObservable/EnumerableObservable.never";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import Sink$notify from "../Sink/Sink.notify";
import Observable$forEach from "./Observable.forEach";
import Observable$lift from "./Observable.lift";
import Observable$subscribe from "./Observable.subscribe";

const Observable$buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = Observer$mixin<T>();

  type TProperties = {
    buffer: T[];
    readonly delegate: ObserverLike<readonly T[]>;
    readonly durationFunction: Function1<T, ObservableLike>;
    readonly durationSubscription: DisposableRefLike;
    readonly maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable$mixin),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ): ObserverLike<T> {
        init(Disposable$mixin, instance);
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));

        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription =
          DisposableRef$create(Disposable$disposed);
        instance.maxBufferSize = maxBufferSize;

        pipe(
          instance,
          Disposable$onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];

            if (isEmpty(buffer)) {
              pipe(delegate, Disposable$dispose());
            } else {
              pipe(
                [buffer],
                ReadonlyArray$toRunnableObservable(),
                ReactiveContainer$sinkInto(delegate),
              );
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
      }),
      {
        [SinkLike_notify](this: TProperties & ObserverLike<T>, next: T) {
          const { buffer, maxBufferSize } = this;

          buffer.push(next);

          const doOnNotify = () => {
            this.durationSubscription[MutableRefLike_current] =
              Disposable$disposed;

            const buffer = this.buffer;
            this.buffer = [];

            pipe(this.delegate, Sink$notify(buffer));
          };

          if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
          } else if (
            Disposable$isDisposed(
              this.durationSubscription[MutableRefLike_current],
            )
          ) {
            this.durationSubscription[MutableRefLike_current] = pipe(
              next,
              this.durationFunction,
              Observable$forEach(doOnNotify),
              Observable$subscribe(Observer$getScheduler(this)),
            );
          }
        },
      },
    ),
  );

  return (
    options: {
      readonly duration?: Function1<T, ObservableLike> | number;
      readonly maxBufferSize?: number;
    } = {},
  ) => {
    const durationOption = options.duration ?? MAX_SAFE_INTEGER;
    const durationFunction =
      durationOption === MAX_SAFE_INTEGER
        ? EnumerableObservable$never
        : isNumber(durationOption)
        ? (_: T) => pipe([none], ReadonlyArray$toRunnableObservable())
        : durationOption;

    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    const operator = (delegate: ObserverLike<readonly T[]>) => {
      return pipe(
        createBufferObserver(delegate, durationFunction, maxBufferSize),
        Disposable$addTo(delegate),
      );
    };

    return pipe(operator, Observable$lift(durationOption === MAX_SAFE_INTEGER));
  };
})();

export default Observable$buffer;
