import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_mapWithKey from "../../ReadonlyArray/__internal__/ReadonlyArray.mapWithKey.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { Function2, compose } from "../../functions.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";

const IndexedCollection_mapWithKey: IndexedCollection.Signature["mapWithKey"] =
  <TA, TB, TKey extends number>(mapper: Function2<TA, TKey, TB>) =>
    compose(
      IndexedCollection_toReadonlyArray<TA>(),
      ReadonlyArray_mapWithKey<TA, TB, TKey>(mapper),
      ReadonlyArray_toIndexedCollection(),
    );

export default IndexedCollection_mapWithKey;
