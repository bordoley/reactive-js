/// <reference types="./IndexedCollection.toDictionary.d.ts" />

import ReadonlyArray_toDictionary from "../../ReadonlyArray/__internal__/ReadonlyArray.toDictionary.js";
import { compose } from "../../functions.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";
const IndexedCollection_toDictionary = () => compose(IndexedCollection_toReadonlyArray(), ReadonlyArray_toDictionary());
export default IndexedCollection_toDictionary;
