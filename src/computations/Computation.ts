import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import {
  ComputationBaseOf,
  ComputationLike,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
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
  PureAsynchronousComputationOperator,
  PureComputationLike,
  PureComputationOperator,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SynchronousComputationLike,
  SynchronousComputationOf,
} from "../computations.js";
import { Function1, memoize } from "../functions.js";

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

  fromReadonlyArray<
    TComputationModule extends Pick<
      ComputationModule,
      "genPure" | typeof ComputationModuleLike_computationType
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

  mergeWith<
    TComputationModule extends Pick<
      ConcurrentReactiveComputationModule,
      "merge" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;
}

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

export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  /*@__PURE__*/ memoize(
    m =>
      <T>(options?: { readonly count?: number; readonly start?: number }) =>
      (array: readonly T[]) =>
        m.genPure<T>(function* ComputationFromReadonlyArray() {
          let [start, count] = parseArrayBounds(array, options);

          while (count !== 0) {
            yield array[start];
            count > 0 ? (start++, count--) : (start--, count++);
          }
        }, options),
  ) as Signature["fromReadonlyArray"];

export const isPure: Signature["isPure"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & PureComputationLike =>
  computation[ComputationLike_isPure] ?? true;

export const isSynchronous: Signature["isSynchronous"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & SynchronousComputationLike =>
  computation[ComputationLike_isSynchronous] ?? true;

export const mergeWith: Signature["mergeWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...tail: ComputationOfModule<typeof m, T>[]) =>
    (fst: ComputationOfModule<typeof m, T>) =>
      m.merge<T>(fst, ...tail),
) as Signature["mergeWith"];
