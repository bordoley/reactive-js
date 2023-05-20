import { Function1 } from "../../functions.js";
import { Container, ContainerOf, DeferredTypeClass } from "../../types.js";
declare const DeferredTypeClassTests: <C extends Container>(m: DeferredTypeClass<C>, toReadonlyArray: <T>() => Function1<ContainerOf<C, T>, readonly T[]>) => import("../../__internal__/testing.js").Describe;
export default DeferredTypeClassTests;
