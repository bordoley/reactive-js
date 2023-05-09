import { Container, ContainerTypeClass, DeferredTypeClass, RunnableTypeClass } from "../containers.js";
declare const Containers_test: <C extends Container.Type>(m: ContainerTypeClass<C> & DeferredTypeClass<C> & RunnableTypeClass<C>) => import("../__internal__/testing.js").Describe;
export default Containers_test;
