import { Predicate, Function1, SideEffect1 } from '../util/functions.js';
import { ContainerLike, Keep, Map } from "./ContainerLike.mjs";
interface ReadonlyArrayLike<T = unknown> extends ContainerLike<T>, ReadonlyArray<T> {
    readonly TContainerOf?: ReadonlyArrayLike<this["T"]>;
}
declare const empty: <T>() => ReadonlyArrayLike<T>;
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const keep: Keep<ReadonlyArrayLike>["keep"];
declare const keepT: Keep<ReadonlyArrayLike>;
declare const map: Map<ReadonlyArrayLike>["map"];
declare const mapT: Map<ReadonlyArrayLike>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<ReadonlyArrayLike<T>, ReadonlyArrayLike<T>>;
export { ReadonlyArrayLike, empty, every, forEach, keep, keepT, map, mapT };
