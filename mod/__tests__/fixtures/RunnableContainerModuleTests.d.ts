import { Container, ContainerModule, EnumerableContainerModule } from "../../types.js";
declare const RunnableContainerModuleTests: <C extends Container>(m: ContainerModule<C> & Pick<EnumerableContainerModule<C>, "concat" | "repeat" | "reduce" | "contains" | "concatWith" | "endWith" | "everySatisfy" | "first" | "fromReadonlyArray" | "last" | "noneSatisfy" | "someSatisfy" | "startWith" | "toReadonlyArray" | "zip" | "zipWith">) => import("../../__internal__/testing.js").Describe[];
export default RunnableContainerModuleTests;
