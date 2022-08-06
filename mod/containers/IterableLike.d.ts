import { IterableLike, ToIterable } from "../containers.mjs";
import { ToEnumerable } from "../ix.mjs";
import { ToObservable } from "../rx.mjs";
declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<IterableLike>;
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toIterableT: ToIterable<IterableLike>;
declare const toObservable: ToObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
declare const toObservableT: ToObservable<IterableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
export { toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT };
