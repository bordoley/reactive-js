import { Container, Containers, DeferredContainers, RunnableContainers } from "../containers.js";
declare const Containers_test: <C extends Container>(m: Containers.TypeClass<C> & DeferredContainers.TypeClass<C> & RunnableContainers.TypeClass<C>) => import("../__internal__/testing.js").Describe;
export default Containers_test;
