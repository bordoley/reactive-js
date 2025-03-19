import {
  Mixin3,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ProducerLike,
  SourceLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import {
  Optional,
  Predicate,
  alwaysTrue,
  isFunction,
  isNone,
  none,
  raise,
  returns,
} from "../../../functions.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import { LiftedListenerLike_delegate } from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
  LiftedSinkLike_isDelegateCompleted,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { ConsumerLike, ObserverLike, SinkLike } from "../../../utils.js";

export const LiftedRepeatListenerLike_createRepeatSink = Symbol(
  "LiftedRepeatListenerLike_createRepeatSink",
);

export interface LiftedRepeatSinkLike<
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
  TSource extends SourceLike<T> = SourceLike<T>,
> extends LiftedSinkLike<T, T, TDelegateSink> {
  [LiftedRepeatListenerLike_createRepeatSink](
    delegate: TDelegateSink,
    source: TSource,
    shouldRepeat: Predicate<number> | number,
    startCount: number,
  ): LiftedRepeatSinkLike<T, TDelegateSink, TSource>;
}

const RepeatMixin: <
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
  TSource extends SourceLike<T> = SourceLike<T>,
>() => Mixin3<
  LiftedRepeatSinkLike<T, TDelegateSink, TSource>,
  TSource,
  Optional<Predicate<number> | number>,
  number,
  LiftedRepeatSinkLike<T, TDelegateSink, TSource>
> = /*@__PURE__*/ (<
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
  TSource extends SourceLike<T> = SourceLike<T>,
>() => {
  const RepeatMixin_repeatPredicate = Symbol("RepeatMixin_repeatPredicate");
  const RepeatMixin_count = Symbol("RepeatMixin_count");
  const RepeatMixin_source = Symbol("RepeatMixin_source");

  type TProperties = {
    [RepeatMixin_source]: TSource;
    [RepeatMixin_repeatPredicate]: Predicate<number>;
    [RepeatMixin_count]: number;
  };

  return returns(
    mix<
      LiftedRepeatSinkLike<T, TDelegateSink, TSource>,
      TProperties,
      Pick<
        LiftedRepeatSinkLike<T, TDelegateSink, TSource>,
        | typeof LiftedSinkLike_complete
        | typeof LiftedRepeatListenerLike_createRepeatSink
      >,
      LiftedRepeatSinkLike<T, TDelegateSink, TSource>,
      TSource,
      Optional<Predicate<number> | number>,
      number
    >(
      function RepeatMixin(
        this: LiftedRepeatSinkLike<T, TDelegateSink, TSource> & TProperties,
        source: TSource,
        shouldRepeat: Optional<Predicate<number> | number>,
        startCount: number,
      ): LiftedRepeatSinkLike<T, TDelegateSink, TSource> {
        const repeatPredicate = isFunction(shouldRepeat)
          ? shouldRepeat
          : isNone(shouldRepeat)
            ? alwaysTrue
            : (count: number) => count < shouldRepeat;

        this[RepeatMixin_source] = source;
        this[RepeatMixin_repeatPredicate] = repeatPredicate;
        this[RepeatMixin_count] = startCount;

        return this;
      },
      props<TProperties>({
        [RepeatMixin_source]: none,
        [RepeatMixin_repeatPredicate]: none,
        [RepeatMixin_count]: 0,
      }),
      {
        [LiftedSinkLike_complete](
          this: TProperties & LiftedRepeatSinkLike<T, TDelegateSink, TSource>,
        ) {
          const repeatPredicate = this[RepeatMixin_repeatPredicate];
          const count = this[RepeatMixin_count] + 1;
          const delegateIsCompleted = this[LiftedSinkLike_isDelegateCompleted];
          const shouldRepeat = !delegateIsCompleted && repeatPredicate(count);

          if (shouldRepeat) {
            const delegate = this[LiftedListenerLike_delegate];
            const src = this[RepeatMixin_source];
            const sink = this[LiftedRepeatListenerLike_createRepeatSink](
              delegate,
              src,
              repeatPredicate,
              count,
            );
            src[SourceLike_subscribe](sink);
          } else {
            this[LiftedSinkLike_completeDelegate]();
          }
        },
        [LiftedRepeatListenerLike_createRepeatSink](
          this: TProperties & LiftedRepeatSinkLike<T, TDelegateSink, TSource>,
          _delegate: TDelegateSink,
          _source: TSource,
          _shouldRepeat: Predicate<number> | number,
          _startCount: number,
        ) {
          return raise<LiftedRepeatSinkLike<T, TDelegateSink, TSource>>(
            "unimplemented",
          );
        },
      },
    ),
  );
})();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  source: ProducerLike<T>,
  shouldRepeat: Optional<Predicate<number> | number>,
  startCount: number,
) => LiftedRepeatSinkLike<T, ConsumerLike<T>, ProducerLike<T>> &
  ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), RepeatMixin()),
    function RepeatConsumer(
      this: Pick<
        LiftedRepeatSinkLike<T, ConsumerLike<T>, ProducerLike<T>>,
        typeof LiftedRepeatListenerLike_createRepeatSink
      >,
      delegate: ConsumerLike<T>,
      source: ProducerLike<T>,
      shouldRepeat: Optional<Predicate<number> | number>,
      startCount: number,
    ): LiftedRepeatSinkLike<T, ConsumerLike<T>, ProducerLike<T>> &
      ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(
        RepeatMixin<T, ConsumerLike<T>, ProducerLike<T>>(),
        this,
        source,
        shouldRepeat,
        startCount,
      );

      return this;
    },
    props(),
    proto({
      [LiftedRepeatListenerLike_createRepeatSink](
        this: LiftedRepeatSinkLike<T, ConsumerLike<T>, ProducerLike<T>>,
        delegate: ConsumerLike<T>,
        source: ProducerLike<T>,
        shouldRepeat: Predicate<number> | number,
        startCount: number,
      ) {
        return createConsumer(delegate, source, shouldRepeat, startCount);
      },
    }),
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  source: ObservableLike<T>,
  shouldRepeat: Optional<Predicate<number> | number>,
  startCount: number,
) => LiftedRepeatSinkLike<T, ObserverLike<T>, ObservableLike<T>> &
  ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), RepeatMixin()),
    function RepeatObserver(
      this: Pick<
        LiftedRepeatSinkLike<T, ObserverLike<T>, ObservableLike<T>>,
        typeof LiftedRepeatListenerLike_createRepeatSink
      >,
      delegate: ObserverLike<T>,
      source: ObservableLike<T>,
      shouldRepeat: Optional<Predicate<number> | number>,
      startCount: number,
    ): LiftedRepeatSinkLike<T, ObserverLike<T>, ObservableLike<T>> &
      ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(
        RepeatMixin<T, ObserverLike<T>, ObservableLike<T>>(),
        this,
        source,
        shouldRepeat,
        startCount,
      );

      return this;
    },
    props(),
    proto({
      [LiftedRepeatListenerLike_createRepeatSink](
        this: LiftedRepeatSinkLike<T, ObserverLike<T>, ObservableLike<T>>,
        delegate: ObserverLike<T>,
        source: ObservableLike<T>,
        shouldRepeat: Predicate<number> | number,
        startCount: number,
      ) {
        return createObserver(delegate, source, shouldRepeat, startCount);
      },
    }),
  ))();
