import { SinkLike, SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";

import type * as Deferable from "../../Deferable.js";
import AbstractSink from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

class IgnoreElementsSink<T> extends AbstractSink<T> {
  [SinkLike_next](_: T): void {}
}

const Deferable_ignoreElements: Deferable.Signature["ignoreElements"] = <T>() =>
  Deferable_lift((sink: SinkLike<T>) =>
    newInstance(IgnoreElementsSink<T>, sink),
  );

export default Deferable_ignoreElements;
