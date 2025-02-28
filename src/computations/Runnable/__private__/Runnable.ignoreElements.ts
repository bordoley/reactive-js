import { SinkLike, SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";

import type * as Runnable from "../../Runnable.js";
import AbstractSink from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";

class IgnoreElementsSink<T> extends AbstractSink<T> {
  [SinkLike_next](_: T): void {}
}

const Runnable_ignoreElements: Runnable.Signature["ignoreElements"] = <T>() =>
  Runnable_lift(
    (sink: SinkLike<T>) => newInstance(IgnoreElementsSink<T>, sink),
    true,
  );

export default Runnable_ignoreElements;
