import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { InteractiveSourceLike } from "./interactiveSource";
import { LiftableLike } from "./liftable";

export interface InteractiveContainerLike<TCtx> extends LiftableLike {
  readonly TLiftableState: InteractiveSourceLike<this["T"]>;

  source(
    this: InteractiveContainerLike<TCtx>,
    _: TCtx,
  ): InteractiveSourceLike<this["T"]>;
}

export interface CreateInteractiveContainer<
  C extends InteractiveContainerLike<TCtx>,
  TCtx,
> extends Container<C> {
  create<T>(
    source: (ctx: TCtx) => ContainerOf<C["TLiftableState"], T>,
  ): ContainerOf<C, T>;
}
