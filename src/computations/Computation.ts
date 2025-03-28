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
  ObservableWithSideEffectsLike,
  PickComputationModule,
  ProducerLike,
  PureAsynchronousComputationOperator,
  PureComputationLike,
  PureComputationOperator,
  PureDeferredComputationOf,
  PureObservableLike,
  PureSynchronousComputationOf,
  RunnableLike_eval,
  SequentialComputationModule,
  SourceLike_subscribe,
  SynchronousComputationLike,
  SynchronousComputationModule,
  SynchronousComputationOf,
} from "../computations.js";
import {
  Factory,
  Function1,
  raise as Functions_raise,
  Optional,
  bindMethod,
  error,
  identity,
  invoke,
  memoize,
  pipe,
  returns,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Consumer from "../utils/__internal__/Consumer.js";
import {
  CollectionEnumeratorLike_peek,
  DisposableLike,
  ObserverLike,
} from "../utils.js";
import Computation_areAllPure from "./Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "./Computation/__private__/Computation.areAllSynchronous.js";
import Computation_empty from "./Computation/__private__/Computation.empty.js";
import Computation_isPure from "./Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "./Computation/__private__/Computation.isSynchronous.js";
import * as DeferredSource from "./__internal__/DeferredSource.js";

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

  last<
    TComputationModule extends PickComputationModule<
      SynchronousComputationModule,
      "toRunnable"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toRunnable"]>[0],
  ) => Function1<ComputationOfModule<TComputationModule, T>, Optional<T>>;

  lastAsync<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "toProducer"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toProducer"]>[0],
  ) => Function1<
    ComputationOfModule<TComputationModule, T>,
    Promise<Optional<T>>
  >;

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

  subscribe<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "toProducer"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toProducer"]>[0],
  ) => Function1<ComputationOfModule<TComputationModule, T>, DisposableLike>;

  // prettier-ignore
  toObservable<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "toProducer"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toProducer"]>[0],
  ) => <TComputationBaseOf extends ComputationOfModule<TComputationModule, T>>(
    computation: TComputationBaseOf,
  ) =>  TComputationBaseOf extends PureDeferredComputationOf<ComputationTypeOfModule<TComputationModule>, T> ? 
          PureObservableLike<T> : 
        TComputationBaseOf extends DeferredComputationWithSideEffectsOf<ComputationTypeOfModule<TComputationModule>, T> ? 
          ObservableWithSideEffectsLike<T> : 
        TComputationBaseOf extends MulticastComputationOf<ComputationTypeOfModule<TComputationModule>, T> ? 
          PureObservableLike<T> : 
          never;

  toReadonlyArray<
    TComputationModule extends PickComputationModule<
      SynchronousComputationModule,
      "toRunnable"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toRunnable"]>[0],
  ) => Function1<ComputationOfModule<TComputationModule, T>, ReadonlyArray<T>>;

  toReadonlyArrayAsync<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "toProducer"
    >,
  >(
    m: TComputationModule,
  ): <T>(
    options?: Parameters<TComputationModule["toProducer"]>[0],
  ) => Function1<
    ComputationOfModule<TComputationModule, T>,
    Promise<ReadonlyArray<T>>
  >;
}

export const areAllPure: Signature["areAllPure"] = Computation_areAllPure;
export const areAllSynchronous: Signature["areAllSynchronous"] =
  Computation_areAllSynchronous;

export const concatWith: Signature["concatWith"] = /*@__PURE__*/ memoize(
  m =>
    <T>(...tail: DeferredComputationOfModule<typeof m, T>[]) =>
    (fst: DeferredComputationOfModule<typeof m, T>) =>
      m.concat(fst, ...tail),
) as Signature["concatWith"];

export const empty: Signature["empty"] = Computation_empty;

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

export const isPure: Signature["isPure"] = Computation_isPure;
export const isSynchronous: Signature["isSynchronous"] =
  Computation_isSynchronous;

export const last: Signature["last"] = /*@__PURE__*/ memoize(
  m =>
    <T>(options?: Parameters<typeof m.toRunnable>[0]) =>
    (src: ComputationOfModule<typeof m, T>) => {
      const producer = pipe(src, m.toRunnable(options));

      const consumer = Consumer.takeLast<T>(1);
      producer[RunnableLike_eval](consumer);
      Disposable.raiseIfDisposedWithError(consumer);

      return consumer[CollectionEnumeratorLike_peek];
    },
);

export const lastAsync: Signature["lastAsync"] = /*@__PURE__*/ memoize(
  m =>
    <T>(options?: Parameters<typeof m.toProducer>[0]) =>
    async (src: ComputationOfModule<typeof m, T>) => {
      const producer = pipe(src, m.toProducer(options));

      const consumer = Consumer.takeLast<T>(1);
      producer[SourceLike_subscribe](consumer);
      await DisposableContainer.toPromise(consumer);

      return consumer[CollectionEnumeratorLike_peek];
    },
);

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

export const subscribe: Signature["subscribe"] = /*@__PURE__*/ memoize(
  m =>
    <T>(options?: Parameters<typeof m.toProducer>[0]) =>
    (src: ComputationOfModule<typeof m, T>) => {
      const consumer = Consumer.takeLast<T>(0);
      pipe(
        src,
        m.toProducer<T>(options),
        invoke<ProducerLike, typeof SourceLike_subscribe>(
          SourceLike_subscribe,
          consumer,
        ),
      );
      return consumer;
    },
);

export const toObservable: Signature["toObservable"] = /*@__PURE__*/ memoize(
  m =>
    <T>(options?: Parameters<typeof m.toProducer>[0]) =>
    (src: ComputationOfModule<typeof m, T>) => {
      const producer = pipe(src, m.toProducer(options));

      return DeferredSource.create<T, ObserverLike<T>>(
        bindMethod(producer, SourceLike_subscribe),
        {
          [ComputationLike_isPure]: producer[ComputationLike_isPure],
          [ComputationLike_isSynchronous]: false,
        },
      );
    },
) as Signature["toObservable"];

export const toReadonlyArray: Signature["toReadonlyArray"] =
  /*@__PURE__*/ memoize(
    m =>
      <T>(options?: Parameters<typeof m.toRunnable>[0]) =>
      (src: ComputationOfModule<typeof m, T>) => {
        const producer = pipe(src, m.toRunnable(options));

        const consumer = Consumer.create<T>();
        producer[RunnableLike_eval](consumer);
        Disposable.raiseIfDisposedWithError(consumer);

        return Array.from(consumer);
      },
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
