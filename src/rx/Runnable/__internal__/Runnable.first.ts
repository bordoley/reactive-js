import { TakeFirst } from "../../../containers.js";
import { Function1, Optional, pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import Runnable_last from "./Runnable.last.js";

const Runnable_first =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src =>
    pipe(
      src,
      (Observable_takeFirst as TakeFirst<RunnableLike>["takeFirst"])(),
      Runnable_last(),
    );

export default Runnable_first;
