import { Function1 } from "../../functions.js";
import { Container, ContainerOf, StatefulTypeClass } from "../../types.js";
declare const StatefulTypeClassTests: <C extends Container>(m: StatefulTypeClass<C>, toReadonlyArrayAsync: <T>() => Function1<ContainerOf<C, T>, Promise<readonly T[]>>) => import("../../__internal__/testing.js").Describe;
export default StatefulTypeClassTests;
