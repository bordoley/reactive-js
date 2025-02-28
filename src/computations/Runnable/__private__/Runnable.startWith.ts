import { RunnableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concatWith from "./Runnable.concatWith.js";
import Runnable_fromReadonlyArray from "./Runnable.fromReadonlyArray.js";

const Runnable_startWith: Runnable.Signature["startWith"] =
  <T>(...values: readonly T[]) =>
  (deferable: RunnableLike<T>) =>
    pipe(
      values,
      Runnable_fromReadonlyArray(),
      Runnable_concatWith<T>(deferable),
    );

export default Runnable_startWith;
