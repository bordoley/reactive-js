import { SideEffect1, Function1 } from "./functions.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
interface EnumeratorLike<T> extends InteractiveSourceLike {
    readonly current: T;
    readonly hasCurrent: boolean;
    move(): boolean;
}
declare const getCurrent: <T>(enumerator: EnumeratorLike<T>) => T;
declare const hasCurrent: <T>(enumerator: EnumeratorLike<T>) => boolean;
declare const move: <T>(enumerator: EnumeratorLike<T>) => boolean;
declare const forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export { EnumeratorLike, forEach, getCurrent, hasCurrent, move };
