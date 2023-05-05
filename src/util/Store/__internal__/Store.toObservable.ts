import { pipe } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import { StoreLike, StoreLike_value } from "../../../util.js";
import EventSource_toObservable from "../../EventSource/__internal__/EventSource.toObservable.js";

const Store_toObservable =
  <T>() =>
  (store: StoreLike<T>) =>
    pipe(
      store,
      EventSource_toObservable(),
      Observable_startWith<ObservableContainer, T>(store[StoreLike_value]),
    );

export default Store_toObservable;
