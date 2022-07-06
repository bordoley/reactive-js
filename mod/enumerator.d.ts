import { Disposable } from "./disposable.mjs";
import { SideEffect1, Function1 } from "./functions.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
declare abstract class Enumerator<T> extends Disposable implements InteractiveSourceLike {
    get TLiftableContainerStateType(): 1;
    abstract get current(): T;
    abstract get hasCurrent(): boolean;
    abstract move(): boolean;
}
declare const getCurrent: <T>(enumerator: Enumerator<T>) => T;
declare const hasCurrent: <T>(enumerator: Enumerator<T>) => boolean;
declare const move: <T>(enumerator: Enumerator<T>) => boolean;
declare const forEach: <T, TEnumerator extends Enumerator<T> = Enumerator<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export { Enumerator, forEach, getCurrent, hasCurrent, move };
