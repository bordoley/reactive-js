import { compose } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection.toReadonlyArray.js";

const IndexedCollection_toIndexedCollection: IndexedCollection.Signature["toIndexedCollection"] =
  <T>(options?: { readonly count?: number; readonly start?: number }) =>
    compose(
      IndexedCollection_toReadonlyArray<T>(options),
      ReadonlyArray_toIndexedCollection(),
    );

export default IndexedCollection_toIndexedCollection;
