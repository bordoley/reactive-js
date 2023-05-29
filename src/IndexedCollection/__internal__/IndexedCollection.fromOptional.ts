import ReadonlyArray_fromOptional from "../../ReadonlyArray/__internal__/ReadonlyArray.fromOptional.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_fromOptional: IndexedCollection.Signature["fromOptional"] =
  <T>() =>
    compose(
      ReadonlyArray_fromOptional<T>(),
      ReadonlyArray_toIndexedCollection(),
    );

export default IndexedCollection_fromOptional;
