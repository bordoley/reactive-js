import { Function1 } from "../../functions.js";
import { CollectionContainerModule, Container, ContainerOf } from "../../types.js";
declare const CollectionContainerModuleTests: <C extends Container<unknown>>(m: CollectionContainerModule<C>, fromReadonlyArray: <T>(_?: unknown) => Function1<readonly T[], ContainerOf<C, T, number>>) => import("../../__internal__/testing.js").Describe[];
export default CollectionContainerModuleTests;
