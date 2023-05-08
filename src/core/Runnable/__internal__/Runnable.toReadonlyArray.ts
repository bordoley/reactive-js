import { Container, RunnableContainer, RunnableLike } from "../../../core.js";
import { Function1, pipe } from "../../../functions.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_toReadonlyArray: Container.TypeClass<RunnableContainer>["toReadonlyArray"] =

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
