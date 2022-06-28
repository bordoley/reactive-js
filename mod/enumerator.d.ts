import { AbstractDisposableContainer } from "./container.mjs";
import { SideEffect1, Function1 } from "./functions.mjs";
import { LiftedStateLike } from "./liftable.mjs";
declare abstract class Enumerator<T> extends AbstractDisposableContainer implements LiftedStateLike {
    abstract get current(): T;
    abstract get hasCurrent(): boolean;
    abstract move(): boolean;
}
declare abstract class AbstractEnumerator<T> extends Enumerator<T> {
    private _current;
    private _hasCurrent;
    constructor();
    get current(): T;
    set current(v: T);
    get hasCurrent(): boolean;
    reset(): void;
    abstract move(): boolean;
}
declare abstract class AbstractDelegatingEnumerator<T> extends Enumerator<T> {
    readonly delegate: Enumerator<T>;
    constructor(delegate: Enumerator<T>);
    get current(): T;
    get hasCurrent(): boolean;
    abstract move(): boolean;
}
declare const current: <T>(enumerator: Enumerator<T>) => T;
declare const hasCurrent: <T>(enumerator: Enumerator<T>) => boolean;
declare const move: <T>(enumerator: Enumerator<T>) => boolean;
declare const forEach: <T, TEnumerator extends Enumerator<T> = Enumerator<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
declare const reset: <T>(enumerator: AbstractEnumerator<T>) => void;
declare const zip: <T>(enumerators: readonly Enumerator<T>[]) => Enumerator<readonly T[]>;
export { AbstractDelegatingEnumerator, AbstractEnumerator, Enumerator, current, forEach, hasCurrent, move, reset, zip };
