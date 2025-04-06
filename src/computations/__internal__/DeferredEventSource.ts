import { Array_length } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import {
  BroadcasterLike,
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DeferredEventSourceLike,
  EventSourceLike_subscribe,
} from "../../computations.js";
import {
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  SideEffect1,
  alwaysTrue,
  bind,
  bindMethod,
  error,
  invoke,
  isFunction,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Sink from "../../utils/__internal__/Sink.js";
import {
  CollectionEnumeratorLike,
  ConsumerLike,
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import Computation_areAllPure from "../Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "../Computation/__private__/Computation.areAllSynchronous.js";
import Computation_isPure from "../Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "../Computation/__private__/Computation.isSynchronous.js";

import {
  LatestEventListenerContextLike,
  LatestEventListenerLike,
  LatestEventListenerMode,
} from "../__mixins__/LatestEventListenerMixin.js";
import LatestSourceMixin from "../__mixins__/LatestSourceMixin.js";
import {
  LiftedEventSourceLike_sink,
  LiftedEventSourceLike_source,
  LiftedSinkLike,
} from "./LiftedSource.js";

const CreateSource_effect = Symbol("CreateSource_effect");

interface Signature {
  catchError<
    T,
    TSource extends DeferredEventSourceLike<T, TConsumer>,
    TConsumer extends ConsumerLike<T>,
  >(
    createDelegatingCatchErrorConsumer: Function1<TConsumer, TConsumer>,
    errorHandler: SideEffect1<Error> | Function1<Error, TSource>,
    options?: {
      [ComputationLike_isPure]?: boolean;
    },
  ): Function1<TSource, DeferredEventSourceLike<T, TConsumer>>;

  concat<TConsumer extends ConsumerLike>(
    createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>,
  ): <T>(
    ...sources: readonly DeferredEventSourceLike<T, TConsumer>[]
  ) => DeferredEventSourceLike<T, TConsumer>;

  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
  ): DeferredEventSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredEventSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredEventSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): DeferredEventSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): DeferredEventSourceLike<T, TConsumer> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TConsumer extends ConsumerLike<T>>(
    effect: SideEffect1<TConsumer>,
    config: {
      readonly [ComputationLike_isPure]?: boolean;
      readonly [ComputationLike_isSynchronous]?: boolean;
    },
  ): DeferredEventSourceLike<T, TConsumer>;

  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredEventSourceLike<TIn, TConsumerIn>,
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
  ): DeferredEventSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isPure]?: true;
    [ComputationLike_isSynchronous]?: true;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredEventSourceLike<TIn, TConsumerIn>,
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
  ): DeferredEventSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isPure]?: true;
    [ComputationLike_isSynchronous]: false;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredEventSourceLike<TIn, TConsumerIn>,
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
  ): DeferredEventSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]?: true;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredEventSourceLike<TIn, TConsumerIn>,
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
  ): DeferredEventSourceLike<TOut, TConsumerOut> & {
    [ComputationLike_isSynchronous]: false;
  };
  createLifted<
    TIn,
    TOut,
    TConsumerIn extends ConsumerLike<TIn>,
    TConsumerOut extends ConsumerLike<TOut>,
  >(
    src: DeferredEventSourceLike<TIn, TConsumerIn>,
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
  ): DeferredEventSourceLike<TOut, TConsumerOut>;

  forkMerge<
    TIn,
    TConsumer extends ConsumerLike<TIn>,
    TOut,
    TOutConsumer extends ConsumerLike<TOut>,
  >(
    toBroadcaster: (options?: {
      scheduler?: TOutConsumer;
      autoDispose?: boolean;
    }) => Function1<
      DeferredEventSourceLike<TIn, TConsumer>,
      BroadcasterLike<TIn>
    >,
    fromBroadcaster: () => Function1<
      BroadcasterLike<TIn>,
      DeferredEventSourceLike<TIn, TConsumer>
    >,
    merge: (
      ...sources: readonly DeferredEventSourceLike<TOut, TOutConsumer>[]
    ) => DeferredEventSourceLike<TOut, TOutConsumer>,
    ops: readonly [
      ...Function1<
        DeferredEventSourceLike<TIn, TConsumer>,
        DeferredEventSourceLike<TOut, TOutConsumer>
      >[],
      {
        [ComputationLike_isPure]?: boolean;
      },
    ],
  ): Function1<
    DeferredEventSourceLike<TIn, TConsumer>,
    DeferredEventSourceLike<TOut, TOutConsumer>
  >;

  latest<
    TConsumer extends ConsumerLike<ReadonlyArray<unknown>>,
    TSource extends DeferredEventSourceLike<unknown, TSourceConsumer>,
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
  ): DeferredEventSourceLike<ReadonlyArray<unknown>, TConsumer>;

  merge<TConsumer extends ConsumerLike>(
    createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>,
  ): <T>(
    ...sources: readonly DeferredEventSourceLike<T, TConsumer>[]
  ) => DeferredEventSourceLike<T, TConsumer>;

  repeat<TConsumer extends ConsumerLike<T>, T>(
    createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>,
    predicate: Optional<Predicate<number> | number>,
  ): Function1<
    DeferredEventSourceLike<T, TConsumer>,
    DeferredEventSourceLike<T, TConsumer>
  >;

  takeLast<TConsumer extends ConsumerLike<T>, T>(
    genPure: (
      factory: Factory<Iterator<T>>,
    ) => DeferredEventSourceLike<T, TConsumer>,
    takeLast: (
      count: number,
      consumer: TConsumer,
    ) => TConsumer & CollectionEnumeratorLike<T>,
    options?: { readonly count?: number },
  ): Function1<
    DeferredEventSourceLike<T, TConsumer>,
    DeferredEventSourceLike<T, TConsumer>
  >;

  withEffect<T, TConsumer extends ConsumerLike<T>>(
    effect: () => void | DisposableLike | SideEffect1<Optional<Error>>,
  ): Function1<
    DeferredEventSourceLike<T, TConsumer>,
    DeferredEventSourceLike<T, TConsumer> & {
      [ComputationLike_isPure]: false;
    }
  >;
}

export const catchError: Signature["catchError"] =
  <
    T,
    TSource extends DeferredEventSourceLike<T, TConsumer>,
    TConsumer extends ConsumerLike<T>,
  >(
    createDelegatingCatchErrorConsumer: Function1<TConsumer, TConsumer>,
    errorHandler: SideEffect1<Error> | Function1<Error, TSource>,
    options?: {
      [ComputationLike_isPure]?: boolean;
    },
  ) =>
  (source: TSource): DeferredEventSourceLike<T, TConsumer> =>
    create<T, TConsumer>(
      consumer => {
        const onErrorSink = pipe(
          createDelegatingCatchErrorConsumer(consumer),
          DisposableContainer.onError(err => {
            let action: Optional<TSource> = none;
            try {
              action = errorHandler(err) as Optional<TSource>;
            } catch (e) {
              consumer[DisposableLike_dispose](error([error(e), err]));
            }

            if (isSome(action)) {
              action[EventSourceLike_subscribe](consumer);
            } else {
              consumer[SinkLike_complete]();
            }
          }),
        );

        source[EventSourceLike_subscribe](onErrorSink);
      },
      {
        [ComputationLike_isPure]: options?.[ComputationLike_isPure],
      },
    );

export const concat: Signature["concat"] = <TConsumer extends ConsumerLike>(
  createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>,
) => {
  const ConcatSinkCtx_delegate = Symbol("ConcatSinkCtx_delegate");
  const ConcatSinkCtx_sources = Symbol("ConcatSinkCtx_sources");
  const ConcatSinkCtx_nextIndex = Symbol("ConcatSinkCtx_nextIndex");

  type ConcatSinkCtx = {
    readonly [ConcatSinkCtx_delegate]: TConsumer;
    readonly [ConcatSinkCtx_sources]: readonly DeferredEventSourceLike<
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
      sources[next][EventSourceLike_subscribe](concatSink);
    } else {
      delegate[SinkLike_complete]();
    }
  }

  const createConcatSink = (ctx: ConcatSinkCtx) => {
    const delegate = ctx[ConcatSinkCtx_delegate];
    return pipe(
      createDelegatingNonCompletingConsumer(delegate),
      DisposableContainer.onComplete(bind(onConcatSinkComplete, ctx)),
    );
  };

  const ConcatSource_sources = Symbol("ConcatSource_sources");

  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [ConcatSource_sources]: readonly DeferredEventSourceLike<
      unknown,
      TConsumer
    >[];
  };

  const isConcatSource = (
    observable: DeferredEventSourceLike<unknown, TConsumer>,
  ): observable is DeferredEventSourceLike<unknown, TConsumer> & TProperties =>
    isSome((observable as any)[ConcatSource_sources]);

  const flattenSources = (
    sources: readonly DeferredEventSourceLike<unknown, TConsumer>[],
  ): readonly DeferredEventSourceLike<unknown, TConsumer>[] =>
    sources.some(isConcatSource)
      ? sources.flatMap(observable =>
          isConcatSource(observable)
            ? flattenSources(observable[ConcatSource_sources])
            : observable,
        )
      : sources;

  const createConcatSource = mixInstanceFactory(
    function ConcatSource(
      this: TProperties & DeferredEventSourceLike<unknown, TConsumer>,
      sources: readonly DeferredEventSourceLike<unknown, TConsumer>[],
    ): DeferredEventSourceLike<unknown, TConsumer> {
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

      [EventSourceLike_subscribe](
        this: TProperties,
        consumer: TConsumer,
      ): void {
        const { [ConcatSource_sources]: sources } = this;

        if (sources.length === 0) {
          consumer[DisposableLike_dispose]();
        }

        const concatSink = createConcatSink({
          [ConcatSinkCtx_delegate]: consumer,
          [ConcatSinkCtx_sources]: sources,
          [ConcatSinkCtx_nextIndex]: 1,
        });

        sources[0][EventSourceLike_subscribe](concatSink);
      },
    },
  );

  return <T>(
    ...sources: readonly DeferredEventSourceLike<T, TConsumer>[]
  ): DeferredEventSourceLike<T, TConsumer> => {
    const length = sources[Array_length];
    return length === 1 ? sources[0] : createConcatSource(sources);
  };
};

class CreateSource<T, TConsumer extends ConsumerLike<T>>
  implements DeferredEventSourceLike<T, TConsumer>
{
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isSynchronous]: Optional<boolean>;
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

  [EventSourceLike_subscribe](listener: TConsumer): void {
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
): DeferredEventSourceLike<T, TConsumer> =>
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
    [LiftedEventSourceLike_source]: DeferredEventSourceLike<TIn, TConsumerIn>;
    [LiftedEventSourceLike_sink]: ReadonlyArray<
      Function1<
        LiftedSinkLike<TConsumerOut, unknown>,
        LiftedSinkLike<TConsumerOut, unknown>
      >
    >;
  };

  type TPrototype = {
    [ComputationLike_isDeferred]: true;
    [EventSourceLike_subscribe](observer: TConsumerOut): void;
  };

  return mixInstanceFactory(
    function LiftedObservable(
      this: TProperties & TPrototype,
      source: DeferredEventSourceLike<TIn, TConsumerIn>,
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
    ): DeferredEventSourceLike<TOut, TConsumerOut> {
      const liftedSource: DeferredEventSourceLike<TIn, TConsumerIn> =
        (source as any)[LiftedEventSourceLike_source] ?? source;

      const ops = [op, ...((source as any)[LiftedEventSourceLike_sink] ?? [])];

      this[LiftedEventSourceLike_source] = liftedSource;
      this[LiftedEventSourceLike_sink] = ops;
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
      [LiftedEventSourceLike_source]: none,
      [LiftedEventSourceLike_sink]: none,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    }),
    proto<TPrototype>({
      [ComputationLike_isDeferred]: true as const,

      [EventSourceLike_subscribe](this: TProperties, observer: TConsumerOut) {
        const source = this[LiftedEventSourceLike_source];
        const destinationOp: TConsumerIn = pipeUnsafe(
          observer,
          Sink.toLiftedSink(),
          ...this[LiftedEventSourceLike_sink],
          this[LiftedSource_liftedSinkToConsumer],
        );
        source[EventSourceLike_subscribe](destinationOp);
      },
    }),
  );
})() as Signature["createLifted"];

export const forkMerge: Signature["forkMerge"] = (<
    TIn,
    TConsumer extends ConsumerLike<TIn>,
    TOut,
    TOutConsumer extends ConsumerLike<TOut>,
  >(
    toBroadcaster: (options?: {
      autoDispose?: boolean;
      scheduler?: TOutConsumer;
    }) => Function1<
      DeferredEventSourceLike<TIn, TConsumer>,
      BroadcasterLike<TIn>
    >,
    fromBroadcaster: () => Function1<
      BroadcasterLike<TIn>,
      DeferredEventSourceLike<TIn, TConsumer>
    >,
    merge: (
      ...sources: readonly DeferredEventSourceLike<TOut, TOutConsumer>[]
    ) => DeferredEventSourceLike<TOut, TOutConsumer>,
    args: readonly [
      ...Function1<
        DeferredEventSourceLike<TIn, TConsumer>,
        DeferredEventSourceLike<TOut, TOutConsumer>
      >[],
      {
        [ComputationLike_isPure]?: boolean;
      },
    ],
  ) =>
  (source: DeferredEventSourceLike<TIn, TConsumer>) => {
    const argsLength = args[Array_length];
    const lastArg = args[argsLength - 1];
    const maybeConfig: Optional<{ [ComputationLike_isPure]?: boolean }> =
      isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = (
      isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args
    ) as ReadonlyArray<
      Function1<
        DeferredEventSourceLike<TIn, TConsumer>,
        DeferredEventSourceLike<TOut, TOutConsumer>
      >
    >;
    const innerType = maybeConfig ?? {};
    const isPure = Computation_isPure(innerType) && Computation_isPure(source);

    return create<TOut, TOutConsumer>(
      (consumer: TOutConsumer) => {
        const broadcastedDeferredSource = pipe(
          source,
          toBroadcaster({ scheduler: consumer, autoDispose: true }),
          fromBroadcaster(),
        );

        const merged = pipe(
          ops,
          ReadonlyArray.map(op => op(broadcastedDeferredSource)),
          broadcasters => merge(...broadcasters),
        );
        merged[EventSourceLike_subscribe](consumer);
      },
      {
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: isPure,
      },
    );
  }) as Signature["forkMerge"];

export const latest: Signature["latest"] = /*@__PURE__*/ (<
  T,
  TConsumer extends ConsumerLike<ReadonlyArray<T>>,
  TSource extends DeferredEventSourceLike<T, TSourceConsumer>,
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
    ): DeferredEventSourceLike<ReadonlyArray<T>, TConsumer> {
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
  createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>,
) => {
  const MergeSource_sources = Symbol("MergeSource_sources");

  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [MergeSource_sources]: readonly DeferredEventSourceLike<
      unknown,
      TConsumer
    >[];
  };

  const isMergeSource = (
    observable: DeferredEventSourceLike<unknown, TConsumer>,
  ): observable is DeferredEventSourceLike<unknown, TConsumer> & TProperties =>
    isSome((observable as any)[MergeSource_sources]);

  const flattenSources = (
    sources: readonly DeferredEventSourceLike<unknown, TConsumer>[],
  ): readonly DeferredEventSourceLike<unknown, TConsumer>[] =>
    sources.some(isMergeSource)
      ? sources.flatMap(observable =>
          isMergeSource(observable)
            ? flattenSources(observable[MergeSource_sources])
            : observable,
        )
      : sources;

  const createMergeSource = mixInstanceFactory(
    function ConcatSource(
      this: TProperties & DeferredEventSourceLike<unknown, TConsumer>,
      sources: readonly DeferredEventSourceLike<unknown, TConsumer>[],
    ): DeferredEventSourceLike<unknown, TConsumer> {
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

      [EventSourceLike_subscribe](
        this: TProperties,
        consumer: TConsumer,
      ): void {
        const { [MergeSource_sources]: sources } = this;
        const count = sources[Array_length];
        let completed = 0;

        for (const source of sources) {
          pipe(
            createDelegatingNonCompletingConsumer(consumer),
            DisposableContainer.onComplete(() => {
              completed++;
              if (completed >= count) {
                consumer[SinkLike_complete]();
              }
            }),
            bindMethod(source, EventSourceLike_subscribe),
          );
        }
      },
    },
  );

  return <T>(
    ...sources: readonly DeferredEventSourceLike<T, TConsumer>[]
  ): DeferredEventSourceLike<T, TConsumer> => {
    const length = sources[Array_length];
    return length === 1 ? sources[0] : createMergeSource(sources);
  };
};

export const repeat: Signature["repeat"] = (<
    TConsumer extends ConsumerLike<T>,
    T,
  >(
    createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>,
    shouldRepeat: Optional<Predicate<number> | number>,
  ) =>
  (src: DeferredEventSourceLike<T, TConsumer>) =>
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
            src[EventSourceLike_subscribe](createDelegateConsumer());
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
          createDelegatingNonCompletingConsumer,
          DisposableContainer.onComplete(onDelegateConsumerCompleted),
        );
      src[EventSourceLike_subscribe](createDelegateConsumer());
    }, src)) as Signature["repeat"];

export const takeLast: Signature["takeLast"] =
  <TConsumer extends ConsumerLike<T>, T>(
    genPure: (
      factory: Factory<Iterator<T>>,
    ) => DeferredEventSourceLike<T, TConsumer>,
    takeLast: (
      count: number,
      consumer: TConsumer,
    ) => TConsumer & CollectionEnumeratorLike<T>,
    options?: { readonly count?: number },
  ) =>
  (obs: DeferredEventSourceLike<T, TConsumer>) =>
    create<T, TConsumer>(consumer => {
      const count = options?.count ?? 1;

      const takeLastSink = pipe(
        takeLast(count, consumer),
        Disposable.addTo(consumer),
        DisposableContainer.onComplete(() => {
          genPure(function* TakeLast() {
            while (takeLastSink[EnumeratorLike_moveNext]()) {
              yield takeLastSink[EnumeratorLike_current];
            }
          })[EventSourceLike_subscribe](consumer);
        }),
      );

      pipe(obs, invoke(EventSourceLike_subscribe, takeLastSink));
    }, obs);

export const withEffect: Signature["withEffect"] = (effect => source =>
  create(
    consumer => {
      const cleanup = effect();
      if (isSome(cleanup) && isFunction(cleanup)) {
        consumer[DisposableContainerLike_add](cleanup);
      } else if (isSome(cleanup)) {
        pipe(consumer, Disposable.add(cleanup as DisposableLike));
      }
      source[EventSourceLike_subscribe](consumer);
    },
    {
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: source[ComputationLike_isSynchronous],
    },
  )) as Signature["withEffect"];
