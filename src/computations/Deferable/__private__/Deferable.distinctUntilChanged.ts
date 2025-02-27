import { SinkLike, SinkLike_next } from "../../../computations.js";
import {
  Equality,
  Optional,
  newInstance,
  none,
  strictEquality,
} from "../../../functions.js";

import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

class DistinctUntilChangedSink<T> extends AbstractSink<T> {
  private prev: Optional<T> = none;
  private hasPrev = false;

  constructor(
    sink: SinkLike<T>,
    private readonly eq: Equality<T>,
  ) {
    super(sink);
  }
  [SinkLike_next](next: T): void {
    const shouldEmit = !this.hasPrev || !this.eq(this.prev as T, next);

    if (shouldEmit) {
      this.prev = next;
      this.hasPrev = true;
      this[AbstractSink_delegate][SinkLike_next](next);
    }
  }
}

const Deferable_distinctUntilChanged: Deferable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    Deferable_lift(
      (sink: SinkLike<T>) =>
        newInstance(
          DistinctUntilChangedSink<T>,
          sink,
          options?.equality ?? strictEquality,
        ),
      true,
    );

export default Deferable_distinctUntilChanged;
