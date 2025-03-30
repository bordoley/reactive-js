import { Array_length } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
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
  SequentialComputationModule,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  alwaysTrue,
  bind,
  bindMethod,
  error,
  invoke,
  isFunction,
  isNone,
  isSome,
  memoize,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Sink from "../../utils/__internal__/Sink.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import Computation_areAllPure from "../Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "../Computation/__private__/Computation.areAllSynchronous.js";
import Computation_isPure from "../Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "../Computation/__private__/Computation.isSynchronous.js";
import Computation_startWith from "../Computation/__private__/Computation.startWith.js";

import {
  LatestEventListenerContextLike,
  LatestEventListenerLike,
  LatestEventListenerMode,
} from "../__mixins__/LatestEventListenerMixin.js";
import LatestSourceMixin from "../__mixins__/LatestSourceMixin.js";
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

  latest<
    TConsumer extends ConsumerLike<ReadonlyArray<unknown>>,
    TSource extends DeferredSourceLike<unknown, TSourceConsumer>,
    TSourceConsumer extends ConsumerLike<unknown> &
      LatestEventListenerLike<unknown>,
  >(
    sources: readonly TSource[],
    mode: LatestEventListenerMode,
    createLatestEventListener: Function2<
      TConsumer,
      LatestEventListenerContextLike,
      TSourceConsumer
    >,
  ): DeferredSourceLike<ReadonlyArray<unknown>, TConsumer>;

  merge<TConsumer extends ConsumerLike>(
    createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
      TConsumer,
      TConsumer
    >,
  ): <T>(
    ...sources: readonly DeferredSourceLike<T, TConsumer>[]
  ) => DeferredSourceLike<T, TConsumer>;

  repeat<TConsumer extends ConsumerLike<T>, T>(
    createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
      TConsumer,
      TConsumer
    >,
    predicate: Optional<Predicate<number> | number>,
  ): Function1<
    DeferredSourceLike<T, TConsumer>,
    DeferredSourceLike<T, TConsumer>
  >;

  retry<TConsumer extends ConsumerLike<T>, T>(
    createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
      TConsumer,
      TConsumer
    >,
    shouldRetry?: (count: number, error: Error) => boolean,
  ): Function1<
    DeferredSourceLike<T, TConsumer>,
    DeferredSourceLike<T, TConsumer>
  >;

  scanDistinct<
    TModule extends PickComputationModule<
      ComputationModule & SequentialComputationModule,
      "genPure" | "concat" | "distinctUntilChanged" | "scan"
    >,
  >(
    m: TModule,
  ): <
    T,
    TAcc,
    TConsumer extends ConsumerLike<T>,
    TAccConsumer extends ConsumerLike<TAcc>,
  >(
    reducer: Reducer<T, TAcc>,
    initialState: Factory<TAcc>,
    options?: { readonly equality?: Equality<TAcc> },
  ) => Function1<
    DeferredSourceLike<T, TConsumer>,
    DeferredSourceLike<TAcc, TAccConsumer>
  >;

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

export const scanDistinct: Signature["scanDistinct"] = memoize(
  m =>
    <
      T,
      TAcc,
      TConsumer extends ConsumerLike<T>,
      TAccConsumer extends ConsumerLike<TAcc>,
    >(
      reducer: Reducer<T, TAcc>,
      initialState: Factory<TAcc>,
      options?: { readonly equality?: Equality<TAcc> },
    ) =>
    (source: DeferredSourceLike<T, TConsumer>) =>
      create<TAcc, TAccConsumer>(
        consumer => {
          const acc: TAcc = initialState();

          const lifted = pipe(
            source,
            m.scan<T, TAcc>(reducer, returns(acc)),
            Computation_startWith(m)<TAcc>(acc),
            m.distinctUntilChanged<TAcc>(options),
          );

          lifted[SourceLike_subscribe](consumer);
        },

        source,
      ),
);

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

export const latest: Signature["latest"] = /*@__PURE__*/ (<
  T,
  TConsumer extends ConsumerLike<ReadonlyArray<T>>,
  TSource extends DeferredSourceLike<T, TSourceConsumer>,
  TSourceConsumer extends ConsumerLike<T> & LatestEventListenerLike<T>,
>() => {
  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  };

  type TPrototype = {
    [ComputationLike_isDeferred]: true;
  };

  return mixInstanceFactory(
    include(LatestSourceMixin()),
    function DeferredLatestSource(
      this: TProperties & TPrototype,
      sources: readonly TSource[],
      mode: LatestEventListenerMode,
      createLatestEventListener: Function2<
        TConsumer,
        LatestEventListenerContextLike,
        TSourceConsumer
      >,
    ): DeferredSourceLike<ReadonlyArray<T>, TConsumer> {
      init(
        LatestSourceMixin<T, TConsumer, TSource, TSourceConsumer>(),
        this,
        sources,
        mode,
        createLatestEventListener,
      );
      this[ComputationLike_isPure] = Computation_areAllPure(sources);
      this[ComputationLike_isSynchronous] =
        Computation_areAllSynchronous(sources);

      return this;
    },
    props<TProperties>({
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    }),
    proto<TPrototype>({
      [ComputationLike_isDeferred]: true as const,
    }),
  );
})();

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

export const repeat: Signature["repeat"] = (<
    TConsumer extends ConsumerLike<T>,
    T,
  >(
    createDelegatingNotifyOnlyNonCompletingNonDisposingConsumer: Function1<
      TConsumer,
      TConsumer
    >,
    shouldRepeat: Optional<Predicate<number> | number>,
  ) =>
  (src: DeferredSourceLike<T, TConsumer>) =>
    create<T, TConsumer>((consumer: TConsumer) => {
      const repeatPredicate = isFunction(shouldRepeat)
        ? shouldRepeat
        : isNone(shouldRepeat)
          ? alwaysTrue
          : (count: number) => count < shouldRepeat;

      let count = 0;

      const onDelegateConsumerCompleted = () => {
        const consumerIsCompleted = consumer[SinkLike_isCompleted];
        if (consumerIsCompleted) {
          return;
        }

        count++;

        try {
          const shouldRepeat = repeatPredicate(count);

          if (shouldRepeat) {
            src[SourceLike_subscribe](createDelegateConsumer());
          } else {
            consumer[SinkLike_complete]();
          }
        } catch (e) {
          consumer[DisposableLike_dispose](error(e));
        }
      };

      const createDelegateConsumer = () =>
        pipe(
          consumer,
          createDelegatingNotifyOnlyNonCompletingNonDisposingConsumer,
          DisposableContainer.onComplete(onDelegateConsumerCompleted),
          Disposable.addTo(consumer),
        );
      src[SourceLike_subscribe](createDelegateConsumer());
    }, src)) as Signature["repeat"];

export const retry: Signature["retry"] = (<
    TConsumer extends ConsumerLike<T>,
    T,
  >(
    createDelegatingNotifyOnlyNonCompletingNonDisposingConsumer: Function1<
      TConsumer,
      TConsumer
    >,
    shouldRetry?: (count: number, error: Error) => boolean,
  ) =>
  (src: DeferredSourceLike<T, TConsumer>) =>
    create<T, TConsumer>((consumer: TConsumer) => {
      const retryFunction = shouldRetry ?? alwaysTrue;

      let count = 0;

      const onDelegateConsumerError = (e: Error) => {
        const consumerIsCompleted = consumer[SinkLike_isCompleted];
        if (consumerIsCompleted) {
          return;
        }

        count++;

        try {
          const shouldRetry = retryFunction(count, e);

          if (shouldRetry) {
            src[SourceLike_subscribe](createDelegateConsumer());
          } else {
            consumer[DisposableLike_dispose](e);
          }
        } catch (eRetry) {
          consumer[DisposableLike_dispose](error([e, eRetry]));
        }
      };

      const createDelegateConsumer = () =>
        pipe(
          consumer,
          createDelegatingNotifyOnlyNonCompletingNonDisposingConsumer,
          DisposableContainer.onError(onDelegateConsumerError),
          DisposableContainer.onComplete(
            bindMethod(consumer, SinkLike_complete),
          ),
        );
      src[SourceLike_subscribe](createDelegateConsumer());
    }, src)) as Signature["retry"];

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
