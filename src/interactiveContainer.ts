import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { InteractiveSourceLike } from "./interactiveSource";
import { LiftableContainerLike, LiftableStateOf } from "./liftable";

export interface InteractiveContainerLike extends LiftableContainerLike {
  readonly TLiftableState: InteractiveSourceLike<this["T"]>;
  readonly TCtx: unknown;

  source(this: this, _: this["TCtx"]): InteractiveSourceLike<this["T"]>;
}

export interface CreateInteractiveContainer<C extends InteractiveContainerLike>
  extends Container<C> {
  create<T>(
    source: (ctx: C["TCtx"]) => LiftableStateOf<C, T>,
  ): ContainerOf<C, T>;
}
