import type * as Observable from "../../Observable.js";
import ReadonlyArray_toIndexedCollection from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import { Function1, compose } from "../../functions.js";
import { IndexedCollectionLike, RunnableBaseLike } from "../../types.js";
import Observable_toReadonlyArray from "./Observable.toReadonlyArray.js";

const Observable_toIndexedCollection: Observable.Signature["toIndexedCollection"] =
  <T>(): Function1<RunnableBaseLike<T>, IndexedCollectionLike<T>> =>
    compose(Observable_toReadonlyArray(), ReadonlyArray_toIndexedCollection());

export default Observable_toIndexedCollection;
