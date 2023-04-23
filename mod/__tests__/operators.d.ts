import { Buffer, Concat, ConcatAll, ConcatMap, ConcatWith, ContainerLike, Contains, DistinctUntilChanged, EndWith, EverySatisfy, FlatMapIterable, ForEach, FromOptional, FromReadonlyArray, Generate, IgnoreElements, Keep, Map, MapTo, Pairwise, Pick, Reduce, Repeat, Scan, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, Zip, ZipWith } from "../containers.js";
import { CatchError, DecodeWithCharset, EncodeUtf8, ObservableLike, Retry, ScanLast, ScanMany, ThrowIfEmpty, Throws, ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
export declare const bufferTests: <C extends ContainerLike>(m: Buffer<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const catchErrorTests: <C extends ContainerLike>(m: CatchError<C, never> & Throws<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const concatTests: <C extends ContainerLike>(m: Concat<C> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const concatAllTests: <C extends ContainerLike>(m: ConcatAll<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const concatMapTests: <C extends ContainerLike>(m: ConcatMap<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const concatWithTests: <C extends ContainerLike>(m: ConcatWith<C> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const decodeWithCharsetTests: <C extends ContainerLike>(m: DecodeWithCharset<C, unknown> & EncodeUtf8<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const distinctUntilChangedTests: <C extends ContainerLike>(m: DistinctUntilChanged<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const endWithTests: <C extends ContainerLike>(m: EndWith<C> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const everySatisfyTests: <C extends ContainerLike>(m: EverySatisfy<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const forEachTests: <C extends ContainerLike>(m: ForEach<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const flatMapIterableTests: <C extends ContainerLike>(m: FlatMapIterable<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const ignoreElementsTests: <C extends ContainerLike>(m: IgnoreElements<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends ContainerLike>(m: Keep<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends ContainerLike>(m: Map<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const mapToTests: <C extends ContainerLike>(m: MapTo<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const pairwiseTests: <C extends ContainerLike>(m: Pairwise<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const pickTests: <C extends ContainerLike>(m: Pick<C> & FromOptional<C, never> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const reduceTests: <C extends ContainerLike>(m: Reduce<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const repeatTests: <C extends ContainerLike>(m: Repeat<C, never> & FromReadonlyArray<C, unknown> & TakeFirst<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const retryTests: <C extends ContainerLike>(m: Concat<C> & Retry<C> & FromReadonlyArray<C, unknown> & Throws<C, unknown> & TakeFirst<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const scanTests: <C extends ContainerLike>(m: Scan<C, never> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const scanLastTests: <C extends ContainerLike, CInner extends ObservableLike<unknown>>(m: ScanLast<C, CInner> & FromReadonlyArray<C, {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
    delay?: number | undefined;
}> & ToRunnable<C, never>, mInner: FromReadonlyArray<CInner, {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
    delay?: number | undefined;
}>) => import("../__internal__/testing.js").Describe;
export declare const scanManyTests: <C extends ContainerLike, CInner extends ObservableLike<unknown>>(m: ScanMany<C, CInner> & FromReadonlyArray<C, {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
    delay?: number | undefined;
}> & ToRunnable<C, never>, mInner: Generate<CInner, {
    delay?: number | undefined;
}> & TakeFirst<CInner, unknown>) => import("../__internal__/testing.js").Describe;
export declare const skipFirstTests: <C extends ContainerLike>(m: SkipFirst<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const containsTests: <C extends ContainerLike>(m: Contains<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const startWithTests: <C extends ContainerLike>(m: StartWith<C> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const takeFirstTests: <C extends ContainerLike>(m: TakeFirst<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const takeLastTests: <C extends ContainerLike>(m: TakeLast<C, unknown> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const takeWhileTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & TakeWhile<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const throwIfEmptyTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & ThrowIfEmpty<C, never> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & ToEnumerable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const toObservableTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & ToObservable<C, never>) => import("../__internal__/testing.js").TestAsync;
export declare const toRunnableWithDelayTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & ToRunnable<C, {
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
}>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableTests: <C extends ContainerLike>(m: FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const zipTests: <C extends ContainerLike>(m: Zip<C> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const zipWithTests: <C extends ContainerLike>(m: ZipWith<C> & FromReadonlyArray<C, unknown> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
