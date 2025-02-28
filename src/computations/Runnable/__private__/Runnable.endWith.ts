import { RunnableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concatWith from "./Runnable.concatWith.js";
import Runnable_fromReadonlyArray from "./Runnable.fromReadonlyArray.js";

const Runnable_endWith: Runnable.Signature["endWith"] =
  <T>(...values: readonly T[]) =>
  (deferable: RunnableLike<T>) =>
    pipe(
      deferable,
      Runnable_concatWith<T>(pipe(values, Runnable_fromReadonlyArray())),
    );

export default Runnable_endWith;
