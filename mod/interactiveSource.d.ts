import { ContainerLike } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
interface InteractiveSourceLike<T> extends Disposable, ContainerLike {
    readonly T: T;
    readonly TContainerOf: InteractiveSourceLike<this["T"]>;
    move(): void;
}
declare const move: <T, TSource extends InteractiveSourceLike<T> = InteractiveSourceLike<T>>(source: TSource) => InteractiveSourceLike<T>;
export { InteractiveSourceLike, move };
