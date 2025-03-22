import { RunnableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lastAsync from "./Runnable.lastAsync.js";
import Runnable_takeFirst from "./Runnable.takeFirst.js";

const Runnable_firstAsync: Runnable.Signature["firstAsync"] = (<T>() =>
  (producer: RunnableLike<T>) =>
    pipe(
      producer,
      Runnable_takeFirst<T>(),
      Runnable_lastAsync(),
    )) as Runnable.Signature["firstAsync"];
export default Runnable_firstAsync;
