import { Array_length } from "../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../__internal__/mixins.js";
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
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  SinkLike,
  SinkLike_complete,
} from "../../utils.js";
import Computation_areAllPure from "../Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "../Computation/__private__/Computation.areAllSynchronous.js";
const CreateSource_effect = Symbol("CreateSource_effect");

interface Signature {
  catchError<
    T,
    TSource extends DeferredSourceLike<T, TSink>,
    TSink extends SinkLike<T>,
  >(
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
      TSink,
      TSink
    >,
    errorHandler: SideEffect1<Error> | Function1<Error, TSource>,
    options?: {
      readonly innerType?: HigherOrderInnerComputationLike;
    },
  ): Function1<TSource, DeferredSourceLike<T, TSink>>;

  concat<TSink extends SinkLike>(
    createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
      TSink,
      TSink
    >,
  ): <T>(
    ...sources: readonly DeferredSourceLike<T, TSink>[]
  ) => DeferredSourceLike<T, TSink>;

  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
  ): DeferredSourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredSourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): DeferredSourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): DeferredSourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): DeferredSourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: boolean;
      readonly [ComputationLike_isSynchronous]?: boolean;
    },
  ): DeferredSourceLike<T, TListener>;

  takeLast<
    TComputationModule extends PickComputationModule<
      ComputationModule,
      "genPure"
    >,
  >(
    m: TComputationModule,
  ): <TSink extends SinkLike<T>, T>(
    takeLast: (sink: TSink, count: number) => TSink & IterableLike<T>,
    options?: { readonly count?: number },
  ) => Function1<DeferredSourceLike<T, TSink>, DeferredSourceLike<T, TSink>>;
}

export const catchError: Signature["catchError"] =
  <T, TSource extends DeferredSourceLike<T, TSink>, TSink extends SinkLike<T>>(
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
      TSink,
      TSink
    >,
    errorHandler: SideEffect1<Error> | Function1<Error, TSource>,
    options?: {
      readonly innerType?: HigherOrderInnerComputationLike;
    },
  ) =>
  (source: TSource): DeferredSourceLike<T, TSink> =>
    create<T, TSink>(
      sink => {
        const onErrorSink = pipe(
          createDelegatingNotifyOnlyNonCompletingNonDisposing(sink),
          Disposable.addToContainer(sink),
          DisposableContainer.onError(err => {
            let action: Optional<TSource> = none;
            try {
              action = errorHandler(err) as Optional<TSource>;
            } catch (e) {
              sink[DisposableLike_dispose](error([error(e), err]));
            }

            if (isSome(action)) {
              action[SourceLike_subscribe](sink);
            } else {
              sink[SinkLike_complete]();
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

export const concat: Signature["concat"] = <TSink extends SinkLike>(
  createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<
    TSink,
    TSink
  >,
) => {
  const ConcatSinkCtx_delegate = Symbol("ConcatSinkCtx_delegate");
  const ConcatSinkCtx_sources = Symbol("ConcatSinkCtx_sources");
  const ConcatSinkCtx_nextIndex = Symbol("ConcatSinkCtx_nextIndex");

  type ConcatSinkCtx = {
    readonly [ConcatSinkCtx_delegate]: TSink;
    readonly [ConcatSinkCtx_sources]: readonly DeferredSourceLike<
      unknown,
      TSink
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
    [ConcatSource_sources]: readonly DeferredSourceLike<unknown, TSink>[];
  };

  const isConcatSource = (
    observable: DeferredSourceLike<unknown, TSink>,
  ): observable is DeferredSourceLike<unknown, TSink> & TProperties =>
    isSome((observable as any)[ConcatSource_sources]);

  const flattenSources = (
    sources: readonly DeferredSourceLike<unknown, TSink>[],
  ): readonly DeferredSourceLike<unknown, TSink>[] =>
    sources.some(isConcatSource)
      ? sources.flatMap(observable =>
          isConcatSource(observable)
            ? flattenSources(observable[ConcatSource_sources])
            : observable,
        )
      : sources;

  const createConcatSource = mixInstanceFactory(
    function ConcatSource(
      this: TProperties & DeferredSourceLike<unknown, TSink>,
      sources: readonly DeferredSourceLike<unknown, TSink>[],
    ): DeferredSourceLike<unknown, TSink> {
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

      [SourceLike_subscribe](this: TProperties, sink: TSink): void {
        const { [ConcatSource_sources]: sources } = this;

        const concatSink = createConcatSink({
          [ConcatSinkCtx_delegate]: sink,
          [ConcatSinkCtx_sources]: sources,
          [ConcatSinkCtx_nextIndex]: 1,
        });

        sources[0][SourceLike_subscribe](concatSink);
      },
    },
  );

  return <T>(
    ...sources: readonly DeferredSourceLike<T, TSink>[]
  ): DeferredSourceLike<T, TSink> => {
    const length = sources[Array_length];
    return length === 1 ? sources[0] : createConcatSource(sources);
  };
};

class CreateSource<T, TListener extends EventListenerLike<T>>
  implements DeferredSourceLike<T, TListener>
{
  static readonly [ComputationLike_isDeferred]?: true = true as const;

  readonly [ComputationLike_isPure]?: boolean | undefined;
  readonly [ComputationLike_isSynchronous]?: boolean | undefined;
  private readonly [CreateSource_effect]: SideEffect1<TListener>;

  constructor(
    effect: SideEffect1<TListener>,
    config: Optional<ComputationLike>,
  ) {
    this[CreateSource_effect] = effect;
    this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
    this[ComputationLike_isSynchronous] =
      config?.[ComputationLike_isSynchronous];
  }

  [SourceLike_subscribe](listener: TListener): void {
    try {
      this[CreateSource_effect](listener);
    } catch (e) {
      listener[DisposableLike_dispose](error(e));
    }
  }
}

export const create: Signature["create"] = (<
  T,
  TListener extends EventListenerLike<T>,
  TComputation extends ComputationLike = ComputationLike,
>(
  effect: SideEffect1<TListener>,
  options?: TComputation,
): DeferredSourceLike<T, TListener> =>
  newInstance(
    CreateSource<T, TListener>,
    effect,
    options,
  )) as Signature["create"];

export const takeLast: Signature["takeLast"] = memoize(
  m =>
    <TSink extends SinkLike<T>, T>(
      takeLast: (sink: TSink, count: number) => TSink & IterableLike<T>,
      options?: { readonly count?: number },
    ) =>
    (obs: DeferredSourceLike<T, TSink>) =>
      create<T, TSink>(sink => {
        const count = options?.count ?? 1;

        const takeLastSink = pipe(
          takeLast(sink, count),
          Disposable.addTo(sink),
          DisposableContainer.onComplete(() =>
            pipe(
              m.genPure(bindMethod(takeLastSink, Symbol.iterator)),
              invoke(SourceLike_subscribe, sink),
            ),
          ),
        );

        pipe(obs, invoke(SourceLike_subscribe, takeLastSink));
      }, obs),
);
