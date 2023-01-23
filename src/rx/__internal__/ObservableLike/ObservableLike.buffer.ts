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
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
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
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__disposed from "../../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import DisposableRefLike__create from "../../../util/__internal__/DisposableRefLike/DisposableRefLike.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import EnumerableObservableLike__never from "../EnumerableObservableLike/EnumerableObservableLike.never";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import ReactiveContainerLike__sinkInto from "../ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import SinkLike__notify from "../SinkLike/SinkLike.notify";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = ObserverLike__mixin<T>();

  type TProperties = {
    buffer: T[];
    readonly delegate: ObserverLike<readonly T[]>;
    readonly durationFunction: Function1<T, ObservableLike>;
    readonly durationSubscription: DisposableRefLike;
    readonly maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, DisposableLike__mixin),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ): ObserverLike<T> {
        init(DisposableLike__mixin, instance);
        init(
          typedObserverMixin,
          instance,
          ObserverLike__getScheduler(delegate),
        );

        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription = DisposableRefLike__create(
          DisposableLike__disposed,
        );
        instance.maxBufferSize = maxBufferSize;

        pipe(
          instance,
          DisposableLike__onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];

            if (isEmpty(buffer)) {
              pipe(delegate, DisposableLike__dispose());
            } else {
              pipe(
                [buffer],
                ReadonlyArrayLike__toRunnableObservable(),
                ReactiveContainerLike__sinkInto(delegate),
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
              DisposableLike__disposed;

            const buffer = this.buffer;
            this.buffer = [];

            pipe(this.delegate, SinkLike__notify(buffer));
          };

          if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
          } else if (
            DisposableLike__isDisposed(
              this.durationSubscription[MutableRefLike_current],
            )
          ) {
            this.durationSubscription[MutableRefLike_current] = pipe(
              next,
              this.durationFunction,
              ObservableLike__forEach(doOnNotify),
              ObservableLike__subscribe(ObserverLike__getScheduler(this)),
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
        ? EnumerableObservableLike__never
        : isNumber(durationOption)
        ? (_: T) => pipe([none], ReadonlyArrayLike__toRunnableObservable())
        : durationOption;

    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    const operator = (delegate: ObserverLike<readonly T[]>) => {
      return pipe(
        createBufferObserver(delegate, durationFunction, maxBufferSize),
        DisposableLike__addTo(delegate),
      );
    };

    return pipe(
      operator,
      ObservableLike__lift(durationOption === MAX_SAFE_INTEGER),
    );
  };
})();

export default ObservableLike__buffer;
