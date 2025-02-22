import { DeferableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_concatWith from "./Deferable.concatWith.js";
import Deferable_fromReadonlyArray from "./Deferable.fromReadonlyArray.js";

const Deferable_startWith: Deferable.Signature["startWith"] =
  <T>(...values: readonly T[]) =>
  (deferable: DeferableLike<T>) =>
    pipe(
      values,
      Deferable_fromReadonlyArray(),
      Deferable_concatWith<T>(deferable),
    );

export default Deferable_startWith;
