import { Container } from "../containers.js";
import { Reactive } from "../rx.js";
export declare const forEachTests: <C extends Container>(m: Container.ForEach<C> & Container.FromReadonlyArray<C> & Reactive.ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends Container>(m: Container.FromReadonlyArray<C> & Reactive.ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends Container>(m: Container.Keep<C> & Container.FromReadonlyArray<C> & Reactive.ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends Container>(m: Container.Map<C> & Container.FromReadonlyArray<C> & Reactive.ToRunnable<C>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends Container>(m: Container.FromReadonlyArray<C> & Reactive.ToEnumerable<C>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableTest: <C extends Container>(m: Container.FromReadonlyArray<C> & Reactive.ToRunnable<C>) => import("../__internal__/testing.js").Test;
