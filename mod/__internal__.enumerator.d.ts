import { Disposable } from "./disposable.mjs";
import { EnumeratorLike } from "./enumerator.mjs";
declare abstract class AbstractEnumerator<T> extends Disposable implements EnumeratorLike<T> {
    private _current;
    private _hasCurrent;
    constructor();
    get current(): T;
    set current(v: T);
    get hasCurrent(): boolean;
    reset(): void;
    abstract move(): boolean;
}
declare const reset: <T>(enumerator: AbstractEnumerator<T>) => void;
declare function zip<TA, TB>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>): EnumeratorLike<readonly [
    TA,
    TB
]>;
declare function zip<TA, TB, TC>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>): EnumeratorLike<readonly [
    TA,
    TB,
    TC
]>;
declare function zip<TA, TB, TC, TD>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>, d: EnumeratorLike<TD>): EnumeratorLike<readonly [
    TA,
    TB,
    TC,
    TD
]>;
declare function zip<TA, TB, TC, TD, TE>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>, d: EnumeratorLike<TD>, e: EnumeratorLike<TE>): EnumeratorLike<readonly [
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function zip<TA, TB, TC, TD, TE, TF>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>, d: EnumeratorLike<TD>, e: EnumeratorLike<TE>, f: EnumeratorLike<TF>): EnumeratorLike<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>, d: EnumeratorLike<TD>, e: EnumeratorLike<TE>, f: EnumeratorLike<TF>, g: EnumeratorLike<TG>): EnumeratorLike<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>, d: EnumeratorLike<TD>, e: EnumeratorLike<TE>, f: EnumeratorLike<TF>, g: EnumeratorLike<TG>, h: EnumeratorLike<TH>): EnumeratorLike<readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumeratorLike<TA>, b: EnumeratorLike<TB>, c: EnumeratorLike<TC>, d: EnumeratorLike<TD>, e: EnumeratorLike<TE>, f: EnumeratorLike<TF>, g: EnumeratorLike<TG>, h: EnumeratorLike<TH>, i: EnumeratorLike<TI>): EnumeratorLike<readonly [
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
declare function zip<T>(...enumerators: readonly EnumeratorLike<T>[]): EnumeratorLike<readonly T[]>;
export { AbstractEnumerator, reset, zip };
