import { Concat, ContainerLike, ForEach, FromReadonlyArray, Keep, Map, TakeFirst } from "../containers.js";
import { CatchError, DecodeWithCharset, EncodeUtf8, ObservableLike, Retry, ScanLast, ScanMany, ThrowIfEmpty, Throws, ToEnumerable, ToRunnable } from "../rx.js";
import type * as RX from "../rx.js";
export declare const catchErrorTests: <C extends ContainerLike>(m: CatchError<C> & Throws<C, unknown> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const decodeWithCharsetTests: <C extends ContainerLike>(m: DecodeWithCharset<C, unknown> & EncodeUtf8<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const forEachTests: <C extends ContainerLike>(m: ForEach<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends ContainerLike>(m: Keep<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends ContainerLike>(m: Map<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const retryTests: <C extends ContainerLike>(m: Concat<C> & Retry<C> & FromReadonlyArray<C> & Throws<C, unknown> & TakeFirst<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const scanLastTests: <C extends ContainerLike, CInner extends ObservableLike<unknown>>(m: ScanLast<C, CInner> & RX.FromReadonlyArray<C> & ToRunnable<C, never>, mInner: RX.FromReadonlyArray<CInner>) => import("../__internal__/testing.js").Describe;
export declare const scanManyTests: <C extends ContainerLike, CInner extends ObservableLike<unknown>>(m: ScanMany<C, CInner> & RX.FromReadonlyArray<C> & ToRunnable<C, never>, mInner: RX.Generate<CInner> & TakeFirst<CInner>) => import("../__internal__/testing.js").Describe;
export declare const throwIfEmptyTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ThrowIfEmpty<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ToEnumerable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableWithDelayTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ToRunnable<C, {
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
}>) => import("../__internal__/testing.js").Describe;
