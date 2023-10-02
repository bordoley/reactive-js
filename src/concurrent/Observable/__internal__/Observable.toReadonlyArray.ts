import {
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import { Function1, bind, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_run from "../../Observable/__internal__/Observable.run.js";

import Observable_forEach from "./Observable.forEach.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(): Function1<
    RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    ReadonlyArray<T>
  > =>
  observable => {
    const result: T[] = [];

    pipe(
      observable,
      Observable_forEach(bind(Array.prototype.push, result)),
      Observable_run(),
    );

    return result;
  };

export default Observable_toReadonlyArray;
