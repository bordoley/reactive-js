import { Collection, CollectionModule, CollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const CollectionModuleTests: <C extends Collection<unknown>>(m: CollectionModule<C>, fromReadonlyArray: <T>() => Function1<readonly T[], CollectionOf<C, T, number>>) => import("../../../__internal__/testing.js").Describe;
export default CollectionModuleTests;
