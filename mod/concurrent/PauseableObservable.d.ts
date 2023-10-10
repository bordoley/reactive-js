import { DeferredObservableLike, DispatcherLike, PauseableObservableLike } from "../concurrent.js";
import { Equality, Factory, Function1, Predicate, Reducer, Tuple2 } from "../functions.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface PauseableObservableModule {
    buffer<T>(options?: {
        count?: number;
    }): Function1<PauseableObservableLike<T>, PauseableObservableLike<readonly T[]>>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
    keep<T>(predicate: Predicate<T>): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
    map<TA, TB>(selector: Function1<TA, TB>): Function1<PauseableObservableLike<TA>, PauseableObservableLike<TB>>;
    pairwise<T>(): Function1<PauseableObservableLike<T>, PauseableObservableLike<Tuple2<T, T>>>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<PauseableObservableLike<T>, PauseableObservableLike<TAcc>>;
    sinkInto<T>(sink: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
}
export type Signature = PauseableObservableModule;
export declare const buffer: Signature["buffer"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const sinkInto: Signature["sinkInto"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
