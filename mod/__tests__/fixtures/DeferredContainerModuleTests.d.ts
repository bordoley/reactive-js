import { Function1 } from "../../functions.js";
import { Container, ContainerOf, DeferredContainerModule } from "../../types.js";
declare const DeferredContainerModuleTests: <C extends Container>(m: DeferredContainerModule<C>, toReadonlyArray: <T>() => Function1<ContainerOf<C, T>, readonly T[]>) => import("../../__internal__/testing.js").Describe[];
export default DeferredContainerModuleTests;
