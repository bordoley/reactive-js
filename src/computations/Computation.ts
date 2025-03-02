import {
  Computation,
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationOf,
  ComputationOperator,
  ComputationWithSideEffectsLike,
  ComputationWithSideEffectsOf,
  ComputationWithSideEffectsOperator,
  ComputationWithSideEffectsType,
  ConcurrentReactiveComputationModule,
  DeferredComputationLike,
  DeferredComputationModule,
  DeferredComputationWithSideEffectsLike,
  InteractiveComputationLike,
  IterableLike,
  MulticastComputationLike,
  PureComputationLike,
  PureComputationOf,
  PureDeferredComputationLike,
  PureIterableLike,
  PureSynchronousComputationLike,
  ReactiveComputationLike,
  SynchronousComputationLike,
  SynchronousComputationWithSideEffectsLike,
  SynchronousReactiveComputation,
} from "../computations.js";
import {
  Function1,
  TypePredicate,
  alwaysFalse,
  compose,
  increment,
  pickUnsafe,
  pipe,
  returns,
} from "../functions.js";

export interface PickOperator<TComputation extends Computation> {
  <T, TKeyOfT extends keyof T>(
    key: TKeyOfT,
  ): ComputationOperator<TComputation, T, T[TKeyOfT]>;
  <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
  ): ComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
  <
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
    TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB],
  >(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
    keyC: TKeyOfTC,
  ): ComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}

export interface ConcatOperator<TComputation extends Computation> {
  <T>(
    ...computations: PureComputationOf<TComputation, T>[]
  ): PureComputationOf<TComputation, T>;
  <T>(
    ...computations: ComputationOf<TComputation, T>[]
  ): ComputationWithSideEffectsOf<TComputation, T>;
}

export interface ConcatMapOperator<TComputation extends Computation> {
  <TA, TB>(
    selector: Function1<TA, PureComputationOf<TComputation, TB>>,
  ): ComputationOperator<TComputation, TA, TB>;
  <TA, TB>(
    selector: Function1<TA, ComputationOf<TComputation, TB>>,
    options?: {
      readonly innerType: typeof ComputationWithSideEffectsType;
    },
  ): ComputationWithSideEffectsOperator<TComputation, TA, TB>;
}

export interface ConcatMapIterableOperator<TComputation extends Computation> {
  <TA, TB>(
    selector: Function1<TA, PureIterableLike<TB>>,
  ): ComputationOperator<TComputation, TA, TB>;
  <TA, TB>(
    selector: Function1<TA, IterableLike<TB>>,
    options: {
      readonly innerType: typeof ComputationWithSideEffectsType;
    },
  ): ComputationWithSideEffectsOperator<TComputation, TA, TB>;
}

export interface ConcatWithOperator<TComputation extends Computation> {
  <T>(
    snd: PureComputationOf<TComputation, T>,
    ...tail: readonly PureComputationOf<TComputation, T>[]
  ): ComputationOperator<TComputation, T, T>;
  <T>(
    snd: ComputationOf<TComputation, T>,
    ...tail: readonly ComputationOf<TComputation, T>[]
  ): ComputationWithSideEffectsOf<TComputation, T>;
}

export interface MergeOperator<TComputation extends Computation> {
  <T>(
    ...computations: PureComputationOf<TComputation, T>[]
  ): PureComputationOf<TComputation, T>;
  <T>(
    ...computations: ComputationOf<TComputation, T>[]
  ): ComputationWithSideEffectsOf<TComputation, T>;
}

export interface MergeWithOperator<TComputation extends Computation> {
  <T>(
    snd: PureComputationOf<TComputation, T>,
    ...tail: readonly PureComputationOf<TComputation, T>[]
  ): ComputationOperator<TComputation, T, T>;
  <T>(
    snd: ComputationOf<TComputation, T>,
    ...tail: readonly ComputationOf<TComputation, T>[]
  ): ComputationWithSideEffectsOf<TComputation, T>;
}

export interface Signature {
  areAllDeferred<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & DeferredComputationLike)[];

  areAllInteractive<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & InteractiveComputationLike)[];

  areAllMulticasted<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & MulticastComputationLike)[];

  areAllPure<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & PureComputationLike)[];

  areAllSynchronous<TComputation extends ComputationLike>(
    computations: readonly TComputation[],
  ): computations is readonly (TComputation & SynchronousComputationLike)[];

  concat<TComputation extends Computation>(
    m: Pick<DeferredComputationModule<TComputation>, "concatMany">,
  ): ConcatOperator<TComputation>;

  concatMap<TComputation extends Computation>(
    m: Pick<DeferredComputationModule<TComputation>, "concatAll" | "map">,
  ): ConcatMapOperator<TComputation>;

  concatMapIterable<TComputation extends Computation>(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concatAll" | "map" | "fromIterable"
    >,
  ): ConcatMapIterableOperator<TComputation>;

  concatWith<TComputation extends Computation>(
    m: Pick<DeferredComputationModule<TComputation>, "concatMany">,
  ): ConcatWithOperator<TComputation>;

  endWith<TComputation extends Computation>(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concatMany" | "fromReadonlyArray"
    >,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => ComputationOperator<TComputation, T, T>;

  hasSideEffects<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & ComputationWithSideEffectsLike;

  ignoreElements<TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "keep">,
  ): <T>() => ComputationOperator<TComputation, any, T>;

  isDeferred<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & DeferredComputationLike;

  isDeferredWithSideEffects<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & DeferredComputationWithSideEffectsLike;

  isInteractive<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & InteractiveComputationLike;

  isMulticasted<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & MulticastComputationLike;

  isPure<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureComputationLike;

  isPureDeferred<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureDeferredComputationLike;

  isPureSynchronous<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureSynchronousComputationLike;

  isReactive<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & ReactiveComputationLike;

  isSynchronous<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationLike;

  isSynchronousReactive<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousReactiveComputation;

  isSynchronousWithSideEffects<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationWithSideEffectsLike;

  keepType<TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "keep">,
  ): <TA, TB>(
    predicate: TypePredicate<TA, TB>,
  ) => ComputationOperator<TComputation, TA, TB>;

  mapTo<TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ): <T>(value: T) => ComputationOperator<TComputation, unknown, T>;

  merge<TComputation extends Computation>(
    m: Pick<ConcurrentReactiveComputationModule<TComputation>, "mergeMany">,
  ): MergeOperator<TComputation>;

  mergeWith<TComputation extends Computation>(
    m: Pick<ConcurrentReactiveComputationModule<TComputation>, "mergeMany">,
  ): MergeWithOperator<TComputation>;

  pick<TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ): PickOperator<TComputation>;

  sequence<TComputation extends Computation>(
    m: Pick<DeferredComputationModule<TComputation>, "generate">,
  ): (start: number) => ComputationOf<TComputation, number>;

  startWith<TComputation extends Computation>(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concatMany" | "fromReadonlyArray"
    >,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => ComputationOperator<TComputation, T, T>;
}

export const areAllDeferred: Signature["areAllDeferred"] = <
  TComputation extends ComputationLike,
>(
  computations: readonly TComputation[],
): computations is readonly (TComputation & DeferredComputationLike)[] =>
  computations.every(isDeferred);

export const areAllInteractive: Signature["areAllInteractive"] = <
  TComputation extends ComputationLike,
>(
  computations: readonly TComputation[],
): computations is readonly (TComputation & InteractiveComputationLike)[] =>
  computations.every(isInteractive);

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

export const concat: Signature["concat"] =
  <TComputation extends Computation>(
    m: Pick<DeferredComputationModule<TComputation>, "concatMany">,
  ) =>
  <T>(...computations: ComputationOf<TComputation, T>[]) =>
    m.concatMany<T>(computations);

export const concatMap: Signature["concatMap"] = <
  TComputation extends Computation,
>(
  m: Pick<DeferredComputationModule<TComputation>, "concatAll" | "map">,
) =>
  (<TA, TB>(
      selector: Function1<TA, PureComputationOf<TComputation, TB>>,
      options?: {
        innerType: typeof ComputationWithSideEffectsType;
      },
    ) =>
    (computation: PureComputationOf<TComputation, TA>) =>
      pipe(
        computation,
        m.map<TA, PureComputationOf<TComputation, TB>>(selector),
        m.concatAll(options),
      )) as ConcatMapOperator<TComputation>;

export const concatMapIterable: Signature["concatMapIterable"] =
  <TComputation extends Computation>(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concatAll" | "map" | "fromIterable"
    >,
  ) =>
  <TA, TB>(
    selector: Function1<TA, IterableLike<TB>>,
    options?: {
      readonly innerType: typeof ComputationWithSideEffectsType;
    },
  ) => {
    const mapper = compose(selector, m.fromIterable<TB>());
    return concatMap(m)(mapper, options);
  };

export const concatWith: Signature["concatWith"] = <
  TComputation extends Computation,
>(
  m: Pick<DeferredComputationModule<TComputation>, "concatMany">,
) =>
  (<T>(...tail: ComputationOf<TComputation, T>[]) =>
    (fst: ComputationOf<TComputation, T>) =>
      m.concatMany([
        fst,
        ...tail,
      ])) as unknown as ConcatWithOperator<TComputation>;

export const endWith: Signature["endWith"] =
  <TComputation extends Computation>(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concatMany" | "fromReadonlyArray"
    >,
  ) =>
  <T>(...values: readonly T[]) =>
  (computation: ComputationOf<TComputation, T>) =>
    m.concatMany<T>([computation, m.fromReadonlyArray<T>()(values)]);

export const hasSideEffects: Signature["hasSideEffects"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & ComputationWithSideEffectsLike =>
  !(computation[ComputationLike_isPure] ?? true);

export const ignoreElements: Signature["ignoreElements"] =
  <TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "keep">,
  ) =>
  <T>() =>
    m.keep(alwaysFalse) as ComputationOperator<TComputation, any, T>;

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

export const isInteractive: Signature["isInteractive"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & InteractiveComputationLike =>
  computation[ComputationLike_isInteractive] ?? true;

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

export const isReactive: Signature["isReactive"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & ReactiveComputationLike =>
  !(computation[ComputationLike_isInteractive] ?? true);

export const isSynchronous: Signature["isSynchronous"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & SynchronousComputationLike =>
  (computation[ComputationLike_isSynchronous] ?? true) &&
  (computation[ComputationLike_isDeferred] ?? true);

export const isSynchronousReactive: Signature["isSynchronousReactive"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & SynchronousReactiveComputation =>
  (computation[ComputationLike_isDeferred] ?? true) &&
  !(computation[ComputationLike_isInteractive] ?? true) &&
  (computation[ComputationLike_isSynchronous] ?? true);

export const isSynchronousWithSideEffects: Signature["isSynchronousWithSideEffects"] =
  <TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationWithSideEffectsLike =>
    (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);

export const keepType: Signature["keepType"] = (<
    TComputation extends Computation,
  >(
    m: Pick<ComputationModule<TComputation>, "keep">,
  ) =>
  <TA, TB>(predicate: TypePredicate<TA, TB>) =>
    m.keep(predicate)) as unknown as Signature["keepType"];

export const mapTo: Signature["mapTo"] =
  <TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ) =>
  <T>(v: T) =>
    m.map(returns(v));

export const merge: Signature["merge"] =
  <TComputation extends Computation>(
    m: Pick<ConcurrentReactiveComputationModule<TComputation>, "mergeMany">,
  ) =>
  <T>(...computations: ComputationOf<TComputation, T>[]) =>
    m.mergeMany<T>(computations);

export const mergeWith: Signature["mergeWith"] = <
  TComputation extends Computation,
>(
  m: Pick<ConcurrentReactiveComputationModule<TComputation>, "mergeMany">,
) =>
  (<T>(...tail: ComputationOf<TComputation, T>[]) =>
    (fst: ComputationOf<TComputation, T>) =>
      m.mergeMany<T>([
        fst,
        ...tail,
      ])) as unknown as MergeWithOperator<TComputation>;

export const pick: Signature["pick"] = (<TComputation extends Computation>(
    m: Pick<ComputationModule<TComputation>, "map">,
  ) =>
  (...keys: (string | number | symbol)[]) =>
    m.map(pickUnsafe(...keys))) as Signature["pick"];

export const sequence: Signature["sequence"] =
  <TComputation extends Computation>(
    m: Pick<DeferredComputationModule<TComputation>, "generate">,
  ) =>
  (start: number) =>
    m.generate<number>(increment, returns(start - 1));

export const startWith: Signature["startWith"] =
  <TComputation extends Computation>(
    m: Pick<
      DeferredComputationModule<TComputation>,
      "concatMany" | "fromReadonlyArray"
    >,
  ) =>
  <T>(...values: readonly T[]) =>
  (computation: ComputationOf<TComputation, T>) =>
    m.concatMany<T>([m.fromReadonlyArray<T>()(values), computation]);
