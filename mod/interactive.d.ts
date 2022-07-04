import { ContainerLike, Container, ContainerOf } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
import { LiftableLike } from "./liftable.mjs";
interface SourceLike<T> extends Disposable, ContainerLike {
    readonly T: T;
    readonly TContainerOf: SourceLike<this["T"]>;
    move(): void;
}
interface InteractiveContainerLike<TCtx> extends LiftableLike {
    readonly TLiftableState: SourceLike<this["T"]>;
    source(this: InteractiveContainerLike<TCtx>, _: TCtx): SourceLike<this["T"]>;
}
interface CreateInteractiveContainer<C extends InteractiveContainerLike<TCtx>, TCtx> extends Container<C> {
    create<T>(source: (ctx: TCtx) => ContainerOf<C["TLiftableState"], T>): ContainerOf<C, T>;
}
export { CreateInteractiveContainer, InteractiveContainerLike, SourceLike };
