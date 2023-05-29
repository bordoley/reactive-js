import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_fromValue: IndexedCollection.Signature["fromValue"] = <
  T,
>() =>
  compose(ReadonlyArray_fromValue<T>(), ReadonlyArray_toIndexedCollection());

export default IndexedCollection_fromValue;
