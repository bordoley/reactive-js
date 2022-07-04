import { __DEV__ } from "./__internal__.env";
import { Container, ContainerLike, ContainerOf } from "./container";
import { Disposable } from "./disposable";
import { LiftableLike } from "./liftable";

export interface SourceLike<T> extends Disposable, ContainerLike {
  readonly T: T;
  readonly TContainerOf: SourceLike<this["T"]>;

  move(): void;
}

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
