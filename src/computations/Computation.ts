import {
  Computation,
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOf,
  DeferredComputationLike,
  DeferredComputationModule,
  MulticastComputationLike,
  PureComputationLike,
  PureComputationOperator,
  PureStatelessComputationModule,
  SynchronousComputationLike,
} from "../computations.js";
import { TypePredicate, increment, pickUnsafe, returns } from "../functions.js";

export interface PickOperator<
  Type extends ComputationLike,
  C extends Computation<Type>,
> {
  <T, TKeyOfT extends keyof T>(
    key: TKeyOfT,
  ): PureComputationOperator<Type, C, T, T[TKeyOfT]>;
  <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
  ): PureComputationOperator<Type, C, T, T[TKeyOfTA][TKeyOfTB]>;
  <
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
    TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB],
  >(
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
    keyC: TKeyOfTC,
  ): PureComputationOperator<Type, C, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}

interface Signature {
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

  isDeferred<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & DeferredComputationLike;

  isMulticasted<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & MulticastComputationLike;

  isPure<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & PureComputationLike;

  isSynchronous<TComputation extends ComputationLike>(
    computation: TComputation,
  ): computation is TComputation & SynchronousComputationLike;

  keepType<Type extends ComputationLike, C extends Computation<Type>>(
    keep: PureStatelessComputationModule<Type, C>["keep"],
  ): <TA, TB>(
    predicate: TypePredicate<TA, TB>,
  ) => PureComputationOperator<Type, C, TA, TB>;

  mapTo<Type extends ComputationLike, C extends Computation<Type>>(
    map: PureStatelessComputationModule<Type, C>["map"],
  ): <T>(value: T) => PureComputationOperator<Type, C, unknown, T>;

  pick<Type extends ComputationLike, C extends Computation<Type>>(
    map: PureStatelessComputationModule<Type, C>["map"],
  ): PickOperator<Type, C>;

  sequence<Type extends ComputationLike, C extends Computation<Type>>(
    generate: DeferredComputationModule<Type, C>["generate"],
  ): (start: number) => ComputationOf<Type, C, number>;
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

export const isDeferred: Signature["isDeferred"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & DeferredComputationLike =>
  computation[ComputationLike_isDeferred] ?? true;

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

export const isSynchronous: Signature["isSynchronous"] = <
  TComputation extends ComputationLike,
>(
  computation: TComputation,
): computation is TComputation & SynchronousComputationLike =>
  (computation[ComputationLike_isSynchronous] ?? true) &&
  (computation[ComputationLike_isDeferred] ?? true);

export const keepType: Signature["keepType"] = (<
    Type extends ComputationLike,
    C extends Computation<Type>,
  >(
    keep: PureStatelessComputationModule<Type, C>["keep"],
  ) =>
  <TA, TB>(predicate: TypePredicate<TA, TB>) =>
    keep(predicate)) as unknown as Signature["keepType"];

export const mapTo: Signature["mapTo"] =
  <Type extends ComputationLike, C extends Computation<Type>>(
    map: PureStatelessComputationModule<Type, C>["map"],
  ) =>
  <T>(v: T) =>
    map(returns(v));

export const pick: Signature["pick"] = (<
    Type extends ComputationLike,
    C extends Computation<Type>,
  >(
    map: PureStatelessComputationModule<Type, C>["map"],
  ) =>
  (...keys: (string | number | symbol)[]) =>
    map(pickUnsafe(...keys))) as Signature["pick"];

export const sequence: Signature["sequence"] =
  <Type extends ComputationLike, C extends Computation<Type>>(
    generate: DeferredComputationModule<Type, C>["generate"],
  ) =>
  (start: number) =>
    generate<number>(increment, returns(start - 1));
