import { Concat, ConcatAll, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ToReadonlyArray } from "../containers.mjs";
import { RunnableLike } from "../rx.mjs";
declare const concat: Concat<RunnableLike>["concat"];
declare const concatT: Concat<RunnableLike>;
declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
declare const concatAllT: ConcatAll<RunnableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike>;
declare const forEach: ForEach<RunnableLike>["forEach"];
declare const forEachT: ForEach<RunnableLike>;
declare const keep: Keep<RunnableLike>["keep"];
declare const keepT: Keep<RunnableLike>;
declare const map: Map<RunnableLike>["map"];
declare const mapT: Map<RunnableLike>;
declare const pairwise: Pairwise<RunnableLike>["pairwise"];
declare const pairwiseT: Pairwise<RunnableLike>;
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
export { concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, keep, keepT, map, mapT, pairwise, pairwiseT, run, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toReadonlyArray, toReadonlyArrayT };
