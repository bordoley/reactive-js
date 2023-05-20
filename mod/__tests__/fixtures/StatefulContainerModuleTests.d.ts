import { Function1 } from "../../functions.js";
import { Container, ContainerOf, StatefulContainerModule } from "../../types.js";
declare const StatefulContainerModuleTests: <C extends Container>(m: StatefulContainerModule<C>, toReadonlyArrayAsync: <T>() => Function1<ContainerOf<C, T>, Promise<readonly T[]>>) => import("../../__internal__/testing.js").Describe;
export default StatefulContainerModuleTests;
