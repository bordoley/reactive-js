import { ComputationLike_isPure } from "../../../computations.js";
import { SideEffect1, partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as ForEachSink from "../../__internal__/sinks/ForEachSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_forEach: Runnable.Signature["forEach"] = <T>(
  predicate: SideEffect1<T>,
) =>
  pipe(
    ForEachSink.create,
    partial(predicate),
    Runnable_lift<T, T>({
      [ComputationLike_isPure]: false,
    }),
  );

export default Runnable_forEach;
