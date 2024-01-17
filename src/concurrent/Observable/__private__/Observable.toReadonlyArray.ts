import { Array, Array_push } from "../../../__internal__/constants.js";
import { RunnableLike } from "../../../concurrent.js";
import { Function1, bind, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(): Function1<RunnableLike<T>, ReadonlyArray<T>> =>
  observable => {
    const result: T[] = [];

    pipe(
      observable,
      Observable_forEach(bind(Array.prototype[Array_push], result)),
      Observable_run(),
    );

    return result;
  };

export default Observable_toReadonlyArray;
