import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import type * as Runnable from "../../Runnable.js";
import { pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_last from "./Runnable.last.js";

const Runnable_first: Runnable.Signature["first"] =
  <T>() =>
  (src: RunnableLike<T>) =>
    pipe(src, Observable_takeFirst(), Runnable_last<T>());

export default Runnable_first;
