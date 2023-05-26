import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import { pipe } from "../../functions.js";
import { IndexedCollectionLike } from "../../types.js";
import IndexedCollection_enumerate from "./IndexedCollection.enumerate.js";

const IndexedCollection_toObservable: IndexedCollection.Signature["toObservable"] =

    <T>(options?: { readonly start?: number; readonly count?: number }) =>
    (c: IndexedCollectionLike<T>) =>
      Enumerable_create<T>(() =>
        pipe(c, IndexedCollection_enumerate<T>(options)),
      );

export default IndexedCollection_toObservable;
