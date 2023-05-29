import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_fromIterable from "../../ReadonlyArray/__internal__/ReadonlyArray.fromIterable.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";

const IndexedCollection_fromIterable: IndexedCollection.Signature["fromIterable"] =
  () =>
    compose(ReadonlyArray_fromIterable(), ReadonlyArray_toIndexedCollection());

export default IndexedCollection_fromIterable;
