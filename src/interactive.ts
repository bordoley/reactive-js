import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { LiftableLike } from "./liftable";
import { SourceLike } from "./source";

export interface InteractiveContainerLike<TCtx> extends LiftableLike {
  readonly TLiftableState: SourceLike<this["T"]>;

  source(this: InteractiveContainerLike<TCtx>, _: TCtx): SourceLike<this["T"]>;
}

export interface CreateInteractiveContainer<
  C extends InteractiveContainerLike<TCtx>,
  TCtx,
> extends Container<C> {
  create<T>(
    source: (ctx: TCtx) => ContainerOf<C["TLiftableState"], T>,
  ): ContainerOf<C, T>;
}
