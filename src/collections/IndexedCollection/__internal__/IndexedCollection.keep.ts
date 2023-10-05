import { Function2, compose } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_keepWithKey from "../../ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";

const IndexedCollection_keep: IndexedCollection.Signature["keep"] = <
  T,
  TKey extends number,
>(
  predicate: Function2<T, TKey, boolean>,
) =>
  compose(
    IndexedCollection_toReadonlyArray<T>(),
    ReadonlyArray_keepWithKey<T, TKey>(predicate),
    ReadonlyArray_toIndexedCollection(),
  );

export default IndexedCollection_keep;
