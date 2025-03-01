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
  DeferredComputationLike,
  DeferredComputationModule,
  DeferredComputationWithSideEffectsLike,
  InteractiveComputationLike,
  MulticastComputationLike,
  PureComputationLike,
  PureDeferredComputationLike,
  PureSynchronousComputationLike,
  ReactiveComputationLike,
  SynchronousComputationLike,
  SynchronousComputationWithSideEffectsLike,
  SynchronousReactiveComputation,
} from "../computations.js";
import { TypePredicate, increment, pickUnsafe, returns } from "../functions.js";

export interface PickOperator<
  Type extends ComputationLike,
  TComputation extends Computation,
> {
  <T, TKeyOfT extends keyof T>(
    key: TKeyOfT,
  ): ComputationOperator<Type, TComputation, T, T[TKeyOfT]>;
  <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
  ): ComputationOperator<Type, TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
  <
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
    TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB],
  >(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
    keyC: TKeyOfTC,
  ): ComputationOperator<
    Type,
    TComputation,
    T,
    T[TKeyOfTA][TKeyOfTB][TKeyOfTC]
  >;
}

interface Signature {
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

  hasSideEffects<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & ComputationWithSideEffectsLike;

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

  keepType<Type extends ComputationLike, TComputation extends Computation>(
    keep: ComputationModule<Type, TComputation>["keep"],
  ): <TA, TB>(
    predicate: TypePredicate<TA, TB>,
  ) => ComputationOperator<Type, TComputation, TA, TB>;

  mapTo<Type extends ComputationLike, TComputation extends Computation>(
    map: ComputationModule<Type, TComputation>["map"],
  ): <T>(value: T) => ComputationOperator<Type, TComputation, unknown, T>;

  pick<Type extends ComputationLike, TComputation extends Computation>(
    map: ComputationModule<Type, TComputation>["map"],
  ): PickOperator<Type, TComputation>;

  sequence<
    Type extends DeferredComputationLike,
    TComputation extends Computation,
  >(
    generate: DeferredComputationModule<Type, TComputation>["generate"],
  ): (start: number) => ComputationOf<Type, TComputation, number>;
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

export const hasSideEffects: Signature["hasSideEffects"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & ComputationWithSideEffectsLike =>
  !(computation[ComputationLike_isPure] ?? true);

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
    Type extends ComputationLike,
    TComputation extends Computation,
  >(
    keep: ComputationModule<Type, TComputation>["keep"],
  ) =>
  <TA, TB>(predicate: TypePredicate<TA, TB>) =>
    keep(predicate)) as unknown as Signature["keepType"];

export const mapTo: Signature["mapTo"] =
  <Type extends ComputationLike, TComputation extends Computation>(
    map: ComputationModule<Type, TComputation>["map"],
  ) =>
  <T>(v: T) =>
    map(returns(v));

export const pick: Signature["pick"] = (<
    Type extends ComputationLike,
    TComputation extends Computation,
  >(
    map: ComputationModule<Type, TComputation>["map"],
  ) =>
  (...keys: (string | number | symbol)[]) =>
    map(pickUnsafe(...keys))) as Signature["pick"];

export const sequence: Signature["sequence"] =
  <Type extends DeferredComputationLike, TComputation extends Computation>(
    generate: DeferredComputationModule<Type, TComputation>["generate"],
  ) =>
  (start: number) =>
    generate<number>(increment, returns(start - 1));
