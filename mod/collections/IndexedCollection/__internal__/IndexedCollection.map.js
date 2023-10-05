/// <reference types="./IndexedCollection.map.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";
const IndexedCollection_map = (mapper) => compose(IndexedCollection_toReadonlyArray(), ReadonlyArray_map(mapper), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_map;
