import { ContainerLike, AbstractDisposableContainer } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
interface LiftableLike extends ContainerLike {
    readonly TLiftableState: Disposable & ContainerLike;
}
declare type LiftableStateOf<C extends LiftableLike, T> = C extends {
    readonly TLiftableState: unknown;
} ? (C & {
    readonly T: T;
})["TLiftableState"] : {
    readonly _C: C;
    readonly _T: () => T;
};
declare abstract class AbtractDisposableLiftable<TState extends Disposable & ContainerLike> extends AbstractDisposableContainer implements LiftableLike {
    get TLiftableState(): TState;
}
export { AbtractDisposableLiftable, LiftableLike, LiftableStateOf };
