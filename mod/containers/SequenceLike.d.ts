import { Option } from '../util/Option.js';
import { ContainerLike, ConcatAll, DistinctUntilChanged, Keep, Map, Generate, Pairwise, ContainerOperator, TakeFirst, Repeat, Scan, SkipFirst, TakeLast, TakeWhile, Zip } from "./ContainerLike.mjs";
declare type SequenceResult<T> = {
    readonly data: T;
    readonly next: SequenceLike<T>;
};
interface SequenceLike<T = unknown> extends ContainerLike<T> {
    readonly TContainerOf?: SequenceLike<this["T"]>;
    (): Option<SequenceResult<T>>;
}
declare const concatAll: ConcatAll<SequenceLike>["concatAll"];
declare const concatAllT: ConcatAll<SequenceLike>;
declare const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<SequenceLike>;
declare const keep: Keep<SequenceLike>["keep"];
declare const keepT: Keep<SequenceLike>;
declare const map: Map<SequenceLike>["map"];
declare const mapT: Map<SequenceLike>;
declare const generate: Generate<SequenceLike>["generate"];
declare const generateT: Generate<SequenceLike>;
declare const pairwise: Pairwise<SequenceLike>["pairwise"];
declare const pairwiseT: Pairwise<SequenceLike>;
declare const seek: <T>(count: number) => ContainerOperator<SequenceLike<unknown>, T, T>;
declare const takeFirst: TakeFirst<SequenceLike>["takeFirst"];
declare const takeFirstT: TakeFirst<SequenceLike>;
declare const repeat: Repeat<SequenceLike>["repeat"];
declare const repeatT: Repeat<SequenceLike>;
declare const scan: Scan<SequenceLike>["scan"];
declare const scanT: Scan<SequenceLike>;
declare const skipFirst: SkipFirst<SequenceLike>["skipFirst"];
declare const skipFirstT: SkipFirst<SequenceLike>;
declare const takeLast: TakeLast<SequenceLike>["takeLast"];
declare const takeLastT: TakeLast<SequenceLike>;
declare const takeWhile: TakeWhile<SequenceLike>["takeWhile"];
declare const takeWhileT: TakeWhile<SequenceLike>;
declare const zip: Zip<SequenceLike>["zip"];
declare const zipT: Zip<SequenceLike>;
export { SequenceLike, SequenceResult, concatAll, concatAllT, distinctUntilChanged, distinctUntilChangedT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, seek, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, zip, zipT };
