import { Factory, error, newInstance, raise } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class ThrowIfEmptySink<T> implements SinkLike<T> {
  [SinkLike_isCompleted] = false;
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
    if (!this[SinkLike_isCompleted]) {
      this[SinkLike_isCompleted] = true;

      if (this.e) {
        raise(error(this.f()));
      }
      this[SinkLike_complete]();
    }
  }
}

const Runnable_throwIfEmpty: Runnable.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) =>
  Runnable_lift(
    (sink: SinkLike<T>) => newInstance(ThrowIfEmptySink<T>, sink, factory),
    true,
  );

export default Runnable_throwIfEmpty;
