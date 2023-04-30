import { Container, ForEach, FromReadonlyArray, Keep, Map } from "../containers.js";
import { ToEnumerable, ToRunnable } from "../rx.js";
export declare const forEachTests: <C extends Container>(m: ForEach<C> & FromReadonlyArray<C> & ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends Container>(m: FromReadonlyArray<C> & ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends Container>(m: Keep<C> & FromReadonlyArray<C> & ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends Container>(m: Map<C> & FromReadonlyArray<C> & ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends Container>(m: FromReadonlyArray<C> & ToEnumerable<C>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableTest: <C extends Container>(m: FromReadonlyArray<C> & ToRunnable<C>) => import("../__internal__/testing.js").Test;
