import {
  ComputationBaseOf,
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationOf,
  ComputationOfModule,
  ComputationOperatorWithSideEffects,
  ComputationType,
  ComputationWithSideEffectsLike,
  ConcurrentDeferredComputationModule,
  ConcurrentReactiveComputationModule,
  DeferredComputationLike,
  DeferredComputationOf,
  DeferredComputationOfModule,
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  DeferredComputationWithSideEffectsOf,
  HigherOrderComputationOperator,
  HigherOrderInnerComputationLike,
  HigherOrderInnerComputationOf,
  IterableLike,
  IterableWithSideEffectsLike,
  MulticastComputationLike,
  MulticastComputationOf,
  MulticastComputationOfModule,
  NewPureInstanceOf,
  PickComputationModule,
  PureAsynchronousComputationOperator,
  PureComputationLike,
  PureComputationOperator,
  PureDeferredComputationLike,
  PureDeferredComputationOf,
  PureIterableLike,
  PureSynchronousComputationLike,
  PureSynchronousComputationOf,
  SequentialComputationModule,
  SynchronousComputationLike,
  SynchronousComputationOf,
  SynchronousComputationWithSideEffectsLike,
  SynchronousComputationWithSideEffectsOf,
} from "../computations.js";
import {
  Factory,
  Function1,
  raise as Functions_raise,
  TypePredicate,
  Updater,
  alwaysFalse,
  bindMethod,
  debug as breakPoint,
  compose,
  log as consoleLog,
  error,
  memoize,
  pickUnsafe,
  pipe,
  returns,
} from "../functions.js";
import { DisposableLike, ListenerLike_notify, SinkLike } from "../utils.js";

export interface ConcatManyOperator<TComputationType extends ComputationType> {
  <T>(
    computations: readonly PureSynchronousComputationOf<TComputationType, T>[],
  ): PureSynchronousComputationOf<TComputationType, T>;
  <T>(
    computations: readonly SynchronousComputationOf<TComputationType, T>[],
  ): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
  <T>(
    computations: readonly PureDeferredComputationOf<TComputationType, T>[],
  ): PureDeferredComputationOf<TComputationType, T>;
  <T>(
    computations: readonly DeferredComputationOf<TComputationType, T>[],
  ): DeferredComputationWithSideEffectsOf<TComputationType, T>;
}

export interface FlatMapOperator<
  TComputationType extends ComputationType,
  TFlattenKey extends string | number | symbol,
> {
  <TA, TB>(
    key: TFlattenKey,
    selector: Function1<TA, PureSynchronousComputationOf<TComputationType, TB>>,
  ): HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    TA,
    TB
  >;

  <TA, TB, TInnerLike extends HigherOrderInnerComputationLike>(
    key: TFlattenKey,
    selector: Function1<
      TA,
      HigherOrderInnerComputationOf<TComputationType, TInnerLike, TB>
    >,
    options?: {
      readonly innerType: TInnerLike;
    },
  ): HigherOrderComputationOperator<TComputationType, TInnerLike, TA, TB>;
}

export interface FlatMapIterableOperator<
  TComputationType extends ComputationType,
  TFlattenKey extends string | number | symbol,
> {
  <TA, TB>(
    key: TFlattenKey,
    selector: Function1<TA, PureIterableLike<TB>>,
  ): HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    TA,
    TB
  >;
  <TA, TB>(
    key: TFlattenKey,
    selector: Function1<TA, PureIterableLike<TB>>,
    options: {
      readonly innerType: PureSynchronousComputationLike;
    },
  ): HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    TA,
    TB
  >;
}

export interface ConcatMapOperator<TComputationType extends ComputationType> {
  <TA, TB>(
    selector: Function1<TA, PureSynchronousComputationOf<TComputationType, TB>>,
  ): HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    TA,
    TB
  >;

  <TA, TB, TInnerLike extends HigherOrderInnerComputationLike>(
    selector: Function1<
      TA,
      HigherOrderInnerComputationOf<TComputationType, TInnerLike, TB>
    >,
    options?: {
      readonly innerType: TInnerLike;
    },
  ): HigherOrderComputationOperator<TComputationType, TInnerLike, TA, TB>;
}

export interface ConcatMapIterableOperator<
  TComputationType extends ComputationType,
> {
  <TA, TB>(
    selector: Function1<TA, PureIterableLike<TB>>,
  ): HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    TA,
    TB
  >;
  <TA, TB>(
    selector: Function1<TA, PureIterableLike<TB>>,
    options: {
      readonly innerType: PureSynchronousComputationLike;
    },
  ): HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    TA,
    TB
  >;
}

export interface ConcatWithOperator<TComputationType extends ComputationType> {
  <T>(
    snd: PureSynchronousComputationOf<TComputationType, T>,
    ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]
  ): PureComputationOperator<TComputationType, T, T>;
  <T>(
    snd: SynchronousComputationOf<TComputationType, T>,
    ...tail: readonly SynchronousComputationOf<TComputationType, T>[]
  ): ComputationOperatorWithSideEffects<TComputationType, T, T>;
  <T>(
    snd: PureDeferredComputationOf<TComputationType, T>,
    ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]
  ): PureAsynchronousComputationOperator<TComputationType, T, T>;
  <T>(
    snd: DeferredComputationOf<TComputationType, T>,
    ...tail: readonly DeferredComputationOf<TComputationType, T>[]
  ): Function1<
    DeferredComputationOf<TComputationType, T>,
    DeferredComputationWithSideEffectsOf<TComputationType, T>
  >;
}

// prettier-ignore
export type FromIterableOperator<
  TComputationType extends ComputationType,
  T,
> = <TIterable extends IterableLike<T>>(
  iterable: TIterable,
) => TIterable extends PureIterableLike ? (
  PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType,T> ? 
    PureSynchronousComputationOf<TComputationType, T> : 
  PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? 
    PureDeferredComputationOf<TComputationType, T> : 
    MulticastComputationOf<TComputationType, T> & DisposableLike
) : TIterable extends IterableWithSideEffectsLike ? (  
  SynchronousComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? 
    SynchronousComputationWithSideEffectsOf<TComputationType, T> : 
  DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? 
    DeferredComputationWithSideEffectsOf<TComputationType, T> :
    MulticastComputationOf<TComputationType, T> & DisposableLike
) : ComputationBaseOf<TComputationType, T> ;

export interface MergeManyOperator<TComputationType extends ComputationType> {
  <T>(
    computations: readonly PureSynchronousComputationOf<TComputationType, T>[],
  ): PureSynchronousComputationOf<TComputationType, T>;
  <T>(
    computations: readonly SynchronousComputationOf<TComputationType, T>[],
  ): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
  <T>(
    computations: readonly PureDeferredComputationOf<TComputationType, T>[],
  ): PureDeferredComputationOf<TComputationType, T>;
  <T>(
    computations: readonly DeferredComputationOf<TComputationType, T>[],
  ): DeferredComputationWithSideEffectsOf<TComputationType, T>;
  <T>(
    computations: readonly ComputationBaseOf<TComputationType, T>[],
  ): ComputationBaseOf<TComputationType, T>;
}

export interface MergeWithOperator<TComputationType extends ComputationType> {
  <T>(
    snd: PureSynchronousComputationOf<TComputationType, T>,
    ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]
  ): PureComputationOperator<TComputationType, T, T>;
  <T>(
    snd: SynchronousComputationOf<TComputationType, T>,
    ...tail: readonly SynchronousComputationOf<TComputationType, T>[]
  ): ComputationOperatorWithSideEffects<TComputationType, T, T>;
  <T>(
    snd: PureDeferredComputationOf<TComputationType, T>,
    ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]
  ): PureAsynchronousComputationOperator<TComputationType, T, T>;
  <T>(
    snd: DeferredComputationOf<TComputationType, T>,
    ...tail: readonly DeferredComputationOf<TComputationType, T>[]
  ): Function1<
    ComputationOf<TComputationType, T>,
    DeferredComputationWithSideEffectsOf<TComputationType, T>
  >;
  <T>(
    snd: MulticastComputationOf<TComputationType, T>,
    ...tail: readonly MulticastComputationOf<TComputationType, T>[]
  ): Function1<
    MulticastComputationOf<TComputationType, T>,
    MulticastComputationOf<TComputationType, T>
  >;

  <T>(
    snd: ComputationBaseOf<TComputationType, T>,
    ...tail: readonly ComputationBaseOf<TComputationType, T>[]
  ): Function1<
    ComputationBaseOf<TComputationType, T>,
    ComputationBaseOf<TComputationType, T>
  >;
}

export interface PickOperator<TComputationType extends ComputationType> {
  <T, TKeyOfT extends keyof T>(
    key: TKeyOfT,
  ): PureComputationOperator<TComputationType, T, T[TKeyOfT]>;
  <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
  ): PureComputationOperator<TComputationType, T, T[TKeyOfTA][TKeyOfTB]>;
  <
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
    TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB],
  >(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
    keyC: TKeyOfTC,
  ): PureComputationOperator<
    TComputationType,
    T,
    T[TKeyOfTA][TKeyOfTB][TKeyOfTC]
  >;
}

export type GeneratorOf<TComputationType extends ComputationType, T> =
  PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<
    TComputationType,
    T
  >
    ? PureSynchronousComputationOf<TComputationType, T>
    : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<
          TComputationType,
          T
        >
      ? PureDeferredComputationOf<TComputationType, T>
      : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<
            TComputationType,
            T
          >
        ? MulticastComputationOf<TComputationType, T> & DisposableLike
        : never;

export interface Signature {
  areAllDeferred<TComputationType extends ComputationLike>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & DeferredComputationLike)[];

  areAllMulticasted<TComputationType extends ComputationLike>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & MulticastComputationLike)[];

  areAllPure<TComputationType extends ComputationLike>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & PureComputationLike)[];

  areAllSynchronous<TComputationType extends ComputationLike>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & SynchronousComputationLike)[];

  concatMap<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType> &
        SequentialComputationModule<TComputationType>,
      "concatAll" | "map"
    >,
  ): ConcatMapOperator<TComputationType>;

  concatMapIterable<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType> &
        SequentialComputationModule<TComputationType>,
      "concatAll" | "map" | "gen" | "genPure"
    >,
  ): ConcatMapIterableOperator<TComputationType>;

  concatMany<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType>,
      "concat"
    >,
  ): ConcatManyOperator<TComputationType>;

  concatWith<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType>,
      "concat"
    >,
  ): ConcatWithOperator<TComputationType>;

  debug<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType>,
      "forEach"
    >,
  ): <T>() => ComputationOperatorWithSideEffects<TComputationType, T, T>;

  endWith<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType> &
        ComputationModule<TComputationType>,
      "concat" | "fromReadonlyArray"
    >,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => PureComputationOperator<TComputationType, T, T>;

  flatMap<
    TComputationType extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "map"
    > & {
      readonly [key in
        | TFlattenKey
        | string
        | symbol
        | number]: key extends TFlattenKey
        ? SequentialComputationModule<TComputationType>["concatAll"]
        : unknown;
    },
  ): FlatMapOperator<TComputationType, TFlattenKey>;

  flatMapAsync<
    TComputationType extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType> &
        ConcurrentDeferredComputationModule<TComputationType>,
      "map" | "fromAsyncFactory"
    > & {
      readonly [key in
        | TFlattenKey
        | string
        | symbol
        | number]: key extends TFlattenKey
        ? SequentialComputationModule<TComputationType>["concatAll"]
        : unknown;
    },
  ): <TA, TB>(
    key: TFlattenKey,
    selector: (a: TA, options?: { signal?: AbortSignal }) => Promise<TB>,
  ) => HigherOrderComputationOperator<
    TComputationType,
    DeferredComputationWithSideEffectsLike,
    TA,
    TB
  >;

  flatMapIterable<
    TComputationType extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "map" | "gen" | "genPure"
    > & {
      readonly [key in
        | TFlattenKey
        | string
        | symbol
        | number]: key extends TFlattenKey
        ? SequentialComputationModule<TComputationType>["concatAll"]
        : unknown;
    },
  ): FlatMapIterableOperator<TComputationType, TFlattenKey>;

  fromIterable<TComputationType extends ComputationType, T>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "gen" | "genPure"
    >,
    options?: Parameters<(typeof m)["gen"]>[1],
  ): FromIterableOperator<TComputationType, T>;

  generate<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "gen"
    >,
  ): <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: Parameters<(typeof m)["gen"]>[1],
  ) => GeneratorOf<TComputationType, T>;

  hasSideEffects<TComputationType extends ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & ComputationWithSideEffectsLike;

  ignoreElements<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "keep"
    >,
  ): <T>() => PureComputationOperator<TComputationType, any, T>;

  isDeferred<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & DeferredComputationLike;

  isDeferredWithSideEffects<
    TComputationType extends ComputationLike = ComputationLike,
  >(
    computation: TComputationType,
  ): computation is TComputationType & DeferredComputationWithSideEffectsLike;

  isMulticasted<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & MulticastComputationLike;

  isPure<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & PureComputationLike;

  isPureDeferred<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & PureDeferredComputationLike;

  isPureSynchronous<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & PureSynchronousComputationLike;

  isSynchronous<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & SynchronousComputationLike;

  isSynchronousWithSideEffects<
    TComputationType extends ComputationLike = ComputationLike,
  >(
    computation: TComputationType,
  ): computation is TComputationType &
    SynchronousComputationWithSideEffectsLike;

  keepType<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "keep"
    >,
  ): <TA, TB>(
    predicate: TypePredicate<TA, TB>,
  ) => PureComputationOperator<TComputationType, TA, TB>;

  log<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType>,
      "forEach"
    >,
  ): <T>() => ComputationOperatorWithSideEffects<TComputationType, T, T>;

  mapTo<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "map"
    >,
  ): <T>(value: T) => PureComputationOperator<TComputationType, unknown, T>;

  mergeMany<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ConcurrentReactiveComputationModule<TComputationType>,
      "merge"
    >,
  ): MergeManyOperator<TComputationType>;

  mergeWith<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ConcurrentReactiveComputationModule<TComputationType>,
      "merge"
    >,
  ): MergeWithOperator<TComputationType>;

  notify<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType>,
      "forEach"
    >,
  ): <T>(
    eventSink: SinkLike<T>,
  ) => ComputationOperatorWithSideEffects<TComputationType, T, T>;

  pick<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "map"
    >,
  ): PickOperator<TComputationType>;

  raise<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "genPure"
    >,
  ): <T>(
    options?: {
      readonly raise?: Factory<unknown>;
    } & Parameters<typeof m.genPure>[1],
  ) => NewPureInstanceOf<TComputationType, T>;

  startWith<TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      SequentialComputationModule<TComputationType> &
        ComputationModule<TComputationType>,
      "concat" | "fromReadonlyArray"
    >,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => PureComputationOperator<TComputationType, T, T>;
}

export const areAllDeferred: Signature["areAllDeferred"] = <
  TComputationType extends ComputationLike,
>(
  computations: readonly TComputationType[],
): computations is readonly (TComputationType & DeferredComputationLike)[] =>
  computations.every(isDeferred);

export const areAllMulticasted: Signature["areAllMulticasted"] = <
  TComputationType extends ComputationLike,
>(
  computations: readonly TComputationType[],
): computations is readonly (TComputationType & MulticastComputationLike)[] =>
  computations.every(isMulticasted);

export const areAllPure: Signature["areAllPure"] = <
  TComputationType extends ComputationLike,
>(
  computations: readonly TComputationType[],
): computations is readonly (TComputationType & PureComputationLike)[] =>
  computations.every(isPure);

export const areAllSynchronous: Signature["areAllSynchronous"] = <
  TComputationType extends ComputationLike,
>(
  computations: readonly TComputationType[],
): computations is readonly (TComputationType & SynchronousComputationLike)[] =>
  computations.every(isSynchronous);

export const concatMap: Signature["concatMap"] = /*@__PURE__*/ memoize(
  m => (selector, options) => flatMap(m)("concatAll", selector, options),
) as Signature["concatMap"];

export const concatMapIterable: Signature["concatMapIterable"] =
  /*@__PURE__*/
  (<TComputationType extends ComputationType>() =>
    memoize(
      (
        m: PickComputationModule<
          TComputationType,
          ComputationModule<TComputationType> &
            SequentialComputationModule<TComputationType>,
          "concatAll" | "map" | "gen" | "genPure"
        >,
      ) =>
        (selector, options) =>
          flatMapIterable<TComputationType, "concatAll">(m)(
            "concatAll",
            selector,
            options,
          ),
    ))() as Signature["concatMapIterable"];

export const concatMany: Signature["concatMany"] = /*@__PURE__*/ memoize(
  m =>
    <T>(computations: DeferredComputationOfModule<typeof m, T>[]) =>
      m.concat<T>(...computations),
) as Signature["concatMany"];

export const concatWith: Signature["concatWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...tail: DeferredComputationOfModule<typeof m, T>[]) =>
    (fst: DeferredComputationOfModule<typeof m, T>) =>
      m.concat(fst, ...tail),
) as Signature["concatWith"];

export const debug: Signature["debug"] = /*@__PURE__*/ memoize(m =>
  returns(m.forEach(breakPoint)),
);

export const endWith: Signature["endWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...values: readonly T[]) =>
      pipe(values, m.fromReadonlyArray<T>(), concatWith(m)),
) as Signature["endWith"];

export const flatMap: Signature["flatMap"] = /*@__PURE__*/ (<
  TComputationType extends ComputationType,
  TFlattenKey extends string | number | symbol,
>() =>
  memoize(
    (
      m: PickComputationModule<
        TComputationType,
        ComputationModule<TComputationType>,
        "map"
      > & {
        readonly [key in TFlattenKey]: SequentialComputationModule<TComputationType>["concatAll"];
      },
    ) =>
      <TA, TB, TInnerLike extends HigherOrderInnerComputationLike>(
        flatten: TFlattenKey,
        selector: Function1<
          TA,
          HigherOrderInnerComputationOf<TComputationType, TInnerLike, TB>
        >,
        options: {
          readonly innerType: TInnerLike;
        },
      ) =>
        compose(
          (x: ComputationOf<TComputationType, TA>) => x,
          m.map(selector),
          m[flatten]<TB, TInnerLike>(options),
        ),
  ))() as Signature["flatMap"];

export const flatMapAsync: Signature["flatMapAsync"] = /*@__PURE__*/ (<
  TComputationType extends ComputationType,
  TFlattenKey extends string | number | symbol,
>() =>
  memoize(
    (
      m: PickComputationModule<
        TComputationType,
        ComputationModule<TComputationType> &
          ConcurrentDeferredComputationModule<TComputationType>,
        "map" | "fromAsyncFactory"
      > & {
        readonly [key in
          | TFlattenKey
          | string
          | symbol
          | number]: key extends TFlattenKey
          ? SequentialComputationModule<TComputationType>["concatAll"]
          : unknown;
      },
    ) =>
      <TA, TB>(
        key: TFlattenKey,
        f: (a: TA, options?: { signal?: AbortSignal }) => Promise<TB>,
      ) => {
        const mapper = (a: TA) =>
          pipe(
            (options?: { signal?: AbortSignal }) => f(a, options),
            m.fromAsyncFactory(),
          );

        return flatMap<TComputationType, TFlattenKey>(m)(key, mapper, {
          innerType: DeferredComputationWithSideEffects,
        });
      },
  ))() as Signature["flatMapAsync"];

export const flatMapIterable: Signature["flatMapIterable"] = /*@__PURE__*/ (<
  TComputationType extends ComputationType,
  TFlattenKey extends string | number | symbol,
>() =>
  memoize(
    (
      m: PickComputationModule<
        TComputationType,
        ComputationModule<TComputationType>,
        "map" | "gen" | "genPure"
      > & {
        readonly [key in
          | TFlattenKey
          | string
          | symbol
          | number]: key extends TFlattenKey
          ? SequentialComputationModule<TComputationType>["concatAll"]
          : unknown;
      },
    ) =>
      (key: TFlattenKey, selector, options) => {
        const mapper = compose(selector, fromIterable(m));
        return flatMap<TComputationType, TFlattenKey>(m)(key, mapper, options);
      },
  ))() as Signature["flatMapIterable"];

export const fromIterable: Signature["fromIterable"] = (<
    TComputationType extends ComputationType,
    T,
  >(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "gen" | "genPure"
    >,
    options?: any, //FIXME: for now
  ) =>
  // FIXME: Memoize if no options
  (iterable: IterableLike<T>) => {
    const gen = isPure(iterable) ? m.genPure : m.gen;

    return gen(function* FromIterable() {
      yield* iterable;
    }, options);
  }) as Signature["fromIterable"];

export const generate: Signature["generate"] =
  <TComputationType extends ComputationType>(
    m: PickComputationModule<
      TComputationType,
      ComputationModule<TComputationType>,
      "gen"
    >,
  ) =>
  <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: Parameters<(typeof m)["gen"]>[1],
  ) =>
    m.gen(function* Generate() {
      let acc = initialValue();
      while (true) {
        const prevAcc = acc;
        acc = generator(prevAcc);
        yield acc;
      }
    }, options);

export const hasSideEffects: Signature["hasSideEffects"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & ComputationWithSideEffectsLike =>
  !(computation[ComputationLike_isPure] ?? true);

export const ignoreElements: Signature["ignoreElements"] =
  /*@__PURE__*/ memoize(m =>
    returns(m.keep(alwaysFalse)),
  ) as Signature["ignoreElements"];

export const isDeferred: Signature["isDeferred"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & DeferredComputationLike =>
  computation[ComputationLike_isDeferred] ?? true;

export const isDeferredWithSideEffects: Signature["isDeferredWithSideEffects"] =
  <TComputationType extends ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & DeferredComputationWithSideEffectsLike =>
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);

export const isMulticasted: Signature["isMulticasted"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & MulticastComputationLike =>
  !(computation[ComputationLike_isDeferred] ?? true) &&
  (computation[ComputationLike_isPure] ?? true) &&
  !(computation[ComputationLike_isSynchronous] ?? true);

export const isPure: Signature["isPure"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & PureComputationLike =>
  computation[ComputationLike_isPure] ?? true;

export const isPureDeferred: Signature["isPureDeferred"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & PureDeferredComputationLike =>
  (computation[ComputationLike_isPure] ?? true) &&
  (computation[ComputationLike_isDeferred] ?? true);

export const isPureSynchronous: Signature["isPureSynchronous"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & PureSynchronousComputationLike =>
  (computation[ComputationLike_isPure] ?? true) &&
  (computation[ComputationLike_isSynchronous] ?? true);

export const isSynchronous: Signature["isSynchronous"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & SynchronousComputationLike =>
  computation[ComputationLike_isSynchronous] ?? true;

export const isSynchronousWithSideEffects: Signature["isSynchronousWithSideEffects"] =
  <TComputationType extends ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType &
    SynchronousComputationWithSideEffectsLike =>
    (computation[ComputationLike_isSynchronous] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);

export const keepType: Signature["keepType"] = /*@__PURE__*/ memoize(
  m =>
    <TA, TB>(predicate: TypePredicate<TA, TB>) =>
      m.keep(predicate),
) as Signature["keepType"];

export const log: Signature["log"] = /*@__PURE__*/ memoize(m =>
  returns(m.forEach(consoleLog)),
);

export const mapTo: Signature["mapTo"] = /*@__PURE__*/ memoize(
  m =>
    <T>(v: T) =>
      m.map(returns(v)),
);

export const mergeMany: Signature["mergeMany"] = /*@__PURE__*/ memoize(
  m =>
    <T>(computations: MulticastComputationOfModule<typeof m, T>[]) =>
      m.merge<T>(...computations),
) as Signature["mergeMany"];

export const mergeWith: Signature["mergeWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...tail: ComputationOfModule<typeof m, T>[]) =>
    (fst: ComputationOfModule<typeof m, T>) =>
      m.merge<T>(fst, ...tail),
) as Signature["mergeWith"];

export const notify: Signature["notify"] = /*@__PURE__*/ memoize(
  m =>
    <T>(sink: SinkLike<T>) =>
      m.forEach(bindMethod(sink, ListenerLike_notify)),
);

export const pick: Signature["pick"] = /*@__PURE__*/ memoize(
  m =>
    (...keys: (string | number | symbol)[]) =>
      m.map(pickUnsafe(...keys)),
);

export const raise: Signature["raise"] = /*@__PURE__*/ memoize(
  m =>
    <T>(
      options?: {
        readonly raise?: Factory<unknown>;
      } & Parameters<typeof m.genPure>[1],
    ) =>
      m.genPure<T>(function* ComputationRaise() {
        const { raise: factory = Functions_raise } = options ?? {};
        pipe(factory, error, Functions_raise);
      }),
);

export const startWith: Signature["startWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...values: readonly T[]) =>
    (computation: DeferredComputationOfModule<typeof m, T>) =>
      pipe(m.fromReadonlyArray<T>()(values), concatWith(m)(computation)),
) as Signature["startWith"];
