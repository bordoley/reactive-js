import { EnumerableContainers, ObservableContainer } from "../../containers.js";
import { errorWithDebugMessage } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_throws from "./Observable.throws.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("Observable is not Enumerable"),
};

// FIXME: Wrong typeclass
const Observable_toEnumerable: EnumerableContainers.TypeClass<ObservableContainer.Type>["toEnumerable"] =

    <T>() =>
    (obs: ObservableLike<T>) =>
      Observable_isEnumerable(obs) ? obs : Observable_throws<T>(throwOptions);

export default Observable_toEnumerable;
