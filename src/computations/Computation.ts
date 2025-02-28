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
  PickOperator,
  PureComputationLike,
  PureComputationOperator,
  PureStatelessComputationModule,
  SynchronousComputationLike,
} from "../computations.js";
import { TypePredicate, increment, pickUnsafe, returns } from "../functions.js";

interface Signature {
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

export const isDeferred = <TComputation extends ComputationLike>(
  computation: TComputation,
): computation is TComputation & DeferredComputationLike =>
  computation[ComputationLike_isDeferred] ?? true;

export const isMulticasted = <TComputation extends ComputationLike>(
  computation: TComputation,
): computation is TComputation & MulticastComputationLike =>
  !(computation[ComputationLike_isDeferred] ?? true) &&
  (computation[ComputationLike_isPure] ?? true) &&
  !(computation[ComputationLike_isSynchronous] ?? true);

export const isPure = <TComputation extends ComputationLike>(
  computation: TComputation,
): computation is TComputation & PureComputationLike =>
  computation[ComputationLike_isPure] ?? true;

export const isSynchronous = <TComputation extends ComputationLike>(
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
