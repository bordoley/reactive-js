import { partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as TakeFirstMixin from "../../__internal__/operators/TakeFirst.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeFirst: Runnable.Signature["takeFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstMixin.createSink<T>,
    partial(options?.count),
    Runnable_lift<T, T>(),
  );

export default Runnable_takeFirst;
