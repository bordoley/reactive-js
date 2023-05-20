import { Container, RunnableContainerModule } from "../../types.js";
declare const RunnableContainerModuleTests: <C extends Container>(m: RunnableContainerModule<C>) => import("../../__internal__/testing.js").Describe[];
export default RunnableContainerModuleTests;
