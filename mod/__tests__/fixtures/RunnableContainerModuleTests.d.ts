import { Container, ContainerModule, EnumerableContainerModule } from "../../types.js";
declare const RunnableContainerModuleTests: <C extends Container>(m: ContainerModule<C> & Pick<EnumerableContainerModule<C>, "concat" | "repeat" | "reduce" | "contains" | "toReadonlyArray" | "concatWith" | "endWith" | "everySatisfy" | "first" | "fromReadonlyArray" | "last" | "noneSatisfy" | "someSatisfy" | "startWith" | "zip" | "zipWith">) => import("../../__internal__/testing.js").Describe[];
export default RunnableContainerModuleTests;
