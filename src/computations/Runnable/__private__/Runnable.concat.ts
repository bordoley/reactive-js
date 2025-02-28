import { RunnableLike } from "../../../computations.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concatMany from "./Runnable.concatMany.js";

const Runnable_concat: Runnable.Signature["concat"] = <T>(
  ...computations: readonly RunnableLike<T>[]
) =>
  Runnable_concatMany(
    computations as readonly [RunnableLike<T>, ...RunnableLike<T>[]],
  );

export default Runnable_concat;
