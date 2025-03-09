import { RunnableLike } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_first from "./Runnable.first.js";

const Runnable_firstAsync: Runnable.Signature["firstAsync"] =
  /*@__PURE__*/ returns(async (runnable: RunnableLike) => {
    await Promise.resolve();

    return pipe(runnable, Runnable_first());
  }) as Runnable.Signature["firstAsync"];

export default Runnable_firstAsync;
