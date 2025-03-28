import { Array_length } from "../../__internal__/constants.js";
import { mixInstanceFactory, props, proto } from "../../__internal__/mixins.js";
import {
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  DeferredSourceLike,
  HigherOrderInnerComputationLike,
  IterableLike,
  PickComputationModule,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  bind,
  bindMethod,
  error,
  invoke,
  isSome,
  memoize,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Sink from "../../utils/__internal__/Sink.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  SinkLike_complete,
} from "../../utils.js";
import Computation_areAllPure from "../Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "../Computation/__private__/Computation.areAllSynchronous.js";
import Computation_isPure from "../Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "../Computation/__private__/Computation.isSynchronous.js";
import {
  LiftedSinkLike,
  LiftedSourceLike_sink,
  LiftedSourceLike_source,
} from "./LiftedSource.js";

const CreateSource_effect = Symbol("CreateSource_effect");

interface Signature {
  catchError<
    T,
    TSource extends DeferredSourceLike<T, TConsumer>,
    TConsumer extends ConsumerLike<T>,
  >(
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
      TConsumer,
      TConsumer
    >,
    errorHandler: SideEffect1<Error> | Function1<Error, TSource>,
    options?: {
      readonly innerType?: HigherOrderInnerComputationLike;
    },
  ): Function1<TSource, DeferredSourceLike<T, TConsumer>>;

  concat<TConsumer extends ConsumerLike>(
    createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
      TConsumer,
      TConsumer
    >,
  ): <T>(
    ...sources: readonly DeferredSourceLike<T, TConsumer>[]
  ) => DeferredSourceLike<T, TConsumer>;

  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
  ): DeferredSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): DeferredSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): DeferredSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]?: boolean;
      readonly [ComputationLike_isSynchronous]?: boolean;
    },
  ): DeferredSourceLike<T, TConsumer>;

  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredSourceLike<TIn, TConsumerIn>,
    op: Function1<
      LiftedSinkLike<TConsumerOut, TOut>,
      LiftedSinkLike<TConsumerOut, TIn>
    >,
    liftedSinkToConsumer: Function1<
      LiftedSinkLike<TConsumerOut, unknown>,
      TConsumerIn
    >,
    config?: {
      [ComputationLike_isPure]?: true;
      [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isPure]?: true;
    [ComputationLike_isSynchronous]?: true;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredSourceLike<TIn, TConsumerIn>,
    op: Function1<
      LiftedSinkLike<TConsumerOut, TOut>,
      LiftedSinkLike<TConsumerOut, TIn>
    >,
    liftedSinkToConsumer: Function1<
      LiftedSinkLike<TConsumerOut, unknown>,
      TConsumerIn
    >,
    config?: {
      [ComputationLike_isPure]?: true;
      [ComputationLike_isSynchronous]: false;
    },
  ): DeferredSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isPure]?: true;
    [ComputationLike_isSynchronous]: false;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredSourceLike<TIn, TConsumerIn>,
    op: Function1<
      LiftedSinkLike<TConsumerOut, TOut>,
      LiftedSinkLike<TConsumerOut, TIn>
    >,
    liftedSinkToConsumer: Function1<
      LiftedSinkLike<TConsumerOut, unknown>,
      TConsumerIn
    >,
    config?: {
      [ComputationLike_isPure]: false;
      [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]?: true;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredSourceLike<TIn, TConsumerIn>,
    op: Function1<
      LiftedSinkLike<TConsumerOut, TOut>,
      LiftedSinkLike<TConsumerOut, TIn>
    >,
    liftedSinkToConsumer: Function1<
      LiftedSinkLike<TConsumerOut, unknown>,
      TConsumerIn
    >,
    config?: {
      [ComputationLike_isPure]?: boolean;
      [ComputationLike_isSynchronous]: false;
    },
  ): DeferredSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isSynchronous]: false;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredSourceLike<TIn, TConsumerIn>,
    op: Function1<
      LiftedSinkLike<TConsumerOut, TOut>,
      LiftedSinkLike<TConsumerOut, TIn>
    >,
    liftedSinkToConsumer: Function1<
      LiftedSinkLike<TConsumerOut, unknown>,
      TConsumerIn
    >,
    config?: {
      [ComputationLike_isPure]?: boolean;
      [ComputationLike_isSynchronous]?: boolean;
    },
  ): DeferredSourceLike<TOut, TConsumerOut>;

  merge<TConsumer extends ConsumerLike>(
    createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
      TConsumer,
      TConsumer
    >,
  ): <T>(
    ...sources: readonly DeferredSourceLike<T, TConsumer>[]
  ) => DeferredSourceLike<T, TConsumer>;

  takeLast<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <TConsumer extends ConsumerLike<T>, T>(
    takeLast: (
      consumer: TConsumer,
      count: number,
    ) => TConsumer & IterableLike<T>,
    options?: { readonly count?: number },
  ) => Function1<
    DeferredSourceLike<T, TConsumer>,
    DeferredSourceLike<T, TConsumer>
  >;
}

export const catchError: Signature["catchError"] =
  <
    T,
    TSource extends DeferredSourceLike<T, TConsumer>,
    TConsumer extends ConsumerLike<T>,
  >(
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
      TConsumer,
      TConsumer
    >,
    errorHandler: SideEffect1<Error> | Function1<Error, TSource>,
    options?: {
      readonly innerType?: HigherOrderInnerComputationLike;
    },
  ) =>
  (source: TSource): DeferredSourceLike<T, TConsumer> =>
    create<T, TConsumer>(
      consumer => {
        const onErrorSink = pipe(
          createDelegatingNotifyOnlyNonCompletingNonDisposing(consumer),
          Disposable.addToContainer(consumer),
          DisposableContainer.onComplete(
            bindMethod(consumer, SinkLike_complete),
          ),
          DisposableContainer.onError(err => {
            let action: Optional<TSource> = none;
            try {
              action = errorHandler(err) as Optional<TSource>;
            } catch (e) {
              consumer[DisposableLike_dispose](error([error(e), err]));
            }

            if (isSome(action)) {
              action[SourceLike_subscribe](consumer);
            } else {
              consumer[SinkLike_complete]();
            }
          }),
        );

        source[SourceLike_subscribe](onErrorSink);
      },
      {
        [ComputationLike_isPure]: options?.innerType?.[ComputationLike_isPure],
        [ComputationLike_isSynchronous]:
          options?.innerType?.[ComputationLike_isSynchronous],
      },
    );

export const concat: Signature["concat"] = <TConsumer extends ConsumerLike>(
  createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
    TConsumer,
    TConsumer
  >,
) => {
  const ConcatSinkCtx_delegate = Symbol("ConcatSinkCtx_delegate");
  const ConcatSinkCtx_sources = Symbol("ConcatSinkCtx_sources");
  const ConcatSinkCtx_nextIndex = Symbol("ConcatSinkCtx_nextIndex");

  type ConcatSinkCtx = {
    readonly [ConcatSinkCtx_delegate]: TConsumer;
    readonly [ConcatSinkCtx_sources]: readonly DeferredSourceLike<
      unknown,
      TConsumer
    >[];
    [ConcatSinkCtx_nextIndex]: number;
  };

  function onConcatSinkComplete(this: ConcatSinkCtx) {
    const delegate = this[ConcatSinkCtx_delegate];
    const sources = this[ConcatSinkCtx_sources];
    const next = this[ConcatSinkCtx_nextIndex];
    if (next < sources[Array_length]) {
      this[ConcatSinkCtx_nextIndex]++;
      const concatSink = createConcatSink(this);
      sources[next][SourceLike_subscribe](concatSink);
    } else {
      delegate[SinkLike_complete]();
    }
  }

  const createConcatSink = (ctx: ConcatSinkCtx) => {
    const delegate = ctx[ConcatSinkCtx_delegate];
    return pipe(
      createDelegatingNotifyOnlyNonCompletingNonDisposingSink(delegate),
      Disposable.addTo(delegate),
      DisposableContainer.onComplete(bind(onConcatSinkComplete, ctx)),
    );
  };

  const ConcatSource_sources = Symbol("ConcatSource_sources");

  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [ConcatSource_sources]: readonly DeferredSourceLike<unknown, TConsumer>[];
  };

  const isConcatSource = (
    observable: DeferredSourceLike<unknown, TConsumer>,
  ): observable is DeferredSourceLike<unknown, TConsumer> & TProperties =>
    isSome((observable as any)[ConcatSource_sources]);

  const flattenSources = (
    sources: readonly DeferredSourceLike<unknown, TConsumer>[],
  ): readonly DeferredSourceLike<unknown, TConsumer>[] =>
    sources.some(isConcatSource)
      ? sources.flatMap(observable =>
          isConcatSource(observable)
            ? flattenSources(observable[ConcatSource_sources])
            : observable,
        )
      : sources;

  const createConcatSource = mixInstanceFactory(
    function ConcatSource(
      this: TProperties & DeferredSourceLike<unknown, TConsumer>,
      sources: readonly DeferredSourceLike<unknown, TConsumer>[],
    ): DeferredSourceLike<unknown, TConsumer> {
      this[ComputationLike_isPure] = Computation_areAllPure(sources);
      this[ComputationLike_isSynchronous] =
        Computation_areAllSynchronous(sources);
      this[ConcatSource_sources] = flattenSources(sources);

      return this;
    },
    props<TProperties>({
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
      [ConcatSource_sources]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,

      [SourceLike_subscribe](this: TProperties, consumer: TConsumer): void {
        const { [ConcatSource_sources]: sources } = this;

        const concatSink = createConcatSink({
          [ConcatSinkCtx_delegate]: consumer,
          [ConcatSinkCtx_sources]: sources,
          [ConcatSinkCtx_nextIndex]: 1,
        });

        sources[0][SourceLike_subscribe](concatSink);
      },
    },
  );

  return <T>(
    ...sources: readonly DeferredSourceLike<T, TConsumer>[]
  ): DeferredSourceLike<T, TConsumer> => {
    const length = sources[Array_length];
    return length === 1 ? sources[0] : createConcatSource(sources);
  };
};

class CreateSource<T, TConsumer extends ConsumerLike<T>>
  implements DeferredSourceLike<T, TConsumer>
{
  static readonly [ComputationLike_isDeferred]?: true = true as const;

  readonly [ComputationLike_isPure]?: boolean | undefined;
  readonly [ComputationLike_isSynchronous]?: boolean | undefined;
  private readonly [CreateSource_effect]: SideEffect1<TConsumer>;

  constructor(
    effect: SideEffect1<TConsumer>,
    config: Optional<ComputationLike>,
  ) {
    this[CreateSource_effect] = effect;
    this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
    this[ComputationLike_isSynchronous] =
      config?.[ComputationLike_isSynchronous];
  }

  [SourceLike_subscribe](listener: TConsumer): void {
    try {
      this[CreateSource_effect](listener);
    } catch (e) {
      listener[DisposableLike_dispose](error(e));
    }
  }
}

export const create: Signature["create"] = (<
  T,
  TConsumer extends ConsumerLike<T>,
  TComputation extends ComputationLike = ComputationLike,
>(
  effect: SideEffect1<TConsumer>,
  options?: TComputation,
): DeferredSourceLike<T, TConsumer> =>
  newInstance(
    CreateSource<T, TConsumer>,
    effect,
    options,
  )) as Signature["create"];

export const createLifted: Signature["createLifted"] = /*@__PURE__*/ (<
  TIn,
  TOut,
  TConsumerIn extends ConsumerLike<TIn>,
  TConsumerOut extends ConsumerLike<TOut>,
>() => {
  const LiftedSource_liftedSinkToConsumer = Symbol(
    "LiftedSource_liftedSinkToConsumer",
  );

  type TProperties = {
    [LiftedSource_liftedSinkToConsumer]: Function1<
      LiftedSinkLike<TConsumerOut, unknown>,
      TConsumerIn
    >;
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [LiftedSourceLike_source]: DeferredSourceLike<TIn, TConsumerIn>;
    [LiftedSourceLike_sink]: ReadonlyArray<
      Function1<
        LiftedSinkLike<TConsumerOut, unknown>,
        LiftedSinkLike<TConsumerOut, unknown>
      >
    >;
  };

  type TPrototype = {
    [ComputationLike_isDeferred]?: true;
    [SourceLike_subscribe](observer: TConsumerOut): void;
  };

  return mixInstanceFactory(
    function LiftedObservable(
      this: TProperties & TPrototype,
      source: DeferredSourceLike<TIn, TConsumerIn>,
      op: Function1<
        LiftedSinkLike<TConsumerOut, TOut>,
        LiftedSinkLike<TConsumerOut, TIn>
      >,
      liftedSinkToConsumer: Function1<
        LiftedSinkLike<TConsumerOut, unknown>,
        TConsumerIn
      >,
      config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
      },
    ): DeferredSourceLike<TOut, TConsumerOut> {
      const liftedSource: DeferredSourceLike<TIn, TConsumerIn> =
        (source as any)[LiftedSourceLike_source] ?? source;

      const ops = [op, ...((source as any)[LiftedSourceLike_sink] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_sink] = ops;
      this[LiftedSource_liftedSinkToConsumer] = liftedSinkToConsumer;
      this[ComputationLike_isSynchronous] =
        Computation_isSynchronous(source) &&
        Computation_isSynchronous(config ?? {});
      this[ComputationLike_isPure] =
        Computation_isPure(source) && Computation_isPure(config ?? {});

      return this;
    },
    props<TProperties>({
      [LiftedSource_liftedSinkToConsumer]: none,
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_sink]: none,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    }),
    proto<TPrototype>({
      [ComputationLike_isDeferred]: true as const,

      [SourceLike_subscribe](this: TProperties, observer: TConsumerOut) {
        const source = this[LiftedSourceLike_source];
        const destinationOp: TConsumerIn = pipeUnsafe(
          observer,
          Sink.toLiftedSink(),
          ...this[LiftedSourceLike_sink],
          this[LiftedSource_liftedSinkToConsumer],
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})() as Signature["createLifted"];

export const merge: Signature["merge"] = <TConsumer extends ConsumerLike>(
  createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
    TConsumer,
    TConsumer
  >,
) => {
  const MergeSource_sources = Symbol("MergeSource_sources");

  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [MergeSource_sources]: readonly DeferredSourceLike<unknown, TConsumer>[];
  };

  const isMergeSource = (
    observable: DeferredSourceLike<unknown, TConsumer>,
  ): observable is DeferredSourceLike<unknown, TConsumer> & TProperties =>
    isSome((observable as any)[MergeSource_sources]);

  const flattenSources = (
    sources: readonly DeferredSourceLike<unknown, TConsumer>[],
  ): readonly DeferredSourceLike<unknown, TConsumer>[] =>
    sources.some(isMergeSource)
      ? sources.flatMap(observable =>
          isMergeSource(observable)
            ? flattenSources(observable[MergeSource_sources])
            : observable,
        )
      : sources;

  const createMergeSource = mixInstanceFactory(
    function ConcatSource(
      this: TProperties & DeferredSourceLike<unknown, TConsumer>,
      sources: readonly DeferredSourceLike<unknown, TConsumer>[],
    ): DeferredSourceLike<unknown, TConsumer> {
      this[ComputationLike_isPure] = Computation_areAllPure(sources);
      this[ComputationLike_isSynchronous] =
        Computation_areAllSynchronous(sources);
      this[MergeSource_sources] = flattenSources(sources);

      return this;
    },
    props<TProperties>({
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
      [MergeSource_sources]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,

      [SourceLike_subscribe](this: TProperties, consumer: TConsumer): void {
        const { [MergeSource_sources]: sources } = this;
        const count = sources[Array_length];
        let completed = 0;

        for (const source of sources) {
          pipe(
            createDelegatingNotifyOnlyNonCompletingNonDisposingSink(consumer),
            Disposable.addTo(consumer),
            DisposableContainer.onComplete(() => {
              completed++;
              if (completed >= count) {
                consumer[SinkLike_complete]();
              }
            }),
            bindMethod(source, SourceLike_subscribe),
          );
        }
      },
    },
  );

  return <T>(
    ...sources: readonly DeferredSourceLike<T, TConsumer>[]
  ): DeferredSourceLike<T, TConsumer> => {
    const length = sources[Array_length];
    return length === 1 ? sources[0] : createMergeSource(sources);
  };
};

export const takeLast: Signature["takeLast"] = memoize(
  m =>
    <TConsumer extends ConsumerLike<T>, T>(
      takeLast: (
        consumer: TConsumer,
        count: number,
      ) => TConsumer & IterableLike<T>,
      options?: { readonly count?: number },
    ) =>
    (obs: DeferredSourceLike<T, TConsumer>) =>
      create<T, TConsumer>(consumer => {
        const count = options?.count ?? 1;

        const takeLastSink = pipe(
          takeLast(consumer, count),
          Disposable.addTo(consumer),
          DisposableContainer.onComplete(() =>
            pipe(
              m.genPure(bindMethod(takeLastSink, Symbol.iterator)),
              invoke(SourceLike_subscribe, consumer),
            ),
          ),
        );

        pipe(obs, invoke(SourceLike_subscribe, takeLastSink));
      }, obs),
);
