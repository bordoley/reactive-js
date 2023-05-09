import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import { RunnableContainer, RunnableContainers } from "../../containers.js";
import { pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_last from "./Runnable.last.js";

const Runnable_first: RunnableContainers.TypeClass<RunnableContainer>["first"] =

    <T>() =>
    (src: RunnableLike<T>) =>
      pipe(
        src,
        Observable_takeFirst<RunnableContainer, T>(),
        Runnable_last<T>(),
      );

export default Runnable_first;
