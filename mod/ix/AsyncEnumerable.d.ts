import { FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Scan, TakeWhile, SequenceLike, ContainerOperator } from "../containers.js";
import { FromEnumerableObservable, ScanAsync, ObservableLike, ToObservable, EnumerableObservableLike, AsyncReducer } from "../rx.js";
import { Function1, Updater, Factory, Predicate, Reducer } from "../functions.js";
import { FromEnumerable, AsyncEnumerableLike, EnumerableLike } from "../ix.js";
declare const fromEnumerable: FromEnumerable<AsyncEnumerableLike>["fromEnumerable"];
declare const fromEnumerableObservable: FromEnumerableObservable<AsyncEnumerableLike>["fromEnumerableObservable"];
declare const fromIterable: FromIterable<AsyncEnumerableLike>["fromIterable"];
declare const fromReadonlyArray: FromReadonlyArray<AsyncEnumerableLike>["fromReadonlyArray"];
declare const fromSequence: FromSequence<AsyncEnumerableLike>["fromSequence"];
declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
declare const keep: Keep<AsyncEnumerableLike>["keep"];
declare const map: Map<AsyncEnumerableLike>["map"];
declare const scan: Scan<AsyncEnumerableLike>["scan"];
declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
/** @ignore */
declare const AsyncEnumerable: {
    fromEnumerable: <T>(options?: undefined) => Function1<EnumerableLike<T>, AsyncEnumerableLike<T>>;
    fromEnumerableObservable: <T_1>(options?: undefined) => Function1<EnumerableObservableLike<T_1>, AsyncEnumerableLike<T_1>>;
    fromIterable: <T_2>(options?: undefined) => Function1<Iterable<T_2>, AsyncEnumerableLike<T_2>>;
    fromReadonlyArray: <T_3>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_3[], AsyncEnumerableLike<T_3>>;
    fromSequence: <T_4>(options?: undefined) => Function1<SequenceLike<T_4>, AsyncEnumerableLike<T_4>>;
    generate: <T_5>(generator: Updater<T_5>, initialValue: Factory<T_5>, options?: {
        delay: number;
    } | undefined) => AsyncEnumerableLike<T_5>;
    keep: <T_6>(predicate: Predicate<T_6>, options?: undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, T_6, T_6>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
    scan: <T_7, TAcc>(scanner: Reducer<T_7, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, T_7, TAcc>;
    scanAsync: <T_8, TAcc_1>(scanner: AsyncReducer<ObservableLike<unknown>, T_8, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<AsyncEnumerableLike<unknown>, T_8, TAcc_1>;
    takeWhile: <T_9>(predicate: Predicate<T_9>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, T_9, T_9>;
    toObservable: <T_10>(options?: undefined) => Function1<AsyncEnumerableLike<T_10>, ObservableLike<T_10>>;
};
export { AsyncEnumerable as default, fromEnumerable, fromEnumerableObservable, fromIterable, fromReadonlyArray, fromSequence, generate, keep, map, scan, scanAsync, takeWhile, toObservable };
