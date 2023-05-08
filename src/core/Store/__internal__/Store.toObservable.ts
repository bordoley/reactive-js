import { StoreLike, StoreLike_value } from "../../../core.js";
import Observable_concatWith from "../../../core/Observable/__internal__/Observable.concatWith.js";
import Observable_fromFactory from "../../../core/Observable/__internal__/Observable.fromFactory.js";
import { pipe } from "../../../functions.js";
import EventSource_toObservable from "../../EventSource/__internal__/EventSource.toObservable.js";

const Store_toObservable =
  <T>() =>
  (store: StoreLike<T>) =>
    pipe(
      Observable_fromFactory(() => store[StoreLike_value]),
      Observable_concatWith(pipe(store, EventSource_toObservable())),
    );

export default Store_toObservable;
