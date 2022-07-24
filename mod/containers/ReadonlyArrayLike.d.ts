import { Function1, Predicate, SideEffect1 } from '../util/functions.js';
import { ContainerLike, Container, ContainerOf, Empty, Keep, Map } from "./ContainerLike.mjs";
interface ReadonlyArrayLike<T = unknown> extends ContainerLike, ReadonlyArray<T> {
    readonly TContainerOf?: ReadonlyArrayLike<this["T"]>;
}
declare type ToReadonlyArray<C extends ContainerLike> = Container<C> & {
    toReadonlyArray<T>(): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
};
declare const empty: <T>() => readonly T[];
declare const emptyT: Empty<ReadonlyArrayLike>;
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const keep: Keep<ReadonlyArrayLike>["keep"];
declare const keepT: Keep<ReadonlyArrayLike>;
declare const map: Map<ReadonlyArrayLike>["map"];
declare const mapT: Map<ReadonlyArrayLike>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<readonly T[], readonly T[]>;
declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<ReadonlyArrayLike>;
export { ReadonlyArrayLike, ToReadonlyArray, empty, emptyT, every, forEach, keep, keepT, map, mapT, toReadonlyArray, toReadonlyArrayT };
