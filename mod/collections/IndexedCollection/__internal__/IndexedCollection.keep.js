/// <reference types="./IndexedCollection.keep.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyArray_keepWithKey from "../../ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";
const IndexedCollection_keep = (predicate) => compose(IndexedCollection_toReadonlyArray(), ReadonlyArray_keepWithKey(predicate), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_keep;
