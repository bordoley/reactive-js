import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  getLength,
  isEmpty,
  newInstance,
  none,
  pipe,
  returns,
} from "../../functions";
import { ReactiveContainerLike } from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  Exception,
  SinkLike,
  SinkLike_notify,
  SourceLike_move,
} from "../../util";
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../../util/DisposableLike";
import { notify } from "../../util/SinkLike";
import {
  delegatingDisposableMixin,
  disposableMixin,
} from "./__internal__Disposables";
import {
  Mixin1,
  Mixin2,
  Mixin3,
  Mutable,
  __extends,
  clazz,
  createInstanceFactory,
  init,
  props,
} from "./__internal__Objects";

const Sink_private_delegate = Symbol("Sink_private_delegate");

export const createEnumeratorSink: <T>() => EnumeratorLike<T> & SinkLike<T> = (<
  T,
>() => {
  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    readonly buffer: T[];
  };

  return createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function EnumeratorSink(
        instance: Pick<
          SinkLike<T> & EnumeratorLike<T>,
          typeof SinkLike_notify | typeof SourceLike_move
        > &
          Mutable<TProperties>,
      ): EnumeratorLike<T> & SinkLike<T> {
        init(disposableMixin, instance);

        instance.buffer = [];

        pipe(
          instance,
          onDisposed(() => {
            instance.buffer.length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
          }),
        );

        return instance;
      },
      props<TProperties>({
        buffer: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
      }),
      {
        [SinkLike_notify](this: DisposableLike & TProperties, next: T) {
          if (isDisposed(this)) {
            return;
          }
          this.buffer.push(next);
        },
        [SourceLike_move](this: DisposableLike & TProperties) {
          const { buffer } = this;

          if (!isDisposed(this) && getLength(buffer) > 0) {
            const next = buffer.shift() as T;
            this[EnumeratorLike_current] = next;
            this[EnumeratorLike_hasCurrent] = true;
          } else {
            this[EnumeratorLike_hasCurrent] = false;
          }
        },
      },
    ),
  );
})();

export const createSink: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function CreateSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify>,
      ): SinkLike<T> {
        init(disposableMixin, instance);

        return instance;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
  ))();

export const DelegatingSink_delegate = Symbol("DelegatingSink_delegate");

export interface DelegateSinkLike<T> extends SinkLike<T> {
  [DelegatingSink_delegate]: SinkLike<T>;
}

export const delegatingSinkMixin: <T>() => Mixin1<
  DelegateSinkLike<T>,
  SinkLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [DelegatingSink_delegate]: SinkLike<T>;
  };

  return returns(
    clazz(
      __extends(disposableMixin),
      function DelegatingSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
      ): DelegateSinkLike<T> {
        init(disposableMixin, instance);

        instance[DelegatingSink_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingSink_delegate]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, v: T) {
          this[DelegatingSink_delegate][SinkLike_notify](v);
        },
      },
    ),
  );
})();

export const createDelegatingSink: <T>(delegate: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typeDelegatingSinkMixin = delegatingSinkMixin<T>();

    return createInstanceFactory(typeDelegatingSinkMixin);
  })();

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

  return clazz(
    __extends(disposableMixin),
    function BufferSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      maxBufferSize: number,
    ): SinkLike<T> {
      init(disposableMixin, instance);

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

  return clazz(
    __extends(disposableMixin),
    function DecodeWithCharsetSink(
      instance: Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: SinkLike<string>,
      charset: string,
    ): SinkLike<ArrayBuffer> {
      init(disposableMixin, instance);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function DistinctUntilChangedSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function ForEachSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        effect: SideEffect1<T>,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function KeepSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function MapSink(
        instance: Pick<SinkLike<TA>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ): SinkLike<TA> {
        init(delegatingDisposableMixin, instance, delegate);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function PairwiseSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<readonly [T, T]>,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

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

  return clazz(
    __extends(disposableMixin),
    function ReduceSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): SinkLike<T> {
      init(disposableMixin, instance);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function ScanSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

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
    clazz(
      __extends(delegatingDisposableMixin),
      function SkipFirstSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        skipCount: number,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

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

export const takeFirstSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  const TakeFirstSink_private_takeCount = Symbol(
    "TakeFirstSink_private_takeCount",
  );

  const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [TakeFirstSink_private_takeCount]: number;
    [TakeFirstSink_private_count]: number;
  };

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function TakeFirstSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        takeCount: number,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[TakeFirstSink_private_takeCount] = takeCount;

        if (takeCount === 0) {
          pipe(instance, dispose());
        }

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
      }),
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          this[TakeFirstSink_private_count]++;
          pipe(this[Sink_private_delegate], notify(next));
          if (
            this[TakeFirstSink_private_count] >=
            this[TakeFirstSink_private_takeCount]
          ) {
            pipe(this, dispose());
          }
        },
      },
    ),
  );
})();

export const TakeLastSink_last = Symbol("TakeLastSink_last");

export const takeLastSinkMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  fromArray: (v: readonly T[]) => C,
) => Mixin2<SinkLike<T>, TSink, number> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  fromArray: (v: readonly T[]) => C,
) => {
  const TakeLastSink_private_takeLastCount = Symbol(
    "TakeLastSink_private_takeLastCount",
  );

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [TakeLastSink_private_takeLastCount]: number;
    readonly [TakeLastSink_last]: T[];
  };

  return clazz(
    __extends(disposableMixin),
    function TakeLastSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      takeLastCount: number,
    ): SinkLike<T> {
      init(disposableMixin, instance);

      instance[Sink_private_delegate] = delegate;
      instance[TakeLastSink_private_takeLastCount] = takeLastCount;
      instance[TakeLastSink_last] = [];

      pipe(
        instance,
        addTo(delegate),
        onComplete(() => {
          pipe(instance[TakeLastSink_last], fromArray, sinkInto(delegate));
        }),
      );

      return instance;
    },
    props<TProperties>({
      [Sink_private_delegate]: none,
      [TakeLastSink_private_takeLastCount]: 0,
      [TakeLastSink_last]: none,
    }),
    {
      [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
        const { [TakeLastSink_last]: last } = this;

        last.push(next);

        if (getLength(last) > this[TakeLastSink_private_takeLastCount]) {
          last.shift();
        }
      },
    },
  );
};

export const takeWhileSinkMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  boolean
> = /*@__PURE__*/ (<T>() => {
  const TakeWhileSink_private_predicate = Symbol(
    "TakeWhileSink_private_predicate",
  );
  const TakeWhileSink_private_inclusive = Symbol(
    "TakeWhileSink_private_inclusive",
  );

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    readonly [TakeWhileSink_private_predicate]: Predicate<T>;
    readonly [TakeWhileSink_private_inclusive]: boolean;
  };

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function TakeWhileSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): SinkLike<T> {
        init(delegatingDisposableMixin, instance, delegate);

        instance[Sink_private_delegate] = delegate;
        instance[TakeWhileSink_private_predicate] = predicate;
        instance[TakeWhileSink_private_inclusive] = inclusive;

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
      }),
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          const satisfiesPredicate =
            this[TakeWhileSink_private_predicate](next);

          if (satisfiesPredicate || this[TakeWhileSink_private_inclusive]) {
            pipe(this[Sink_private_delegate], notify(next));
          }

          if (!satisfiesPredicate) {
            pipe(this, dispose());
          }
        },
      },
    ),
  );
})();

export const throwIfEmptySinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Factory<unknown>
> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptySink_private_isEmpty = Symbol(
    "ThrowIfEmptySink_private_isEmpty",
  );

  type TProperties = {
    readonly [Sink_private_delegate]: SinkLike<T>;
    [ThrowIfEmptySink_private_isEmpty]: boolean;
  };

  return returns(
    clazz(
      __extends(disposableMixin),
      function ThrowIfEmptySink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        factory: Factory<unknown>,
      ): SinkLike<T> {
        init(disposableMixin, instance);

        instance[Sink_private_delegate] = delegate;

        pipe(
          instance,
          addTo(delegate),
          onComplete(() => {
            let error: Option<Exception> = none;

            if (instance[ThrowIfEmptySink_private_isEmpty]) {
              let cause: unknown = none;
              try {
                cause = factory();
              } catch (e) {
                cause = e;
              }

              error = { cause };
            }

            pipe(delegate, dispose(error));
          }),
        );

        return instance;
      },
      props<TProperties>({
        [Sink_private_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
      }),
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          this[ThrowIfEmptySink_private_isEmpty] = false;
          pipe(this[Sink_private_delegate], notify(next));
        },
      },
    ),
  );
})();
