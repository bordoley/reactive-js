/// <reference types="./IndexedCollection.fromOptional.d.ts" />

import ReadonlyArray_fromOptional from "../../ReadonlyArray/__internal__/ReadonlyArray.fromOptional.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
const IndexedCollection_fromOptional = () => compose(ReadonlyArray_fromOptional(), ReadonlyArray_toIndexedCollection());
export default IndexedCollection_fromOptional;
