import {
  ComputationBaseOf,
  ComputationLike,
  ComputationModule,
  ComputationModuleLike_computationType,
  ComputationOf,
  ComputationOfModule,
  ComputationOperatorWithSideEffects,
  ComputationType,
  ComputationTypeOfModule,
  ConcurrentReactiveComputationModule,
  DeferredComputationLike,
  DeferredComputationOf,
  DeferredComputationWithSideEffectsOf,
  MulticastComputationOf,
  NewPureInstanceOf,
  PickComputationModule,
  PureAsynchronousComputationOperator,
  PureComputationLike,
  PureComputationOperator,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SequentialComputationModule,
  SynchronousComputationLike,
  SynchronousComputationOf,
} from "../computations.js";
import {
  Factory,
  Function1,
  raise as Functions_raise,
  error,
  identity,
  memoize,
  pipe,
  returns,
} from "../functions.js";
import Computation_areAllPure from "./Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "./Computation/__private__/Computation.areAllSynchronous.js";
import Computation_concatWith from "./Computation/__private__/Computation.concatWith.js";
import Computation_empty from "./Computation/__private__/Computation.empty.js";
import Computation_fromReadonlyArray from "./Computation/__private__/Computation.fromReadonlyArray.js";
import Computation_isPure from "./Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "./Computation/__private__/Computation.isSynchronous.js";
import Computation_startWith from "./Computation/__private__/Computation.startWith.js";

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

export interface Signature {
  areAllPure<TComputationType extends ComputationLike>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & PureComputationLike)[];

  areAllSynchronous<TComputationType extends ComputationLike>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & SynchronousComputationLike)[];

  concatWith<
    TComputationModule extends PickComputationModule<
      SequentialComputationModule,
      "concat"
    >,
  >(
    m: TComputationModule,
  ): ConcatWithOperator<ComputationTypeOfModule<TComputationModule>>;

  empty<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <T>() => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

  fromReadonlyArray<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: {
      readonly count?: number;
      readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1],
  ) => Function1<
    ReadonlyArray<T>,
    NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>
  >;

  isDeferred<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & DeferredComputationLike;

  isPure<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & PureComputationLike;

  isSynchronous<TComputationType extends ComputationLike = ComputationLike>(
    computation: TComputationType,
  ): computation is TComputationType & SynchronousComputationLike;

  makeModule<TComputationType>(): <
    TModule extends { [key: string]: any } = { [key: string]: any },
  >(
    o: TModule,
  ) => TModule & {
    [ComputationModuleLike_computationType]?: TComputationType;
  };

  mergeWith<
    TComputationModule extends PickComputationModule<
      ConcurrentReactiveComputationModule,
      "merge"
    >,
  >(
    m: TComputationModule,
  ): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;

  raise<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <T>(options?: {
    readonly raise?: Factory<unknown>;
  }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

  startWith<
    TComputationModule extends PickComputationModule<
      SequentialComputationModule & ComputationModule,
      "concat" | "genPure"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    value: T,
    ...values: readonly T[]
  ) => PureComputationOperator<
    ComputationTypeOfModule<TComputationModule>,
    T,
    T
  >;
}

export const areAllPure: Signature["areAllPure"] = Computation_areAllPure;
export const areAllSynchronous: Signature["areAllSynchronous"] =
  Computation_areAllSynchronous;

export const concatWith: Signature["concatWith"] = Computation_concatWith;

export const empty: Signature["empty"] = Computation_empty;

export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Computation_fromReadonlyArray;

export const isPure: Signature["isPure"] = Computation_isPure;
export const isSynchronous: Signature["isSynchronous"] =
  Computation_isSynchronous;

export const makeModule: Signature["makeModule"] = returns(identity);

export const mergeWith: Signature["mergeWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...tail: ComputationOfModule<typeof m, T>[]) =>
    (fst: ComputationOfModule<typeof m, T>) =>
      m.merge<T>(fst, ...tail),
) as Signature["mergeWith"];

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
);

export const startWith: Signature["startWith"] = Computation_startWith;
