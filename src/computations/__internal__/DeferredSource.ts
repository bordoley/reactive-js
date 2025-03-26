import { Array_length } from "../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../__internal__/mixins.js";
import {
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  HigherOrderInnerComputationLike,
  SourceLike,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  bind,
  bindMethod,
  error,
  isSome,
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
import * as Computation from "../Computation.js";

const CreateSource_effect = Symbol("CreateSource_effect");

interface Signature {
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]?: true;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]: false;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
  };
  create<T, TListener extends EventListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: boolean;
      readonly [ComputationLike_isSynchronous]?: boolean;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isDeferred]?: true;
  };
}

class CreateSource<T, TListener extends EventListenerLike<T>>
  implements SourceLike<T, TListener>
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
): SourceLike<T, TListener> =>
  newInstance(
    CreateSource<T, TListener>,
    effect,
    options,
  )) as Signature["create"];

export const catchError =
  <T, TContinueSource extends SourceLike<T, TSink>, TSink extends SinkLike<T>>(
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
      TSink,
      TSink
    >,
    errorHandler: SideEffect1<Error> | Function1<Error, TContinueSource>,
    options?: {
      readonly innerType?: HigherOrderInnerComputationLike;
    },
  ) =>
  (source: TContinueSource) =>
    create<T, TSink>(
      observer => {
        const onErrorSink = pipe(
          createDelegatingNotifyOnlyNonCompletingNonDisposing(observer),
          Disposable.addToContainer(observer),
          DisposableContainer.onError(err => {
            let action: Optional<TContinueSource> = none;
            try {
              action = errorHandler(err) as Optional<TContinueSource>;
            } catch (e) {
              observer[DisposableLike_dispose](error([error(e), err]));
            }

            if (isSome(action)) {
              action[SourceLike_subscribe](observer);
            } else {
              observer[SinkLike_complete]();
            }
          }),
        );

        source[SourceLike_subscribe](onErrorSink);
      },
      {
        [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
        [ComputationLike_isSynchronous]: Computation.isSynchronous(
          options?.innerType ?? {},
        ),
      },
    );

export const creatConcat = <
  TSink extends SinkLike,
  TComputationModule extends Pick<ComputationModule, "genPure"> & {
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
      TSink,
      TSink
    >;
  },
>(
  m: TComputationModule,
) => {
  const ConcatSinkCtx_delegate = Symbol("ConcatSinkCtx_delegate");
  const ConcatSinkCtx_sources = Symbol("ConcatSinkCtx_sources");
  const ConcatSinkCtx_nextIndex = Symbol("ConcatSinkCtx_nextIndex");

  type ConcatSinkCtx = {
    readonly [ConcatSinkCtx_delegate]: TSink;
    readonly [ConcatSinkCtx_sources]: readonly SourceLike<unknown, TSink>[];
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
      m.createDelegatingNotifyOnlyNonCompletingNonDisposing(delegate),
      Disposable.addTo(delegate),
      DisposableContainer.onComplete(bind(onConcatSinkComplete, ctx)),
    );
  };

  const ConcatSource_sources = Symbol("ConcatSource_sources");

  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [ConcatSource_sources]: readonly SourceLike<unknown, TSink>[];
  };

  const isConcatSource = (
    observable: SourceLike<unknown, TSink>,
  ): observable is SourceLike<unknown, TSink> & TProperties =>
    isSome((observable as any)[ConcatSource_sources]);

  const flattenSources = (
    sources: readonly SourceLike<unknown, TSink>[],
  ): readonly SourceLike<unknown, TSink>[] =>
    sources.some(isConcatSource)
      ? sources.flatMap(observable =>
          isConcatSource(observable)
            ? flattenSources(observable[ConcatSource_sources])
            : observable,
        )
      : sources;

  const createConcatSource = mixInstanceFactory(
    function ConcatSource(
      this: TProperties & SourceLike<unknown, TSink>,
      sources: readonly SourceLike<unknown, TSink>[],
    ): SourceLike<unknown, TSink> {
      this[ComputationLike_isPure] = Computation.areAllPure(sources);
      this[ComputationLike_isSynchronous] =
        Computation.areAllSynchronous(sources);
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

      [SourceLike_subscribe](this: TProperties, observer: TSink): void {
        const { [ConcatSource_sources]: sources } = this;

        pipe(
          createConcatSink({
            [ConcatSinkCtx_delegate]: observer,
            [ConcatSinkCtx_sources]: sources,
            [ConcatSinkCtx_nextIndex]: 1,
          }),
          bindMethod(sources[0], SourceLike_subscribe),
        );
      },
    },
  );

  return <T>(...sources: readonly SourceLike<T, TSink>[]) => {
    const length = sources[Array_length];
    return length === 0
      ? Computation.empty(m)()
      : length === 1
        ? sources[0]
        : createConcatSource(sources);
  };
};
