/// <reference types="./IndexedCollection.empty.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_empty from "../../ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
const _empty = /*@__PURE__*/ (() => pipe(ReadonlyArray_empty(), ReadonlyArray_toIndexedCollection()))();
const IndexedCollection_empty = () => _empty;
export default IndexedCollection_empty;
