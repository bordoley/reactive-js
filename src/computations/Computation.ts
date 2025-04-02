import {
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationModuleLike,
  ComputationModuleLike_computationType,
  ComputationOf,
  ComputationOperatorWithSideEffects,
  ComputationTypeLike,
  ComputationTypeOfModule,
  DeferredComputationModule,
  NewPureInstanceOf,
  PickComputationModule,
  PureComputationLike,
  PureComputationOf,
  PureComputationOperator,
  ReactiveComputationModule,
} from "../computations.js";
import {
  Factory,
  raise as Functions_raise,
  Optional,
  bindMethod,
  error,
  identity,
  pipe,
} from "../functions.js";
import Computation_areAllPure from "./Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "./Computation/__private__/Computation.areAllSynchronous.js";
import Computation_concatWith from "./Computation/__private__/Computation.concatWith.js";
import Computation_empty from "./Computation/__private__/Computation.empty.js";
import Computation_endWith from "./Computation/__private__/Computation.endWith.js";
import Computation_fromReadonlyArray from "./Computation/__private__/Computation.fromReadonlyArray.js";
import Computation_isDeferred from "./Computation/__private__/Computation.isDeferred.js";
import Computation_isPure from "./Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "./Computation/__private__/Computation.isSynchronous.js";
import Computation_startWith from "./Computation/__private__/Computation.startWith.js";

export interface Signature {
  areAllPure<TComputationType extends Partial<ComputationLike>>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & PureComputationLike)[];

  areAllSynchronous<TComputationType extends Partial<ComputationLike>>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & {
    [ComputationLike_isSynchronous]: Optional<true>;
  })[];

  concatWith<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      DeferredComputationModule<TComputationType>,
      "concat"
    >,
    snd: PureComputationOf<TComputationType, T>,
    ...tail: readonly PureComputationOf<TComputationType, T>[]
  ): PureComputationOperator<TComputationType, T, T>;
  concatWith<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      DeferredComputationModule<TComputationType>,
      "concat"
    >,
    snd: ComputationOf<TComputationType, T>,
    ...tail: readonly ComputationOf<TComputationType, T>[]
  ): ComputationOperatorWithSideEffects<TComputationType, T, T>;

  empty<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<ComputationModule<TComputationType>, "genPure">,
    type?: T,
  ): NewPureInstanceOf<TComputationType, T>;

  endWith<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      DeferredComputationModule<TComputationType> &
        ComputationModule<TComputationType>,
      "concat" | "genPure"
    >,
    value: T,
    ...values: readonly T[]
  ): PureComputationOperator<TComputationType, T, T>;

  fromReadonlyArray<
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      ComputationModule<TComputationType>,
      "genPure"
    >,
  >(
    m: TComputationModule,
    options?: {
      readonly count?: number;
      readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1],
  ): <T>(
    arr: ReadonlyArray<T>,
  ) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

  isDeferred<
    TComputationType extends
      Partial<ComputationLike> = Partial<ComputationLike>,
  >(
    computation: TComputationType,
  ): computation is TComputationType & {
    [ComputationLike_isDeferred]: Optional<true>;
  };

  isPure<
    TComputationType extends
      Partial<ComputationLike> = Partial<ComputationLike>,
  >(
    computation: TComputationType,
  ): computation is TComputationType & PureComputationLike;

  isSynchronous<
    TComputationType extends
      Partial<ComputationLike> = Partial<ComputationLike>,
  >(
    computation: TComputationType,
  ): computation is TComputationType & {
    [ComputationLike_isSynchronous]: Optional<true>;
  };

  makeModule<
    TComputationModule extends ComputationModuleLike,
    TKey extends
      keyof NonNullable<TComputationModule> = keyof NonNullable<TComputationModule>,
  >(
    o: Pick<TComputationModule, TKey>,
  ): typeof o & {
    [ComputationModuleLike_computationType]?: ComputationTypeOfModule<TComputationModule>;
  };

  mergeWith<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      ReactiveComputationModule<TComputationType>,
      "merge"
    >,
    snd: PureComputationOf<TComputationType, T>,
    ...tail: readonly PureComputationOf<TComputationType, T>[]
  ): PureComputationOperator<TComputationType, T, T>;
  mergeWith<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      ReactiveComputationModule<TComputationType>,
      "merge"
    >,
    snd: ComputationOf<TComputationType, T>,
    ...tail: readonly ComputationOf<TComputationType, T>[]
  ): ComputationOperatorWithSideEffects<TComputationType, T, T>;

  ofValues<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<ComputationModule<TComputationType>, "genPure">,
    value: T,
    ...values: T[]
  ): NewPureInstanceOf<TComputationType, T>;

  raise<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<ComputationModule<TComputationType>, "genPure">,
    options?: {
      readonly raise?: Factory<unknown>;
    },
    type?: T,
  ): NewPureInstanceOf<TComputationType, T>;

  startWith<TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      DeferredComputationModule<TComputationType> &
        ComputationModule<TComputationType>,
      "concat" | "genPure"
    >,
    value: T,
    ...values: readonly T[]
  ): PureComputationOperator<TComputationType, T, T>;
}

export const areAllPure: Signature["areAllPure"] = Computation_areAllPure;
export const areAllSynchronous: Signature["areAllSynchronous"] =
  Computation_areAllSynchronous;
export const concatWith: Signature["concatWith"] = Computation_concatWith;
export const empty: Signature["empty"] = Computation_empty;
export const endWith: Signature["endWith"] = Computation_endWith;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Computation_fromReadonlyArray;
export const isDeferred: Signature["isDeferred"] = Computation_isDeferred;
export const isPure: Signature["isPure"] = Computation_isPure;
export const isSynchronous: Signature["isSynchronous"] =
  Computation_isSynchronous;
export const makeModule: Signature["makeModule"] =
  identity as Signature["makeModule"];

export const mergeWith: Signature["mergeWith"] =
  <TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      ReactiveComputationModule<TComputationType>,
      "merge"
    >,
    ...tail: ComputationOf<TComputationType, T>[]
  ) =>
  (fst: ComputationOf<TComputationType, T>) =>
    m.merge(fst, ...tail);

export const ofValues: Signature["ofValues"] = <
  TComputationType extends ComputationTypeLike,
  T,
>(
  m: PickComputationModule<ComputationModule<TComputationType>, "genPure">,
  ...values: T[]
) => m.genPure(bindMethod(values, Symbol.iterator));

export const raise: Signature["raise"] = (
  m,
  options?: {
    readonly raise?: Factory<unknown>;
  } & Parameters<typeof m.genPure>[1],
  _type?,
) =>
  m.genPure(function* RaiseComputation() {
    const { raise: factory = Functions_raise } = options ?? {};
    pipe(factory(), error, Functions_raise);
  });

export const startWith: Signature["startWith"] = Computation_startWith;
