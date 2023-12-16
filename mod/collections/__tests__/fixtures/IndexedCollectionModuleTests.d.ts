import { IndexedCollectionModule, KeyedCollection, KeyedCollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const IndexedCollectionModuleTests: <C extends KeyedCollection<number>>(m: IndexedCollectionModule<C>, fromReadonlyArray: <T>() => Function1<readonly T[], KeyedCollectionOf<C, T, number>>) => import("../../../__internal__/testing.js").Describe;
export default IndexedCollectionModuleTests;
