import { Compute, Concat, ConcatAll, ConcatMap, ConcatWith, DistinctUntilChanged, EndWith, Enumerate, FromOptional, FromReadonlyArray, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Repeat, Scan, SequenceLike, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, ToIterable, ToReadonlyArray, ToSequence, Zip, ZipWith } from "../containers.js";
import { ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
export declare const compute: Compute<SequenceLike>["compute"];
export declare const concat: Concat<SequenceLike>["concat"];
export declare const concatAll: ConcatAll<SequenceLike>["concatAll"];
export declare const concatMap: ConcatMap<SequenceLike>["concatMap"];
export declare const concatWith: ConcatWith<SequenceLike>["concatWith"];
export declare const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"];
export declare const endWith: EndWith<SequenceLike>["endWith"];
export declare const enumerate: Enumerate<SequenceLike>["enumerate"];
export declare const fromOptional: FromOptional<SequenceLike>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<SequenceLike>["fromReadonlyArray"];
export declare const generate: Generate<SequenceLike>["generate"];
export declare const ignoreElements: IgnoreElements<SequenceLike>["ignoreElements"];
export declare const keep: Keep<SequenceLike>["keep"];
export declare const keepType: KeepType<SequenceLike>["keepType"];
export declare const map: Map<SequenceLike>["map"];
export declare const mapTo: MapTo<SequenceLike>["mapTo"];
export declare const pairwise: Pairwise<SequenceLike>["pairwise"];
export declare const repeat: Repeat<SequenceLike>["repeat"];
export declare const scan: Scan<SequenceLike>["scan"];
export declare const skipFirst: SkipFirst<SequenceLike>["skipFirst"];
export declare const startWith: StartWith<SequenceLike>["startWith"];
export declare const takeFirst: TakeFirst<SequenceLike>["takeFirst"];
export declare const takeLast: TakeLast<SequenceLike>["takeLast"];
export declare const takeWhile: TakeWhile<SequenceLike>["takeWhile"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<SequenceLike, {
    delay?: number;
}>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"];
export declare const toFlowable: ToFlowable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toIterable: ToIterable<SequenceLike>["toIterable"];
export declare const toObservable: ToObservable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnable"];
export declare const toSequence: ToSequence<SequenceLike>["toSequence"];
export declare const zip: Zip<SequenceLike>["zip"];
export declare const zipWith: ZipWith<SequenceLike>["zipWith"];
