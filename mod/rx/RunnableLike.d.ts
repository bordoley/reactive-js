import { DistinctUntilChanged, Keep, Map, ContainerOperator, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ToReadonlyArray } from "../containers.mjs";
import { SideEffect1 } from "../functions.mjs";
import { RunnableLike } from "../rx.mjs";
declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike>;
declare const keep: Keep<RunnableLike>["keep"];
declare const keepT: Keep<RunnableLike>;
declare const map: Map<RunnableLike>["map"];
declare const mapT: Map<RunnableLike>;
declare const onNotify: <T>(onNotify: SideEffect1<T>) => ContainerOperator<RunnableLike, T, T>;
declare const run: <T>() => (runnable: RunnableLike<T>) => void;
declare const scan: Scan<RunnableLike>["scan"];
declare const scanT: Scan<RunnableLike>;
declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<RunnableLike>;
declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<RunnableLike>;
declare const takeLast: TakeLast<RunnableLike>["takeLast"];
declare const takeLastT: TakeLast<RunnableLike>;
declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<RunnableLike>;
declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<RunnableLike>;
export { distinctUntilChanged, distinctUntilChangedT, keep, keepT, map, mapT, onNotify, run, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toReadonlyArray, toReadonlyArrayT };
