import { IndexedCollectionLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_empty from "../../ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";

const _empty: IndexedCollectionLike = /*@__PURE__*/ (() =>
  pipe(ReadonlyArray_empty(), ReadonlyArray_toIndexedCollection()))();

const IndexedCollection_empty: IndexedCollection.Signature["empty"] = <T>() =>
  _empty as IndexedCollectionLike<T>;

export default IndexedCollection_empty;
