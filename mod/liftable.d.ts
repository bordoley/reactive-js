import { ContainerLike } from "./container.mjs";
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
export { LiftableLike, LiftableStateOf };
