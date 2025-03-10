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
  ConcurrentReactiveComputationModule,
  DeferredComputationLike,
  DeferredComputationModule,
  DeferredComputationOf,
  DeferredComputationOfModule,
  DeferredComputationWithSideEffectsLike,
  DeferredComputationWithSideEffectsOf,
  HigherOrderComputationOperator,
  HigherOrderInnerComputationLike,
  HigherOrderInnerComputationOf,
  MulticastComputationLike,
  MulticastComputationOf,
  MulticastComputationOfModule,
  PickComputationModule,
  PureComputationLike,
  PureDeferredComputationLike,
  PureDeferredComputationOf,
  PureIterableLike,
  PureSynchronousComputationLike,
  PureSynchronousComputationOf,
  StatefulAsynchronousComputationOperator,
  StatefulSynchronousComputationOperator,
  StatelessComputationOperator,
  SynchronousComputationLike,
  SynchronousComputationOf,
  SynchronousComputationWithSideEffectsLike,
  SynchronousComputationWithSideEffectsOf,
} from "../computations.js";
import {
  Function1,
  TypePredicate,
  alwaysFalse,
  bindMethod,
  debug as breakPoint,
  compose,
  log as consoleLog,
  memoize,
  pickUnsafe,
  pipe,
  returns,
} from "../functions.js";
import { increment } from "../math.js";
import { EventListenerLike, EventListenerLike_notify } from "../utils.js";

export interface ConcatManyOperator<TComputation extends ComputationType> {
  <T>(
    computations: readonly PureSynchronousComputationOf<TComputation, T>[],
  ): PureSynchronousComputationOf<TComputation, T>;
  <T>(
    computations: readonly SynchronousComputationOf<TComputation, T>[],
  ): SynchronousComputationWithSideEffectsOf<TComputation, T>;
  <T>(
    computations: readonly PureDeferredComputationOf<TComputation, T>[],
  ): PureDeferredComputationOf<TComputation, T>;
  <T>(
    computations: readonly DeferredComputationOf<TComputation, T>[],
  ): DeferredComputationWithSideEffectsOf<TComputation, T>;
}

export interface FlatMapOperator<
  TComputation extends ComputationType,
  TFlattenKey extends string | number | symbol,
> {
  <TA, TB>(
    key: TFlattenKey,
    selector: Function1<TA, PureSynchronousComputationOf<TComputation, TB>>,
  ): HigherOrderComputationOperator<
    TComputation,
    PureSynchronousComputationLike,
    TA,
    TB
  >;

  <TA, TB, TInnerType extends HigherOrderInnerComputationLike>(
    key: TFlattenKey,
    selector: Function1<
      TA,
      HigherOrderInnerComputationOf<TComputation, TInnerType, TB>
    >,
    options?: {
      readonly innerType: TInnerType;
    },
  ): HigherOrderComputationOperator<TComputation, TInnerType, TA, TB>;
}

export interface FlatMapIterableOperator<
  TComputation extends ComputationType,
  TFlattenKey extends string | number | symbol,
> {
  <TA, TB>(
    key: TFlattenKey,
    selector: Function1<TA, PureIterableLike<TB>>,
  ): HigherOrderComputationOperator<
    TComputation,
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
    TComputation,
    PureSynchronousComputationLike,
    TA,
    TB
  >;
}

export interface ConcatMapOperator<TComputation extends ComputationType> {
  <TA, TB>(
    selector: Function1<TA, PureSynchronousComputationOf<TComputation, TB>>,
  ): HigherOrderComputationOperator<
    TComputation,
    PureSynchronousComputationLike,
    TA,
    TB
  >;

  <TA, TB, TInnerType extends HigherOrderInnerComputationLike>(
    selector: Function1<
      TA,
      HigherOrderInnerComputationOf<TComputation, TInnerType, TB>
    >,
    options?: {
      readonly innerType: TInnerType;
    },
  ): HigherOrderComputationOperator<TComputation, TInnerType, TA, TB>;
}

export interface ConcatMapIterableOperator<
  TComputation extends ComputationType,
> {
  <TA, TB>(
    selector: Function1<TA, PureIterableLike<TB>>,
  ): HigherOrderComputationOperator<
    TComputation,
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
    TComputation,
    PureSynchronousComputationLike,
    TA,
    TB
  >;
}

export interface ConcatWithOperator<TComputation extends ComputationType> {
  <T>(
    snd: PureSynchronousComputationOf<TComputation, T>,
    ...tail: readonly PureSynchronousComputationOf<TComputation, T>[]
  ): StatelessComputationOperator<TComputation, T, T>;
  <T>(
    snd: SynchronousComputationOf<TComputation, T>,
    ...tail: readonly SynchronousComputationOf<TComputation, T>[]
  ): ComputationOperatorWithSideEffects<TComputation, T, T>;
  <T>(
    snd: PureDeferredComputationOf<TComputation, T>,
    ...tail: readonly PureDeferredComputationOf<TComputation, T>[]
  ): StatefulAsynchronousComputationOperator<TComputation, T, T>;
  <T>(
    snd: DeferredComputationOf<TComputation, T>,
    ...tail: readonly DeferredComputationOf<TComputation, T>[]
  ): Function1<
    DeferredComputationOf<TComputation, T>,
    DeferredComputationWithSideEffectsOf<TComputation, T>
  >;
}

export interface MergeManyOperator<TComputation extends ComputationType> {
  <T>(
    computations: readonly PureSynchronousComputationOf<TComputation, T>[],
  ): PureSynchronousComputationOf<TComputation, T>;
  <T>(
    computations: readonly SynchronousComputationOf<TComputation, T>[],
  ): SynchronousComputationWithSideEffectsOf<TComputation, T>;
  <T>(
    computations: readonly PureDeferredComputationOf<TComputation, T>[],
  ): PureDeferredComputationOf<TComputation, T>;
  <T>(
    computations: readonly DeferredComputationOf<TComputation, T>[],
  ): DeferredComputationWithSideEffectsOf<TComputation, T>;
  <T>(
    computations: readonly ComputationBaseOf<TComputation, T>[],
  ): ComputationBaseOf<TComputation, T>;
}

export interface MergeWithOperator<TComputation extends ComputationType> {
  <T>(
    snd: PureSynchronousComputationOf<TComputation, T>,
    ...tail: readonly PureSynchronousComputationOf<TComputation, T>[]
  ): StatefulSynchronousComputationOperator<TComputation, T, T>;
  <T>(
    snd: SynchronousComputationOf<TComputation, T>,
    ...tail: readonly SynchronousComputationOf<TComputation, T>[]
  ): ComputationOperatorWithSideEffects<TComputation, T, T>;
  <T>(
    snd: PureDeferredComputationOf<TComputation, T>,
    ...tail: readonly PureDeferredComputationOf<TComputation, T>[]
  ): StatefulAsynchronousComputationOperator<TComputation, T, T>;
  <T>(
    snd: DeferredComputationOf<TComputation, T>,
    ...tail: readonly DeferredComputationOf<TComputation, T>[]
  ): Function1<
    ComputationOf<TComputation, T>,
    DeferredComputationWithSideEffectsOf<TComputation, T>
  >;
  <T>(
    snd: MulticastComputationOf<TComputation, T>,
    ...tail: readonly MulticastComputationOf<TComputation, T>[]
  ): Function1<
    MulticastComputationOf<TComputation, T>,
    MulticastComputationOf<TComputation, T>
  >;

  <T>(
    snd: ComputationBaseOf<TComputation, T>,
    ...tail: readonly ComputationBaseOf<TComputation, T>[]
  ): Function1<
    ComputationBaseOf<TComputation, T>,
    ComputationBaseOf<TComputation, T>
  >;
}

export interface PickOperator<TComputation extends ComputationType> {
  <T, TKeyOfT extends keyof T>(
    key: TKeyOfT,
  ): StatelessComputationOperator<TComputation, T, T[TKeyOfT]>;
  <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
  ): StatelessComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
  <
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
    TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB],
  >(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
    keyC: TKeyOfTC,
  ): StatelessComputationOperator<
    TComputation,
    T,
    T[TKeyOfTA][TKeyOfTB][TKeyOfTC]
  >;
}

export interface Signature {
  areAllDeferred<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & DeferredComputationLike)[];

  areAllMulticasted<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & MulticastComputationLike)[];

  areAllPure<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & PureComputationLike)[];

  areAllSynchronous<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & SynchronousComputationLike)[];

  concatMap<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation> & DeferredComputationModule<TComputation>,
      "concatAll" | "map"
    >,
  ): ConcatMapOperator<TComputation>;

  concatMapIterable<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation> & DeferredComputationModule<TComputation>,
      "concatAll" | "map" | "fromIterable"
    >,
  ): ConcatMapIterableOperator<TComputation>;

  concatMany<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "concat"
    >,
  ): ConcatManyOperator<TComputation>;

  concatWith<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "concat"
    >,
  ): ConcatWithOperator<TComputation>;

  debug<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "forEach"
    >,
  ): <T>() => ComputationOperatorWithSideEffects<TComputation, T, T>;

  endWith<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "concat" | "fromReadonlyArray"
    >,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => StatelessComputationOperator<TComputation, T, T>;

  flatMap<
    TComputation extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "map"
    > & {
      readonly [key in
        | TFlattenKey
        | string
        | symbol
        | number]: key extends TFlattenKey
        ? DeferredComputationModule<TComputation>["concatAll"]
        : unknown;
    },
  ): FlatMapOperator<TComputation, TFlattenKey>;

  flatMapIterable<
    TComputation extends ComputationType,
    TFlattenKey extends string | number | symbol,
    TModule extends PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "map" | "fromIterable"
    > & {
      readonly [key in
        | TFlattenKey
        | string
        | symbol
        | number]: key extends TFlattenKey
        ? DeferredComputationModule<TComputation>["concatAll"]
        : unknown;
    },
  >(
    m: TModule,
  ): FlatMapIterableOperator<TComputation, TFlattenKey>;

  hasSideEffects<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & ComputationWithSideEffectsLike;

  ignoreElements<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "keep"
    >,
  ): <T>() => StatelessComputationOperator<TComputation, any, T>;

  isDeferred<TComputation extends ComputationLike = ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & DeferredComputationLike;

  isDeferredWithSideEffects<
    TComputation extends ComputationLike = ComputationLike,
  >(
    computation: TComputation,
  ): computation is TComputation & DeferredComputationWithSideEffectsLike;

  isMulticasted<TComputation extends ComputationLike = ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & MulticastComputationLike;

  isPure<TComputation extends ComputationLike = ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureComputationLike;

  isPureDeferred<TComputation extends ComputationLike = ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureDeferredComputationLike;

  isPureSynchronous<TComputation extends ComputationLike = ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureSynchronousComputationLike;

  isSynchronous<TComputation extends ComputationLike = ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationLike;

  isSynchronousWithSideEffects<
    TComputation extends ComputationLike = ComputationLike,
  >(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationWithSideEffectsLike;

  keepType<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "keep"
    >,
  ): <TA, TB>(
    predicate: TypePredicate<TA, TB>,
  ) => StatelessComputationOperator<TComputation, TA, TB>;

  log<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "forEach"
    >,
  ): <T>() => ComputationOperatorWithSideEffects<TComputation, T, T>;

  mapTo<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "map"
    >,
  ): <T>(value: T) => StatelessComputationOperator<TComputation, unknown, T>;

  mergeMany<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ConcurrentReactiveComputationModule<TComputation>,
      "merge"
    >,
  ): MergeManyOperator<TComputation>;

  mergeWith<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ConcurrentReactiveComputationModule<TComputation>,
      "merge"
    >,
  ): MergeWithOperator<TComputation>;

  notify<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "forEach"
    >,
  ): <T>(
    eventListener: EventListenerLike<T>,
  ) => ComputationOperatorWithSideEffects<TComputation, T, T>;

  pick<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "map"
    >,
  ): PickOperator<TComputation>;

  sequence<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      ComputationModule<TComputation>,
      "generate"
    >,
  ): (start: number) => ComputationBaseOf<TComputation, number>;

  startWith<TComputation extends ComputationType>(
    m: PickComputationModule<
      TComputation,
      DeferredComputationModule<TComputation>,
      "concat" | "fromReadonlyArray"
    >,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => StatelessComputationOperator<TComputation, T, T>;
}

export const areAllDeferred: Signature["areAllDeferred"] = <
  TComputation extends ComputationLike,
>(
  computations: readonly TComputation[],
): computations is readonly (TComputation & DeferredComputationLike)[] =>
  computations.every(isDeferred);

export const areAllMulticasted: Signature["areAllMulticasted"] = <
  TComputation extends ComputationLike,
>(
  computations: readonly TComputation[],
): computations is readonly (TComputation & MulticastComputationLike)[] =>
  computations.every(isMulticasted);

export const areAllPure: Signature["areAllPure"] = <
  TComputation extends ComputationLike,
>(
  computations: readonly TComputation[],
): computations is readonly (TComputation & PureComputationLike)[] =>
  computations.every(isPure);

export const areAllSynchronous: Signature["areAllSynchronous"] = <
  TComputation extends ComputationLike,
>(
  computations: readonly TComputation[],
): computations is readonly (TComputation & SynchronousComputationLike)[] =>
  computations.every(isSynchronous);

export const concatMap: Signature["concatMap"] = /*@__PURE__*/ memoize(
  m => (selector, options) => flatMap(m)("concatAll", selector, options),
) as Signature["concatMap"];

export const concatMapIterable: Signature["concatMapIterable"] =
  /*@__PURE__*/
  (<TComputation extends ComputationType>() =>
    memoize(
      (
        m: PickComputationModule<
          TComputation,
          ComputationModule<TComputation> &
            DeferredComputationModule<TComputation>,
          "concatAll" | "map" | "fromIterable"
        >,
      ) =>
        (selector, options) =>
          flatMapIterable<TComputation, "concatAll", typeof m>(m)(
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

export const debug: Signature["debug"] = /*@__PURE__*/ memoize(
  m => () => m.forEach(breakPoint),
);

export const endWith: Signature["endWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...values: readonly T[]) =>
      concatWith(m)(m.fromReadonlyArray<T>()(values)),
) as Signature["endWith"];

export const flatMap: Signature["flatMap"] = /*@__PURE__*/ (<
  TComputation extends ComputationType,
  TFlattenKey extends string | number | symbol,
>() =>
  memoize(
    (
      m: PickComputationModule<
        TComputation,
        ComputationModule<TComputation>,
        "map"
      > & {
        readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
      },
    ) =>
      <TA, TB, TInnerType extends HigherOrderInnerComputationLike>(
        flatten: TFlattenKey,
        selector: Function1<
          TA,
          HigherOrderInnerComputationOf<TComputation, TInnerType, TB>
        >,
        options: {
          readonly innerType: TInnerType;
        },
      ) =>
        compose(
          (x: ComputationOf<TComputation, TA>) => x,
          m.map(selector),
          m[flatten]<TB, TInnerType>(options),
        ),
  ))() as Signature["flatMap"];

export const flatMapIterable: Signature["flatMapIterable"] = /*@__PURE__*/ (<
  TComputation extends ComputationType,
  TFlattenKey extends string | number | symbol,
>() =>
  memoize(
    (
      m: PickComputationModule<
        TComputation,
        ComputationModule<TComputation>,
        "map" | "fromIterable"
      > & {
        readonly [key in
          | TFlattenKey
          | string
          | symbol
          | number]: key extends TFlattenKey
          ? DeferredComputationModule<TComputation>["concatAll"]
          : unknown;
      },
    ) =>
      (key: TFlattenKey, selector, options) => {
        const mapper = compose(selector, m.fromIterable());
        return flatMap<TComputation, TFlattenKey>(m)(key, mapper, options);
      },
  ))() as Signature["flatMapIterable"];

export const hasSideEffects: Signature["hasSideEffects"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & ComputationWithSideEffectsLike =>
  !(computation[ComputationLike_isPure] ?? true);

export const ignoreElements: Signature["ignoreElements"] =
  /*@__PURE__*/ memoize(
    m => () => m.keep(alwaysFalse),
  ) as Signature["ignoreElements"];

export const isDeferred: Signature["isDeferred"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & DeferredComputationLike =>
  computation[ComputationLike_isDeferred] ?? true;

export const isDeferredWithSideEffects: Signature["isDeferredWithSideEffects"] =
  <TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & DeferredComputationWithSideEffectsLike =>
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);

export const isMulticasted: Signature["isMulticasted"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & MulticastComputationLike =>
  !(computation[ComputationLike_isDeferred] ?? true) &&
  (computation[ComputationLike_isPure] ?? true) &&
  !(computation[ComputationLike_isSynchronous] ?? true);

export const isPure: Signature["isPure"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & PureComputationLike =>
  computation[ComputationLike_isPure] ?? true;

export const isPureDeferred: Signature["isPureDeferred"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & PureDeferredComputationLike =>
  (computation[ComputationLike_isPure] ?? true) &&
  (computation[ComputationLike_isDeferred] ?? true);

export const isPureSynchronous: Signature["isPureSynchronous"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & PureSynchronousComputationLike =>
  (computation[ComputationLike_isPure] ?? true) &&
  (computation[ComputationLike_isDeferred] ?? true) &&
  (computation[ComputationLike_isSynchronous] ?? true);

export const isSynchronous: Signature["isSynchronous"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & SynchronousComputationLike =>
  (computation[ComputationLike_isSynchronous] ?? true) &&
  (computation[ComputationLike_isDeferred] ?? true);

export const isSynchronousWithSideEffects: Signature["isSynchronousWithSideEffects"] =
  <TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationWithSideEffectsLike =>
    (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);

export const keepType: Signature["keepType"] = /*@__PURE__*/ memoize(
  m =>
    <TA, TB>(predicate: TypePredicate<TA, TB>) =>
      m.keep(predicate),
) as Signature["keepType"];

export const log: Signature["log"] = /*@__PURE__*/ memoize(
  m => () => m.forEach(consoleLog),
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
    <T>(eventListener: EventListenerLike<T>) =>
      m.forEach(bindMethod(eventListener, EventListenerLike_notify)),
);

export const pick: Signature["pick"] = /*@__PURE__*/ memoize(
  m =>
    (...keys: (string | number | symbol)[]) =>
      m.map(pickUnsafe(...keys)),
);

export const sequence: Signature["sequence"] = /*@__PURE__*/ memoize(
  m => (start: number) => m.generate<number>(increment, returns(start - 1)),
);

export const startWith: Signature["startWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...values: readonly T[]) =>
    (computation: DeferredComputationOfModule<typeof m, T>) =>
      pipe(m.fromReadonlyArray<T>()(values), concatWith(m)(computation)),
) as Signature["startWith"];
