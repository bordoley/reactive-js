import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { InteractiveSourceLike } from "./interactiveSource";
import {
  LiftableContainerLike,
  LiftableContainerStateOf,
} from "./liftableContainer";

export interface InteractiveContainerLike extends LiftableContainerLike {
  readonly TLiftableContainerState: InteractiveSourceLike;
  readonly TCtx: unknown;

  source(
    this: this,
    _: this["TCtx"],
  ): LiftableContainerStateOf<InteractiveContainerLike, this["T"]>;
}

export interface CreateInteractiveContainer<C extends InteractiveContainerLike>
  extends Container<C> {
  create<T>(
    source: (ctx: C["TCtx"]) => LiftableContainerStateOf<C, T>,
  ): ContainerOf<C, T>;
}
