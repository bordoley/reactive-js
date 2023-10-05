import { compose } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_toDictionary from "../../ReadonlyArray/__internal__/ReadonlyArray.toDictionary.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";

const IndexedCollection_toDictionary: IndexedCollection.Signature["toDictionary"] =
  <T, TKey extends number>() =>
    compose(
      IndexedCollection_toReadonlyArray<T>(),
      ReadonlyArray_toDictionary<T, TKey>(),
    );

export default IndexedCollection_toDictionary;
