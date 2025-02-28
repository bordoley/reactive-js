import { SinkLike, SinkLike_next } from "../../../computations.js";
import {
  Optional,
  Tuple2,
  newInstance,
  none,
  tuple,
} from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";

class PairwiseSink<T> extends AbstractSink<T, Tuple2<T, T>> {
  private prev: Optional<T> = none;
  private hasPrev = false;

  [SinkLike_next](next: T): void {
    const prev = this.prev as T;

    if (this.hasPrev) {
      this[AbstractSink_delegate][SinkLike_next](tuple(prev, next));
    }

    this.hasPrev = true;
    this.prev = next;
  }
}

const Runnable_pairwise: Runnable.Signature["pairwise"] = <T>() =>
  Runnable_lift(
    (sink: SinkLike<Tuple2<T, T>>) => newInstance(PairwiseSink<T>, sink),
    true,
  );

export default Runnable_pairwise;
