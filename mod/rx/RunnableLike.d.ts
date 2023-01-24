import { DisposableOrTeardown } from "../util.js";
import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ReadonlyArrayLike, Generate, Keep, Map, Never, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray } from "../containers.js";
import { SideEffect1, Function1, Optional, Factory, Predicate } from "../functions.js";
import { SinkLike, RunnableLike, ToRunnable } from "../rx.js";
declare const create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const buffer: Buffer<RunnableLike>["buffer"];
declare const bufferT: Buffer<RunnableLike>;
declare const catchError: CatchError<RunnableLike>["catchError"];
declare const catchErrorT: CatchError<RunnableLike>;
declare const concat: Concat<RunnableLike>["concat"];
declare const concatT: Concat<RunnableLike>;
declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
declare const concatAllT: ConcatAll<RunnableLike>;
declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<RunnableLike>;
declare const defer: Defer<RunnableLike>["defer"];
declare const deferT: Defer<RunnableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike>;
declare const empty: Empty<RunnableLike>["empty"];
declare const emptyT: Empty<RunnableLike>;
declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
declare const everySatisfyT: EverySatisfy<RunnableLike>;
declare const first: <T>() => Function1<RunnableLike<T>, Optional<T>>;
declare const forEach: ForEach<RunnableLike>["forEach"];
declare const forEachT: ForEach<RunnableLike>;
declare const fromArray: <T>(options?: undefined) => Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
declare const generate: Generate<RunnableLike>["generate"];
declare const generateT: Generate<RunnableLike>;
declare const keep: Keep<RunnableLike>["keep"];
declare const keepT: Keep<RunnableLike>;
declare const last: <T>() => Function1<RunnableLike<T>, Optional<T>>;
declare const map: Map<RunnableLike>["map"];
declare const mapT: Map<RunnableLike>;
declare const never: Never<RunnableLike>["never"];
declare const neverT: Never<RunnableLike>;
declare const onRun: <T>(f: Factory<void | DisposableOrTeardown>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
declare const pairwise: Pairwise<RunnableLike>["pairwise"];
declare const pairwiseT: Pairwise<RunnableLike>;
declare const reduce: Reduce<RunnableLike>["reduce"];
declare const reduceT: Reduce<RunnableLike>;
declare const repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
declare const repeatT: Repeat<RunnableLike>;
declare const run: <T>() => (runnable: RunnableLike<T>) => void;
declare const scan: Scan<RunnableLike>["scan"];
declare const scanT: Scan<RunnableLike>;
declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<RunnableLike>;
declare const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"];
declare const someSatisfyT: SomeSatisfy<RunnableLike>;
declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<RunnableLike>;
declare const takeLast: TakeLast<RunnableLike>["takeLast"];
declare const takeLastT: TakeLast<RunnableLike>;
declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<RunnableLike>;
declare const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<RunnableLike>;
declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<RunnableLike>;
declare const toRunnable: ToRunnable<RunnableLike>["toRunnable"];
declare const toRunnableT: ToRunnable<RunnableLike>;
export { buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, create, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, everySatisfy, everySatisfyT, first, forEach, forEachT, fromArray, generate, generateT, keep, keepT, last, map, mapT, never, neverT, onRun, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, run, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT };
