import { ContainerLike } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
interface SourceLike<T> extends Disposable, ContainerLike {
    readonly T: T;
    readonly TContainerOf: SourceLike<this["T"]>;
    move(): void;
}
declare const move: <T, TSource extends SourceLike<T> = SourceLike<T>>(source: TSource) => SourceLike<T>;
export { SourceLike, move };
