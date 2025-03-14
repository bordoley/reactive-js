import {
  Equality,
  Optional,
  newInstance,
  none,
  strictEquality,
} from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike, SinkLike_push } from "../../../utils.js";

import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class DistinctUntilChangedSink<T> extends AbstractSink<T> {
  private prev: Optional<T> = none;
  private hasPrev = false;

  constructor(
    sink: SinkLike<T>,
    private readonly eq: Equality<T>,
  ) {
    super(sink);
  }
  [SinkLike_push](next: T): void {
    const shouldEmit = !this.hasPrev || !this.eq(this.prev as T, next);

    if (shouldEmit) {
      this.prev = next;
      this.hasPrev = true;
      this[AbstractSink_delegate][SinkLike_push](next);
    }
  }
}

const Runnable_distinctUntilChanged: Runnable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    Runnable_lift(
      (sink: SinkLike<T>) =>
        newInstance(
          DistinctUntilChangedSink<T>,
          sink,
          options?.equality ?? strictEquality,
        ),
      true,
    );

export default Runnable_distinctUntilChanged;
