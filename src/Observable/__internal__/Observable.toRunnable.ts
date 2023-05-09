import { ObservableContainer, RunnableTypeClass } from "../../containers.js";
import { errorWithDebugMessage } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_throws from "./Observable.throws.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("Observable is not Runnable"),
};

// FIXME, wrong typeclass
const Observable_toRunnable: RunnableTypeClass<ObservableContainer.Type>["toRunnable"] =

    <T>() =>
    (obs: ObservableLike<T>) =>
      Observable_isRunnable(obs) ? obs : Observable_throws(throwOptions);

export default Observable_toRunnable;
