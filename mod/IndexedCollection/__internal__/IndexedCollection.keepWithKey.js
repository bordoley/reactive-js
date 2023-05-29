/// <reference types="./IndexedCollection.keepWithKey.d.ts" />

import ReadonlyArray_keepWithKey from "../../ReadonlyArray/__internal__/ReadonlyArray.keepWithKey.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";
const IndexedCollection_keepWithKey = (predicate) => compose(IndexedCollection_toReadonlyArray(), ReadonlyArray_keepWithKey(predicate), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_keepWithKey;
