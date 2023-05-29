/// <reference types="./IndexedCollection.fromFactory.d.ts" />

import ReadonlyArray_fromFactory from "../../ReadonlyArray/__internal__/ReadonlyArray.fromFactory.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
const IndexedCollection_fromFactory = () => compose(ReadonlyArray_fromFactory(), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_fromFactory;
