import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
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
} from "../../../__internal__/mixins.js";
import {
  BufferObserver_buffer,
  BufferObserver_count,
  BufferObserver_durationFunction,
  BufferObserver_durationSubscription,
} from "../../../__internal__/symbols.js";
import {
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Function1, invoke, isNumber, none, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_never from "./Observable.never.js";
import Observable_subscribeWithDispatcherConfig from "./Observable.subscribeWithDispatcherConfig.js";

type ObservableBuffer = <C extends ObservableLike, T>(options?: {
  readonly duration?: number | Function1<T, C>;
  readonly count?: number;
}) => ContainerOperator<C, T, readonly T[]>;

const Observable_buffer: ObservableBuffer = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = Observer_mixin<T>();

  type TProperties = {
    [BufferObserver_buffer]: T[];
    readonly [BufferObserver_durationFunction]: Function1<T, ObservableLike>;
    readonly [BufferObserver_durationSubscription]: SerialDisposableLike;
    readonly [BufferObserver_count]: number;
  };

  const createBufferObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable_mixin, delegatingMixin()),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        count: number,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(
          typedObserverMixin,
          instance,
          delegate[DispatcherLike_scheduler],
          delegate[QueueableLike_capacity],
          delegate[QueueableLike_backpressureStrategy],
        );
        init(delegatingMixin(), instance, delegate);

        instance[BufferObserver_buffer] = [];
        instance[BufferObserver_durationFunction] = durationFunction;
        instance[BufferObserver_durationSubscription] =
          SerialDisposable_create(Disposable_disposed);
        instance[BufferObserver_count] = count;

        pipe(
          instance,
          Disposable_onComplete(() => {
            const { [BufferObserver_buffer]: buffer } = instance;
            instance[BufferObserver_buffer] = [];

            if (ReadonlyArray_isEmpty(buffer)) {
              delegate[DisposableLike_dispose]();
            } else {
              pipe(
                buffer,
                Optional_toObservable(),
                invoke(ObservableLike_observe, delegate),
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
        [BufferObserver_count]: 0,
      }),
      {
        [ObserverLike_notify](
          this: TProperties &
            ObserverLike<T> &
            DelegatingLike<ObserverLike<readonly T[]>>,
          next: T,
        ) {
          Observer_assertState(this);

          const {
            [BufferObserver_buffer]: buffer,
            [BufferObserver_count]: count,
          } = this;

          buffer.push(next);

          const doOnNotify = () => {
            this[BufferObserver_durationSubscription][
              SerialDisposableLike_current
            ] = Disposable_disposed;

            const buffer = this[BufferObserver_buffer];
            this[BufferObserver_buffer] = [];

            this[DelegatingLike_delegate][ObserverLike_notify](buffer);
          };

          if (ReadonlyArray_getLength(buffer) === count) {
            doOnNotify();
          } else if (
            this[BufferObserver_durationSubscription][
              SerialDisposableLike_current
            ][DisposableLike_isDisposed]
          ) {
            this[BufferObserver_durationSubscription][
              SerialDisposableLike_current
            ] = pipe(
              next,
              this[BufferObserver_durationFunction],
              Observable_forEach<ObservableLike>(doOnNotify),
              Observable_subscribeWithDispatcherConfig(this),
            );
          }
        },
      },
    ),
  );

  return ((
    options: {
      readonly duration?: Function1<T, ObservableLike> | number;
      readonly count?: number;
    } = {},
  ) => {
    const durationOption = options.duration ?? MAX_SAFE_INTEGER;
    const durationFunction =
      durationOption === MAX_SAFE_INTEGER
        ? (_: T) => Observable_never()
        : isNumber(durationOption)
        ? (_: T) =>
            pipe(
              [none],
              ReadonlyArray_toObservable({
                delay: clampPositiveNonZeroInteger(durationOption),
              }),
            )
        : durationOption;

    const count = clampPositiveNonZeroInteger(
      options?.count ?? MAX_SAFE_INTEGER,
    );

    const operator = (delegate: ObserverLike<readonly T[]>) => {
      return pipe(
        createBufferObserver(delegate, durationFunction, count),
        Disposable_addTo(delegate),
      );
    };

    return pipe(
      operator,
      Observable_lift(
        durationOption === MAX_SAFE_INTEGER,
        isNumber(durationOption),
      ),
    );
  }) as ObservableBuffer;
})();

export default Observable_buffer;
