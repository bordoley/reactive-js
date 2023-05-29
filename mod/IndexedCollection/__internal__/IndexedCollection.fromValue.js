/// <reference types="./IndexedCollection.fromValue.d.ts" />

import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
const IndexedCollection_fromValue = () => compose(ReadonlyArray_fromValue(), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_fromValue;
