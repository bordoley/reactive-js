import { SinkLike, SinkLike_next } from "../../../computations.js";
import {
  Optional,
  Tuple2,
  newInstance,
  none,
  tuple,
} from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

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

const Deferable_pairwise: Deferable.Signature["pairwise"] = <T>() =>
  Deferable_lift(
    (sink: SinkLike<Tuple2<T, T>>) => newInstance(PairwiseSink<T>, sink),
    true,
  );

export default Deferable_pairwise;
