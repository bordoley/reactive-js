import { Container, ContainerOf } from "./container.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
import { LiftableContainerLike, LiftableStateOf } from "./liftable.mjs";
interface InteractiveContainerLike extends LiftableContainerLike {
    readonly TLiftableState: InteractiveSourceLike<this["T"]>;
    readonly TCtx: unknown;
    source(this: this, _: this["TCtx"]): InteractiveSourceLike<this["T"]>;
}
interface CreateInteractiveContainer<C extends InteractiveContainerLike> extends Container<C> {
    create<T>(source: (ctx: C["TCtx"]) => LiftableStateOf<C, T>): ContainerOf<C, T>;
}
export { CreateInteractiveContainer, InteractiveContainerLike };
