import { RunnableLike } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_toReadonlyArray from "./Runnable.toReadonlyArray.js";

const Runnable_toReadonlyArrayAsync: Runnable.Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ returns(async (runnable: RunnableLike) =>
    pipe(runnable, Runnable_toReadonlyArray()),
  ) as Runnable.Signature["toReadonlyArrayAsync"];

export default Runnable_toReadonlyArrayAsync;
