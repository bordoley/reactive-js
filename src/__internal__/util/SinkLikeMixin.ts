import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  getLength,
  none,
  pipe,
  returns,
} from "../../functions";
import { SinkLike, SinkLike_notify } from "../../util";
import { notify } from "../../util/SinkLike";
import {
  delegatingDisposableMixin,
  disposableMixin,
} from "../util/DisposableLikeMixins";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Error,
  dispose,
} from "./DisposableLikeInternal";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "./Object";

const Sink_private_delegate = Symbol("Sink_private_delegate");

export const createSink: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  pipe(
    {
      [Object_properties]: {},
      [Object_init](this: PropertyTypeOf<[typeof disposableMixin]>) {
        init(disposableMixin, this);
      },
      [SinkLike_notify](_: T) {},
    },
    mixWith(disposableMixin),
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof disposableMixin]>
    >(),
  ))();

export const distinctUntilChangedSinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<T>,
    equality: Equality<T>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
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
    [DistinctUntilChangedSink_private_prev]: Option<T>;
    [DistinctUntilChangedSink_private_hasValue]: boolean;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[DistinctUntilChangedSink_private_equality] = equality;
      },
      [SinkLike_notify](this: TProperties, next: T) {
        const shouldEmit =
          !this[DistinctUntilChangedSink_private_hasValue] ||
          !this[DistinctUntilChangedSink_private_equality](
            this[DistinctUntilChangedSink_private_prev] as T,
            next,
          );

        if (shouldEmit) {
          this[DistinctUntilChangedSink_private_prev] = next;
          this[DistinctUntilChangedSink_private_hasValue] = true;
          pipe(this[Sink_private_delegate], notify(next));
        }
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const keepSinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<T>,
    predicate: Predicate<T>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [KeepSink_private_predicate]: Predicate<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [KeepSink_private_predicate]: none,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[KeepSink_private_predicate] = predicate;
      },
      [SinkLike_notify](this: TProperties, next: T) {
        if (this[KeepSink_private_predicate](next)) {
          pipe(this[Sink_private_delegate], notify(next));
        }
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const mapSinkMixin: <TA, TB>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<TB>,
    mapper: Function1<TA, TB>,
  ): void;
  [SinkLike_notify](next: TA): void;
} = /*@__PURE__*/ (<TA, TB>() => {
  const MapSink_private_mapper = Symbol("MapSink_private_mapper");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<TB>;
    [MapSink_private_mapper]: Function1<TA, TB>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none as any,
        mapper: none as any,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[MapSink_private_mapper] = mapper;
      },
      [SinkLike_notify](this: TProperties, next: TA) {
        const mapped = this[MapSink_private_mapper](next);
        pipe(this[Sink_private_delegate], notify(mapped));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const onNotifySinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<T>,
    monNotify: SideEffect1<T>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const OnNotifySink_private_onNotify = Symbol("OnNotifySink_private_onNotify");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [OnNotifySink_private_onNotify]: SideEffect1<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [OnNotifySink_private_onNotify]: none,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        onNotify: SideEffect1<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[OnNotifySink_private_onNotify] = onNotify;
      },
      [SinkLike_notify](this: TProperties, next: T) {
        this[OnNotifySink_private_onNotify](next);
        pipe(this[Sink_private_delegate], notify(next));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const scanSinkMixin: <T, TAcc>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
  const ScanSink_private_acc = Symbol("ScanSink_private_acc");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<TAcc>;
    [ScanSink_private_reducer]: Reducer<T, TAcc>;
    [ScanSink_private_acc]: TAcc;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
      },
      [Object_init](
        this: TProperties & DisposableLike,
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
      },
      [SinkLike_notify](this: TProperties, next: T) {
        const nextAcc = this[ScanSink_private_reducer](
          this[ScanSink_private_acc],
          next,
        );
        this[ScanSink_private_acc] = nextAcc;
        pipe(this[Sink_private_delegate], notify(nextAcc));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const skipFirstSinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](this: unknown, delegate: SinkLike<T>, skipCount: number): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const SkipFirstSink_private_skipCount = Symbol(
    "SkipFirstSink_private_skipCount",
  );

  const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [SkipFirstSink_private_skipCount]: number;
    [SkipFirstSink_private_count]: number;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [SkipFirstSink_private_skipCount]: 0,
        [SkipFirstSink_private_count]: 0,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        skipCount: number,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[SkipFirstSink_private_skipCount] = skipCount;
      },
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
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const takeFirstSinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](this: unknown, delegate: SinkLike<T>, skipCount: number): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const TakeFirstSink_private_takeCount = Symbol(
    "TakeFirstSink_private_takeCount",
  );

  const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [TakeFirstSink_private_takeCount]: number;
    [TakeFirstSink_private_count]: number;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        takeCount: number,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[TakeFirstSink_private_takeCount] = takeCount;
      },
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
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const TakeLastSink_last = Symbol("TakeLastSink_last");

export const takeLastSinkMixin: <T>() => {
  [Object_properties]: {
    readonly [TakeLastSink_last]: readonly T[];
    [DisposableLike_error]: Option<Error>;
    [DisposableLike_isDisposed]: boolean;
  };
  [Object_init](
    this: {
      readonly [TakeLastSink_last]: readonly T[];
      [DisposableLike_error]: Option<Error>;
      [DisposableLike_isDisposed]: boolean;
    },
    delegate: SinkLike<T>,
    takeLastCount: number,
  ): void;
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;
  [DisposableLike_dispose](error?: Error): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const TakeLastSink_private_takeLastCount = Symbol(
    "TakeLastSink_private_takeLastCount",
  );

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [TakeLastSink_private_takeLastCount]: number;
    [TakeLastSink_last]: T[];
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [TakeLastSink_private_takeLastCount]: 0,
        [TakeLastSink_last]: none as any,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        takeLastCount: number,
      ) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;
        this[TakeLastSink_private_takeLastCount] = takeLastCount;
        this[TakeLastSink_last] = [];
      },
      [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
        const { [TakeLastSink_last]: last } = this;

        last.push(next);

        if (getLength(last) > this[TakeLastSink_private_takeLastCount]) {
          last.shift();
        }
      },
    },
    mixWith(disposableMixin),
    returns,
  );
})();

export const takeWhileSinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
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

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
      },
      [Object_init](
        this: TProperties & DisposableLike,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[TakeWhileSink_private_predicate] = predicate;
        this[TakeWhileSink_private_inclusive] = inclusive;
      },
      [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
        const satisfiesPredicate = this[TakeWhileSink_private_predicate](next);

        if (satisfiesPredicate || this[TakeWhileSink_private_inclusive]) {
          pipe(this[Sink_private_delegate], notify(next));
        }

        if (!satisfiesPredicate) {
          pipe(this, dispose());
        }
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();
