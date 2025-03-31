import {
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationModuleLike_computationType,
  ComputationOf,
  ComputationOperatorWithSideEffects,
  ComputationTypeLike,
  ComputationTypeOfModule,
  ConcurrentReactiveComputationModule,
  NewPureInstanceOf,
  PickComputationModule,
  PureComputationLike,
  PureComputationOf,
  PureComputationOperator,
  SequentialComputationModule,
} from "../computations.js";
import {
  Factory,
  raise as Functions_raise,
  Optional,
  error,
  identityLazy,
  memoize,
  pipe,
} from "../functions.js";
import Computation_areAllPure from "./Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "./Computation/__private__/Computation.areAllSynchronous.js";
import Computation_concatWith from "./Computation/__private__/Computation.concatWith.js";
import Computation_empty from "./Computation/__private__/Computation.empty.js";
import Computation_fromReadonlyArray from "./Computation/__private__/Computation.fromReadonlyArray.js";
import Computation_isDeferred from "./Computation/__private__/Computation.isDeferred.js";
import Computation_isPure from "./Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "./Computation/__private__/Computation.isSynchronous.js";
import Computation_startWith from "./Computation/__private__/Computation.startWith.js";

export interface ConcatWithOperator<
  TComputationType extends ComputationTypeLike,
> {
  <T>(
    snd: PureComputationOf<TComputationType, T>,
    ...tail: readonly PureComputationOf<TComputationType, T>[]
  ): PureComputationOperator<TComputationType, T, T>;
  <T>(
    snd: ComputationOf<TComputationType, T>,
    ...tail: readonly ComputationOf<TComputationType, T>[]
  ): ComputationOperatorWithSideEffects<TComputationType, T, T>;
}

export interface MergeWithOperator<
  TComputationType extends ComputationTypeLike,
> {
  <T>(
    snd: PureComputationOf<TComputationType, T>,
    ...tail: readonly PureComputationOf<TComputationType, T>[]
  ): PureComputationOperator<TComputationType, T, T>;
  <T>(
    snd: ComputationOf<TComputationType, T>,
    ...tail: readonly ComputationOf<TComputationType, T>[]
  ): ComputationOperatorWithSideEffects<TComputationType, T, T>;
}

export interface Signature {
  areAllPure<TComputationType extends Partial<ComputationLike>>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & PureComputationLike)[];

  areAllSynchronous<TComputationType extends Partial<ComputationLike>>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & {
    [ComputationLike_isSynchronous]: Optional<true>;
  })[];

  concatWith<
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      SequentialComputationModule<TComputationType>,
      "concat"
    >,
  >(
    m: TComputationModule,
  ): ConcatWithOperator<ComputationTypeOfModule<TComputationModule>>;

  empty<
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      ComputationModule<TComputationType>,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <T>() => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

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

  makeModule<TComputationType>(): <
    TModule extends { [key: string]: any } = { [key: string]: any },
  >(
    o: TModule,
  ) => TModule & {
    [ComputationModuleLike_computationType]?: TComputationType;
  };

  mergeWith<
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      ConcurrentReactiveComputationModule<TComputationType>,
      "merge"
    >,
  >(
    m: TComputationModule,
  ): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;

  raise<
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      ComputationModule<TComputationType>,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <T>(options?: {
    readonly raise?: Factory<unknown>;
  }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

  startWith<
    T,
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      SequentialComputationModule<TComputationType> &
        ComputationModule<TComputationType>,
      "concat" | "genPure"
    >,
  >(
    m: TComputationModule,
    value: T,
    ...values: readonly T[]
  ): PureComputationOperator<ComputationTypeOfModule<TComputationModule>, T, T>;
}

export const areAllPure: Signature["areAllPure"] = Computation_areAllPure;
export const areAllSynchronous: Signature["areAllSynchronous"] =
  Computation_areAllSynchronous;

export const concatWith: Signature["concatWith"] = Computation_concatWith;

export const empty: Signature["empty"] = Computation_empty;

export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Computation_fromReadonlyArray;

export const isDeferred: Signature["isDeferred"] = Computation_isDeferred;
export const isPure: Signature["isPure"] = Computation_isPure;
export const isSynchronous: Signature["isSynchronous"] =
  Computation_isSynchronous;

export const makeModule: Signature["makeModule"] =
  identityLazy as Signature["makeModule"];

export const mergeWith: Signature["mergeWith"] = /*@__PURE__*/ (<
  TComputationType extends ComputationTypeLike,
  TComputationModule extends Pick<
    ConcurrentReactiveComputationModule<TComputationType>,
    "merge"
  >,
>() =>
  memoize(
    (m: TComputationModule) =>
      <T>(...tail: ComputationOf<TComputationType, T>[]) =>
      (fst: ComputationOf<TComputationType, T>) =>
        m.merge<T>(fst, ...tail),
  ))() as Signature["mergeWith"];

export const raise: Signature["raise"] = /*@__PURE__*/ memoize(
  m =>
    <T>(
      options?: {
        readonly raise?: Factory<unknown>;
      } & Parameters<typeof m.genPure>[1],
    ) =>
      m.genPure<T>(function* RaiseComputation() {
        const { raise: factory = Functions_raise } = options ?? {};
        pipe(factory(), error, Functions_raise);
      }),
) as Signature["raise"];

export const startWith: Signature["startWith"] = Computation_startWith;
