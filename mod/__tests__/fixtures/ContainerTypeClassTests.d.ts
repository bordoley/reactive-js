import { Function1 } from "../../functions.js";
import { Container, ContainerOf, ContainerTypeClass } from "../../types.js";
declare const ContainerTypeClassTests: <C extends Container>(m: ContainerTypeClass<C>, fromReadonlyArray: <T>() => Function1<readonly T[], ContainerOf<C, T>>, toReadonlyArray: <T_1>() => Function1<ContainerOf<C, T_1>, readonly T_1[]>) => import("../../__internal__/testing.js").Describe;
export default ContainerTypeClassTests;
