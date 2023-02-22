import { FromIterable, FromReadonlyArray, FromSequence } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { FromEnumerableObservable, FromRunnableObservable, ToObservable } from "../rx.js";
import { FlowableLike } from "../streaming.js";
export declare const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<FlowableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<FlowableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<FlowableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromRunnableObservable: FromRunnableObservable<FlowableLike>["fromRunnableObservable"];
export declare const fromSequence: FromSequence<FlowableLike>["fromSequence"];
export declare const toObservable: ToObservable<FlowableLike>["toObservable"];
/** @ignore */
declare const Flowable: {
    fromEnumerable: <T>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T>, FlowableLike<T>>;
    fromEnumerableObservable: <T_1>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").EnumerableObservableLike<T_1>, FlowableLike<T_1>>;
    fromIterable: <T_2>(options?: undefined) => import("../functions.js").Function1<Iterable<T_2>, FlowableLike<T_2>>;
    fromReadonlyArray: <T_3>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => import("../functions.js").Function1<readonly T_3[], FlowableLike<T_3>>;
    fromRunnableObservable: <T_4>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").RunnableObservableLike<T_4>, FlowableLike<T_4>>;
    fromSequence: <T_5>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_5>, FlowableLike<T_5>>;
    toObservable: <T_6>(options?: undefined) => import("../functions.js").Function1<FlowableLike<T_6>, import("../rx.js").ObservableLike<T_6>>;
};
export default Flowable;
