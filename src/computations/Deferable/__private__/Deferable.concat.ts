import { DeferableLike } from "../../../computations.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_concatMany from "./Deferable.concatMany.js";

const Deferable_concat: Deferable.Signature["concat"] = <T>(
  ...computations: readonly DeferableLike<T>[]
) =>
  Deferable_concatMany(
    computations as readonly [DeferableLike<T>, ...DeferableLike<T>[]],
  );

export default Deferable_concat;
