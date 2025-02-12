import { Collection, CollectionModule, CollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const CollectionModuleTests: <C extends Collection>(m: CollectionModule<C>, fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, CollectionOf<C, T, number>>) => import("../../../__internal__/testing.js").Describe;
export default CollectionModuleTests;
