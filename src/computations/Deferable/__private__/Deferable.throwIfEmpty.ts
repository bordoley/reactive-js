import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { Factory, error, newInstance, raise } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_lift from "./Deferable.lift.js";

class ThrowIfEmptySink<T> implements SinkLike<T> {
  [SinkLike_isComplete] = false;
  private e = true;

  constructor(
    private sink: SinkLike<T>,
    private f: Factory<unknown>,
  ) {}

  [SinkLike_next](next: T): void {
    this.e = false;
    this.sink[SinkLike_next](next);
  }

  [SinkLike_complete](): void {
    if (!this[SinkLike_isComplete]) {
      this[SinkLike_isComplete] = true;

      if (this.e) {
        raise(error(this.f()));
      }
      this[SinkLike_complete]();
    }
  }
}

const Deferable_throwIfEmpty: Deferable.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) =>
  Deferable_lift((sink: SinkLike<T>) =>
    newInstance(ThrowIfEmptySink<T>, sink, factory),
  );

export default Deferable_throwIfEmpty;
