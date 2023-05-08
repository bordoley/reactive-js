import {
  Container,
  ObservableContainer,
  ObservableLike,
} from "../../../core.js";
import { errorWithDebugMessage } from "../../../functions.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_throws from "./Observable.throws.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("Observable is not Enumerable"),
};

const Observable_toEnumerable: Container.TypeClass<ObservableContainer>["toEnumerable"] =

    <T>() =>
    (obs: ObservableLike<T>) =>
      Observable_isEnumerable(obs) ? obs : Observable_throws<T>(throwOptions);

export default Observable_toEnumerable;
