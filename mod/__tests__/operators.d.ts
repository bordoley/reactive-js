import { Container, Containers, EnumerableContainers, RunnableContainers } from "../core.js";
export declare const forEachTests: <C extends Container>(m: Containers.TypeClass<C> & EnumerableContainers.TypeClass<C, import("../core.js").EnumeratorContainer> & RunnableContainers.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends Container>(m: Containers.TypeClass<C> & RunnableContainers.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends Container>(m: Containers.TypeClass<C> & RunnableContainers.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends Container>(m: Containers.TypeClass<C> & RunnableContainers.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends Container>(m: Containers.TypeClass<C> & EnumerableContainers.TypeClass<C, import("../core.js").EnumeratorContainer>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableTest: <C extends Container>(m: Containers.TypeClass<C> & RunnableContainers.TypeClass<C>) => import("../__internal__/testing.js").Test;
