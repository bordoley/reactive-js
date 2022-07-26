import { Keep, ReadonlyArrayLike, Map, ToReadonlyArray, ToSequence } from "../containers.mjs";
import { Predicate, Function1 } from "../functions.mjs";
import { ToEnumerable } from "../ix.mjs";
import { ToRunnable } from "../rx.mjs";
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const keep: Keep<ReadonlyArrayLike>["keep"];
declare const keepT: Keep<ReadonlyArrayLike>;
declare const map: Map<ReadonlyArrayLike>["map"];
declare const mapT: Map<ReadonlyArrayLike>;
declare type FromArrayOptions = {
    readonly start: number;
    readonly count: number;
};
declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>;
declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>;
declare const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"];
declare const toRunnableT: ToRunnable<ReadonlyArrayLike>;
declare const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"];
declare const toSequenceT: ToSequence<ReadonlyArrayLike>;
export { FromArrayOptions, every, keep, keepT, map, mapT, toEnumerable, toEnumerableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, toSequence, toSequenceT };
