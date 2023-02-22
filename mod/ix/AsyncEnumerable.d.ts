import { FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Scan, TakeWhile } from "../containers.js";
import { AsyncEnumerableLike, FromEnumerable } from "../ix.js";
import { FromEnumerableObservable, ObservableLike, ScanAsync, ToObservable } from "../rx.js";
export declare const fromEnumerable: FromEnumerable<AsyncEnumerableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<AsyncEnumerableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<AsyncEnumerableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<AsyncEnumerableLike>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<AsyncEnumerableLike>["fromSequence"];
export declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
export declare const keep: Keep<AsyncEnumerableLike>["keep"];
export declare const map: Map<AsyncEnumerableLike>["map"];
export declare const scan: Scan<AsyncEnumerableLike>["scan"];
export declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
export declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
export declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
/** @ignore */
declare const AsyncEnumerable: {
    fromEnumerable: <T>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T>, AsyncEnumerableLike<T>>;
    fromEnumerableObservable: <T_1>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").EnumerableObservableLike<T_1>, AsyncEnumerableLike<T_1>>;
    fromIterable: <T_2>(options?: undefined) => import("../functions.js").Function1<Iterable<T_2>, AsyncEnumerableLike<T_2>>;
    fromReadonlyArray: <T_3>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_3[], AsyncEnumerableLike<T_3>>;
    fromSequence: <T_4>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_4>, AsyncEnumerableLike<T_4>>;
    generate: <T_5>(generator: import("../functions.js").Updater<T_5>, initialValue: import("../functions.js").Factory<T_5>, options?: {
        delay: number;
    } | undefined) => AsyncEnumerableLike<T_5>;
    keep: <T_6>(predicate: import("../functions.js").Predicate<T_6>, options?: undefined) => import("../containers.js").ContainerOperator<AsyncEnumerableLike<unknown>, T_6, T_6>;
    map: <TA, TB>(mapper: import("../functions.js").Function1<TA, TB>, options?: undefined) => import("../containers.js").ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
    scan: <T_7, TAcc>(scanner: import("../functions.js").Reducer<T_7, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<AsyncEnumerableLike<unknown>, T_7, TAcc>;
    scanAsync: <T_8, TAcc_1>(scanner: import("../rx.js").AsyncReducer<ObservableLike<unknown>, T_8, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>) => import("../containers.js").ContainerOperator<AsyncEnumerableLike<unknown>, T_8, TAcc_1>;
    takeWhile: <T_9>(predicate: import("../functions.js").Predicate<T_9>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<AsyncEnumerableLike<unknown>, T_9, T_9>;
    toObservable: <T_10>(options?: undefined) => import("../functions.js").Function1<AsyncEnumerableLike<T_10>, ObservableLike<T_10>>;
};
export default AsyncEnumerable;
