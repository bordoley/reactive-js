import { ContainerLike, ForEach, FromReadonlyArray, Keep, Map } from "../containers.js";
import { ToEnumerable, ToRunnable } from "../rx.js";
export declare const forEachTests: <C extends ContainerLike>(m: ForEach<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends ContainerLike>(m: Keep<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends ContainerLike>(m: Map<C> & FromReadonlyArray<C> & ToRunnable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ToEnumerable<C, never>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableWithDelayTests: <C extends ContainerLike>(m: FromReadonlyArray<C> & ToRunnable<C, {
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
}>) => import("../__internal__/testing.js").Describe;
