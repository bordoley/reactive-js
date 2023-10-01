import { Equality, Factory, Function1, Predicate, Reducer, Tuple2 } from "../functions.js";
import { EnumerableLike } from "../ix.js";
export interface EnumerableModule {
    buffer<T>(options?: {
        count?: number;
    }): Function1<EnumerableLike<T>, EnumerableLike<readonly T[]>>;
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(enumerables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    decodeWithCharset(options?: {
        readonly charset?: string | undefined;
    }): Function1<EnumerableLike<ArrayBuffer>, EnumerableLike<string>>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    keep<T>(predicate: Predicate<T>): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    map<TA, TB>(selector: Function1<TA, TB>): Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
    pairwise<T>(): Function1<EnumerableLike<T>, EnumerableLike<Tuple2<T, T>>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<EnumerableLike<T>, TAcc>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<EnumerableLike<T>, EnumerableLike<TAcc>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): Function1<EnumerableLike<T>, EnumerableLike<T>>;
}
export type Signature = EnumerableModule;
export declare const buffer: Signature["buffer"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
