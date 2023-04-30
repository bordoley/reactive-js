import { errorWithDebugMessage } from "../../../functions.js";
import {
  ObservableContainer,
  ObservableLike,
  ToRunnable,
} from "../../../rx.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_throws from "./Observable.throws.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("Observable is not Runnable"),
};

const Observable_toRunnable: ToRunnable<ObservableContainer>["toRunnable"] =
  <T>() =>
  (obs: ObservableLike<T>) =>
    Observable_isRunnable(obs) ? obs : Observable_throws(throwOptions);

export default Observable_toRunnable;
