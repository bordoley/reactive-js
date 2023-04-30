import { Reduce } from "../../../containers.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import { RunnableContainer, RunnableLike } from "../../../rx.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_reduce: Reduce<RunnableContainer>["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (runnable: RunnableLike<T>) => {
    let acc = initialValue();

    pipe(
      runnable,
      Observable_forEach<RunnableContainer, T>(next => {
        acc = reducer(acc, next);
      }),
      Runnable_run(),
    );

    return acc;
  };

export default Runnable_reduce;
