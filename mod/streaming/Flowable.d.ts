import { FromIterable, FromReadonlyArray, FromSequence, SequenceLike } from "../containers.js";
import { FromEnumerableObservable, FromRunnableObservable, ToObservable, EnumerableObservableLike, RunnableObservableLike, ObservableLike } from "../rx.js";
import { Function1 } from "../functions.js";
import { FromEnumerable, EnumerableLike } from "../ix.js";
import { FlowableLike } from "../streaming.js";
declare const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"];
declare const fromEnumerableObservable: FromEnumerableObservable<FlowableLike>["fromEnumerableObservable"];
declare const fromIterable: FromIterable<FlowableLike>["fromIterable"];
declare const fromReadonlyArray: FromReadonlyArray<FlowableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
declare const fromRunnableObservable: FromRunnableObservable<FlowableLike>["fromRunnableObservable"];
declare const fromSequence: FromSequence<FlowableLike>["fromSequence"];
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
/** @ignore */
declare const Flowable: {
    fromEnumerable: <T>(options?: undefined) => Function1<EnumerableLike<T>, FlowableLike<T>>;
    fromEnumerableObservable: <T_1>(options?: undefined) => Function1<EnumerableObservableLike<T_1>, FlowableLike<T_1>>;
    fromIterable: <T_2>(options?: undefined) => Function1<Iterable<T_2>, FlowableLike<T_2>>;
    fromReadonlyArray: <T_3>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => Function1<readonly T_3[], FlowableLike<T_3>>;
    fromRunnableObservable: <T_4>(options?: undefined) => Function1<RunnableObservableLike<T_4>, FlowableLike<T_4>>;
    fromSequence: <T_5>(options?: undefined) => Function1<SequenceLike<T_5>, FlowableLike<T_5>>;
    toObservable: <T_6>(options?: undefined) => Function1<FlowableLike<T_6>, ObservableLike<T_6>>;
};
export { Flowable as default, fromEnumerable, fromEnumerableObservable, fromIterable, fromReadonlyArray, fromRunnableObservable, fromSequence, toObservable };
