import { Container, ContainerTypeClass, DeferredTypeClass, EnumerableTypeClass, RunnableTypeClass } from "../containers.js";
export declare const forEachTests: <C extends Container>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & EnumerableTypeClass<C, import("../containers.js").EnumeratorContainer.Type> & RunnableTypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const fromReadonlyArrayTests: <C extends Container>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & RunnableTypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const keepTests: <C extends Container>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & RunnableTypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const mapTests: <C extends Container>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & RunnableTypeClass<C>) => import("../__internal__/testing.js").Describe;
export declare const toEnumerableTests: <C extends Container>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & EnumerableTypeClass<C, import("../containers.js").EnumeratorContainer.Type>) => import("../__internal__/testing.js").Describe;
export declare const toRunnableTest: <C extends Container>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & RunnableTypeClass<C>) => import("../__internal__/testing.js").Test;
