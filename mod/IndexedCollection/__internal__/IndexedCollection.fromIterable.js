/// <reference types="./IndexedCollection.fromIterable.d.ts" />

import ReadonlyArray_fromIterable from "../../ReadonlyArray/__internal__/ReadonlyArray.fromIterable.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
const IndexedCollection_fromIterable = () => compose(ReadonlyArray_fromIterable(), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_fromIterable;
