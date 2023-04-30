import { errorWithDebugMessage } from "../../../functions.js";
import {
  ObservableContainerLike,
  ObservableLike,
  ToEnumerable,
} from "../../../rx.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_throws from "./Observable.throws.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("Observable is not Enumerable"),
};

const Observable_toEnumerable: ToEnumerable<ObservableContainerLike>["toEnumerable"] =

    <T>() =>
    (obs: ObservableLike<T>) =>
      Observable_isEnumerable(obs) ? obs : Observable_throws<T>(throwOptions);

export default Observable_toEnumerable;
