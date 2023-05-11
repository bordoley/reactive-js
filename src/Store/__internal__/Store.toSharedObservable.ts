import EventSource_toSharedObservable from "../../EventSource/__internal__/EventSource.toSharedObservable.js";
import Observable_fromFactory from "../../Observable/__internal__/Observable.fromFactory.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import type * as Store from "../../Store.js";
import { pipe } from "../../functions.js";
import { StoreLike, StoreLike_value } from "../../types.js";

const Store_toSharedObservable: Store.Signature["toSharedObservable"] =
  <T>() =>
  (store: StoreLike<T>) =>
    pipe(
      () => store[StoreLike_value],
      Observable_fromFactory(),
      Observable_mergeWith(pipe(store, EventSource_toSharedObservable())),
    );

export default Store_toSharedObservable;
