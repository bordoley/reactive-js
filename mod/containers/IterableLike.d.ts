import { IterableLike, ToIterable } from "../containers.mjs";
import { ToEnumerable } from "../ix.mjs";
declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<IterableLike>;
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toIterableT: ToIterable<IterableLike>;
export { toEnumerable, toEnumerableT, toIterable, toIterableT };
