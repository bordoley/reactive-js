import { Function2, compose } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";

const IndexedCollection_map: IndexedCollection.Signature["map"] = <
  TA,
  TB,
  TKey extends number,
>(
  mapper: Function2<TA, TKey, TB>,
) =>
  compose(
    IndexedCollection_toReadonlyArray<TA>(),
    ReadonlyArray_map<TA, TB, TKey>(mapper),
    ReadonlyArray_toIndexedCollection(),
  );

export default IndexedCollection_map;
