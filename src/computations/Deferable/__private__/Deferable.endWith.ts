import { DeferableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_concatWith from "./Deferable.concatWith.js";
import Deferable_fromReadonlyArray from "./Deferable.fromReadonlyArray.js";

const Deferable_endWith: Deferable.Signature["endWith"] =
  <T>(...values: readonly T[]) =>
  (deferable: DeferableLike<T>) =>
    pipe(
      deferable,
      Deferable_concatWith<T>(pipe(values, Deferable_fromReadonlyArray())),
    );

export default Deferable_endWith;
