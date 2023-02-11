import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { MAX_SAFE_INTEGER } from "../../../constants";
import { ContainerOperator } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
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
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import DisposableRef_create from "../../../util/__internal__/DisposableRef/__internal__/DisposableRef.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto";
import Observable_forEach from "./Observable.forEach";
import Observable_lift from "./Observable.lift";
import Observable_never from "./Observable.never";
import Observable_subscribe from "./Observable.subscribe";

const Observable_buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = Observer_mixin<T>();

  const BufferObserver_buffer = Symbol("BufferObserver_buffer");
  const BufferObserver_durationFunction = Symbol(
    "BufferObserver_durationFunction",
  );
  const BufferObserver_durationSubscription = Symbol(
    "BufferObserver_durationSubscription",
  );
  const BufferObserver_maxBufferSize = Symbol("BufferObserver_maxBufferSize");

  type TProperties = {
    [BufferObserver_buffer]: T[];
    readonly [BufferObserver_durationFunction]: Function1<T, ObservableLike>;
    readonly [BufferObserver_durationSubscription]: DisposableRefLike;
    readonly [BufferObserver_maxBufferSize]: number;
  };

  const createBufferObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable_mixin, delegatingMixin()),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(delegatingMixin(), instance, delegate);

        instance[BufferObserver_buffer] = [];
        instance[BufferObserver_durationFunction] = durationFunction;
        instance[BufferObserver_durationSubscription] =
          DisposableRef_create(Disposable_disposed);
        instance[BufferObserver_maxBufferSize] = maxBufferSize;

        pipe(
          instance,
          Disposable_onComplete(() => {
            const { [BufferObserver_buffer]: buffer } = instance;
            instance[BufferObserver_buffer] = [];

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
        [BufferObserver_buffer]: none,
        [BufferObserver_durationFunction]: none,
        [BufferObserver_durationSubscription]: none,
        [BufferObserver_maxBufferSize]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            ObserverLike<T> &
            DelegatingLike<ObserverLike<readonly T[]>>,
          next: T,
        ) {
          const {
            [BufferObserver_buffer]: buffer,
            [BufferObserver_maxBufferSize]: maxBufferSize,
          } = this;

          buffer.push(next);

          const doOnNotify = () => {
            this[BufferObserver_durationSubscription][MutableRefLike_current] =
              Disposable_disposed;

            const buffer = this[BufferObserver_buffer];
            this[BufferObserver_buffer] = [];

            this[DelegatingLike_delegate][SinkLike_notify](buffer);
          };

          if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
          } else if (
            Disposable_isDisposed(
              this[BufferObserver_durationSubscription][MutableRefLike_current],
            )
          ) {
            this[BufferObserver_durationSubscription][MutableRefLike_current] =
              pipe(
                next,
                this[BufferObserver_durationFunction],
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
        ? (_: T) => Observable_never()
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
