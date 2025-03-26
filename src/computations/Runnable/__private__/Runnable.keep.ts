import { Predicate, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_keep: Runnable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  pipe(KeepSink.create<SinkLike, T>, partial(predicate), Runnable_lift<T, T>());

export default Runnable_keep;
