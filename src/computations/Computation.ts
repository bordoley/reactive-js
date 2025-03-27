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
  DeferredComputationOfModule,
  DeferredComputationWithSideEffectsOf,
  MulticastComputationOf,
  NewPureInstanceOf,
  PureAsynchronousComputationOperator,
  PureComputationLike,
  PureComputationOperator,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SequentialComputationModule,
  SourceLike_subscribe,
  SynchronousComputationLike,
  SynchronousComputationOf,
} from "../computations.js";
import {
  Factory,
  Function1,
  raise as Functions_raise,
  Optional,
  bindMethod,
  error,
  memoize,
  pipe,
  returns,
} from "../functions.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Consumer from "../utils/__internal__/Consumer.js";
import Iterable_first from "./Iterable/__private__/Iterable.first.js";

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
    TComputationModule extends Pick<
      SequentialComputationModule,
      "concat" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): ConcatWithOperator<ComputationTypeOfModule<TComputationModule>>;

  empty<
    TComputationModule extends Pick<
      ComputationModule,
      "genPure" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): <T>() => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

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

  lastAsync<
    TComputationModule extends Pick<
      ComputationModule,
      "toProducer" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toProducer"]>[1],
  ) => Function1<
    ComputationOfModule<TComputationModule, T>,
    Promise<Optional<T>>
  >;

  mergeWith<
    TComputationModule extends Pick<
      ConcurrentReactiveComputationModule,
      "merge" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;

  raise<
    TComputationModule extends Pick<
      ComputationModule,
      "genPure" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): <T>(options?: {
    readonly raise?: Factory<unknown>;
  }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;

  toReadonlyArrayAsync<
    TComputationModule extends Pick<
      ComputationModule,
      "toProducer" | typeof ComputationModuleLike_computationType
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toProducer"]>[1],
  ) => Function1<
    ComputationOfModule<TComputationModule, T>,
    Promise<ReadonlyArray<T>>
  >;
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

export const concatWith: Signature["concatWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...tail: DeferredComputationOfModule<typeof m, T>[]) =>
    (fst: DeferredComputationOfModule<typeof m, T>) =>
      m.concat(fst, ...tail),
) as Signature["concatWith"];

export const empty: Signature["empty"] = /*@__PURE__*/ memoize(m =>
  returns(m.genPure(bindMethod([], Symbol.iterator))),
);

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

export const lastAsync: Signature["lastAsync"] = /*@__PURE__*/ memoize(
  m =>
    <T>(options?: Parameters<typeof m.toProducer>[0]) =>
    async (src: ComputationOfModule<typeof m, T>) => {
      const producer = pipe(src, m.toProducer(options));

      const consumer = Consumer.takeLast<T>(1);
      producer[SourceLike_subscribe](consumer);
      await DisposableContainer.toPromise(consumer);

      return pipe(consumer, Iterable_first<T>());
    },
);

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

export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ memoize(
    m =>
      <T>(options?: Parameters<typeof m.toProducer>[0]) =>
      async (src: ComputationOfModule<typeof m, T>) => {
        const producer = pipe(src, m.toProducer(options));

        const consumer = Consumer.create<T>();
        producer[SourceLike_subscribe](consumer);
        await DisposableContainer.toPromise(consumer);

        return Array.from(consumer);
      },
  );
