import ReadonlyArray_fromFactory from "../../ReadonlyArray/__internal__/ReadonlyArray.fromFactory.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { compose } from "../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_fromFactory: IndexedCollection.Signature["fromFactory"] =
  <T>() =>
    compose(
      ReadonlyArray_fromFactory<T>(),
      ReadonlyArray_toIndexedCollection(),
    );

export default IndexedCollection_fromFactory;
