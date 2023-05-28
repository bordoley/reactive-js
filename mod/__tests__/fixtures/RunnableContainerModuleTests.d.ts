import { ConcreteIndexedContainerModule, EnumerableContainerModule, IndexedContainer } from "../../types.js";
declare const RunnableContainerModuleTests: <C extends IndexedContainer>(m: ConcreteIndexedContainerModule<C> & Pick<EnumerableContainerModule<C>, "concat" | "repeat" | "reduce" | "contains" | "everySatisfy" | "toReadonlyArray" | "concatWith" | "endWith" | "first" | "last" | "noneSatisfy" | "someSatisfy" | "startWith" | "zip" | "zipWith">) => import("../../__internal__/testing.js").Describe[];
export default RunnableContainerModuleTests;
