import { Container, ContainerOf } from "./container.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
import { LiftableLike } from "./liftable.mjs";
interface InteractiveContainerLike<TCtx> extends LiftableLike {
    readonly TLiftableState: InteractiveSourceLike<this["T"]>;
    source(this: InteractiveContainerLike<TCtx>, _: TCtx): InteractiveSourceLike<this["T"]>;
}
interface CreateInteractiveContainer<C extends InteractiveContainerLike<TCtx>, TCtx> extends Container<C> {
    create<T>(source: (ctx: TCtx) => ContainerOf<C["TLiftableState"], T>): ContainerOf<C, T>;
}
export { CreateInteractiveContainer, InteractiveContainerLike };
