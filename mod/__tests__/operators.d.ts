import { Container } from "../core.js";
export declare const forEachTests: <C extends Container>(m: Container.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends Container>(m: Container.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends Container>(m: Container.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends Container>(m: Container.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends Container>(m: Container.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableTest: <C extends Container>(m: Container.TypeClass<C>) => import("../__internal__/testing.js").Test;
