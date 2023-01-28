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
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
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
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DisposableRef_create from "../../../util/__internal__/DisposableRef/DisposableRef.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import EnumerableObservable_never from "../EnumerableObservable/EnumerableObservable.never";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import Observable_forEach from "./Observable.forEach";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";

const Observable_buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = Observer_mixin<T>();

  type TProperties = {
    buffer: T[];
    readonly delegate: ObserverLike<readonly T[]>;
    readonly durationFunction: Function1<T, ObservableLike>;
    readonly durationSubscription: DisposableRefLike;
    readonly maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable_mixin),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));

        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription =
          DisposableRef_create(Disposable_disposed);
        instance.maxBufferSize = maxBufferSize;

        pipe(
          instance,
          Disposable_onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];

            if (isEmpty(buffer)) {
              pipe(delegate, Disposable_dispose());
            } else {
              pipe(
                [buffer],
                ReadonlyArray_toRunnableObservable(),
                ReactiveContainer_sinkInto(delegate),
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
              Disposable_disposed;

            const buffer = this.buffer;
            this.buffer = [];

            this.delegate[SinkLike_notify](buffer);
          };

          if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
          } else if (
            Disposable_isDisposed(
              this.durationSubscription[MutableRefLike_current],
            )
          ) {
            this.durationSubscription[MutableRefLike_current] = pipe(
              next,
              this.durationFunction,
              Observable_forEach(doOnNotify),
              Observable_subscribe(Observer_getScheduler(this)),
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
        ? EnumerableObservable_never
        : isNumber(durationOption)
        ? (_: T) => pipe([none], ReadonlyArray_toRunnableObservable())
        : durationOption;

    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    const operator = (delegate: ObserverLike<readonly T[]>) => {
      return pipe(
        createBufferObserver(delegate, durationFunction, maxBufferSize),
        Disposable_addTo(delegate),
      );
    };

    return pipe(operator, Observable_lift(durationOption === MAX_SAFE_INTEGER));
  };
})();

export default Observable_buffer;
