import { KeyedCollection, KeyedCollectionModule, KeyedCollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const KeyedCollectionModuleTests: <C extends KeyedCollection<unknown>>(m: KeyedCollectionModule<C>, fromReadonlyArray: <T>() => Function1<readonly T[], KeyedCollectionOf<C, T, number>>) => import("../../../__internal__/testing.js").Describe;
export default KeyedCollectionModuleTests;
