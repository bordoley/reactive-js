import { ConcreteIndexedContainerModule, EnumerableContainerModule, IndexedContainer } from "../../types.js";
declare const RunnableContainerModuleTests: <C extends IndexedContainer>(m: ConcreteIndexedContainerModule<C> & Pick<EnumerableContainerModule<C>, "concat" | "repeat" | "reduce" | "contains" | "concatWith" | "endWith" | "everySatisfy" | "first" | "last" | "noneSatisfy" | "someSatisfy" | "startWith" | "toReadonlyArray" | "zip" | "zipWith">) => import("../../__internal__/testing.js").Describe[];
export default RunnableContainerModuleTests;
