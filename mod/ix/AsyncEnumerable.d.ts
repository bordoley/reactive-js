import { ScanAsync, ObservableLike, ToObservable, AsyncReducer } from "../rx.js";
import { FromReadonlyArray, Generate, Keep, Map, Scan, TakeWhile, ToReadonlyArray, ContainerOperator, ReadonlyArrayLike } from "../containers.js";
import { Function1, Updater, Factory, Predicate, Reducer } from "../functions.js";
import { ToAsyncEnumerable, EnumerableLike, AsyncEnumerableLike } from "../ix.js";
declare const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"];
declare const fromReadonlyArray: FromReadonlyArray<AsyncEnumerableLike>["fromReadonlyArray"];
declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
declare const keep: Keep<AsyncEnumerableLike>["keep"];
declare const map: Map<AsyncEnumerableLike>["map"];
declare const scan: Scan<AsyncEnumerableLike>["scan"];
declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"];
/** @ignore */
declare const AsyncEnumerable: {
    fromReadonlyArray: <T>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T[], AsyncEnumerableLike<T>>;
    generate: <T_1>(generator: Updater<T_1>, initialValue: Factory<T_1>, options?: {
        delay: number;
    } | undefined) => AsyncEnumerableLike<T_1>;
    keep: <T_2>(predicate: Predicate<T_2>, options?: undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, T_2, T_2>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
    scan: <T_3, TAcc>(scanner: Reducer<T_3, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, T_3, TAcc>;
    scanAsync: <T_4, TAcc_1>(scanner: AsyncReducer<ObservableLike<unknown>, T_4, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<AsyncEnumerableLike<unknown>, T_4, TAcc_1>;
    takeWhile: <T_5>(predicate: Predicate<T_5>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<AsyncEnumerableLike<unknown>, T_5, T_5>;
    toReadonlyArray: <T_6>(options?: undefined) => Function1<AsyncEnumerableLike<T_6>, ReadonlyArrayLike<T_6>>;
};
export { AsyncEnumerable as default, fromEnumerable, fromReadonlyArray, generate, keep, map, scan, scanAsync, takeWhile, toObservable, toReadonlyArray };
