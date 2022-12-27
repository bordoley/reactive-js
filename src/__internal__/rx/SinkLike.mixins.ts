import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  getLength,
  isEmpty,
  isSome,
  newInstance,
  none,
  pipe,
  returns,
} from "../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { notify } from "../../rx/SinkLike";
import { Exception } from "../../util";
import {
  addTo,
  addToIgnoringChildErrors,
  dispose,
  onComplete,
  onError,
} from "../../util/DisposableLike";
import DisposableLike__delegatingMixin from "../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__mixin from "../../util/__internal__/DisposableLike/DisposableLike.mixin";
import {
  Mixin1,
  Mixin2,
  Mixin3,
  Mutable,
  include,
  init,
  mixin,
  props,
} from "../mixins";

const Sink_private_delegate = Symbol("Sink_private_delegate");

export const bufferSinkMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromArray: (v: readonly T[][]) => C,
) => Mixin2<SinkLike<T>, TSink, number> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromArray: (v: readonly T[][]) => C,
) => {
  const BufferSink_private_maxBufferSize = Symbol(
    "BufferSink_private_maxBufferSize",
  );
  const BufferSink_private_buffer = Symbol("BufferSink_private_buffer");

  type TProperties = {
    readonly [Sink_private_delegate]: TSink;
    readonly [BufferSink_private_maxBufferSize]: number;
    [BufferSink_private_buffer]: T[];
  };

  return mixin(
    include(DisposableLike__mixin),
    function BufferSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      maxBufferSize: number,
    ): SinkLike<T> {
      init(DisposableLike__mixin, instance);

      instance[Sink_private_delegate] = delegate;
      instance[BufferSink_private_maxBufferSize] = maxBufferSize;
      instance[BufferSink_private_buffer] = [];

      pipe(
        instance,
        addTo(delegate),
        onComplete(() => {
          const { [BufferSink_private_buffer]: buffer } = instance;
          instance[BufferSink_private_buffer] = [];

          if (isEmpty(buffer)) {
            pipe(instance[Sink_private_delegate], dispose());
          } else {
            pipe(
              [buffer],
              fromArray,
              sinkInto<C, TSink, readonly T[]>(instance[Sink_private_delegate]),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [Sink_private_delegate]: none,
      [BufferSink_private_maxBufferSize]: 0,
      [BufferSink_private_buffer]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        const {
          [BufferSink_private_buffer]: buffer,
          [BufferSink_private_maxBufferSize]: maxBufferSize,
        } = this;

        buffer.push(next);

        if (getLength(buffer) === maxBufferSize) {
          const buffer = this[BufferSink_private_buffer];
          this[BufferSink_private_buffer] = [];

          pipe(this[Sink_private_delegate], notify(buffer));
        }
      },
    },
  );
};

export const catchErrorSinkMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>() => Mixin2<SinkLike<T>, SinkLike<T>, Function1<unknown, C | void>> =
  /*@__PURE__*/ (<
    C extends ReactiveContainerLike<TSink>,
    TSink extends SinkLike<T>,
    T,
  >() => {
    type TProperties = {
      readonly [Sink_private_delegate]: SinkLike<T>;
    };

    return returns(
      mixin(
        include(DisposableLike__mixin),
        function CatchErrorSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          errorHandler: Function1<unknown, C | void>,
        ): SinkLike<T> {
          init(DisposableLike__mixin, instance);

          instance[Sink_private_delegate] = delegate;

          pipe(
            instance,
            addToIgnoringChildErrors(delegate),
            onComplete(() => {
              pipe(delegate, dispose());
            }),
            onError((e: Exception) => {
              try {
                const result = errorHandler(e.cause) || none;
                if (isSome(result)) {
                  pipe(result, sinkInto(delegate));
                } else {
                  pipe(delegate, dispose());
                }
              } catch (cause) {
                pipe(delegate, dispose({ cause: { parent: e.cause, cause } }));
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [Sink_private_delegate]: none,
        }),
        {
          [SinkLike_notify](this: TProperties, next: T) {
            this[Sink_private_delegate][SinkLike_notify](next);
          },
        },
      ),
    );
  })();

export const decodeWithCharsetSinkMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<string>,
>(
  fromArray: (v: readonly string[]) => C,
) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<string>,
>(
  fromArray: (v: readonly string[]) => C,
) => {
  const DecodeWithCharsetSink_private_textDecoder = Symbol(
    "DecodeWithCharsetSink_private_textDecoder",
  );

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<string>;
    readonly [DecodeWithCharsetSink_private_textDecoder]: TextDecoder;
  };

  return mixin(
    include(DisposableLike__mixin),
    function DecodeWithCharsetSink(
      instance: Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: SinkLike<string>,
      charset: string,
    ): SinkLike<ArrayBuffer> {
      init(DisposableLike__mixin, instance);

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
      instance[Sink_private_delegate] = delegate;

      pipe(
        instance,
        addTo(delegate),
        onComplete(() => {
          const data = textDecoder.decode();

          if (!isEmpty(data)) {
            pipe([data], fromArray, sinkInto(delegate));
          } else {
            pipe(delegate, dispose());
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [Sink_private_delegate]: none,
      [DecodeWithCharsetSink_private_textDecoder]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: ArrayBuffer) {
        const data = this[DecodeWithCharsetSink_private_textDecoder].decode(
          next,
          { stream: true },
        );
        if (!isEmpty(data)) {
          pipe(this[Sink_private_delegate], notify(data));
        }
      },
    },
  );
};

export const distinctUntilChangedSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Equality<T>
> = /*@__PURE__*/ (<T>() => {
  const DistinctUntilChangedSink_private_equality = Symbol(
    "DistinctUntilChangedSink_private_equality",
  );
  const DistinctUntilChangedSink_private_prev = Symbol(
    "DistinctUntilChangedSink_private_prev",
  );
  const DistinctUntilChangedSink_private_hasValue = Symbol(
    "DistinctUntilChangedSink_private_hasValue",
  );

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [DistinctUntilChangedSink_private_equality]: Equality<T>;
    [DistinctUntilChangedSink_private_prev]: T;
    [DistinctUntilChangedSink_private_hasValue]: boolean;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function DistinctUntilChangedSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[DistinctUntilChangedSink_private_equality] = equality;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const shouldEmit =
            !this[DistinctUntilChangedSink_private_hasValue] ||
            !this[DistinctUntilChangedSink_private_equality](
              this[DistinctUntilChangedSink_private_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedSink_private_prev] = next;
            this[DistinctUntilChangedSink_private_hasValue] = true;
            pipe(this[Sink_private_delegate], notify(next));
          }
        },
      },
    ),
  );
})();


export const forEachSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  SideEffect1<T>
> = /*@__PURE__*/ (<T>() => {
  const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [ForEachSink_private_effect]: SideEffect1<T>;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function ForEachSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        effect: SideEffect1<T>,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[ForEachSink_private_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [ForEachSink_private_effect]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          this[ForEachSink_private_effect](next);
          pipe(this[Sink_private_delegate], notify(next));
        },
      },
    ),
  );
})();

export const keepSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>
> = /*@__PURE__*/ (<T>() => {
  const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [KeepSink_private_predicate]: Predicate<T>;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function KeepSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[KeepSink_private_predicate] = predicate;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [KeepSink_private_predicate]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          if (this[KeepSink_private_predicate](next)) {
            pipe(this[Sink_private_delegate], notify(next));
          }
        },
      },
    ),
  );
})();

export const mapSinkMixin: <TA, TB>() => Mixin2<
  SinkLike<TA>,
  SinkLike<TB>,
  Function1<TA, TB>
> = /*@__PURE__*/ (<TA, TB>() => {
  const MapSink_private_mapper = Symbol("MapSink_private_mapper");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<TB>;
    readonly [MapSink_private_mapper]: Function1<TA, TB>;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function MapSink(
        instance: Pick<SinkLike<TA>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ): SinkLike<TA> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[MapSink_private_mapper] = mapper;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [MapSink_private_mapper]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: TA) {
          const mapped = this[MapSink_private_mapper](next);
          pipe(this[Sink_private_delegate], notify(mapped));
        },
      },
    ),
  );
})();

export const pairwiseSinkMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<readonly [T, T]>
> = /*@__PURE__*/ (<T>() => {
  const PairwiseSink_private_prev = Symbol("PairwiseSink_private_prev");
  const PairwiseSink_private_hasPrev = Symbol("PairwiseSink_private_hasPrev");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<readonly [T, T]>;
    [PairwiseSink_private_prev]: T;
    [PairwiseSink_private_hasPrev]: boolean;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function PairwiseSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<readonly [T, T]>,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [PairwiseSink_private_prev]: none,
        [PairwiseSink_private_hasPrev]: false,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const prev = this[PairwiseSink_private_prev];

          if (this[PairwiseSink_private_hasPrev]) {
            pipe(
              this[Sink_private_delegate],
              notify<SinkLike<readonly [T, T]>, readonly [T, T]>([prev, next]),
            );
          }

          this[PairwiseSink_private_hasPrev] = true;
          this[PairwiseSink_private_prev] = next;
        },
      },
    ),
  );
})();

export const reduceSinkMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<TAcc>,
  T,
  TAcc,
>(
  fromArray: (v: readonly TAcc[]) => C,
) => Mixin3<SinkLike<T>, TSink, Reducer<T, TAcc>, Factory<TAcc>> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<TAcc>,
  T,
  TAcc,
>(
  fromArray: (v: readonly TAcc[]) => C,
) => {
  const ReduceSink_private_reducer = Symbol("ReduceSink_private_reducer");
  const ReduceSink_private_acc = Symbol("ReduceSink_private_acc");

  type TProperties = {
    readonly [Sink_private_delegate]: TSink;
    readonly [ReduceSink_private_reducer]: Reducer<T, TAcc>;
    [ReduceSink_private_acc]: TAcc;
  };

  return mixin(
    include(DisposableLike__mixin),
    function ReduceSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): SinkLike<T> {
      init(DisposableLike__mixin, instance);

      instance[Sink_private_delegate] = delegate;
      instance[ReduceSink_private_reducer] = reducer;

      try {
        const acc = initialValue();
        instance[ReduceSink_private_acc] = acc;
      } catch (cause) {
        pipe(instance, dispose({ cause }));
      }

      pipe(
        instance,
        addTo(delegate),
        onComplete(() => {
          pipe(
            [instance[ReduceSink_private_acc]],
            fromArray,
            sinkInto<C, TSink, TAcc>(delegate),
          );
        }),
      );

      return instance;
    },
    props<TProperties>({
      [Sink_private_delegate]: none,
      [ReduceSink_private_reducer]: none,
      [ReduceSink_private_acc]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        const nextAcc = this[ReduceSink_private_reducer](
          this[ReduceSink_private_acc],
          next,
        );
        this[ReduceSink_private_acc] = nextAcc;
      },
    },
  );
};

export const scanSinkMixin: <T, TAcc>() => Mixin3<
  SinkLike<T>,
  SinkLike<TAcc>,
  Reducer<T, TAcc>,
  Factory<TAcc>
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
  const ScanSink_private_acc = Symbol("ScanSink_private_acc");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<TAcc>;
    readonly [ScanSink_private_reducer]: Reducer<T, TAcc>;
    [ScanSink_private_acc]: TAcc;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function ScanSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[ScanSink_private_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ScanSink_private_acc] = acc;
        } catch (cause) {
          pipe(instance, dispose({ cause }));
        }

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const nextAcc = this[ScanSink_private_reducer](
            this[ScanSink_private_acc],
            next,
          );
          this[ScanSink_private_acc] = nextAcc;
          pipe(this[Sink_private_delegate], notify(nextAcc));
        },
      },
    ),
  );
})();

export const skipFirstSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  const SkipFirstSink_private_skipCount = Symbol(
    "SkipFirstSink_private_skipCount",
  );

  const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [SkipFirstSink_private_skipCount]: number;
    [SkipFirstSink_private_count]: number;
  };

  return returns(
    mixin(
      include(DisposableLike__delegatingMixin),
      function SkipFirstSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        skipCount: number,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[SkipFirstSink_private_skipCount] = skipCount;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [SkipFirstSink_private_skipCount]: 0,
        [SkipFirstSink_private_count]: 0,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          this[SkipFirstSink_private_count]++;
          if (
            this[SkipFirstSink_private_count] >
            this[SkipFirstSink_private_skipCount]
          ) {
            pipe(this[Sink_private_delegate], notify(next));
          }
        },
      },
    ),
  );
})();
