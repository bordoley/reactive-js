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
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Exception,
  SinkLike,
  SinkLike_notify,
} from "../../util";
import { addTo, dispose, onComplete } from "../../util/DisposableLike";
import { notify } from "../../util/SinkLike";
import {
  delegatingDisposableMixin,
  disposableMixin,
} from "../util/DisposableLikeMixins";
import {
  Class1,
  Class2,
  Class3,
  MixinTypeOf,
  Object_properties,
  PropertyTypeOf,
  __extends,
  clazz,
  createObjectFactory,
  init,
} from "./Object";

const Sink_private_delegate = Symbol("Sink_private_delegate");

export const createSink: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  pipe(
    clazz(
      __extends(disposableMixin),
      function CreateSink(
        this: PropertyTypeOf<[typeof disposableMixin]> & SinkLike<T>,
      ) {
        init(disposableMixin, this);
        return this;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
    createObjectFactory<SinkLike<T>>(),
  ))();

export const DelegatingSink_delegate = Symbol("DelegatingSink_delegate");

export const delegatingSinkMixin: <T>() => Class1<
  SinkLike<T>,
  SinkLike<T>,
  {
    [DelegatingSink_delegate]: SinkLike<T>;
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [DelegatingSink_delegate]: SinkLike<T>;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return returns(
    clazz<
      MixinTypeOf<typeof disposableMixin>,
      (this: TProperties & SinkLike<T>, delegate: SinkLike<T>) => SinkLike<T>,
      SinkLike<T>,
      TProperties,
      {
        [SinkLike_notify](this: TProperties, v: T): void;
      }
    >(
      __extends(disposableMixin),
      function DelegatingSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
      ) {
        init(disposableMixin, this);
        this[DelegatingSink_delegate] = delegate;
        return this;
      },
      {
        ...disposableMixin[Object_properties],
        [DelegatingSink_delegate]: none,
      },
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

    return pipe(
      typeDelegatingSinkMixin,
      createObjectFactory<SinkLike<T>, SinkLike<T>>(),
    );
  })();

export const bufferSinkMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromArray: (v: readonly T[][]) => C,
) => Class2<
  TSink,
  number,
  SinkLike<T>,
  {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = <
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
    [Sink_private_delegate]: TSink;
    [BufferSink_private_maxBufferSize]: number;
    [BufferSink_private_buffer]: T[];
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return clazz(
    __extends(disposableMixin),
    function BufferSink(
      this: TProperties & SinkLike<T>,
      delegate: TSink,
      maxBufferSize: number,
    ) {
      init(disposableMixin, this);
      this[Sink_private_delegate] = delegate;
      this[BufferSink_private_maxBufferSize] = maxBufferSize;
      this[BufferSink_private_buffer] = [];

      pipe(
        this,
        addTo(delegate),
        onComplete(() => {
          const { [BufferSink_private_buffer]: buffer } = this;
          this[BufferSink_private_buffer] = [];

          if (isEmpty(buffer)) {
            pipe(this[Sink_private_delegate], dispose());
          } else {
            pipe(
              [buffer],
              fromArray,
              sinkInto<C, TSink, readonly T[]>(this[Sink_private_delegate]),
            );
          }
        }),
      );

      return this;
    },
    {
      [Sink_private_delegate]: none,
      [BufferSink_private_maxBufferSize]: 0,
      [BufferSink_private_buffer]: none,
    },
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
) => Class2<
  SinkLike<string>,
  string,
  SinkLike<ArrayBuffer>,
  {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: ArrayBuffer): void;
  }
> = <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(
  fromArray: (v: readonly string[]) => C,
) => {
  const DecodeWithCharsetSink_private_textDecoder = Symbol(
    "DecodeWithCharsetSink_private_textDecoder",
  );

  type TProperties = {
    [Sink_private_delegate]: SinkLike<string>;
    [DecodeWithCharsetSink_private_textDecoder]: TextDecoder;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return clazz(
    __extends(disposableMixin),
    function DecodeWithCharsetSink(
      this: TProperties & SinkLike<ArrayBuffer>,
      delegate: SinkLike<string>,
      charset: string,
    ) {
      init(disposableMixin, this);
      this[Sink_private_delegate] = delegate;

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      this[DecodeWithCharsetSink_private_textDecoder] = textDecoder;

      pipe(
        this,
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

      return this;
    },
    {
      [Sink_private_delegate]: none,
      [DecodeWithCharsetSink_private_textDecoder]: none,
    },
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

export const distinctUntilChangedSinkMixin: <T>() => Class2<
  SinkLike<T>,
  Equality<T>,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
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
    [Sink_private_delegate]: SinkLike<T>;
    [DistinctUntilChangedSink_private_equality]: Equality<T>;
    [DistinctUntilChangedSink_private_prev]: T;
    [DistinctUntilChangedSink_private_hasValue]: boolean;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function DistinctUntilChangedSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[DistinctUntilChangedSink_private_equality] = equality;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
      },
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

export const forEachSinkMixin: <T>() => Class2<
  SinkLike<T>,
  SideEffect1<T>,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [ForEachSink_private_effect]: SideEffect1<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function ForEachSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        effect: SideEffect1<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[ForEachSink_private_effect] = effect;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [ForEachSink_private_effect]: none,
      },
      {
        [SinkLike_notify](this: TProperties, next: T) {
          this[ForEachSink_private_effect](next);
          pipe(this[Sink_private_delegate], notify(next));
        },
      },
    ),
  );
})();

export const keepSinkMixin: <T>() => Class2<
  SinkLike<T>,
  Predicate<T>,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [KeepSink_private_predicate]: Predicate<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function KeepSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[KeepSink_private_predicate] = predicate;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [KeepSink_private_predicate]: none,
      },
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

export const mapSinkMixin: <TA, TB>() => Class2<
  SinkLike<TB>,
  Function1<TA, TB>,
  SinkLike<TA>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: TA): void;
  }
> = /*@__PURE__*/ (<TA, TB>() => {
  const MapSink_private_mapper = Symbol("MapSink_private_mapper");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<TB>;
    [MapSink_private_mapper]: Function1<TA, TB>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function MapSink(
        this: TProperties & SinkLike<TA>,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[MapSink_private_mapper] = mapper;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [MapSink_private_mapper]: none,
      },
      {
        [SinkLike_notify](this: TProperties, next: TA) {
          const mapped = this[MapSink_private_mapper](next);
          pipe(this[Sink_private_delegate], notify(mapped));
        },
      },
    ),
  );
})();

export const pairwiseSinkMixin: <T>() => Class1<
  SinkLike<readonly [T, T]>,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const PairwiseSink_private_prev = Symbol("PairwiseSink_private_prev");
  const PairwiseSink_private_hasPrev = Symbol("PairwiseSink_private_hasPrev");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<readonly [T, T]>;
    [PairwiseSink_private_prev]: T;
    [PairwiseSink_private_hasPrev]: boolean;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function PairwiseSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<readonly [T, T]>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [PairwiseSink_private_prev]: none,
        [PairwiseSink_private_hasPrev]: false,
      },
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
) => Class3<
  TSink,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  SinkLike<T>,
  {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = <
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
    [Sink_private_delegate]: TSink;
    [ReduceSink_private_reducer]: Reducer<T, TAcc>;
    [ReduceSink_private_acc]: TAcc;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return clazz(
    __extends(disposableMixin),
    function ReduceSink(
      this: TProperties & SinkLike<T>,
      delegate: TSink,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ) {
      init(disposableMixin, this);
      this[Sink_private_delegate] = delegate;
      this[ReduceSink_private_reducer] = reducer;

      try {
        const acc = initialValue();
        this[ReduceSink_private_acc] = acc;
      } catch (cause) {
        pipe(this, dispose({ cause }));
      }

      pipe(
        this,
        addTo(delegate),
        onComplete(() => {
          pipe(
            [this[ReduceSink_private_acc]],
            fromArray,
            sinkInto<C, TSink, TAcc>(delegate),
          );
        }),
      );

      return this;
    },
    {
      [Sink_private_delegate]: none,
      [ReduceSink_private_reducer]: none,
      [ReduceSink_private_acc]: none,
    },
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

export const scanSinkMixin: <T, TAcc>() => Class3<
  SinkLike<TAcc>,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
  const ScanSink_private_acc = Symbol("ScanSink_private_acc");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<TAcc>;
    [ScanSink_private_reducer]: Reducer<T, TAcc>;
    [ScanSink_private_acc]: TAcc;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function ScanSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[ScanSink_private_reducer] = reducer;

        try {
          const acc = initialValue();
          this[ScanSink_private_acc] = acc;
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
      },
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

export const skipFirstSinkMixin: <T>() => Class2<
  SinkLike<T>,
  number,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const SkipFirstSink_private_skipCount = Symbol(
    "SkipFirstSink_private_skipCount",
  );

  const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [SkipFirstSink_private_skipCount]: number;
    [SkipFirstSink_private_count]: number;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function SkipFirstSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        skipCount: number,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[SkipFirstSink_private_skipCount] = skipCount;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [SkipFirstSink_private_skipCount]: 0,
        [SkipFirstSink_private_count]: 0,
      },
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

export const takeFirstSinkMixin: <T>() => Class2<
  SinkLike<T>,
  number,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const TakeFirstSink_private_takeCount = Symbol(
    "TakeFirstSink_private_takeCount",
  );

  const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [TakeFirstSink_private_takeCount]: number;
    [TakeFirstSink_private_count]: number;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz<
      MixinTypeOf<typeof delegatingDisposableMixin>,
      (
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        takeCount: number,
      ) => SinkLike<T>,
      SinkLike<T>,
      TProperties,
      {
        [SinkLike_notify](this: TProperties, v: T): void;
      }
    >(
      __extends(delegatingDisposableMixin),
      function TakeFirstSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        takeCount: number,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[TakeFirstSink_private_takeCount] = takeCount;

        return this;
      },
      {
        ...delegatingDisposableMixin[Object_properties],
        [Sink_private_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
      },
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
) => Class2<
  TSink,
  number,
  SinkLike<T>,
  {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
  fromArray: (v: readonly T[]) => C,
) => {
  const TakeLastSink_private_takeLastCount = Symbol(
    "TakeLastSink_private_takeLastCount",
  );

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [TakeLastSink_private_takeLastCount]: number;
    [TakeLastSink_last]: T[];
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return clazz(
    __extends(disposableMixin),
    function TakeLastSink(
      this: TProperties & SinkLike<T>,
      delegate: TSink,
      takeLastCount: number,
    ) {
      init(disposableMixin, this);
      this[Sink_private_delegate] = delegate;
      this[TakeLastSink_private_takeLastCount] = takeLastCount;
      this[TakeLastSink_last] = [];

      pipe(
        this,
        addTo(delegate),
        onComplete(() => {
          pipe(this[TakeLastSink_last], fromArray, sinkInto(delegate));
        }),
      );

      return this;
    },
    {
      [Sink_private_delegate]: none,
      [TakeLastSink_private_takeLastCount]: 0,
      [TakeLastSink_last]: none,
    },
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

export const takeWhileSinkMixin: <T>() => Class3<
  SinkLike<T>,
  Predicate<T>,
  boolean,
  SinkLike<T>,
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const TakeWhileSink_private_predicate = Symbol(
    "TakeWhileSink_private_predicate",
  );
  const TakeWhileSink_private_inclusive = Symbol(
    "TakeWhileSink_private_inclusive",
  );

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [TakeWhileSink_private_predicate]: Predicate<T>;
    [TakeWhileSink_private_inclusive]: boolean;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return returns(
    clazz(
      __extends(delegatingDisposableMixin),
      function TakeWhileSink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[TakeWhileSink_private_predicate] = predicate;
        this[TakeWhileSink_private_inclusive] = inclusive;

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
      },
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

export const throwIfEmptySinkMixin: <T>() => Class2<
  SinkLike<T>,
  Factory<unknown>,
  SinkLike<T>,
  {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
  }
> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptySink_private_isEmpty = Symbol(
    "ThrowIfEmptySink_private_isEmpty",
  );

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [ThrowIfEmptySink_private_isEmpty]: boolean;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return returns(
    clazz(
      __extends(disposableMixin),
      function ThrowIfEmptySink(
        this: TProperties & SinkLike<T>,
        delegate: SinkLike<T>,
        factory: Factory<unknown>,
      ) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;

        pipe(
          this,
          addTo(delegate),
          onComplete(() => {
            let error: Option<Exception> = none;

            if (this[ThrowIfEmptySink_private_isEmpty]) {
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

        return this;
      },
      {
        [Sink_private_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
      },
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          this[ThrowIfEmptySink_private_isEmpty] = false;
          pipe(this[Sink_private_delegate], notify(next));
        },
      },
    ),
  );
})();
