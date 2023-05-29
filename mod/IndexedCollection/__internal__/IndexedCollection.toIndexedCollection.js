/// <reference types="./IndexedCollection.toIndexedCollection.d.ts" />

import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";
const IndexedCollection_toIndexedCollection = (options) => compose(IndexedCollection_toReadonlyArray(options), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_toIndexedCollection;
