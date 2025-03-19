import {
  Mixin3,
  createInstanceFactory,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  MulticastComputationLike,
  SourceLike,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  newInstance,
  none,
  pipeUnsafe,
  returns,
} from "../../functions.js";
import DelegatingDisposableContainerMixin from "../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  ListenerLike,
} from "../../utils.js";
import * as Computation from "../Computation.js";

const LiftedSourceMixin: <
  TIn,
  TOut,
  TListenerIn extends ListenerLike<TIn>,
  TListenerOut extends ListenerLike<TOut>,
  TComputation extends ComputationLike = ComputationLike,
>() => Mixin3<
  SourceLike<TOut, TListenerOut>,
  SourceLike<TIn, TListenerIn>,
  Function1<TListenerOut, TListenerIn>,
  TComputation
> = /*@__PURE__*/ (<
  TIn,
  TOut,
  TListenerIn extends ListenerLike<TIn>,
  TListenerOut extends ListenerLike<TOut>,
  TComputation extends ComputationLike = ComputationLike,
>() => {
  const LiftedSource_operators = Symbol("LiftedSource_operators");
  const LiftedSource_src = Symbol("LiftedSource_src");

  type TProperties = {
    [LiftedSource_src]: SourceLike<TIn, TListenerIn>;
    [LiftedSource_operators]: readonly Function1<
      ListenerLike<any>,
      ListenerLike<any>
    >[];
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isDeferred]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  };

  return returns(
    mix(
      function LiftedSourceMixin(
        this: TProperties & SourceLike<TOut, TListenerOut>,
        src: SourceLike<TIn, TListenerIn>,
        op: Function1<TListenerOut, TListenerIn>,
        config: TComputation,
      ): SourceLike<TOut, TListenerOut> & TComputation {
        const liftedSrc: SourceLike<any> =
          (src as any)[LiftedSource_src] ?? src;
        const ops = [op, ...((src as any).ops ?? [])];

        this[LiftedSource_src] = liftedSrc;
        this[LiftedSource_operators] = ops;

        unsafeCast<TComputation>(this);
        this[ComputationLike_isPure] = Computation.isPure(config);
        this[ComputationLike_isDeferred] = Computation.isDeferred(config);
        this[ComputationLike_isSynchronous] = Computation.isSynchronous(config);

        return this;
      },
      props<TProperties>({
        [LiftedSource_src]: none,
        [LiftedSource_operators]: none,
        [ComputationLike_isPure]: false,
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
      }),
      proto({
        [SourceLike_subscribe](this: TProperties, listener: TListenerOut) {
          this[LiftedSource_src][SourceLike_subscribe](
            pipeUnsafe(listener, ...this[LiftedSource_operators]),
          );
        },
      }),
    ),
  );
})();

const createLiftedSource: <
  TIn,
  TOut,
  TListenerIn extends ListenerLike<TIn>,
  TListenerOut extends ListenerLike<TOut>,
>(
  src: SourceLike<TIn, TListenerIn>,
  op: Function1<TListenerOut, TListenerIn>,
  config: ComputationLike,
) => SourceLike<TOut, TListenerOut> = /*@__PURE__*/ (() =>
  createInstanceFactory(LiftedSourceMixin()))();

export const lift =
  <
    TIn,
    TOut,
    TListenerIn extends ListenerLike<TIn>,
    TListenerOut extends ListenerLike<TOut>,
    TComputation extends ComputationLike = ComputationLike,
  >(
    config: TComputation,
  ) =>
  (operator: Function1<TListenerOut, TListenerIn>) =>
  (source: SourceLike<TIn, TListenerIn>) => {
    const liftedConfig = {
      [ComputationLike_isPure]:
        Computation.isPure(source) && Computation.isPure(config),
      [ComputationLike_isDeferred]:
        Computation.isDeferred(source) && Computation.isDeferred(config),
      [ComputationLike_isSynchronous]:
        Computation.isSynchronous(source) && Computation.isSynchronous(config),
    };

    return createLiftedSource(source, operator, liftedConfig);
  };

const createLiftedDelegatingDisposableSource: <
  TIn,
  TOut,
  TListenerIn extends ListenerLike<TIn>,
  TListenerOut extends ListenerLike<TOut>,
  TComputation extends ComputationLike = ComputationLike,
>(
  src: SourceLike<TIn, TListenerIn> & DisposableContainerLike,
  op: Function1<TListenerOut, TListenerIn>,
  config: TComputation,
) => SourceLike<TOut, TListenerOut> & DisposableContainerLike & TComputation =
  /*@__PURE__*/ (<
    TIn,
    TOut,
    TListenerIn extends ListenerLike<TIn>,
    TListenerOut extends ListenerLike<TOut>,
    TComputation extends ComputationLike = ComputationLike,
  >() =>
    mixInstanceFactory(
      include(DelegatingDisposableContainerMixin, LiftedSourceMixin()),
      function LiftedDelegatingDisposableSource(
        this: TComputation,
        src: SourceLike<TIn, TListenerIn> & DisposableContainerLike,
        op: Function1<TListenerOut, TListenerIn>,
        config: TComputation,
      ): SourceLike<TOut, TListenerOut> &
        DisposableContainerLike &
        TComputation {
        init(DelegatingDisposableContainerMixin, this, src);
        init(
          LiftedSourceMixin<
            TIn,
            TOut,
            TListenerIn,
            TListenerOut,
            TComputation
          >(),
          this,
          src,
          op,
          config,
        );

        return this;
      },
    ))();

export const liftBroadcasting =
  <
    TIn,
    TOut,
    TListenerIn extends ListenerLike<TIn>,
    TListenerOut extends ListenerLike<TOut>,
  >(
    operator: Function1<TListenerOut, TListenerIn>,
  ) =>
  (source: BroadcasterLike<TIn>): BroadcasterLike<TOut> => {
    const liftedConfig: MulticastComputationLike = {
      [ComputationLike_isPure]: true,
      [ComputationLike_isDeferred]: false,
      [ComputationLike_isSynchronous]: false,
    };

    return createLiftedDelegatingDisposableSource(
      source,
      operator,
      liftedConfig,
    );
  };

const CreateSource_effect = Symbol("CreateSource_effect");

class CreateSource<T, TListener extends ListenerLike<T>>
  implements SourceLike<T, TListener>
{
  readonly [ComputationLike_isPure]?: boolean | undefined;
  readonly [ComputationLike_isSynchronous]?: boolean | undefined;
  readonly [ComputationLike_isDeferred]?: boolean | undefined;

  private readonly [CreateSource_effect]: SideEffect1<TListener>;

  constructor(
    effect: SideEffect1<TListener>,
    config: Optional<ComputationLike>,
  ) {
    this[CreateSource_effect] = effect;
    this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
    this[ComputationLike_isSynchronous] =
      config?.[ComputationLike_isSynchronous];
    this[ComputationLike_isDeferred] = config?.[ComputationLike_isDeferred];
  }

  [SourceLike_subscribe](listener: TListener): void {
    try {
      this[CreateSource_effect](listener);
    } catch (e) {
      listener[DisposableLike_dispose](error(e));
    }
  }
}

interface Create {
  <T, TListener extends ListenerLike<T>>(
    effect: SideEffect1<TListener>,
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
    readonly [ComputationLike_isDeferred]?: true;
  };

  <T, TListener extends ListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]?: true;
      readonly [ComputationLike_isDeferred]?: true;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
    readonly [ComputationLike_isDeferred]?: true;
  };

  <T, TListener extends ListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]?: true;
      readonly [ComputationLike_isDeferred]?: true;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
    readonly [ComputationLike_isDeferred]?: true;
  };

  <T, TListener extends ListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: true;
      readonly [ComputationLike_isSynchronous]: false;
      readonly [ComputationLike_isDeferred]?: true;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isDeferred]?: true;
  };

  <T, TListener extends ListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]: false;
      readonly [ComputationLike_isSynchronous]: false;
      readonly [ComputationLike_isDeferred]?: true;
    },
  ): SourceLike<T, TListener> & {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isDeferred]?: true;
  };

  <T, TListener extends ListenerLike<T>>(
    effect: SideEffect1<TListener>,
    config: {
      readonly [ComputationLike_isPure]?: boolean;
      readonly [ComputationLike_isSynchronous]?: boolean;
      readonly [ComputationLike_isDeferred]?: boolean;
    },
  ): SourceLike<T, TListener>;
}

export const create: Create = (<
  T,
  TListener extends ListenerLike<T>,
  TComputation extends ComputationLike = ComputationLike,
>(
  effect: SideEffect1<TListener>,
  options?: TComputation,
): SourceLike<T, TListener> =>
  newInstance(CreateSource<T, TListener>, effect, options)) as Create;
