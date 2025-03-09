import {
  ComputationBaseOf,
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationOf,
  ComputationOperatorWithSideEffects,
  ComputationType,
  ComputationWithSideEffectsLike,
  ConcurrentReactiveComputationModule,
  DeferredComputationLike,
  DeferredComputationModule,
  DeferredComputationOf,
  DeferredComputationWithSideEffectsLike,
  DeferredComputationWithSideEffectsOf,
  HigherOrderComputationOperator,
  HigherOrderInnerComputationLike,
  HigherOrderInnerComputationOf,
  MulticastComputationLike,
  MulticastComputationOf,
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
  SynchronousComputationModule,
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
  increment,
  pickUnsafe,
  pipe,
  returns,
} from "../functions.js";
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

export interface FlatMapOperator<TComputation extends ComputationType> {
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

export interface FlatMapIterableOperator<TComputation extends ComputationType> {
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
    m: Pick<
      ComputationModule<TComputation> & DeferredComputationModule<TComputation>,
      "concatAll" | "map"
    >,
  ): FlatMapOperator<TComputation>;

  concatMapIterable<TComputation extends ComputationType>(
    m: Pick<
      ComputationModule<TComputation> & DeferredComputationModule<TComputation>,
      "concatAll" | "map" | "fromIterable"
    >,
  ): FlatMapIterableOperator<TComputation>;

  concatMany<TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "concat">,
  ): ConcatManyOperator<TComputation>;

  concatWith<TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "concat">,
  ): ConcatWithOperator<TComputation>;

  debug<TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "forEach">,
  ): <T>() => ComputationOperatorWithSideEffects<TComputation, T, T>;

  endWith<TComputation extends ComputationType>(
    m: Pick<
      DeferredComputationModule<TComputation> &
        SynchronousComputationModule<TComputation>,
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
    m: Pick<ComputationModule<TComputation>, "map"> & {
      readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
    },
    key: TFlattenKey,
  ): FlatMapOperator<TComputation>;

  flatMapIterable<
    TComputation extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: Pick<ComputationModule<TComputation>, "map" | "fromIterable"> & {
      readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
    },
    key: TFlattenKey,
  ): FlatMapIterableOperator<TComputation>;

  hasSideEffects<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & ComputationWithSideEffectsLike;

  ignoreElements<TComputation extends ComputationType>(
    m: Pick<ComputationModule<TComputation>, "keep">,
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
    m: Pick<ComputationModule<TComputation>, "keep">,
  ): <TA, TB>(
    predicate: TypePredicate<TA, TB>,
  ) => StatelessComputationOperator<TComputation, TA, TB>;

  log<TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "forEach">,
  ): <T>() => ComputationOperatorWithSideEffects<TComputation, T, T>;

  mapTo<TComputation extends ComputationType>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ): <T>(value: T) => StatelessComputationOperator<TComputation, unknown, T>;

  mergeMany<TComputation extends ComputationType>(
    m: Pick<ConcurrentReactiveComputationModule<TComputation>, "merge">,
  ): MergeManyOperator<TComputation>;

  mergeWith<TComputation extends ComputationType>(
    m: Pick<ConcurrentReactiveComputationModule<TComputation>, "merge">,
  ): MergeWithOperator<TComputation>;

  notify<TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "forEach">,
  ): <T>(
    eventListener: EventListenerLike<T>,
  ) => ComputationOperatorWithSideEffects<TComputation, T, T>;

  pick<TComputation extends ComputationType>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ): PickOperator<TComputation>;

  sequence<TComputation extends ComputationType>(
    m: Pick<SynchronousComputationModule<TComputation>, "generate">,
  ): (start: number) => ComputationBaseOf<TComputation, number>;

  startWith<TComputation extends ComputationType>(
    m: Pick<
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

export const concatMap: Signature["concatMap"] = <
  TComputation extends ComputationType,
>(
  m: Pick<
    ComputationModule<TComputation> & DeferredComputationModule<TComputation>,
    "concatAll" | "map"
  >,
) => flatMap(m, "concatAll");

export const concatMapIterable: Signature["concatMapIterable"] = <
  TComputation extends ComputationType,
>(
  m: Pick<
    ComputationModule<TComputation> & DeferredComputationModule<TComputation>,
    "concatAll" | "map" | "fromIterable"
  >,
) => flatMapIterable(m, "concatAll");

export const concatMany: Signature["concatMany"] = (<
    TComputation extends ComputationType,
  >(
    m: Pick<DeferredComputationModule<TComputation>, "concat">,
  ) =>
  <T>(computations: DeferredComputationOf<TComputation, T>[]) =>
    m.concat<T>(...computations)) as Signature["concatMany"];

export const concatWith: Signature["concatWith"] = <
  TComputation extends ComputationType,
>(
  m: Pick<DeferredComputationModule<TComputation>, "concat">,
) =>
  (<T>(...tail: DeferredComputationOf<TComputation, T>[]) =>
    (fst: DeferredComputationOf<TComputation, T>) =>
      m.concat(fst, ...tail)) as ConcatWithOperator<TComputation>;

export const debug: Signature["debug"] =
  <TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "forEach">,
  ) =>
  () =>
    m.forEach(breakPoint);

export const endWith: Signature["endWith"] = (<
    TComputation extends ComputationType,
  >(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concat" | "fromReadonlyArray"
    >,
  ) =>
  <T>(...values: readonly T[]) =>
    concatWith(m)(m.fromReadonlyArray<T>()(values))) as Signature["endWith"];

export const flatMap: Signature["flatMap"] = (<
    TComputation extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: Pick<ComputationModule<TComputation>, "map"> & {
      readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
    },
    flatten: TFlattenKey,
  ) =>
  <TA, TB, TInnerType extends HigherOrderInnerComputationLike>(
    selector: Function1<
      TA,
      HigherOrderInnerComputationOf<TComputation, TInnerType, TB>
    >,
    options: {
      innerType: TInnerType;
    },
  ) =>
    compose(
      (x: ComputationBaseOf<TComputation, TA>) => x,
      m.map(selector),
      m[flatten]<TB, TInnerType>(options),
    )) as Signature["flatMap"];

export const flatMapIterable: Signature["flatMapIterable"] = (<
    TComputation extends ComputationType,
    TFlattenKey extends string | number | symbol,
  >(
    m: Pick<ComputationModule<TComputation>, "map" | "fromIterable"> & {
      readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
    },
    flatten: TFlattenKey,
  ) =>
  <TA, TB>(
    selector: Function1<TA, PureIterableLike<TB>>,
    options?: {
      readonly innerType:
        | PureSynchronousComputationLike
        | SynchronousComputationWithSideEffectsLike;
    },
  ) => {
    const mapper = compose(selector, m.fromIterable<TB>());
    return flatMap(m, flatten)(mapper, options);
  }) as Signature["flatMapIterable"];

export const hasSideEffects: Signature["hasSideEffects"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & ComputationWithSideEffectsLike =>
  !(computation[ComputationLike_isPure] ?? true);

export const ignoreElements: Signature["ignoreElements"] =
  <TComputation extends ComputationType>(
    m: Pick<ComputationModule<TComputation>, "keep">,
  ) =>
  <T>() =>
    m.keep(alwaysFalse) as StatelessComputationOperator<TComputation, any, T>;

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

export const keepType: Signature["keepType"] = (<
    TComputation extends ComputationType,
  >(
    m: Pick<ComputationModule<TComputation>, "keep">,
  ) =>
  <TA, TB>(predicate: TypePredicate<TA, TB>) =>
    m.keep(predicate)) as Signature["keepType"];

export const log: Signature["log"] =
  <TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "forEach">,
  ) =>
  () =>
    m.forEach(consoleLog);

export const mapTo: Signature["mapTo"] =
  <TComputation extends ComputationType>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ) =>
  <T>(v: T) =>
    m.map(returns(v));

export const mergeMany: Signature["mergeMany"] = (<
    TComputation extends ComputationType,
  >(
    m: Pick<ConcurrentReactiveComputationModule<TComputation>, "merge">,
  ) =>
  <T>(computations: MulticastComputationOf<TComputation, T>[]) =>
    m.merge<T>(...computations)) as Signature["mergeMany"];

export const mergeWith: Signature["mergeWith"] = <
  TComputation extends ComputationType,
>(
  m: Pick<ConcurrentReactiveComputationModule<TComputation>, "merge">,
) =>
  (<T>(...tail: ComputationOf<TComputation, T>[]) =>
    (fst: ComputationOf<TComputation, T>) =>
      m.merge<T>(fst, ...tail)) as MergeWithOperator<TComputation>;

export const notify: Signature["notify"] =
  <TComputation extends ComputationType>(
    m: Pick<DeferredComputationModule<TComputation>, "forEach">,
  ) =>
  <T>(eventListener: EventListenerLike<T>) =>
    m.forEach(bindMethod(eventListener, EventListenerLike_notify));

export const pick: Signature["pick"] =
  <TComputation extends ComputationType>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ) =>
  (...keys: (string | number | symbol)[]) =>
    m.map(pickUnsafe(...keys));

export const sequence: Signature["sequence"] =
  <TComputation extends ComputationType>(
    m: Pick<SynchronousComputationModule<TComputation>, "generate">,
  ) =>
  (start: number) =>
    m.generate<number>(increment, returns(start - 1));

export const startWith: Signature["startWith"] = (<
    TComputation extends ComputationType,
  >(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concat" | "fromReadonlyArray"
    >,
  ) =>
  <T>(...values: readonly T[]) =>
  (computation: DeferredComputationOf<TComputation, T>) =>
    pipe(
      m.fromReadonlyArray<T>()(values),
      concatWith(m)(computation),
    )) as Signature["startWith"];
