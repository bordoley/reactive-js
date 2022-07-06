import { Container, ContainerOf } from "./container.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
import { LiftableContainerLike, LiftableContainerStateOf } from "./liftableContainer.mjs";
interface InteractiveContainerLike extends LiftableContainerLike {
    readonly TLiftableContainerState: InteractiveSourceLike;
    readonly TCtx: unknown;
    source(this: this, _: this["TCtx"]): LiftableContainerStateOf<InteractiveContainerLike, this["T"]>;
}
interface CreateInteractiveContainer<C extends InteractiveContainerLike> extends Container<C> {
    create<T>(source: (ctx: C["TCtx"]) => LiftableContainerStateOf<C, T>): ContainerOf<C, T>;
}
export { CreateInteractiveContainer, InteractiveContainerLike };
