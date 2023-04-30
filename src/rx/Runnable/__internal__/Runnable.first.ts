import { First } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import { RunnableContainerLike, RunnableLike } from "../../../rx.js";
import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import Runnable_last from "./Runnable.last.js";

const Runnable_first: First<RunnableContainerLike>["first"] =
  <T>() =>
  (src: RunnableLike<T>) =>
    pipe(
      src,
      Observable_takeFirst<RunnableContainerLike, T>(),
      Runnable_last<T>(),
    );

export default Runnable_first;
