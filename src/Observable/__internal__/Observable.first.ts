import type * as Observable from "../../Observable.js";
import { pipe } from "../../functions.js";
import { RunnableBaseLike } from "../../types.js";
import Observable_last from "./Observable.last.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_first: Observable.Signature["first"] =
  <T>() =>
  (obs: RunnableBaseLike<T>) =>
    pipe(obs, Observable_takeFirst<T>(), Observable_last<T>());

export default Observable_first;
