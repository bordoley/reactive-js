import { DisposableContainer } from "./container.mjs";
import { SideEffect1, Function1 } from "./functions.mjs";
import { LiftableStateLike } from "./liftable.mjs";
declare abstract class Enumerator<T> extends DisposableContainer implements LiftableStateLike {
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
declare abstract class AbstractDelegatingEnumerator<TIn, TOut> extends AbstractEnumerator<TOut> {
    readonly delegate: Enumerator<TIn>;
    constructor(delegate: Enumerator<TIn>);
}
declare abstract class AbstractPassThroughEnumerator<T> extends Enumerator<T> {
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
declare function zip<TA, TB>(a: Enumerator<TA>, b: Enumerator<TB>): Enumerator<readonly [
    TA,
    TB
]>;
declare function zip<TA, TB, TC>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>): Enumerator<readonly [
    TA,
    TB,
    TC
]>;
declare function zip<TA, TB, TC, TD>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>, d: Enumerator<TD>): Enumerator<readonly [
    TA,
    TB,
    TC,
    TD
]>;
declare function zip<TA, TB, TC, TD, TE>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>, d: Enumerator<TD>, e: Enumerator<TE>): Enumerator<readonly [
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function zip<TA, TB, TC, TD, TE, TF>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>, d: Enumerator<TD>, e: Enumerator<TE>, f: Enumerator<TF>): Enumerator<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>, d: Enumerator<TD>, e: Enumerator<TE>, f: Enumerator<TF>, g: Enumerator<TG>): Enumerator<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>, d: Enumerator<TD>, e: Enumerator<TE>, f: Enumerator<TF>, g: Enumerator<TG>, h: Enumerator<TH>): Enumerator<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Enumerator<TA>, b: Enumerator<TB>, c: Enumerator<TC>, d: Enumerator<TD>, e: Enumerator<TE>, f: Enumerator<TF>, g: Enumerator<TG>, h: Enumerator<TH>, i: Enumerator<TI>): Enumerator<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH,
    TI
]>;
declare function zip<T>(...enumerators: readonly Enumerator<T>[]): Enumerator<readonly T[]>;
export { AbstractDelegatingEnumerator, AbstractEnumerator, AbstractPassThroughEnumerator, Enumerator, current, forEach, hasCurrent, move, reset, zip };
