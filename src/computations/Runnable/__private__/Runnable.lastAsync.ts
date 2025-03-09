import { RunnableLike } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_last from "./Runnable.last.js";

const Runnable_lastAsync: Runnable.Signature["lastAsync"] =
  /*@__PURE__*/ returns(async (runnable: RunnableLike) => {
    await Promise.resolve();

    return pipe(runnable, Runnable_last());
  }) as Runnable.Signature["lastAsync"];

export default Runnable_lastAsync;
