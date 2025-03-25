import {
  ComputationLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SourceLike,
  SourceLike_subscribe,
} from "../../computations.js";
import { Optional, SideEffect1, error, newInstance } from "../../functions.js";
import { DisposableLike_dispose, EventListenerLike } from "../../utils.js";

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
