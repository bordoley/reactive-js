import { Container } from "../../../containers.js";
import { Function1, pipe } from "../../../functions.js";
import { RunnableContainer, RunnableLike } from "../../../rx.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_toReadonlyArray: Container.ToReadonlyArray<RunnableContainer>["toReadonlyArray"] =

    <T>(): Function1<RunnableLike<T>, ReadonlyArray<T>> =>
    observable => {
      const result: T[] = [];

      pipe(
        observable,
        Observable_forEach<RunnableContainer, T>(next => {
          result.push(next);
        }),
        Runnable_run(),
      );

      return result;
    };

export default Runnable_toReadonlyArray;
