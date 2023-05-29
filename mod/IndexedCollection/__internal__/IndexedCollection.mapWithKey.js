/// <reference types="./IndexedCollection.mapWithKey.d.ts" />

import ReadonlyArray_mapWithKey from "../../ReadonlyArray/__internal__/ReadonlyArray.mapWithKey.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";
const IndexedCollection_mapWithKey = (mapper) => compose(IndexedCollection_toReadonlyArray(), ReadonlyArray_mapWithKey(mapper), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_mapWithKey;
